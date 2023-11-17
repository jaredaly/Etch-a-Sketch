// const bigboi = document.createElement('div')
// bigboi.setAttribute('style', 'border: 5px outset red; height: 300px; width: 300px')
// bigboi.classList.toggle('bigboi')

// for(let x = 1; x <= 16; x++){
//     let tile = document.createElement('div')
//     tile.classList.toggle('tile')
//     bigboi.appendChild(tile)
// }



// document.body.appendChild(bigboi)

for(let x = 0; x < 256; x++){
    let tile = document.createElement('div');
    tile.className = "tile";

    document.getElementById('bigboi').appendChild(tile);
}

const bigboi = document.getElementById("bigboi");
const tile = document.getElementsByClassName("tile")
bigboi.addEventListener("mouseover", (event) => {
    event.target.style.border = "2px solid blue";
}, false)

bigboi.addEventListener("mouseout", (event) => {
    event.target.style.border = "2px solid red";
}, false)