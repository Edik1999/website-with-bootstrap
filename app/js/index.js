function moreArticles(){
   let articles = [];
   articles = document.querySelectorAll(".newArticles");
   let btn = document.querySelector(".btn1");
   btn.classList.add("d-none");
   btn.classList.remove("d-block");
   let btn2 = document.querySelector(".btn2");
   btn2.classList.remove("d-none");
   btn2.classList.add("d-block");
   for(i=0; i<articles.length; i++){
       let elem = articles[i];
       if(elem.classList.contains("first")){
           elem.classList.remove("d-none");
       }
   }
}
function moreArticles2(){
    let articles = [];
    articles = document.querySelectorAll(".newArticles");
    let btn = document.querySelector(".btn2");
    btn.classList.remove("d-block");
    btn.classList.add("d-none");
    for(i=0; i<articles.length; i++){
        let elem = articles[i];
        if(elem.classList.contains("second")){
            elem.classList.remove("d-none");
        }
    }
 }
 function closeSearch(){
     let hideOpacity = document.querySelector(".opacity");
     let hideHiddenSearch = document.querySelector(".hiddenSearch");
     let displayInput = document.querySelector(".searchInput");
     displayInput.classList.remove("d-none");
     hideOpacity.classList.add("d-none");
     hideHiddenSearch.classList.add("d-none");
 }
 function search(){
     let displayOpacity = document.querySelector(".opacity");
     let displayHiddenSearch = document.querySelector(".hiddenSearch");
     let hideInput = document.querySelector(".searchInput");
     hideInput.classList.add("d-none");
     displayOpacity.classList.remove("d-none");
     displayHiddenSearch.classList.remove("d-none");
 }