function changecover(){
    let getimage = document.getElementById("covercont");
    

    getimage.addEventListener("mouseover", function () {
            getimage.style.backgroundImage="url('WhatsApp Image 2025-01-11 at 20.54.37_aaa9bca4.jpg')";
            getimage.style.transition="all 1s";
    })
    getimage.addEventListener("mouseout", function () {
        getimage.style.backgroundImage="url('WhatsApp Image 2024-12-27 at 23.31.19_5a5e66e1.jpg')";
        getimage.style.transition="all 1s";
})
};



changecover();

  