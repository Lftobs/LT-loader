const loader = document.querySelector('.con')
const main = document.querySelector('.main')

function init() {
    setTimeout(() => {
        loader.style.opacity= 0;
        loader.style.display="none";
        
        setTimeout(() =>{
            main.style.display= "block";
            main.style.opacity=  1;
        }, 500)
        
    }, 10000)
};

init()