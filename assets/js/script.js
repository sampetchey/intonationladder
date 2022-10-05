//change logo for mobile
// const mediaQuery = window.matchMedia('(max-width: 414px)');
// mediaQuery.matches($(".logo").html("<img src='assets/images/intonation-ladder_mobile.png' alt='logo'>");

//onclick 'play' button, mp3 file from 30_cent is randomly selected and played

// There are ~ 1000 audio files in the audio folder
// files are organised as [flat/sharp]_[centvalue]_[pitch of note]
// Create a string that is the path to each audio file (this is where I am currently stuck)
// When player clicks 'play':
// 1. filter from the string and .play() a '30cent' audio file
// 2. enable the 'repeat' button to replay the same selected audio file, any number of times 
// 3. player clicks button 'flat' or 'sharp'
// 4. if 'flat' button is clicked && file name contains 'flat' OR if 'sharp' button is clicked && file name contains 'sharp' - return true
// 5. if true:
//      ladder image goes 'up' 
//      a new audio file, filtered from '30cent' is played
// 6. with two 'true' answers, change filter to '29cent'
// 7. decrease cent level (increasing difficulty) with every two questions
// 8. between 20-11cent, play 5 audio files
// 9. between 10-1cent, play 3 audio files
// 10. maximum possible score is 100
// 11. if player answers 'false' display result in a lightbox appears containing:
//         'incorrect'
//         the correct answer was ...
//         repeat button to listen
//         display total score...
//         play again button
//         quit button


// var array = []
// fs.readdir('/workspace/intonationladder/assets/audio/', function (err, files) {
// files.forEach(function (fileName) {
//     console.log(fileName);
//     array.push(fileName)
//    });  
// });

// async function getCommands() {
//     let commands = {};

//     //get all enteties from folder
//     let commandFiles = await fs.promises.readdir("./assets/audio", (err, elements) => {
//         if (err) return console.log(err);
//     });

//     commandFiles.forEach(file => { //loop through all elements in folder "commands"
//        const element_in_folder = fs.statSync(`./assets/audio/${file}`)
//        if (element_in_folder.isDirectory() == true) { //check if element in folder is a subfolder
//           const sub_directory = `./assets/audio${file}/`;
//           addCommandsFromSubFolder(commands, sub_directory);
//        } else {
//           //add command to object
//           commands[Object.keys(commands).length] = {
//              "audio": file
//           }
//        }
//     });
//     return commands; //return full object with all commands
//  }



// <button id="flat" data-value="flat">

// playButton.addEventListener('click', startGame)

/* Set initial game state and start the game.
 
 */




// const playButton = document.getElementById('play');
const flatButton = document.getElementById("flat-button");
const sharpButton = document.getElementById("sharp-button");
const quitButton = document.getElementById("quit-button");
const ladder = document.getElementById("ladder");
const scoreBoard = document.querySelector('.score');
const logo = document.getElementById("logo");
const logoLabel = document.getElementById("headingLabel");

const levelOnePitchPool = ['A4', 'B3', 'C3', 'C5', 'D4', 'E3', 'E5', 'F4', 'G3'];
//level 2
const levelTwoPitchPool = ['A2', 'A3', 'B2', 'B4', 'C2', 'C4', 'D2', 'D3', 'D5', 'E2', 'E4', 'F2', 'F3', 'F5', 'G2', 'G4']
//level 3
const levelThreePitchPool = ['A3', 'A5', 'B2', 'B4', 'C4', 'D3', 'D5', 'E4', 'F3', 'F5', 'G2', 'G4'];
const intonation = ['sharp', 'flat'];
// level 1
let pitch;
let randomIntonation;
let cent = 30;
let score = 0;

window.addEventListener('load', startGame);
quitButton.addEventListener('click', startGame);
flatButton.addEventListener('click', answerFlat);
sharpButton.addEventListener('click', answerSharp);
logo.addEventListener('mouseover', headingLabel);


// different size audio pools reflect how many questions are being asked at specific cent levels.
function audioPool() {
  if (score >= 20 && score < 70) {
    return levelOnePitchPool && levelTwoPitchPool;
  }
  if (score >= 70) {
    return levelThreePitchPool
  } else {
    return levelOnePitchPool
  }
}

// randomly select an audio file by generating the three file properties, intonation, cent level and pitch.
function play() {
  let randomPitch = pitch[Math.floor(Math.random() * pitch.length)];
  document.getElementById("pitch").innerHTML = `${randomPitch}`
  console.log(randomPitch);
  randomIntonation = intonation[Math.floor(Math.random() * intonation.length)];
  console.log(randomIntonation);
  document.getElementById("audio").src = `assets/audio/${randomIntonation}_${cent}cent_${randomPitch}.mp3`;
  console.log(cent);
  audio.play();
}

// start of game status.
function startGame() {
  scoreBoard.textContent = 0;
  score = 0;
  cent = 30;
  pitch = audioPool();
  console.log(pitch);
  document.getElementById("level").innerHTML = `${cent} cent`;
}

// flat/sharp answer buttons determine correct or incorrect answers
function answerFlat() {
  if (!randomIntonation) {
    return
  }
  if (randomIntonation === 'flat') {
    play();
    increase();
    pitch = audioPool();
  } else {
    gameOver();
  }
}

function answerSharp() {
  if (!randomIntonation) {
    return
  }
  if (randomIntonation === 'sharp') {
    play();
    increase();
    pitch = audioPool();
  } else {
    gameOver();
  }
}

// increase the score by 1, decrease the cent level when specific scores are reached and add ladder animation
function increase() {
  score++;
  scoreBoard.textContent = score;
  ladder.classList.add("move-ladder");
  if (score === 2 || score === 4 || score === 6 || score === 8 || score === 10 ||
    score === 12 || score === 14 || score === 16 || score === 18 || score === 20 ||
    score === 25 || score === 30 || score === 35 || score === 40 || score === 45 ||
    score === 50 || score === 55 || score === 60 || score === 65 || score === 70 ||
    score === 73 || score === 76 || score === 79 || score === 82 || score === 85 ||
    score === 88 || score === 91 || score === 94 || score === 97) {
    --cent;
    document.getElementById("level").innerHTML = `${cent} cent`;
  } else if (score === 100) {
    alert("Congratulations! You achieved a perfect score of 100. Keep going, see how far you can go at 1 cent...");
    console.log("Congratulations! You achieved a perfect score of 100");
  }
  setTimeout(function () {
    ladder.classList.remove("move-ladder")
  }, 2000);
}

// display the final score on the game over modal and buttons to try again
function gameOver() {
  document.getElementById("gameOver").style.display = "block";
  document.getElementById("correctAnswer").innerHTML = `Oh no! That's not right. The second note was ${randomIntonation}...`;
  document.getElementById("total").innerHTML = `${score}`;
  console.log(score);
}

// when 'repeat' is clicked, replay the same audio file from the beginning
function replayAudio() {
  audio.currentTime = 0;
  audio.play();
}

// open the info modal
function openModal() {
  document.getElementById("infoModal").style.display = "block";
}

// close the info or game modal
function closeModal() {
  document.getElementById("infoModal").style.display = "none";
  document.getElementById("gameOver").style.display = "none";
}
