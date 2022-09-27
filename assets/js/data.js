
const files = {};


for (let i = 0; i < 1000; i++) {
  files[`file_number_${i}`] = new Audio(`assets/audio/file_number_${i}`)
}

files['file_number_1'].play()

[object Object] {
    file_number_0: "new Audio(assets/audio/file_number_0)",
}