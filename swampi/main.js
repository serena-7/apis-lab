const getBtn = document.querySelector('button');
const baseURL = 'https://swapi.dev/api'

const getResidents = (evt) => {
    console.log('button clicked')
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