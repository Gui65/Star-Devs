const person = document.getElementById('persons');
const starship = document.getElementById('starships');
const planets = document.getElementById('planets');

fillCounters();

function fillCounters(){
    Promise.all([
        getData('people/'),
        getData('starships'),
        getData('planets')
    ])
    .then(data => {
        
    })
    .catch(err => console.log('Erro: ', err))
}

function getData(param){
   return fetch(`https://swapi.dev/api/${param}`) 
            .then(res => res.json())
}
