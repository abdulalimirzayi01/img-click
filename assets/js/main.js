const mainImg = document.querySelector('.img-main img');
const imgItems = document.querySelectorAll('.img-items img')


// console.log(mainImg);
// console.log(imgItems);

for (let f = 0; f < imgItems.length; f++) {
    imgItems[f].onclick = ()  =>{
        const clickedImgSrc = imgItems[f].getAttribute('src');

        // Ana resmin src'sini değiştir
        mainImg.setAttribute('src', clickedImgSrc);
    }
    
}

