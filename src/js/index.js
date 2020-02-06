import "../css/index.css";

// create sceneIDs
let scenes = [];
for (let i of Array(16).keys()) {
    scenes.push(`intro${i + 1}`);
}
for (let i of Array(113).keys()) {
    scenes.push(`scene${i + 1}`);
}

let sceneFormInfo = {};
let currSceneIdx;
let sceneIdRegion;
let nextBtn;
let prevBtn;

function handleRadioFormSubmit(e) { 
    e.preventDefault();
    let submitBtn = e.target;
    let form = submitBtn.form;
    let sceneId = form.id.split('_')[0]
    let fbRegion = document.getElementById(`${sceneId}_feedback_region`);

    if (form.checkValidity()) {
        let sfi = sceneFormInfo[sceneId]
        let radios = Array.from(form.elements)
                          .filter((ele) => "radio" == ele.type);
        let selectedAnswer = radios.filter((radio) => radio.checked)[0];
        let val = selectedAnswer.value.trim();
        // let labelId = `${selectedAnswer.id}_label`;
        // console.log(labelId);
        // let ansText = document.getElementById(labelId).innerText.trim();
        let ansText = sfi.options[val];
        let correctAnswer = sfi.correctAnswer;
        let isCorrect;
        let fbText;
        let fbClassName;
        if ("n/a" === correctAnswer) {
            isCorrect = null;
            fbText = sfi.ntlFb;
            fbClassName = "ntl-feedback";
        } else if (correctAnswer === val) {
            isCorrect = true;
            fbText = sfi.posFb;
            fbClassName = "pos-feedback";
        } else {
            isCorrect = false;
            fbText = sfi.negFb;
            fbClassName = 'neg-feedback';
        }
        if (!fbText) {
            fbText = sfi.ntlFb;
            fbClassName = 'ntl-feedback';
        }
        if (fbRegion && fbText) {
            fbRegion.innerHTML = `<span class="${fbClassName}">${fbText}</span>`;
        }
        // what we want to store in firestore
        let log = {
            id: `${sceneId}.${sfi.questionType}`,
            selected: ansText,
            isCorrect: isCorrect,
            timestamp: new Date().toLocaleString()
        }
        console.log(JSON.stringify(log));
        
        for (let radio of radios) {
            radio.setAttribute("disabled", true);  
        }
        submitBtn.setAttribute("disabled", true);
        enableNavBtn(nextBtn);
        enableNavBtn(prevBtn);
    } else if (fbRegion) {
        fbRegion.innerHTML = 
            `<span class="text-danger">Please select an option</span>`;
    }
}

function transitionTo(sceneId) {
    for (let scene of document.getElementsByClassName("scene")) {
        scene.classList.remove("current-scene");
    }
    document.getElementById(sceneId).classList.add("current-scene");
    sceneIdRegion.innerHTML = sceneId;
    let form = document.getElementById(`${sceneId}_radio_form`);
    // if (form) {
    //     disableNavBtn(nextBtn);
    //     disableNavBtn(prevBtn);
    // }
    let log = {
        action: 'SCENE_TRANSITION',
        sceneId: sceneId, 
        timestamp: new Date().toLocaleString()
    }
    console.log(JSON.stringify(log));

}

function setCurrScene(sceneID) {
    let tmp = scenes.indexOf(sceneID);
    if (-1 !== tmp) {
        currSceneIdx = tmp;
    }
}

function nextScene(e) {
    e.preventDefault();
    if (currSceneIdx !== scenes.length - 1) {
        currSceneIdx++;
    }
    transitionTo(scenes[currSceneIdx]);
}

function prevScene(e) {
    e.preventDefault();
    if (currSceneIdx > 0) {
        currSceneIdx--;
    }
    transitionTo(scenes[currSceneIdx]);
}

// only used for displaying the first scene we arrive at.  Could be different
// from the first scene in scenes, if returning to app and reverting to
// the current scene stored in firestore
function showCurrentScene() {
    transitionTo(scenes[currSceneIdx]);
}

function disableNavBtn(btn) {
    btn.classList.add("nav-btn-disabled");
}

function enableNavBtn(btn) {
    btn.classList.remove("nav-btn-disabled");
}

function initApp() {
    console.log("start app init");

    // get references to some always present elements
    sceneIdRegion = document.getElementById("scene_id_region");
    nextBtn = document.getElementById("next_btn");
    prevBtn = document.getElementById("prev_btn");

    // setup event-listeners
    nextBtn.addEventListener("click", nextScene);
    prevBtn.addEventListener("click", prevScene);
    for (let btn of document.getElementsByClassName("submit-radio-form-btn")) {
        btn.addEventListener("click", handleRadioFormSubmit);
        let sceneId = btn.id.split('_')[0];
        sceneFormInfo[sceneId] = {options: {}};
    }
    // collect form info for scenes which have them
    let formInfoClassNames = [
        "question-type", "correct-answer", "pos-fb", "neg-fb", "ntl-fb"
    ];
    for (let className of formInfoClassNames) {
        let words = className.split('-');
        let attrName = 
            `${words[0]}${words[1][0].toLocaleUpperCase()}${words[1].slice(1)}`;
        for (let ele of document.getElementsByClassName(className)) {
            let sceneId = ele.id.split('_')[0];
            sceneFormInfo[sceneId][attrName] = ele.value;
        }
    }
    for (let label of document.getElementsByClassName('option-label')) {
        let tmp = label.htmlFor.split('_');
        let sceneId = tmp[0];
        let option = tmp[tmp.length -1];
        sceneFormInfo[sceneId].options[option] = label.innerText;
    }
    // to help with debugging in develpment
    window.sceneFormInfo = sceneFormInfo;

    // hard-coding to specific scene, but this will be gotten from firestore
    setCurrScene("scene15");
    showCurrentScene();
    console.log("app init complete");
}

initApp();