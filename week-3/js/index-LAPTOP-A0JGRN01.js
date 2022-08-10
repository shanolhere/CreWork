const img1 = document.querySelector('.img1')

const imgthumbnail1 = document.querySelector('.img_thumbnail1')
const img2 = document.querySelector('.img_thumbnail2')
const img3 = document.querySelector('.img_thumbnail3')
const img4 = document.querySelector('.img_thumbnail4')

//Adding active class to images.
const imageList = document.querySelector('.imageList').children;

function addActive(id) {
  for (let i = 0; i < imageList.length; i++) {
    imageList[i].classList.remove('active')
  }
  id.classList.add('active')
  //console.log(id)
}

imgthumbnail1.addEventListener('click', (e) => {
  img1.src = 'assets/image-product-1.jpg';
  addActive(e.target);
  //console.log(e.target)
});
img2.addEventListener('click', (e) => {
  img1.src = 'assets/image-product-2.jpg';
  addActive(e.target);
});
img3.addEventListener('click', (e) => {
  img1.src = 'assets/image-product-3.jpg';
  addActive(e.target);
});
img4.addEventListener('click', (e) => {
  img1.src = 'assets/image-product-4.jpg';
  addActive(e.target);
});

//hamburger activation

const menuBtn = document.querySelector('.menuBtn')
const sideMenu = document.querySelector('#menu')
const closeBtn = document.querySelector('.closeBtn')

menuBtn.addEventListener('click', () => {

  sideMenu.classList.add('sideMenuDiv')
  menuBtn.style.display = 'none';
  closeBtn.style.display = "block"
})
closeBtn.addEventListener('click', () => {

  sideMenu.classList.remove('sideMenuDiv')
  menuBtn.style.display = 'block';
  closeBtn.style.display = "none"
})

//cart functionality

const addCartBtn = document.querySelector('.addCart')

const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const quantity = document.querySelector('.quantity')

// quantity.addEventListener('change', (e) => {
//   quantity.value = e.target.value;
// })

// plusBtn.addEventListener('click', () => {
//   var counter = Number(quantity.value);
//   counter = counter + 1;
//   quantity.value = counter
//   //console.log(counter)
// })
// minusBtn.addEventListener('click', () => {
//   var counter = Number(quantity.value);
//   counter = counter - 1;
//   quantity.value = counter
//   //console.log(counter)
// })

// addCartBtn.addEventListener('click', () => {
//   // console.log(Number(quantity.value))
//   //checkout functionality


// })
//checkout functionality

let quantQT = document.querySelector('.quantQT')
const remove = document.querySelector('.remove')
const price = document.querySelector('.price')
const total = document.querySelector('.total')
//console.log(quantQT.innerHTML)
let rawPrice = price.innerHTML;
let purePrice = rawPrice.slice(1,-3)

quantity.addEventListener('change', (e) => {
  quantity.value = e.target.value;
  quantQT.innerHTML = Number(quantity.value);
  //console.log(quantity.value)
  let grandTotal = Number(quantity.value) * purePrice
  total.innerHTML = `$${grandTotal}.00`

})

plusBtn.addEventListener('click', () => {
  var counter = Number(quantity.value);
  counter = counter + 1;
  quantity.value = counter
  quantQT.innerHTML = Number(quantity.value);

  //console.log(purePrice)
  let grandTotal = Number(quantity.value) * purePrice
  total.innerHTML = `$${grandTotal}.00`
  //console.log(counter)
})
minusBtn.addEventListener('click', () => {
  var counter = Number(quantity.value);
  if(counter>0){
    counter = counter - 1;
  }
  quantity.value = counter
  quantQT.innerHTML = Number(quantity.value);
  let rawTotalPrice = total.innerHTML;
  let pureTotalPrice = rawTotalPrice.slice(1,-3)
  // console.log(pureTotalPrice-purePrice)
  let grandTotal = quantQT.innerHTML *purePrice
  total.innerHTML = `$${grandTotal}.00`
  // total.innerHTML = `$${purePrice-pureTotalPrice}.00`
})
