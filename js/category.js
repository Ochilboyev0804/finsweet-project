const sectionBox = document.querySelector('.section__box');
const searchInput = document.querySelector('.search');
const fragment = document.createDocumentFragment();
let currentPage = 1;
const options = {
    method: 'GET',
    headers: {'x-api-key': 'c3b9ce74efd9465599f931357604d1c4'},
};
async function fetchData() {
    if (!searchInput.value) {
        url = 'https://newsapi.org/v2/everything?q=business';
    } else {
        url = `https://newsapi.org/v2/everything?q=${searchInput.value}`;
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        sectionBox.innerHTML = '';
        data.articles.slice(0,4).map((e) => {
            const box = document.createElement('div');
                        const boxCard = document.createElement('div');
                        const boxCardClass = boxCard.classList.add('section__block');
                        const boxClass = box.classList.add('section__cards')
                        const img = document.createElement('img');
                        const imgClass = img.classList.add('img__class');
                        img.src = e.urlToImage;
                        box.appendChild(img);
            
                        const a = document.createElement('a');
                        const aClass = a.classList.add('section__a');
                        a.href = e.url;
                        a.textContent = 'business';
                        boxCard.appendChild(a);
            
                        const h1 = document.createElement('h1');
                        const h1Class = h1.classList.add('section__title');
                        h1.textContent = e.title;
                        boxCard.appendChild(h1);
                        
            
                        const p = document.createElement('p');
                        const pClass = p.classList.add('section__subtitle');
                        p.textContent = e.description;
                        boxCard.appendChild(p);
            
            
                    
                        box.appendChild(boxCard);
                        fragment.appendChild(box);
                        sectionBox.appendChild(fragment);
        })
        const paginationWrapper = document.querySelector('.pagination_wrapper');
        paginationWrapper.innerHTML = '';

    
    if (data.totalResults > 1) {
        for (let i = 1; i <= 5; i++) {
            const button = document.createElement('button');
            const buttonClass = button.classList.add('pagination__wrapper-btn')
            button.textContent = i;
            if (currentPage === i) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                currentPage = i;
                fetchData();
            })
            paginationWrapper.appendChild(button);
        }
    }

    } catch (error) {
        console.log(error);
    }
   
}
fetchData()

searchInput.addEventListener('input', () => {
    fetchData()
})




















// https://newsapi.org/v2/everything?q=Apple&from=2023-04-12&sortBy=popularity&apiKey=API_KEY
// fetch('https://newsapi.org/v2/everything?q=Business', options).then(response => response.json()).then(response => {
//     console.log(response);
//     if (!searchInput.value) {
//         url = 'https://newsapi.org/v2/everything?q=ee0c1ec877624738985d9bf28462ace4';
//     } else {
//         url = `https://newsapi.org/v2/everything?q=ee0c1ec877624738985d9bf28462ace4&query=${search.value}`
//     }
//     response.articles.slice(0, 4).map((e) => {
//         console.log(e);                               

//             const box = document.createElement('div');
//             const boxCard = document.createElement('div');
//             const boxCardClass = boxCard.classList.add('section__block');
//             const boxClass = box.classList.add('section__cards')
//             const img = document.createElement('img');
//             const imgClass = img.classList.add('img__class');
//             img.src = e.urlToImage;
//             box.appendChild(img);

//             const a = document.createElement('a');
//             const aClass = a.classList.add('section__a');
//             a.href = e.url;
//             a.textContent = 'business';
//             boxCard.appendChild(a);

//             const h1 = document.createElement('h1');
//             const h1Class = h1.classList.add('section__title');
//             h1.textContent = e.title;
//             boxCard.appendChild(h1);
            

//             const p = document.createElement('p');
//             const pClass = p.classList.add('section__subtitle');
//             p.textContent = e.description;
//             boxCard.appendChild(p);


        
//             box.appendChild(boxCard);
//             fragment.appendChild(box);
//             sectionBox.appendChild(fragment);
        
      
//     })
    
   



// } 



// ).catch(err => console.error(err));





  