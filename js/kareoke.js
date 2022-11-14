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
    
function traerInfo(){
 
fetch('https://kareoke.p.rapidapi.com/v1/song/search?q=Spotlight&limit=1', options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
}

/* A continuacion intente de mil maneras recorrer el objeto de la api y que cargue los valores en el DOM, claramente no lo logre :(
Busque mil videos en youtube pero ninguno me sirvio... o evidentemente no supe realizarlo correctamente....
La idea era que en el input se escribiera el nombre de una cancion, y al apretar el boton "buscar" devuelva el resultado. Probe la API desde rapidapi y veia como funcionaba pero al llevarla a mi proyecto no logre nada.... Solo que me muestre el objeto en consola....
Pedi ayuda por la plataforma pero nadie me contesto.... 
Se que no cumpli con este apartado de las API pero si pudieras corregime el proyecto y explicarme como realizar lo que quise hacer me seria de una gran ayuda!!! */

search.addEventListener("click", () => {

    traerInfo(data => {
        
        console.log(data)
        
        for (let elements in youtube)  {
            let div = document.createElement('div')
            div.classList.add ('tarjeta')
            div.innerHTML = `
            <div class="imagen">
                <img src=${elements[image]} alt="">
            </div>
            <h3 class="title">${elements[title]}</h3>
            <p class="direccion">${elements[url]}</p>
            `;
            
            infoApi.append (div);
        };
    })
})
    