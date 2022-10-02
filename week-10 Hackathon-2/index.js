const musicArray = [
  "Rain",
  "Forest",
  "Cat purr",
  "Cafe",
  "Ocean",
  "Keyboard",
  "Carol of the bells",
];

const musicName = document.querySelector(".musicName");
const body = document.querySelector("body");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const volume = document.querySelector(".volume");
const settings = document.querySelector(".settings");

const volumeOn = document.querySelector(".volumeOn");

let id = 0;
const audio = new Audio("./assets/audio/rain.mp3");
const audio1 = new Audio("./assets/audio/forest.mp3");
const audio2 = new Audio("./assets/audio/catpurr.mp3");
const audio3 = new Audio("./assets/audio/cafe.mp3");
const audio4 = new Audio("./assets/audio/ocean.mp3");
const audio5 = new Audio("./assets/audio/keyboard.mp3");
const audio6 = new Audio("./assets/audio/Carol of the Bells.mp3");
const beep_audio = new Audio("./assets/audio/beep.mp3");

function stopAudio(audio) {
  audio.pause();
  audio.currentTime = 0;
}

prevBtn.addEventListener("click", () => {
  id--;
  if (id < 0) {
    id = musicArray.length - 1;
  }
  musicName.innerHTML = musicArray[id];
  if (musicName.innerHTML === "Rain") {
    body.style.backgroundImage = "url('./assets/images/rain.avif')";
    stopAudio(audio1);
    stopAudio(audio2);
    stopAudio(audio3);
    stopAudio(audio4);
    stopAudio(audio5);
    stopAudio(audio6);
    audio.play();
    audio.loop = true;
  } else if (musicName.innerHTML === "Forest") {
    body.style.backgroundImage = "url('./assets/images/forest.avif')";
    stopAudio(audio);
    stopAudio(audio2);
    stopAudio(audio3);
    stopAudio(audio4);
    stopAudio(audio5);
    stopAudio(audio6);
    audio1.play();
    audio1.loop = true;
  } else if (musicName.innerHTML === "Cat purr") {
    body.style.backgroundImage = "url('./assets/images/catpurr.avif')";
    stopAudio(audio);
    stopAudio(audio1);
    stopAudio(audio3);
    stopAudio(audio4);
    stopAudio(audio5);
    stopAudio(audio6);
    audio2.play();
    audio2.loop = true;
  } else if (musicName.innerHTML === "Cafe") {
    body.style.backgroundImage = "url('./assets/images/cafe.avif')";
    stopAudio(audio);
    stopAudio(audio2);
    stopAudio(audio1);
    stopAudio(audio4);
    stopAudio(audio5);
    stopAudio(audio6);
    audio3.play();
    audio3.loop = true;
  } else if (musicName.innerHTML === "Ocean") {
    body.style.backgroundImage = "url('./assets/images/ocean.avif')";
    stopAudio(audio);
    stopAudio(audio2);
    stopAudio(audio3);
    stopAudio(audio1);
    stopAudio(audio5);
    stopAudio(audio6);
    audio4.play();
    audio4.loop = true;
  } else if (musicName.innerHTML === "Keyboard") {
    body.style.backgroundImage = "url('./assets/images/keyboard.avif')";
    stopAudio(audio);
    stopAudio(audio2);
    stopAudio(audio3);
    stopAudio(audio4);
    stopAudio(audio1);
    stopAudio(audio6);
    audio5.play();
    audio5.loop = true;
  } else if (musicName.innerHTML === "Carol of the bells") {
    body.style.backgroundImage = "url('./assets/images/carol.avif')";
    stopAudio(audio);
    stopAudio(audio2);
    stopAudio(audio3);
    stopAudio(audio4);
    stopAudio(audio1);
    stopAudio(audio5);
    audio6.play();
    audio6.loop = true;
  }
});

nextBtn.addEventListener("click", () => {
  id++;
  if (id > musicArray.length - 1) {
    id = 0;
  }
  musicName.innerHTML = musicArray[id];
  if (musicName.innerHTML === "Rain") {
    console.log("body");
    body.style.backgroundImage = "url('./assets/images/rain.avif')";
    stopAudio(audio1);
    stopAudio(audio2);
    stopAudio(audio3);
    stopAudio(audio4);
    stopAudio(audio5);
    stopAudio(audio6);
    audio.play();
    audio.loop = true;
  } else if (musicName.innerHTML === "Forest") {
    body.style.backgroundImage = "url('./assets/images/forest.avif')";
    stopAudio(audio);
    stopAudio(audio2);
    stopAudio(audio3);
    stopAudio(audio4);
    stopAudio(audio5);
    stopAudio(audio6);
    audio1.play();
    audio1.loop = true;
  } else if (musicName.innerHTML === "Cat purr") {
    body.style.backgroundImage = "url('./assets/images/catpurr.avif')";
    stopAudio(audio);
    stopAudio(audio1);
    stopAudio(audio3);
    stopAudio(audio4);
    stopAudio(audio5);
    stopAudio(audio6);
    audio2.play();
    audio2.loop = true;
  } else if (musicName.innerHTML === "Cafe") {
    body.style.backgroundImage = "url('./assets/images/cafe.avif')";
    stopAudio(audio);
    stopAudio(audio2);
    stopAudio(audio1);
    stopAudio(audio4);
    stopAudio(audio5);
    stopAudio(audio6);
    audio3.play();
    audio3.loop = true;
  } else if (musicName.innerHTML === "Ocean") {
    body.style.backgroundImage = "url('./assets/images/ocean.avif')";
    stopAudio(audio);
    stopAudio(audio2);
    stopAudio(audio3);
    stopAudio(audio1);
    stopAudio(audio5);
    stopAudio(audio6);
    audio4.play();
    audio4.loop = true;
  } else if (musicName.innerHTML === "Keyboard") {
    body.style.backgroundImage = "url('./assets/images/keyboard.avif')";
    stopAudio(audio);
    stopAudio(audio2);
    stopAudio(audio3);
    stopAudio(audio4);
    stopAudio(audio1);
    stopAudio(audio6);
    audio5.play();
    audio5.loop = true;
  } else if (musicName.innerHTML === "Carol of the bells") {
    body.style.backgroundImage = "url('./assets/images/carol.avif')";
    stopAudio(audio);
    stopAudio(audio2);
    stopAudio(audio3);
    stopAudio(audio4);
    stopAudio(audio1);
    stopAudio(audio5);
    audio6.play();
    audio6.loop = true;
  }
});

//play music

let isMuted = false;

volume.addEventListener("click", () => {
  volumeOn.src = "./assets/icons/mute.png";
  isMuted = !isMuted;
  if (isMuted) {
    stopAudio(audio);
    stopAudio(audio1);
    stopAudio(audio2);
    stopAudio(audio3);
    stopAudio(audio4);
    stopAudio(audio5);
    stopAudio(audio6);
  } else {
    volumeOn.src = "./assets/icons/volume.png";
    audio.play();
    body.style.backgroundImage = "url('./assets/images/rain.avif')";
    musicName.innerHTML = "Rain";
  }
});

const workTitle = document.querySelector(".work");
const breakTitle = document.querySelector(".break");

const minutesText = document.querySelector(".minutes");
const secondsText = document.querySelector(".seconds");

const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

const controlContainer = document.querySelector(".control-container");
const modal = document.querySelector(".modal");

settings.addEventListener("click", (e) => {
  modal.style.display = "block";
});

const workDuration = document.querySelector(".workDuration");
const breakDuration = document.querySelector(".breakDuration");
const setBtn = document.querySelector(".set");

let workTime = Number(workDuration.value); //workDuration.value
let breakTime = Number(breakDuration.value);

setBtn.addEventListener("click", () => {
  workTime = workDuration.value;
  breakTime = breakDuration.value;
  minutesText.innerHTML =
    workDuration.value < 10 ? "0" + workDuration.value : workDuration.value;
  modal.style.display = "none";
});

const workCounter = document.querySelector(".workCount");
const breakCounter = document.querySelector(".breakCount");

let workCount = 0;
let breakCount = 0;

//display the Timer
window.onload = () => {
  minutesText.innerHTML = workTime;
  secondsText.innerHTML = seconds;
  workTitle.classList.add("active");
};

let minutes = minutesText.innerHTML;
let seconds = "00";
let timerID;

function startTimer(minutes, seconds) {
  minutes = Number(minutes);
  seconds = Number(seconds);
  let workMinutes = minutes;
  let breakMinutes;

  let timerFunction = () => {
    if (seconds === 0) {
      if (workMinutes === 0) {
        //play timer beep to notify
        //start breakTime
        if (workCount === breakCount) {
          workMinutes = breakTime; //work
          workCount++;
          workCounter.innerHTML = workCount;
          //change panel

          workTitle.classList.remove("active");
          breakTitle.classList.add("active");
        } else {
          workMinutes = workTime;
          breakCount++;
          breakCounter.innerHTML = breakCount;
          breakTitle.classList.remove("active");
          workTitle.classList.add("active");
        }
      } else {
        //continue work
        workMinutes = workMinutes - 1;
        seconds = 59;
      }
    } else {
      seconds = seconds - 1;
    }

    minutesText.innerHTML = workMinutes < 10 ? "0" + workMinutes : workMinutes;
    secondsText.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  };
  timerID = setInterval(timerFunction, 1000);
}

//start timer on clicking startBtn
startBtn.addEventListener("click", () => {
  startTimer(minutesText.innerHTML, "00");
  startBtn.style.display = "none";
  controlContainer.style.display = "block";
  workCounter.innerHTML = workCount;
  breakCounter.innerHTML = breakCount;
  audio.play();
  audio.loop = true;
});

let resetFlag = false;
resetBtn.addEventListener("click", () => {
  resetFlag = true;
  if (resetFlag) {
    clearInterval(timerID);
    startBtn.style.display = "block";
    controlContainer.style.display = "none";
    workCounter.innerHTML = 0;
    minutesText.innerHTML = workDuration.value;
    secondsText.innerHTML = "00";
    resetFlag = false;
  }
});

let isPaused = false;
pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  if (isPaused) {
    clearInterval(timerID);
    pauseBtn.innerHTML = "Resume";
  } else {
    startTimer(minutesText.innerHTML, secondsText.innerHTML);
    pauseBtn.innerHTML = "Pause";
  }
});

// chrome.runtime.onInstalled.addListener(
//   startBtn.addEventListener('click', () => {
//     startTimer();
//     startBtn.style.display="none"
//     controlContainer.style.display = "block";
//     workCounter.innerHTML = workCount;
//
//   })
// );
