
const imagesLoaded = parentNode => {
    const imgElements = [...parentNode.querySelectorAll("img")];
    for (let i=0; i<imgElements.length; i++){
        const img = imgElements[i];
        if(!img.complete) {
            return false;
        }
    }
}

export {imagesLoaded};