const img1 = document.querySelector('.img1')

const imgthumbnail1 = document.querySelector('.img_thumbnail1')
const img2 = document.querySelector('.img_thumbnail2')
const img3 = document.querySelector('.img_thumbnail3')
const img4 = document.querySelector('.img_thumbnail4')


const imageList = document.querySelector('.imageList').children;

function addActive(id){
  for(let i=0; i<imageList.length;i++){
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

//Adding active class to images.
