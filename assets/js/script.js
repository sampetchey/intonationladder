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

audioObject = {}

for (let i = 0; i < 10; i++) {
 audioObject["fileName" + i ] = new Audio(`./assets/audio/${i}`)
};

console.log(audioObject);

const SOUNDS = [
    {
      'intonation': 'sharp',
      'pitch': 'A3',
      'cent': 30,
    },
    {
      'intonation': 'flat',
      'pitch': 'B4',
      'cent': 30,
    }
  ]
  
  
  
  // 1. Have a list of all sounds
  // 2. When game starts, load a random sound
  // 3. When user clicks on play/replay button, play the sound.
  // 4. When the user clicks on either flat/sharp, grade and go to next sound
  
  
  const flatButton = document.getElementById('flat')
  const sharpButton = document.getElementById('sharp')
  
  
  document.onload = startGame
  
  // <button id="flat" data-value="flat">
  flatButton.addEventListener('click', grade)
  // <button id="sharp" data-value="sharp">
  sharpButton.addEventListener('click', grade)
  
  
  // Game state variables
  let currentSoundIndex;
  let score
  
  /* Set initial game state and start the game.
  
  */
  function startGame() {
  
    score = 0
    currentSoundIndex = 0
  
    // TODO: Load a random sound
    // Load a sound
    nextSound()
  }
  
  function grade(evt) {
    let clickedButton = evt.currentTarget
  
    let currentSound = SOUNDS[currentSoundIndex]
  
    if (clickedButton.dataset.value == currentSound.intonation) {
      // Increase score
      // Move to next sound
      nextSound()
    }
    else {
      // do something else
    }
  
  }
  
  function nextSound() {
    let fileName = getFileName(currentSoundIndex)
    let filePath = 'assets/sounds/' + fileName
  
    let sound = new Audio(filePath)
  }
  
  /* Get a valid filename for a sound file in the sounds directory.
  
  */
  function getFileName(soundIndex) {
  
    let soundObject = SOUNDS[soundIndex]
    // Sample: 'fileName': 'flat_30cent_A3.mp3'
    let fileName = soundObject.sharp ? 'sharp' : 'flat'
    fileName += `_${soundObject.cent}cent_${soundObject.pitch}.mp3`
  
    return 'flat_30cent_A3.mp3'
  }