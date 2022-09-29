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
  
  // 1. Have a list of all sounds
  // 2. When game starts, load a random sound
  // 3. When user clicks on play/replay button, play the sound.
  // 4. When the user clicks on either flat/sharp, grade and go to next sound
  
  const playButton = document.getElementById('play');
  
  const scoreBoard = document.querySelector('.score');
  
  
     
  const intonation = ['sharp', 'flat'];  
  const pitch = ['A4', 'B3', 'C3', 'C5', 'D4', 'E3', 'E5', 'F4', 'G3', 'G5'];
  let cent = 30;
  let score = 0;

  // const randomPitch = pitch[Math.floor(Math.random()* pitch.length)];
  // console.log(randomPitch);

  // const randomIntonation = intonation[Math.floor(Math.random()* intonation.length)];
  // console.log(randomIntonation);
  
  function play() {
    var randomPitch = pitch[Math.floor(Math.random()* pitch.length)];
    document.getElementById("pitch").innerHTML = `${randomPitch}`
    
    var randomIntonation = intonation[Math.floor(Math.random()* intonation.length)];
    console.log(randomIntonation);
    document.getElementById("audio").src = `assets/audio/${randomIntonation}_${cent}cent_${randomPitch}.mp3`;
    audio.play();

  }

  function increase() {
    score++;
    scoreBoard.textContent = score;
  }

  const flatButton = document.getElementById('flat').addEventListener('click', answerFlat());
  function answerFlat() {
    let playerAnswer = 'flat'
    console.log(playerAnswer);
  }
  const sharpButton = document.getElementById('sharp').addEventListener('click', answerSharp());
  function answerSharp() {
    let playerAnswer = 'sharp'
    console.log(playerAnswer);
  }

  function grade() {
    if (randomIntonation === playerAnswer) {
      increase();
      increaseLevel();
      play();
    }
  }

  function gradeFlat() {
    if (randomIntonation === 'flat') {
      increase()
      increaseLevel()
      play();
    }
  }

  function gradeSharp() {
    if (randomIntonation === 'sharp') {
      increase()
      increaseLevel()
      play();
    }
  }

  function increaseLevel() {
    if (score = 2 || 4 || 6 || 8 || 10 || 15 || 20 || 25 || 30 || 35 || 40 || 45 || 50) {
      cent - 1;
      console.log(cent);
    }
  }

  


  // function grade() {
  //   if (
  //     document.getElementsByClassName("answer-button-area").button.data-type === randomIntonation;
  //   )
  //   return correct
  //   console.log(correct);
  // }
    
  

  //document.onload = startGame
  
  // <button id="flat" data-value="flat">
  
  playButton.addEventListener('click', startGame)
  
 /* Set initial game state and start the game.
  
  */
 function startGame() {
    scoreBoard.textContent = 0;
    score = 0;
  
  

  // TODO: Load a random sound
  // Load a sound
  nextSound()
}

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
  