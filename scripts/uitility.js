
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseFloat(elementText)
    return value
}

function setElementValuebyId(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value;
}