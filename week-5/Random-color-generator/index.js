const button = document.querySelector('button')
const text = document.getElementById('text')
const color = document.querySelector('.color')


const numArr = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

button.addEventListener('click', () => {
  let str=''
  for(let i=0; i<6;i++){
    str+=numArr[Math.floor(Math.random()*numArr.length)]
  }
  document.body.style.backgroundColor = `#${str}`
  text.innerHTML = `#${str}`
  color.style.backgroundColor =`#${str}`

})
