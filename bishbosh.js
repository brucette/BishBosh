// Bish-Bosh
for (let number = 1; number <= 100; number++)
{
    if (number % 3 === 0 && number % 4 === 0) {
        console.log('Bish-Bosh');
    } else if (number % 3 === 0) {
        console.log('Bish');
    } else if (number % 4 === 0) {
        console.log('Bosh');
    } else {
        console.log(number);
    }
}

// Bish-Bosh 2.0
const results = document.querySelector('#results');
const output = document.querySelector('.output-display');
const clearBtn = document.querySelector('#clearBtn');
const form = document.querySelector('#inputForm');
const loop = form['loop'];
const bish = form['bish'];
const bosh = form['bosh'];

const bishBosh = (loop, bish, bosh) => {

    let output = '';
    
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

    // Remove last comma
    return output.slice(0, -2);
}

function displayResults(event) {

    event.preventDefault();
    results.textContent = "";
    output.classList.remove('hide');
    results.textContent = bishBosh(loop.value, bish.value, bosh.value);
};

function clearForm() {
    form.reset();
    output.classList.add('hide');
}

form.addEventListener('submit', displayResults);
clearBtn.addEventListener('click', clearForm);