let btns = document.querySelectorAll('.btn');

let modal =document.querySelector(".modal");

let closeBtn = document.querySelector(".close");

let overlay = document.querySelector(".overlay");


function modalShow(){
    modal.style.opacity = 1;
    modal.style.visibility = "visible"
}

function modalHide(){
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
};

function overlayShow(){
    overlay.style.opacity = 1;
    overlay.style.visibility = "visible";
}

function overlayHide(){
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
}

for(let i=0; i<btns.length;i++){
    btns[i].addEventListener('click',()=>{
        modalShow();
        overlayShow();

    })
}


closeBtn.addEventListener('click', ()=>{
    modalHide();
    overlayHide();

})

overlay.addEventListener('click', ()=>{
    modalHide();

   overlayHide();
})