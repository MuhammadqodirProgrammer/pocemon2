
const cardel = document.querySelector("#card-box");
const selectEl = document.querySelector("#select");
const inputEl =document.querySelector("input")
const formEl =document.querySelector("form")
const selectEl2 =document.querySelector("#select2")

function domgachiqarator(array, node) {
  let cards = "";
  for (item of array) {
    cards += `  <div class="card col-lg-3 col-md-4 col-sm-12 col-10 mx-sm-auto hvr-grow mx-3 text-center  shadow-lg p-2  rounded  rounded-4  mt-2 mb-4 " >
     <img src="${item.img}" class="card-img-top" alt="images">
  <div class="card-body">
  <h4 class="card-title">${item.id}</h4>
   <h5 class="card-title">${item.name}</h5>
   <h5 class="card-title">${item.spawn_time}</h5>
   <p class="card-text"><span> height: ${item.height}</span><br><span> weight: ${item.weight}</span></p>
   <h6 class="card-title"><span>${item.type}</span></h6>
 </div>
 </div> `;
  }
  node.innerHTML = cards;
}
domgachiqarator(pokemons, cardel);

let newarr = [];

selectEl.addEventListener("change", () => {
  newarr = [];
  if (selectEl.value != "All") {
    pokemons.forEach((poc) => {
      if (poc.type.includes(selectEl.value)) {
        newarr.push(poc);
      }
    });
    cardel.innerHTML = "";
    domgachiqarator(newarr, cardel);
  } else {
    domgachiqarator(pokemons, cardel);
  }
});
console.log(selectEl2);
selectEl2.addEventListener("change", (evnt) => {
  evnt.preventDefault();
  if (selectEl2.value == "All") {
    domgachiqarator(pokemons, cardel);
  } else if (selectEl2.value == "A-Z") {
    const sortFilm = pokemons.sort((a, b) => {
      return a.name.charCodeAt(0) - b.name.charCodeAt(0)
    })
    domgachiqarator(sortFilm, cardel)
  } else if (selectEl2.value == "Z-A") {
    const sortFilm = pokemons.sort((a, b) => {
      return b.name.charCodeAt(0) - a.name.charCodeAt(0)
    })
    domgachiqarator(sortFilm, cardel)
  }else{
    domgachiqarator(pokemons, cardel);
  }
})

let optionarr =[];
pokemons.forEach((val)=>{
  // console.log(val.type);
  val.type.forEach((Poctypes)=>{
    // console.log(Poctypes);
    optionarr.push(Poctypes)
  })
})
// console.log(optionarr);
const filled = new Set(optionarr) 
// console.log(filled);

for(i of filled){
  const options =document.createElement("option");
  selectEl.appendChild(options);
  options.textContent = i;
  options.setAttribute("value",i)
}

let newarr2= []

formEl.addEventListener("input", (evt) =>{
  evt.preventDefault()
 cardel.innerHTML =""
  let elinputval =inputEl.value.toLocaleLowerCase();

pokemons.forEach((el) => {
  if(el.name.toLocaleLowerCase().includes(elinputval)){
    newarr2.push(el)
  }
});
domgachiqarator(newarr2,cardel)
newarr2 =[]
})

let ModeBtn = document.querySelector(".mode");
let theme = false;

ModeBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let NewBg = theme ? "dark" : "light";
  theme = !theme;
  window.localStorage.setItem("theme", NewBg);
  ChageMode();
});

let ChageMode = () => {
  if (window.localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
  } else document.body.classList.remove("dark");
};
ChageMode();
// console.log(newarr2)






