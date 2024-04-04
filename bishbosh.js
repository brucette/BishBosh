// Bish-Bosh
// for (let number = 1; number <= 100; number++)
// {
//     if (number % 3 === 0 && number % 4 === 0) {
//         console.log('Bish-Bosh');
//     } else if (number % 3 === 0) {
//         console.log('Bish');
//     } else if (number % 4 === 0) {
//         console.log('Bosh');
//     } else {
//         console.log(number);
//     }
// }

// Bish-Bosh 2.0
let loop = document.querySelector('#loop');
let bish = document.querySelector('#bish');
let bosh = document.querySelector('#bosh');
let results = document.querySelector('#results');
const form = document.getElementById('inputForm');
form.addEventListener('submit', getUserInput);


const bishBosh = (loop, bish, bosh) => {

    let output = '';
    // if number is less than 1 or 1?
    for (let number = 1; number <= loop; number++)
    {
        if (number % bish === 0 && number % bosh === 0) {
            output += 'Bish-Bosh, ';
        } else if (number % bish === 0) {
            output += ('Bish, ');
        } else if (number % bosh === 0) {
            output += 'Bosh, ';
        } else {
            output += `${number}, `;
        }
    }
    return output;
}

// const bishBosh = (loop, bish, bosh) => {

//     // if number is less than 1 or 1?
//     for (let number = 1; number <= loop; number++)
//     {
//         if (number % bish === 0 && number % bosh === 0) {
//             results.innerHTML += `<span>${'Bish-Bosh'}</span>`;
//         } else if (number % bish === 0) {
//             results.innerHTML += `<span>${'Bish'}</span>`;
//         } else if (number % bosh === 0) {
//             results.innerHTML += `<span>${'Bosh'}</span>`;
//         } else {
//             results.innerHTML += `<span>${number}</span>`;
//         }
//     }
// }

function getUserInput(event) {
    event.preventDefault();
    // let results = document.getElementById('results');

    results.textContent = "";

    // let loop = document.getElementById('loop').value;
    // let bish = document.getElementById('bish').value;
    // let bosh = document.getElementById('bosh').value;

    results.textContent = bishBosh(loop.value, bish.value, bosh.value);
    
    // clear input fields
    // document.getElementById('loop').value = "";
    // document.getElementById('bish').value = "";
    // document.getElementById('bosh').value = "";
    form.reset();
};

