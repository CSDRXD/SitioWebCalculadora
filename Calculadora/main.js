const display = document.querySelector(".display");
const btn = document.querySelectorAll(".btn");

btn.forEach(btn =>{
    btn.addEventListener("click", ()=> {
        const btnApretado = btn.textContent;

        if (btn.id === "c") {
            display.textContent = "0";
            return
        }

        if (btn.id === "clear"){
            if(display.textContent.length === 1 || display.textContent === "Error!"){
                display.textContent = "0"
            } else{
                display.textContent = display.textContent.slice(0, -1)
            }
            
            return
        }

        if (btn.id === "equal" ){
           try{
            display.textContent = eval(display.textContent);
           } catch{
                display.textContent = "Error!";
           }
            return;
        }

        if (display.textContent === "0" || display.textContent === "Error!"){
            display.textContent = btnApretado;
        } else {
            display.textContent += btnApretado;
        }
    } )
});

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})