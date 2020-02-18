import "../css/index.css";

// import { reIndexData } from './reindex';

let sceneData = require("../templates/_data/scenes");

let DEBUG;
let scenes = {};
let currSceneId = "";
let sceneIdRegion;
let nextBtn;
let prevBtn;
let backToQuestionBtn;
let readyToAnswerBtn;
let backToQuestionTransition;
let readyToAnswerTransition;

function handleRadioFormSubmit(e) {
    e.preventDefault();
    let submitBtn = e.target;
    let form = submitBtn.form;
    let sceneId = form.id.split('_')[0]
    let fbRegion = document.getElementById(`${sceneId}_feedback_region`);

    if (form.checkValidity()) {
        let sfi = scenes[sceneId].formInfo;
        let radios = Array.from(form.elements)
            .filter((ele) => "radio" == ele.type);
        let selectedAnswer = radios.filter((radio) => radio.checked)[0];
        let val = selectedAnswer.value.trim();
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
        enableBtn(nextBtn);
        enableBtn(prevBtn);
    } else if (fbRegion) {
        fbRegion.innerHTML =
            `<span class="text-danger">Please select an option</span>`;
    }
}


function performDefaultSceneActions() {
    hideButtons(selectBtns(["backToQuestion", "readyToAnswer"]));
    showButtons(selectBtns(["prev", "next"]));
}

function transitionTo(sceneId) {
    // console.log(`transitionTo(${sceneId}) from ${currSceneId}`);
    let action = {
        type: 'SCENE_TRANSITION',
        from: currSceneId,
        to: sceneId,
        timestamp: new Date().toLocaleString()
    }
    currSceneId = sceneId;
    console.log(JSON.stringify(action));
    for (let scene of document.getElementsByClassName("scene")) {
        if (scene.id == currSceneId) {
            scene.classList.add("active")
        } else {
            scene.classList.remove("active");
        }
    }
    sceneIdRegion.innerHTML = currSceneId;
    let currScene = scenes[currSceneId];
    performDefaultSceneActions();
    if (currScene.actions) {
        performSceneActions(currScene.actions);
    }
    // let form = document.getElementById(`${currSceneId}_radio_form`);
    // if (form) {
    //     disableBtn(nextBtn);
    //     disableBtn(prevBtn);
    // }
}

function setCurrScene(sceneId) {
    // console.log(`setCurrScene(${sceneId})`);
    if (!scenes.hasOwnProperty(sceneId)) {
        console.error(`scene "${sceneId} does not exist`);
    } else {
        transitionTo(sceneId);
    }
}   

// handler for custom transitions
function handleTransition(e) {
    e.preventDefault();
    let btn = e.target;
    let [sceneId, transitionName] = btn.id.split('_');
    if (sceneId !== currSceneId) {
        console.error(
            `link sceneId: ${sceneId} is not the current scene ${currentSceneId}`
        );
    } else if (!scenes[currSceneId].transitions.hasOwnProperty(transitionName)) {
        console.error(
            `scene ${sceneId} has no transition named ${transitionName}`
        );
    } else {
        transitionTo(scenes[currSceneId].transitions[transitionName]);
    }
}

// next btn handler
function nextScene(e) {
    e.preventDefault();
    if (!scenes[currSceneId].transitions.hasOwnProperty("next")) {
        console.error(
            `scene "${currSceneId}" (current scene) has no "next" transition`
        );
    } else {
        transitionTo(scenes[currSceneId].transitions.next);
    }
}


// prev btn handler (development only - at least in this app)
function prevScene(e) {
    e.preventDefault();
    if (!scenes[currSceneId].transitions.hasOwnProperty("prev")) {
        console.error(
            `scene "${currSceneId}" (current scene) has no "prev" transition`
        );
    } else {
        transitionTo(scenes[currSceneId].transitions.prev);
    }
}

function backToQuestion(e) {
    e.preventDefault();
    transitionTo(backToQuestionTransition);
}

function readyToAnswer(e) {
    e.preventDefault();
    transitionTo(readyToAnswerTransition);
}

function selectBtns(btnNames) {
    let btns = [];
    for (let btnName of btnNames) {
        if ("prev" === btnName) {
            btns.push(prevBtn);
        } else if ("next" === btnName) {
                btns.push(nextBtn);
        } else if ("readyToAnswer" === btnName) {
            btns.push(readyToAnswerBtn);
        } else if ("backToQuestion" === btnName) {
            btns.push(backToQuestionBtn);
        } else {
            console.error(`undefined btn: ${btnName}`);
        }
    }
    return btns;
}
 
function hiliteDogs(dogs) {
    // console.log(`entering hiliteDogs(${dogs})`);
    for (let dog of dogs) {
        document.getElementById(`${currSceneId}_${dog}`).bgColor = "lightblue";
    }
    // console.log("leaving hiliteDogs()")
}

function performSceneActions(actions) {
    // let btns;
    // console.log("performSceneActions()", actions);
    for (let action of actions) {
        let btns = [];
        switch (action.name) {
            case "hideBtns":
                btns = selectBtns(action.args);
                hideButtons(btns);
                break;
            case "showBtns":
                btns = selectBtns(action.args);
                showButtons(btns);
                break;
            case "hiliteDogs":
                hiliteDogs(action.args);
                break;
            default:
                console.log(`unknown action: ${action.name}`);
        }
    }
}


function hideButtons(btns) {
    // console.log("hideButtons()", btns);
    for (let btn of btns) {
        disableBtn(btn)
        hideBtn(btn);
    }
}

function showButtons(btns) {
    for (let btn of btns) {
        if (btn === prevBtn && "development" !== process.env.NODE_ENV) {
            continue;
        }
        enableBtn(btn)
        showBtn(btn);
    }
}

function hideBtn(btn) {
    btn.classList.add("hidden");
}

function showBtn(btn) {
    btn.classList.remove("hidden");
}

function disableBtn(btn) {
    btn.classList.add("disabled");
}

function enableBtn(btn) {
    btn.classList.remove("disabled");
}

function setBtnHandlersFromData(data) {
    // allows us to define backToQuestionBtn and readyToAnswerBtn
    // and their handlers, but let what transition they perform be data-driven
    // unit-tests verify that all transitions of these 2 types point to the
    // same scene, so we only need to select the first
    let foundBtq, foundRtq = false;
    for (let[sceneId, scene] of Object.entries(data)) {
        if (foundBtq && foundRtq) {
            break;
        }
        if (scene.hasOwnProperty("transitions")) {
            let transitions = scene.transitions;
            if (!foundBtq) {
                if (transitions.hasOwnProperty("backToQuestion")) {
                    backToQuestionTransition = transitions.backToQuestion;
                    backToQuestionBtn.addEventListener("click", backToQuestion);
                    foundBtq = true;
                }
            }
            if (!foundRtq) {
                if (transitions.hasOwnProperty("readyToAnswer")) {
                    readyToAnswerTransition = transitions.readyToAnswer;
                    readyToAnswerBtn.addEventListener("click", readyToAnswer);
                    foundRtq = true;            
                }
            }
        }
    }
    if (!foundBtq) {
        console.error("backToQuestion transition not found");
    }
    if (!foundRtq) {
        console.error("returnToQuestion transition not found");
    }
    // let btq = data.find((scene) => scene.transitions.hasOwnProperty("backToQuestion"));
    // if (btq) {
    //     backToQuestionTransition = btq.transitions.backToQuestion;
    //     backToQuestionBtn.addEventListener("click", backToQuestion);
    // }
    // let rtq = data.find((scene) => scene.transitions.hasOwnProperty("readyToAnswer"));
    // if (rtq) {
    //     readyToAnswerTransition = rtq.transitions.readyToAnswer;
    //     readyToAnswerBtn.addEventListener("click", readyToAnswer);
    // }    
}

function initApp() {
    console.log("start app init");
    console.log(`running in "${process.env.NODE_ENV}" mode`);
    DEBUG = process.env.DEBUG;
    console.log(`DEBUG: ${DEBUG}`);
    // get references to some always present elements
    sceneIdRegion = document.getElementById("scene_id_region");
    nextBtn = document.getElementById("next_btn");
    prevBtn = document.getElementById("prev_btn");
    backToQuestionBtn = document.getElementById("back_to_question_btn");
    readyToAnswerBtn = document.getElementById("ready_to_answer_btn");

    // re-index sceneData (array) as scenes (dict)
    // scenes = reIndexData(sceneData);
    scenes = sceneData;
    setBtnHandlersFromData(sceneData);

    // setup event-listeners
    nextBtn.addEventListener("click", nextScene);
    prevBtn.addEventListener("click", prevScene);

    for (let btn of document.getElementsByClassName("submit-radio-form-btn")) {
        btn.addEventListener("click", handleRadioFormSubmit);
        let sceneId = btn.id.split('_')[0];
        scenes[sceneId].formInfo = {options: {}};
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
            scenes[sceneId].formInfo[attrName] = ele.value;
        }
    }
    for (let label of document.getElementsByClassName('option-label')) {
        let tmp = label.htmlFor.split('_');
        let sceneId = tmp[0];
        let option = tmp[tmp.length -1];
        scenes[sceneId].formInfo['options'][option] = label.innerText;
    }
    for (let btn of document.getElementsByClassName("transition-to")) {
        let [sceneId, transitionName] = btn.id.split('_');
        console.log(
            `found transition named "${transitionName} for ${sceneId}`
        );
        btn.addEventListener("click", handleTransition);
    }
    // to help with debugging in develpment
    window.scenes = scenes;

    // console.log(scenes);
    // hard-coding to specific scene, but this will be gotten from firestore
    setCurrScene("start");

    console.log("app init complete");
}

initApp();