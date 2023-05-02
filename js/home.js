
const sectionBox = document.querySelector('.section__box');

const section = document.querySelector('.section__box-title');
const fragment = document.createDocumentFragment();

const options = {
    method: 'GET',
    headers: {'x-api-key': 'c3b9ce74efd9465599f931357604d1c4'},
};

fetch('https://newsapi.org/v2/everything?q=students', options).then(response => response.json()).then(response => {
    response.articles.slice(0, 3).map((e) => {
            const box = document.createElement('div');
            const boxClass = box.classList.add('section__cards')
            const img = document.createElement('img');
            const imgClass = img.classList.add('img__class');
            img.src = e.urlToImage;
            box.appendChild(img);

            const a = document.createElement('a');
            const aClass = a.classList.add('section__a');
            a.href = e.url;
            a.textContent = 'By John Doe   l   Aug 23, 2021' ;
            box.appendChild(a);

            const h1 = document.createElement('h1');
            const h1Class = h1.classList.add('section__title');
            h1.textContent = e.title;
            box.appendChild(h1);
            

            const p = document.createElement('p');
            const pClass = p.classList.add('section__subtitle');
            p.textContent = e.description;
            box.appendChild(p);


        
        
            fragment.appendChild(box);
            sectionBox.appendChild(fragment);
        
      
    })
    
   



} 



).catch(err => console.error(err));

var headerBlock = document.querySelector('.header__block-menifier')
var vektor = document.querySelector('.header__block-vektor')
function menu() {
    headerBlock.style.right = "0";
    headerBlock.style.top = "100px";


}
function xmenu() {
    headerBlock.style.right = "-200px";
    headerBlock.style.top = "-100px";
}

