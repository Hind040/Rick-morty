let currentpage=1
const ccontainer = document.getElementById("cards-container")
const prev = document.getElementById("previous")
const nx = document.getElementById("next")
const inf = document.getElementById("info")

async function fetchcharacters(page) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    const data = await response.json()
    return data
}

async function showcharachters(page) {
    const data = await fetchcharacters(page)
    const characters = data.results


inf.innerText = `page ${currentpage} / ${data.info.pages}`
ccontainer.innerHTML=""

characters.forEach(char=>{
    const card=`
    <div class="card">
        <div class="card-header">
            <img src="${char.image}" alt="${char.name}">
        </div>
        <div class="card-body">
            <h3>${char.name}</h3>
            <p>${char.status} - ${char.type}</p>
            <p>${char.species}</p>
            <p>${char.origin.name}</p>
        </div>
    </div>
        

    `
    ccontainer.innerHTML+=card
})
}

prev.addEventListener('click',function(){
   if (currentpage >1){
    currentpage--
    showcharachters(currentpage)
   }
})

nx.addEventListener('click',function(){
    currentpage++
    showcharachters(currentpage)
})
showcharachters(currentpage)