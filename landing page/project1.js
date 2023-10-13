const homeEle = document.querySelector('#home');
const branchEle = document.querySelector('#branches');
const contactEle = document.querySelector('#contact');
const hlinkEle = document.querySelector('#hlink');
const blinkEle = document.querySelector('#blink');
const clinkEle = document.querySelector('#clink');
const i1Ele = document.querySelector('#icon1');
const i2Ele = document.querySelector('#icon2');
const i3Ele = document.querySelector('#icon3');


homeEle.addEventListener('click',()=>{
    homeEle.classList.add('border-red-500');
    hlinkEle.classList.add('text-red-500');
    hlinkEle.classList.add('font-bold');
    i1Ele.classList.add('text-red-500');
    if(branchEle.classList.contains('border-red-500')){
        branchEle.classList.remove('border-red-500');
        blinkEle.classList.remove('text-red-500');
        blinkEle.classList.remove('font-bold');
        i2Ele.classList.remove('text-red-500');
    }
    if(contactEle.classList.contains('border-red-500')){
        contactEle.classList.remove('border-red-500');
        clinkEle.classList.remove('text-red-500');
        clinkEle.classList.remove('font-bold');
        i3Ele.classList.remove('text-red-500');
    }
})

branchEle.addEventListener('click',()=>{
    branchEle.classList.add('border-red-500');
    blinkEle.classList.add('text-red-500');
    blinkEle.classList.add('font-bold');
    i2Ele.classList.add('text-red-500');
    if(homeEle.classList.contains('border-red-500')){
        homeEle.classList.remove('border-red-500');
        hlinkEle.classList.remove('text-red-500');
        hlinkEle.classList.remove('font-bold');
        i1Ele.classList.remove('text-red-500');
    }
    if(contactEle.classList.contains('border-red-500')){
        contactEle.classList.remove('border-red-500');
        clinkEle.classList.remove('text-red-500');
        clinkEle.classList.remove('font-bold');
        i3Ele.classList.remove('text-red-500');
    }
})

contactEle.addEventListener('click',()=>{
    contactEle.classList.add('border-red-500');
    clinkEle.classList.add('text-red-500');
    clinkEle.classList.add('font-bold');
    i3Ele.classList.add('text-red-500');
    if(homeEle.classList.contains('border-red-500')){
        homeEle.classList.remove('border-red-500');
        hlinkEle.classList.remove('text-red-500');
        hlinkEle.classList.remove('font-bold');
        i1Ele.classList.remove('text-red-500');
    }
    if(branchEle.classList.contains('border-red-500')){
        branchEle.classList.remove('border-red-500');
        blinkEle.classList.remove('text-red-500');
        blinkEle.classList.remove('font-bold');
        i2Ele.classList.remove('text-red-500');
    }
})