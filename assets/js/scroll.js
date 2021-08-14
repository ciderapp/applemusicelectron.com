function amountscrolled(){
    var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
    var docheight = document.body.scrollHeight
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    console.log(pctScrolled + '% scrolled')
    
    
    if (pctScrolled >= 7) {
        document.head.querySelector(".theme") = "<meta name=\"theme-color\" content=\"#FFFFFF\" class=\"theme\">";
    
    } else {
    
        document.head.querySelector(".theme") = "<meta name=\"theme-color\" content=\"rgba(21, 8, 90, 1)\" class=\"theme\">";
        
    
    }
}
 
window.addEventListener("scroll", function(){
    amountscrolled()
}, false)


//WIP