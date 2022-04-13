const getBtn = document.querySelector('button');
const baseURL = 'https://swapi.dev/api'

const clearResidents = () => {
    const oldResidents = document.querySelectorAll('section>h2');
    for(let i = 0; i < oldResidents.length; i++){
        oldResidents[i].remove();
    }
}

const getResidents = (evt) => {
    console.log('button clicked')
    clearResidents();
    axios.get(`${baseURL}/planets?search=alderaan`)
        .then(res => {
            const residentsURLs = res.data.results[0].residents;
            for(let i = 0; i < residentsURLs.length; i++){
                axios.get(residentsURLs[i])
                    .then(res => {
                        const newEle = document.createElement('h2');
                        newEle.textContent = res.data.name;
                        document.querySelector('section').appendChild(newEle);
                    })
                    .catch(err => {
                        console.log(err)
                    });
            }
        })
        .catch(err => {
            console.log(err)
        });
}

getBtn.addEventListener("click", getResidents);