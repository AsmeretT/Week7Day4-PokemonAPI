const getData = async (name) => {
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data = await res.json() 
    const fetchPokemon = name
    const displayPokemon = data.sprites.front_default
    const pokemonList=[fetchPokemon, displayPokemon]
    return pokemonList
};
getData('gloom')

const createList = (fetchPokemon, displayPokemon) => {
    const pokeImg = document.createElement('img')
    pokeImg.src = displayPokemon
    pokeImg.className = 'poke-img'
    pokeImg.style = 'width:400px; backgroundColor: white, textAlign:center'
    document.querySelector('section.list-group').insertAdjacentElement('beforeend', pokeImg)
    const pokeName = document.createElement('h4')
    pokeName.innerHTML = fetchPokemon
    document.querySelector('section.list-group').insertAdjacentElement('beforeend', pokeName)
};

const loadData = async () => {
    const myInput = document.querySelector('input').value 
    const myList = await getData(myInput); 
        createList(myList[0], myList[1]) 
};

const clearData = () => {
    document.querySelector('section').innerHTML=''
};

const clear = document.getElementsByClassName('btn-danger')[0]
clear.addEventListener('click', clearData)