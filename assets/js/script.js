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

document.onload = startGame

// <button id="flat" data-value="flat">

// playButton.addEventListener('click', startGame)

/* Set initial game state and start the game.
 
 */
function startGame() {
  scoreBoard.textContent = 0;
  score = 0;
}



// const playButton = document.getElementById('play');

const scoreBoard = document.querySelector('.score');



let intonation = ['sharp', 'flat'];
let pitch = ['A4', 'B3', 'C3', 'C5', 'D4', 'E3', 'E5', 'F4', 'G3'];
let pitch2 = ['A2', 'A3', 'B2', 'B4', 'C2', 'C4', 'D2', 'D3', 'D5', 'E2', 'E4', 'F2', 'F3', 'F5', 'G2', 'G4']
let pitch3 = ['A3', 'A5', 'B2', 'B4', 'C4', 'D3', 'D5', 'E4', 'F3', 'F5', 'G2', 'G4']
let cent = 30;
let score = 0;
let ladder = document.getElementById("ladder");

function play() {
  let randomPitch = pitch[Math.floor(Math.random() * pitch.length)];
  document.getElementById("pitch").innerHTML = `${randomPitch}`
  console.log(randomPitch);
  let randomIntonation = intonation[Math.floor(Math.random() * intonation.length)];
  console.log(randomIntonation);
  document.getElementById("audio").src = `assets/audio/${randomIntonation}_${cent}cent_${randomPitch}.mp3`;
  console.log(cent);
  audio.play();
}

function answerFlat() {
    if (randomIntonation = 'flat') {
    play();
    increase();
    audioPool();
  } else if (randomIntonation != 'flat') {
    gameOver();
  }
}

function answerSharp() {
    if (randomIntonation = 'sharp') {
    play();
    increase();
    audioPool();
  } else if (randomIntonation != 'sharp') {
    gameOver();
  }
}

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
      console.log(cent);
      document.getElementById("level").innerHTML = `${cent} cent`;
     } else if (score === 100) {
      console.log("Congratulations! You achieved a perfect score - 100");
     }
    
  setTimeout(function() {ladder.classList.remove("move-ladder")}, 2000);
}

function audioPool() {
  if (score >= 20 && score < 70) {
    let pitch = [...pitch2, 'A4', 'B3', 'C3', 'C5', 'D4', 'E3', 'E5', 'F4', 'G3'];
    console.log(pitch);
  }
  if (score >= 70) {
    let pitch = pitch3;
    console.log(pitch);
  } else {
    let pitch = ['A4', 'B3', 'C3', 'C5', 'D4', 'E3', 'E5', 'F4', 'G3', 'G5'];
    console.log(pitch);
  }
}

function gameOver() {
  document.getElementById("gameOver").style.display = "block";
  document.getElementById("correctAnswer").innerHTML = `the answer is ${intonation}`
}

function replayAudio() {
  audio.currentTime = 0;
  audio.play();
}

// const flatButton = document.getElementById('flat').addEventListener('click', answerFlat());
// const sharpButton = document.getElementById('sharp').addEventListener('click', answerSharp());

function openModal() {
  document.getElementById("infoModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("infoModal").style.display = "none";
  document.getElementById("gameOver").style.display = "none";
}

// function grade() {
//   if (randomIntonation === playerAnswer) {
//     increase();
//     increaseLevel();
//     play();
//   }
// }

// function gradeFlat() {
//   if (randomIntonation === 'flat') {
//     increase()
//     increaseLevel()
//     play();
//   }
// }

// function gradeSharp() {
//   if (randomIntonation === 'sharp') {
//     increase()
//     increaseLevel()
//     play();
//   }
// }

// function increaseLevel() {
//   if (score = 2 || 4 || 6 || 8 || 10 || 15 || 20 || 25 || 30 || 35 || 40 || 45 || 50) {
//     cent - 1;
//     console.log(cent);
//   }
// }

// function grade() {
//   if (
//     document.getElementsByClassName("answer-button-area").button.data-type === randomIntonation;
//   )
//   return correct
//   console.log(correct);
// }


// TODO: Load a random sound
// Load a sound
//   nextSound()
// }

// Game state variables
// let currentSoundIndex;




// function grade(evt) {
//   let clickedButton = evt.currentTarget

//   let currentSound = SOUNDS[currentSoundIndex]

//   if (clickedButton.dataset.value == currentSound.intonation) {
//     // Increase score
//     // Move to next sound
//     nextSound()
//   }
//   else {
//     // do something else
//   }

// }

//   var answers = {
//     'question': 'yes',
//     'question1': 'no',
// };

// function getScore(el) {
//   var score = 0;
//   $("input[id^='question'").each(function(){
//       if (answers[this.id] === this.value){
//         score += 1;    
//         $(this).addClass("correct");
//       } else {
//         $(this).removeClass("correct");
//       }
//   });

//   return score;
// }

// var score = 5;
// document.write.getElementById('score').innerhtml = score;

// $('input').on('keyup', function(){
//   $('#score').text('score: ' + getScore());
// });



// function nextSound() {
//   let fileName = getFileName(currentSoundIndex)
//   let filePath = 'assets/sounds/' + fileName

//   let sound = new Audio(filePath)
// }

/* Get a valid filename for a sound file in the sounds directory.

*/