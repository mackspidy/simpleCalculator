let str = "";
let button = document.querySelectorAll("button");
let input = document.querySelector("input");
let clear = document.querySelector(".clear");
//let click = document.addEventListener("button", click);


button.forEach((button) => {
    button.addEventListener('click', () => {
        button.style.boxShadow = "0px 0px 3px 3px #fff";
        setTimeout(() => {
            button.style.boxShadow = "";
        }, 200);
     });
});

Array.from(button).forEach((button) => {
    button.addEventListener('click', (e)=> {
        if (e.target.innerHTML === '=') {
            try {           
            str = eval(str);
            input.value = str;
        } catch (error) {
            input.value = error ;
            str = "";
            }
        }
        else if (e.target.innerHTML.toLowerCase() === 'clear') {
            str = "";
            input.value = str;
        }        
        else {
            str = str + e.target.innerHTML;
            input.value = str;
        }
    
    // clear.addEventListener('click', () => {
    //     str = "";
    //     input.value = str;
    // })
    })
});