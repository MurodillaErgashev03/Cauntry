let elInput = document.querySelector("#input_id");
let Map = document.querySelector("#map-link-id");
let ul = document.querySelector(".list-group")




 


elInput.addEventListener("change" , () => {
  
    ul.textContent = "";

  fetch("https://restcountries.com/v3.1/name/" + elInput.value)
  .then((res) => res.json() )
  .then((data) => {
    console.log(data)
    Map.href = data[0].maps.googleMaps;

    let li =  document.createElement("li");
     ul.textContent = "";

    li.innerHTML = `
    <li class="list-group-item">
    <img class="img" src="${data[0].flags.png}">
      <p class="capital">
         <span>Capital : </span>${data[0].capital}
      </p>
      <p class="area">
         <span>Area : </span> ${data[0].area} 
      </p>
      <p class="popilation">
        <span>Popilation : </span> ${data[0].population}
      </p>
      <p>
       <span>Region : </span> ${data[0].region} 
      </p>
  </li>
    `
    ul.appendChild(li)
     
     elInput.value = '';
  });
    


   
  
})
