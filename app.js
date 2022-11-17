var btntranslate = document.querySelector("#btn-translate")
var txtinput = document.querySelector("#txt-input")
console.log(txtinput)
btntranslate.addEventListener("click",clickEventHandler)
function clickEventHandler(){
    console.log("clicked!")
    console.log("input",txtinput.value)
}
