let display = document.getElementById("display-container");
let input = document.querySelector('#input');
let tempDisplay = document.querySelector('#temp-display');
let modal =document.querySelector('#modal');

// Adding onClick event listener on window to check for enter
window.onkeypress = function(e){
    if (e.keyCode == 13){
        displayTable();
    }
}


function displayTable(){
    const num = input.value;
    
    // Validating if the entered number is integer and not string.
    if (isNaN(num) || num.length == 0){
        modal.style.top = '3%';
        input.value = "";
        setTimeout(() => {
            modal.style.top = '-100%';
        }, 1500);
    } else{
        // First clearing all the child elements from parent div.
        display.innerHTML = "";
        tempDisplay.style.display = 'none';
        // Then Iterating 10 times and injecting all the child nodes in parent element;
        for (let i = 1; i <= 10; i++){
            setTimeout(() => {
                display.insertAdjacentHTML("beforeend", 
                    `<div class="row">
                    <p> <b>${num} X ${i}</b> = <b>${num*i}</b></p>
                </div>`
                )
            }, i*40);
        }
    }
    
}

