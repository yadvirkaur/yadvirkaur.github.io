const words = document.querySelector(".words");
const microphoneON = document.querySelector(".microphoneON");
const microphoneOFF = document.querySelector(".microphoneOFF");
const speek=false;

microphoneOFF.addEventListener("click", () => {
  microphoneOFF.classList.remove('visibleRed');
  microphoneON.classList.remove('hide');
  microphoneOFF.classList.add('hide');
  microphoneON.classList.add('visibleGrey');

  if (SpeechRecognition !== undefined) { 
    recognition.start();
    speek=true;
    }
  else if (SpeechRecognition == undefined) {
      words.innerHTML = "Sorry not supported in this browser!!";
    }
});
 


window.SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;
recognition.lang = "en-US";


let p = document.createElement("p");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
//mapping through the speech list to join words together
const transcript = Array.from(e.results)
    .map((i) => i[0])
    .map((i) => i.transcript)
    .join("");
    
// const poopScript = transcript.replace(/poop|poo|shit|dump/gi, "💩");
// p.textContent = poopScript;

p.textContent = transcript;

if (e.results[0].isFinal) {   //to start a new paragraph if previous is final
    p = document.createElement("p");
    words.appendChild(p);
}
});

recognition.onerror = (event) => {
    console.log(`Speech recognition error detected: ${event.error}`);
    console.log(`Additional information: ${event.message}`);
  }
  
// recognition.addEventListener("end", recognition.start);
// recognition.start();

recognition.addEventListener("end", () => {
  if(speek){
  recognition.start();
  }
});

 
microphoneON.addEventListener("click", () => {
  recognition.abort();
  microphoneOFF.classList.remove('hide');
  microphoneON.classList.remove('visibleGrey');
  microphoneOFF.classList.add('visibleRed');
  microphoneON.classList.add('hide');
  speek=false;
});