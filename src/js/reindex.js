
export const reIndexData = (origData) => {
    let newData = {}
    for (let scene of origData) {
        newData[scene.id] = scene;
    }
    return newData;
}; 