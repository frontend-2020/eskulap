window.addEventListener("load", () => {
    let burgerOff = document.querySelector(".block-header__burger-wrapper__burger");
    let burgerOffLineTop = document.querySelector(".block-header__burger-wrapper__burger--lt");
    let burgerOffLineMiddle = document.querySelector(".block-header__burger-wrapper__burger--lm");
    let burgerOffLineBottom = document.querySelector(".block-header__burger-wrapper__burger--lb");



    burgerOff.onclick = function () {
        burgerOffLineTop.classList.toggle("block-header__burger-wrapper__burgerOn--ltOn");
        burgerOffLineMiddle.classList.toggle("block-header__burger-wrapper__burgerOn--lmOn");
        burgerOffLineBottom.classList.toggle("block-header__burger-wrapper__burgerOn--lbOn");
        burgerOff.classList.toggle("block-header__burger-wrapper__burgerOn");


    }


});