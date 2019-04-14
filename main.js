'use strict';

//recoger los elementos del html
const inputEl= document.querySelector('.input-name');
const buttonEl= document.querySelector('.button-info');
const listEl= document.querySelector('.name__list');

//hacer una constante con la web de la api
const apiUrl= 'https://api.github.com/users/';

//escuchar al boton para que la funcion se realice al hacer click
buttonEl.addEventListener('click', handlerBUttonClick);

//recoger la informacion del input
function handlerBUttonClick () {

    const inputValue= inputEl.value;
    const apiName =`${apiUrl}`+`${inputValue}`;
    console.log(apiName);

    fetch(apiName)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        const name = data.name;
        console.log(name); 
        for (const letter of name){
            listEl.innerHTML += `<li>${letter}</li>`;}
        
            // si quiero que solo me muestre el nombre => listEl.innerHTML = `<li>${name}</li>`; 
  
    // haciendolo con let i => 

    //let letter = '';
  //  for (let i=0; i<name.length; i++) {
      // letter +=`<li>${name[i]}</li>`;}
      // listEl.innerHTML= letter;   
    });
};
   
//recoger la informacion de la api


//ver como hay que buscar la informacion que queremos, por ejemplo si utilizan "name"

// recoger es informacion

//recoger con un bucle la informacion 

//meter cada letra del nombre en una lista*/
