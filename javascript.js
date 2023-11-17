// const bigboi = document.createElement('div')
// bigboi.setAttribute('style', 'border: 5px outset red; height: 300px; width: 300px')
// bigboi.classList.toggle('bigboi')

// for(let x = 1; x <= 16; x++){
//     let tile = document.createElement('div')
//     tile.classList.toggle('tile')
//     bigboi.appendChild(tile)
// }



// document.body.appendChild(bigboi)


const prompt1 = document.querySelector(".prompt");
prompt1.addEventListener("click", () => {
    let x = prompt("hello");
    if(x < 101 && x > 0){
        // let y = true;
        // while(y){
        //     if(bigboi.hasChildNodes){
        //         bigboi.removeChild(bigboi.lastChild)
        //     }  
        //     else
        //         y = false;
        // }
        
        bigboi.replaceChildren();
        // x++;
        for(let z = 0; z < (x*x); z++){
            let ntile = document.createElement('div');
            ntile.classList.toggle("tile");
            let f = 960/x;
            ntile.style.width = `${f}px`;
            console.log(`${f}px`)
            ntile.style.height = `${f}px`;

            bigboi.appendChild(ntile);
        }
    }
})


for(let x = 0; x < 256; x++){
    let tile = document.createElement('div');
    tile.className = "tile";
    tile.style.width = "60px";
    tile.style.height = "60px";

    document.getElementById('bigboi').appendChild(tile);
}

const bigboi = document.getElementById("bigboi");
const tile = document.getElementsByClassName("tile")
bigboi.addEventListener("mouseover", (event) => {
    if(event.target.className == "tile"){
        event.target.style.background = "blue";
        // event.target.style.border = "2px solid white";
    }
}, false)

bigboi.addEventListener("mouseout", (event) => {
    if(event.target.className == "tile"){
        event.target.style.background = "red";
        // event.target.style.border = "2px solid red";
    }
}, false)


const clear = document.querySelector(".clear");
clear.addEventListener("click", (event) =>{
    let clearb = document.querySelectorAll(".tile");
    clearb.forEach((ti) => {
        ti.style.background = "white";
    })
}, false)


