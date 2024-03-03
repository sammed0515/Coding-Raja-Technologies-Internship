function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('weField');

    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    // Insert the new node before the weAddButtonOb div
    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');

    newNode.classList.add('mt-2');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Enter here');

    let aq = document.getElementById("AQ");
    let aqAddButtonOb = document.getElementById("eqAddButton");

    // Insert the new node before the weAddButtonOb div
    aq.insertBefore(newNode, aqAddButtonOb);
}

function generateCV() {

    let nameField = document.getElementById('nameField').value

    let nameT1 = document.getElementById('nameT1')
    nameT1.innerHTML = nameField;

    document.getElementById('nameT2').innerHTML = nameField

    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value
    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value
    document.getElementById('instaT').innerHTML = document.getElementById('instagramField').value
    document.getElementById('linkT').innerHTML = document.getElementById('linkedinField').value
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value
    let wes = document.getElementsByClassName('weField')
    let str = '';
    for (let e of wes) {
        str = str + `<li> ${e.value}</li>`
    }
    document.getElementById('weT').innerHTML = str

    let aqs = document.getElementsByClassName("eqField")
    let str1 = '';
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value}</li>`
    }
    document.getElementById('aqT').innerHTML = str1

    document.getElementById('cv-form').style.display = 'none'
    document.getElementById('cv-templete').style.display = 'block'

}

function printCV() {
    window.print()
}