const emojiContainer = document.querySelectorAll('.emojiSelector');
const emojiReplace = document.getElementById('firstSock')

const colorContainer = document.querySelectorAll('.backgroundsSelector');
const colorReplace = document.getElementById('layer2')

emojiContainer.forEach((e) => {
  e.addEventListener('click', async (e) => {
      emojiReplace.innerText = `${e.target.innerText}    ${e.target.innerText}`;
      })
  })




colorContainer.forEach((e) => {
  e.addEventListener('click', async (e) => {
  console.log(e.target.innerText);
  let divColor = e.target.innerText.split(' ');
  divColor = divColor[1];
  colorReplace.style.backgroundColor = divColor;
  })
})
