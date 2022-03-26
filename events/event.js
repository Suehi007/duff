const button = document.querySelectorAll('button');
const hide = document.querySelector('.hide');
const plus =  document.querySelector('.fa-plus');
const minus = document.querySelector('.fa-minus');
const q = document.querySelector('.q');


button.forEach(function(btn) {

    btn.addEventListener('click', function(e){
        let call = e.currentTarget
        console.log(call);
        let element = call.parentElement.parentElement.parentElement
        console.log(element);
        element.classList.toggle('show')

    })
});


// hide.forEach(function(ide){
//     let i = ide
// })

let k = 234
let n = 124





    
    for (let i = 0; i < k; i++) {
    function mdigit(k,n) {
        
       
        k = n +i

        console.log(k);
        
    }

}

    mdigit(k,n)
    
    
    
    







