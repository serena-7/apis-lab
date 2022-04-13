const resForm = document.querySelector('#get_res');
const filmForm = document.querySelector('#get_films');
const clearBtn = document.querySelector('#clear');
const baseURL = 'https://swapi.dev/api'

const clearList = () => {
    const divs = document.querySelectorAll('section>div');
    for(let i = 0; i < divs.length; i++){
        divs[i].remove();
    }
}

const clearNotes = () => {
    const p = document.querySelectorAll('form>p');
    for(let i = 0; i < p.length; i++){
        p[i].textContent = '';
    }
}

const clearInputs = () => {
    const inputs = document.querySelectorAll('form>input');
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
}

const clearAll = () => {
    clearList();
    clearNotes();
    clearInputs();
}

const getResidents = (event) => {
    event.preventDefault();
    console.log('button clicked')
    clearList();
    clearNotes();
    const p = document.querySelector('#get_res>p')
    const planet = document.querySelector('#get_res>input').value;
    if (planet === '') {
        p.textContent = "Error: Forgot to enter a planet";
        return console.log('Error')
    } else {
        p.textContent = `Note: You searched for planets containing ${planet}`;
    }
    clearInputs();
    axios.get(`${baseURL}/planets?search=${planet}`)
        .then(res => {
            for(let i = 0; i < res.data.results.length; i++){
                const newDiv = document.createElement('div');
                const planetName = res.data.results[i].name;
                const newH1 = document.createElement('h1');
                newH1.textContent = `Residents of the Planet ${planetName}:`;
                newDiv.appendChild(newH1);
                const residentsURLs = res.data.results[i].residents;
                for(let index = 0; index < residentsURLs.length; index++){
                    axios.get(residentsURLs[index])
                        .then(res => {
                            const newEle = document.createElement('h2');
                            newEle.textContent = res.data.name;
                            newDiv.appendChild(newEle);
                        })
                        .catch(err => {
                            console.log(err)
                        });
                }
                document.querySelector('section').appendChild(newDiv);
            }
        })
        .catch(err => {
            console.log(err)
            p.textContent = "Error: Invalid Planet"
        });
}

const getFilms = (event) => {
    event.preventDefault();
    clearList();
    clearNotes();
    const p = document.querySelector('#get_films>p')
    const person = document.querySelector('#get_films>input').value;
    if (person === '') {
        p.textContent = "Error: Forgot to enter a person";
        return console.log('Error')
    } else {
        p.textContent = `Note: You searched for people containing ${person}`
    }
    clearInputs();
    axios.get(`${baseURL}/people?search=${person}`)
        .then(res => {
            for(let i = 0; i < res.data.results.length; i++){
                const newDiv = document.createElement('div');
                const personName = res.data.results[i].name;
                const newH1 = document.createElement('h1');
                newH1.textContent = `Films ${personName} Appears`;
                newDiv.appendChild(newH1);
                const filmURLs = res.data.results[i].films;
                for(let index = 0; index < filmURLs.length; index++){
                    axios.get(filmURLs[index])
                        .then(res => {
                            const newEle = document.createElement('h2');
                            newEle.textContent = res.data.title;
                            newDiv.appendChild(newEle);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
                document.querySelector('section').appendChild(newDiv);
            }
        })
        .catch(err => {
            console.log(err);
            p.textContent = "Error Invalid Person"
        })
}

resForm.addEventListener("submit", getResidents);
filmForm.addEventListener("submit",getFilms);
clearBtn.addEventListener('click', clearAll);