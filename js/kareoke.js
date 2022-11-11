const buscador = document.getElementById("buscador")
const search = document.getElementById("search")
const infoApi = document.getElementById("infoApi")


    
//API Kareoke trae canciones de youtube y spotify
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '86b5d84379mshf95d265275511cbp188d6ejsnc6ec245945c4',
        'X-RapidAPI-Host': 'kareoke.p.rapidapi.com'
    }
};
    
function traerInfo(done){
 
    const result = fetch('https://kareoke.p.rapidapi.com/v1/song/search?q=soda%20estereo&limit=1', options)

    result
	    .then(response => response.json())
        .then(data =>{
            done(data)
        })
	    .then(response => console.log(response))
	    .catch(err => console.error(err));
}

traerInfo(data => {

    console.log(data)

    /* data.result.forEach(element => {
        let div = document.createElement('div')
        div.classList.add ('tarjeta')
        div.innerHTML = `
        <div class="imagen">
            <img src=${element.image} alt="">
        </div>
        <h3 class="title">${element.title}</h3>
        <p class="direccion">${element.url}</p>
        `;
        
        infoApi.append (div);
    }); */
})
    