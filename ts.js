var input=prompt("Enter your name in the form   name/DD/MM/Y");
  document.getElementById('demo').innerHTML=input
          if (input=="Nuel"){
            let convert = document.querySelector(".convert");
let speech = new SpeechSynthesisUtterance();
let textarea = document.querySelector(".textarea");
let volume = document.querySelector(".volume");
let pitch = document.querySelector(".pitch");
let rate = document.querySelector(".rate");

  function convertText(){

speech.text = textarea.value;
speech.pitch = 1;
speech.volume = 1;
speech.lang = "en-US";
speech.rate = 1;

speechSynthesis.speak(speech);
}

convert.addEventListener("click", ()=>{
  convertText();
});
}


else if (input=="daniel"){
            let convert = document.querySelector(".convert");
let speech = new SpeechSynthesisUtterance();
let textarea = document.querySelector(".area");
let volume = document.querySelector(".volume");
let pitch = document.querySelector(".pitch");
let rate = document.querySelector(".rate");

  function convertText(){

speech.text = textarea.value;
speech.pitch = 1;
speech.volume = 1;
speech.lang = "en-US";
speech.rate = 1;

speechSynthesis.speak(speech);
}

convert.addEventListener("click", ()=>{
  convertText();
});
}

else{

let convert = document.querySelector(".convert");
let speech = new SpeechSynthesisUtterance();
let textarea = document.querySelector(".daniel");
let volume = document.querySelector(".volume");
let pitch = document.querySelector(".pitch");
let rate = document.querySelector(".rate");

  function convertText(){

speech.text = textarea.value;
speech.pitch = 1;
speech.volume = 1;
speech.lang = "en-US";
speech.rate = 1;

speechSynthesis.speak(speech);
}

convert.addEventListener("click", ()=>{
  convertText();
});
}