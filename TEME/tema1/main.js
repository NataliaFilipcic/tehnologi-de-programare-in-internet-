const nr = document.getElementById('number');
const nrr= document.getElementById('numberr');
const buton = document.getElementById('buton');
const buton2 = document.getElementById('buton2');
const raspuns = document.getElementById('raspuns');

buton.addEventListener('click', () => {
    inmultire()
})

buton2.addEventListener('click', () => {
        impartire()
    })
function inmultire(){
const a = nr.value 
const b = nrr.value
const multiplyRes = a * b
const result = multiplyRes
const create = document.createElement('h1')
create.innerText = result
rezultat.appendChild(create)
}

function impartire(){
const a = nr.value 
const b = nrr.value
const dividedRes = a / b
const result = dividedRes
const create = document.createElement('h1')
create.innerText = result
rezultat.appendChild(create)
}
