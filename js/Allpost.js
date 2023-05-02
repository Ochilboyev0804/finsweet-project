const sectionBlock = document.querySelector('.section__box')
const searchInput = document.querySelector('.search');

const fragment = document.createDocumentFragment();
let currentPage = 1;
const options = {
    method: 'GET',
    headers: {'x-api-key': 'c3b9ce74efd9465599f931357604d1c4'},
};


async function fetchData() {
    
    if (!searchInput.value) {
        url = 'https://newsapi.org/v2/everything?q=Sources';
    } else {
        url = `https://newsapi.org/v2/everything?q=${searchInput.value}`;
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        sectionBlock.innerHTML = '';
        data.articles.slice(0,5).map((e) => {
            const sectionCard = document.createElement('div')
            const sectionCardClass = sectionCard.classList.add('section__card')
            const box = document.createElement('div');
            const img = document.createElement('img')
            img.src = e.urlToImage;

            if (e.urlToImage) {
                img.alt = 'rasm';
            } else {
                 img.alt = "Rasm yo'q";
                
            }
            sectionCard.appendChild(img);
            
            const a = document.createElement('a');
            const aclass = a.classList.add('section__link')
            a.href = e.url;
            a.textContent = e.source.name;
            box.appendChild(a);
            
            
            const h1 = document.createElement('h1');
            const h1Class = h1.classList.add('section__title');
            h1.textContent = e.title;
            box.appendChild(h1);
            
            
            const p = document.createElement('p');
            const pClass = p.classList.add('section__subtitle');
            p.textContent = e.description;
            box.appendChild(p);
            
            
    
    
            sectionCard.appendChild(box);
            fragment.appendChild(sectionCard);
            sectionBlock.appendChild(fragment);
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