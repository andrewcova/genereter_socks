const emojiContainer = document.querySelectorAll('.emojiSelector');
const emojiReplace = document.getElementById('firstSock');

const colorContainer = document.querySelectorAll('.backgroundsSelector');
const colorReplace = document.getElementById('layer2');
const createrSock = document.getElementById('crealeSock');
let colorsocs;
let emojin = emojiReplace.innerText;

emojiContainer.forEach((e) => {
  e.addEventListener('click', (e) => {
    emojin = emojiReplace.innerText;
      emojiReplace.innerText = `${e.target.innerText}    ${e.target.innerText}`;
      })
  })




colorContainer.forEach((e) => {
  e.addEventListener('click', (e) => {
  let divColor = e.target.innerText.split(' ');
  divColor = divColor[1];
  colorReplace.style.backgroundColor = divColor;
  colorsocs = divColor;
  })
})

createrSock.addEventListener('click', async (e) => {
// console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>> colorContainer = ', colorContainer);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>> cemojiReplace.innerText = ', emojin);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  colorReplace.style.backgroundColor = ', colorsocs);
const resp = await fetch('/order', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify({emojin, colorsocs})
});
});

