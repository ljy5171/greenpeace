
const $gnb = document.querySelector('header>.container>nav>.gnb');
const $lnbs = document.querySelectorAll('header>.container>nav>.gnb>li>.lnb');

const $slides = document.querySelector('section>.article1>.slides-container>.slides');

const $btnPrev = document.querySelector('section>.article1>.button>li:nth-of-type(1)');
const $btnNext = document.querySelector('section>.article1>.button>li:nth-of-type(2)');

const $news_prev = document.querySelector('section>.article2>.article-container>p');
const $news = document.querySelector('section>.article2>.article-container>.news-container>.news');

let index = 0;
let intervalKey = null;

const autoPlay = function(){
    clearInterval(intervalKey);
    
    intervalKey = setInterval(function(){
        $btnNext.click();
        
    },4000)};

    autoPlay();

$btnPrev.addEventListener('click',function(evt){
    evt.preventDefault();
    
    if(index>0){
        index--;
    }else{
        index=7;
    }
    
    $slides.style.left = -100*index + '%';
    // $slides.style.transition = 'all 0.4s ease-in-out';
});
$btnNext.addEventListener('click',function(evt){
    evt.preventDefault();
    
    if(index<7){
        index++;
    }else{
        index=0;
    }
    
    $slides.style.left = -100*index + '%';
    // $slides.style.transition = 'all 0.4s ease-in-out';
});

    
{
$news_prev.addEventListener('click',function(evt){
    evt.preventDefault();
    
    $news.style.left = -430 + 'px';

    setTimeout(function(){            
        $news.style.transition = 'none';
        $news.appendChild($news.firstElementChild);  
        $news.style.left = 0;      
        setTimeout(function(){
                $news.style.transition = 'all 0.4s ease-in-out';    
            },100);
        },400) 
    
   
   
        //         $news.style.transition = 'none';
    // $news.appendChild($news.firstElementChild);  
    // $news.style.left = 0;      
    //             $news.style.transition = 'all 0.4s ease-in-out';    

    


    });
}

