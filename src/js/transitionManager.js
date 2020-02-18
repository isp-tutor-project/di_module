export class TransitionManager {
    currentPageId;

    constructor(transitions) {
        this.transitions = transitions;
    }

    setCurrPage(newPageId) {
        if (!this.transitions.hasOwnProperty(newPageId)) {
            console.error(`page "${newPageId}" not in transitions config`);
        }
    }

    namedTransitionHandler(e) {
        
    }
    nextPageHandler(e) {
        e.preventDefault();
        console.log(`nextPage() called`);
    }

    prevPageHandler(e) {
        e.preventDefault();
        console.log(`prevPage() called`);
    }

    transitionTo(newPageId) {
        console.log(`transitionTo(${newPageId}) from ${currPageId}`);
        let action = {
            type: 'PAGE_TRANSITION',
            from: currPageId,
            to: newPageId,
            timestamp: new Date().toLocaleString()
        };
        this.currPageId = newPageId;
        console.log(JSON.stringify(action));
        for (let scene of document.getElementsByClassName("scene")) {
            scene.classList.remove("current-scene");
        }
        document.getElementById(currSceneId).classList.add("current-scene");
        sceneIdRegion.innerHTML = currSceneId;

    }
}