var txtInput = document.querySelector("#txtInput");
var btnTranslate = document.querySelector("#btnTranslate");
var divOutput = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

//this function will append the user input with the api url and return 
function getTranslationUrl(text)
{
    return serverUrl + "?text=" + text;
}

//this function will show alert to user if any error occurs while fetching from api
function errorHandler(error)
{
    console.log(error);
    alert("Something is wrong with the server! Please try after sometime");
}

//this is what will happen when translate button is clicked - function of translate button
function clickHandlerOfTranslate()
{
    var inputValue = txtInput.value; //taking input value from textarea input box
    fetch(getTranslationUrl(inputValue)).then(Response => Response.json()).then(json => divOutput.textContent = json.contents.translated).catch(errorHandler);
}

//attched the event and event handler with the button
btnTranslate.addEventListener("click", clickHandlerOfTranslate);