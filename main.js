function homePage(){
    const item = document.querySelectorAll('#home .list .item');
    const thumbnail = document.querySelectorAll('.thumbnail-list .item');
    const next = document.querySelector('.home-next-btn')
    const prev = document.querySelector('.home-prev-btn')

    let countItem = item.length;
    let currentCount = 0;

    let autoSlideShow = setInterval(() => {
        next.click();
    },3000)

    function showContentMain (){
        const oldItemActive = document.querySelector('.list .item.active');
        const oldThumbnailActive = document.querySelector('.thumbnail-list .item.active');
        oldItemActive.classList.remove('active');
        oldThumbnailActive.classList.remove('active');

        item[currentCount].classList.add('active')
        thumbnail[currentCount].classList.add('active')
        clearInterval(autoSlideShow);
        autoSlideShow = setInterval(() => {
            next.click();
        },3000)
    }

    next.addEventListener('click', () => {
        currentCount++;
        if(currentCount >= countItem){
            currentCount = 0;
        }
        showContentMain();
    })

    prev.addEventListener('click',() => {
        currentCount--;
        if(currentCount < 0){
            currentCount = countItem - 1;
        }
        showContentMain();
    })

    thumbnail.forEach((item,index) => {
        item.addEventListener('click',() => {
            currentCount = index;
            showContentMain()
        })
    })

    
}
homePage();

function servicesPage(){
    const btnBox = document.querySelectorAll('.services-box .box-title');
    const contentBox = document.querySelectorAll('.services-box .box-content');
    btnBox.forEach((box,index) => {
        
        box.addEventListener('click',() => {
            if(contentBox[index].classList.contains('active')){
                contentBox[index].classList.remove('active')
                
            }else{
                if(document.querySelector('.box-content.active')){
                    const oldActive = document.querySelector('.box-content.active');
                    oldActive.classList.remove('active');
                }
                contentBox[index].classList.add('active')
            }
            
        })
    })
}
servicesPage();