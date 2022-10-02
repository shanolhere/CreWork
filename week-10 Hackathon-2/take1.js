const musicArray = ['Rain', 'Forest','Cat purr', 'Cafe', 'Ocean', 'Keyboard', 'Carol of the bells']

const musicName = document.querySelector('.musicName');
const body = document.querySelector('body');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const volume = document.querySelector('.volume');
const settings = document.querySelector('.settings');

const volumeOn = document.querySelector('.volumeOn');




let id = 0;
const audio = new Audio('./assets/audio/rain.mp3');
const audio1 = new Audio('./assets/audio/forest.mp3');
const audio2 = new Audio('./assets/audio/catpurr.mp3');
const audio3 = new Audio('./assets/audio/cafe.mp3');
const audio4 = new Audio('./assets/audio/ocean.mp3');
const audio5 = new Audio('./assets/audio/keyboard.mp3');
const audio6 = new Audio('./assets/audio/Carol of the Bells.mp3');
// audio.play();
// audio.loop=true;

function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
}



prevBtn.addEventListener('click', () => {
  id--;
  if(id<0){
    id= musicArray.length - 1;
  }
  musicName.innerHTML = musicArray[id];
  if(musicName.innerHTML==="Rain"){
    body.style.backgroundImage="url('./assets/images/rain.avif')";
    stopAudio(audio1)
    stopAudio(audio2)
    stopAudio(audio3)
    stopAudio(audio4)
    stopAudio(audio5)
    stopAudio(audio6)
    audio.play();
    audio.loop=true;
  }
  else if(musicName.innerHTML==="Forest"){
    body.style.backgroundImage="url('./assets/images/forest.avif')";
    stopAudio(audio)
    stopAudio(audio2)
    stopAudio(audio3)
    stopAudio(audio4)
    stopAudio(audio5)
    stopAudio(audio6)
    audio1.play();
    audio1.loop=true;
  }
  else if(musicName.innerHTML==="Cat purr"){
    body.style.backgroundImage="url('./assets/images/catpurr.avif')";
    stopAudio(audio)
    stopAudio(audio1)
    stopAudio(audio3)
    stopAudio(audio4)
    stopAudio(audio5)
    stopAudio(audio6)
    audio2.play();
    audio2.loop=true;
  }
  else if(musicName.innerHTML==="Cafe"){
    body.style.backgroundImage="url('./assets/images/cafe.avif')";
    stopAudio(audio)
    stopAudio(audio2)
    stopAudio(audio1)
    stopAudio(audio4)
    stopAudio(audio5)
    stopAudio(audio6)
    audio3.play();
    audio3.loop=true;
  }
  else if(musicName.innerHTML==="Ocean"){
    body.style.backgroundImage="url('./assets/images/ocean.avif')";
    stopAudio(audio)
    stopAudio(audio2)
    stopAudio(audio3)
    stopAudio(audio1)
    stopAudio(audio5)
    stopAudio(audio6)
    audio4.play();
    audio4.loop=true;
  }
  else if(musicName.innerHTML==="Keyboard"){
    body.style.backgroundImage="url('./assets/images/keyboard.avif')";
    stopAudio(audio)
    stopAudio(audio2)
    stopAudio(audio3)
    stopAudio(audio4)
    stopAudio(audio1)
    stopAudio(audio6)
    audio5.play();
    audio5.loop=true;
  }
  else if(musicName.innerHTML==="Carol of the bells"){
    body.style.backgroundImage="url('./assets/images/carol.avif')";
    stopAudio(audio)
    stopAudio(audio2)
    stopAudio(audio3)
    stopAudio(audio4)
    stopAudio(audio1)
    stopAudio(audio5)
    audio6.play();
    audio6.loop=true;
  }


})

nextBtn.addEventListener('click', () => {
  id++;
  if(id>musicArray.length-1){
    id= 0;
  }
  musicName.innerHTML = musicArray[id];
  if(musicName.innerHTML==="Rain"){
    body.style.backgroundImage="url('./assets/images/rain.avif')";
    stopAudio(audio1)
    stopAudio(audio2)
    stopAudio(audio3)
    stopAudio(audio4)
    stopAudio(audio5)
    stopAudio(audio6)
    audio.play();
    audio.loop=true;
  }
  else if(musicName.innerHTML==="Forest"){
    body.style.backgroundImage="url('./assets/images/forest.avif')";
    stopAudio(audio)
    stopAudio(audio2)
    stopAudio(audio3)
    stopAudio(audio4)
    stopAudio(audio5)
    stopAudio(audio6)
    audio1.play();
    audio1.loop=true;
  }
  else if(musicName.innerHTML==="Cat purr"){
    body.style.backgroundImage="url('./assets/images/catpurr.avif')";
    stopAudio(audio)
    stopAudio(audio1)
    stopAudio(audio3)
    stopAudio(audio4)
    stopAudio(audio5)
    stopAudio(audio6)
    audio2.play();
    audio2.loop=true;
  }
  else if(musicName.innerHTML==="Cafe"){
    body.style.backgroundImage="url('./assets/images/cafe.avif')";
    stopAudio(audio)
    stopAudio(audio2)
    stopAudio(audio1)
    stopAudio(audio4)
    stopAudio(audio5)
    stopAudio(audio6)
    audio3.play();
    audio3.loop=true;
  }
  else if(musicName.innerHTML==="Ocean"){
    body.style.backgroundImage="url('./assets/images/ocean.avif')";
    stopAudio(audio)
    stopAudio(audio2)
    stopAudio(audio3)
    stopAudio(audio1)
    stopAudio(audio5)
    stopAudio(audio6)
    audio4.play();
    audio4.loop=true;
  }
  else if(musicName.innerHTML==="Keyboard"){
    body.style.backgroundImage="url('./assets/images/keyboard.avif')";
    stopAudio(audio)
    stopAudio(audio2)
    stopAudio(audio3)
    stopAudio(audio4)
    stopAudio(audio1)
    stopAudio(audio6)
    audio5.play();
    audio5.loop=true;
  }
  else if(musicName.innerHTML==="Carol of the bells"){
    body.style.backgroundImage="url('./assets/images/carol.avif')";
    stopAudio(audio)
    stopAudio(audio2)
    stopAudio(audio3)
    stopAudio(audio4)
    stopAudio(audio1)
    stopAudio(audio5)
    audio6.play();
    audio6.loop=true;
  }

})

//play music


// volume.addEventListener('click', () => {
//   volumeOn.src="./assets/icons/mute.png"
//   stopAudio(audio)
//   stopAudio(audio1)
//   stopAudio(audio2)
//   stopAudio(audio3)
//   stopAudio(audio4)
//   stopAudio(audio5)
// });







const workTitle = document.querySelector('.work');
const breakTitle = document.querySelector('.break');

const minutesText = document.querySelector('.minutes');
const secondsText = document.querySelector('.seconds');

const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

const controlContainer = document.querySelector('.control-container');

const workCounter = document.querySelector('.workCount');
const breakCounter = document.querySelector('.breakCount');

let workTime = 25;
let breakTime = 5;

let seconds = "00"

let workCount = 0;
let breakCount = 0;


//display the Timer
window.onload = () => {
  minutesText.innerHTML = workTime;
  secondsText.innerHTML = seconds;
  workTitle.classList.add('active')
}


function startTimer() {
   seconds = 59;

   let workMinutes = workTime - 1;
   //console.log(workMinutes)
   let breakMinutes = breakTime - 1;

   let timerFunction = () => {
     minutesText.innerHTML = workMinutes<10 ? '0'+workMinutes : workMinutes;
     secondsText.innerHTML = seconds<10 ? '0'+seconds : seconds;

     seconds = seconds - 1;

     if(seconds === 0){
       workMinutes = workMinutes - 1;
       if(workMinutes === -1){
         if(breakCount% 2 === 0) {
           //start break
           workMinutes = breakMinutes;
           workCount++;
           workCounter.innerHTML = workCount;
           breakCount++
           //change panel
           workTitle.classList.remove('active');
           breakTitle.classList.add('active');
         }
         else{
           //continue work
           workMinutes = workTime-1;
           breakCount++;
           //change panel
           breakTitle.classList.remove('active');
           workTitle.classList.add('active');
         }
       }
       seconds = 59;
     }
   }

  setInterval(timerFunction, 1000);

}


//start timer on clicking startBtn
startBtn.addEventListener('click', () => {
  startTimer();
  startBtn.style.display="none"
  controlContainer.style.display = "block";
  workCounter.innerHTML = workCount;
  audio.play();
  audio.loop = true;
})


resetBtn.addEventListener('click', () => {
  // startTimer();
  startBtn.style.display="block"
  controlContainer.style.display = "none";
  workCounter.innerHTML = workCount;
})



pauseBtn.addEventListener('click', () => {
  clearInterval()
  console.log(startTimer)
  startBtn.style.display="none"
  controlContainer.style.display = "block";
  workCounter.innerHTML = workCount;
})
// chrome.runtime.onInstalled.addListener(
//   startBtn.addEventListener('click', () => {
//     startTimer();
//     startBtn.style.display="none"
//     controlContainer.style.display = "block";
//     workCounter.innerHTML = workCount;
//
//   })
// );
