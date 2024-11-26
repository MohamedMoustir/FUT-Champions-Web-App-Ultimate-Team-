
let arry = ["btnCM", "btnST", "btnRM", "btnRL", "btnCDM", "btnRB", "btnLB", "btnCB", "btnGK"];
let positionsArray = ["ST", "CM", "CM", "RM", "RL", "CDM", "RB", "LB", "CB", "CB", "GK"];

let id = 1;

document.getElementById("CM").classList.add("-top-[80px]")
document.getElementById("CM").classList.add("gap-[100px]")
document.getElementById("GK").classList.add("-top-[800px]")
document.getElementById("CDM").classList.add("-top-[400px]")



function Attaquant_centra() {
  let index = 1;

  positionsArray.forEach((position) => {
    const container = document.getElementById(position);
    container.innerHTML += `
      <div onclick="ajoutePlayers(${index})" 
        class="btnCB relative top-[150px] w-[150px] h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200 hover:shadow-[0px_4px_10px_rgba(0,255,0,0.5)]" 
        style="background-image: url('./assets/img/card_bg-preview.png');" id="player-${index}">
        
        <h1 class="absolute w-[70px] h-[30px] bottom-[-30px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">GK</h1>
      </div>`;
    index++;
  });
}

let playerName = document.getElementById("playerName");
let photosrc = document.getElementById("photosrc");
let position = document.getElementById("position");
let Position = document.getElementById("Position");

let nationality = document.getElementById("nationality");
// let clup =document.getElementById("clup")
let pace = document.getElementById("pace")
let shooting = document.getElementById("shooting")
let passing = document.getElementById("passing")
let dribbling = document.getElementById("dribbling")
let defending = document.getElementById("defending")
let physical = document.getElementById("physical")
let clup = document.getElementById("clup")


console.log(position.value)
// let tablue_players = JSON.parse(localStorage.getItem("players")) || []
// function ajoute_player() {
//   let players = {
//     id: id++,
//     nam:playerName.value,
//     photo: photoscr.value,
//     position: position.value,
//     nationality: nationality.value,
//   }
//   tablue_players.push(players)
//   localStorage.setItem("players", JSON.stringify(tablue_players))

// }


function ajoutePlayers(playerId) {
  Photo_du_Joueur.classList.toggle("hidden")
  document.getElementById("pop_up_ajoute").classList.toggle("hidden")

  const playerCard = document.getElementById(`player-${playerId}`);
  document.getElementById("btnajout").onclick = function () {
    document.getElementById("pop_up_ajoute").classList.toggle("hidden")
    Photo_du_Joueur.classList.toggle("hidden")
    playerCard.innerHTML = `
  
    <div class="relative flex px-3 text-[#e9cc74] " >
   <div class="absolute leading-[1.5rem] font-light uppercase py-2 overflow-hidden">
     <div class="text-base player-rating"><span></span></div>
     <div class="text-xs player-position"><span>${position.value || Position.textContent}</span></div>
     <div class="block w-[1.2rem] h-[12px] my-1 player-nation">
       <img src="${nationality.value}" alt="Argentina" class="w-full h-full object-contain" draggable="false"/>
     </div>
     <div class="block w-[1.5rem] h-[25px] player-club">
       <img src="${clup.value}" alt="Barcelona" class="w-full h-full object-contain" draggable="false"/>
     </div>
   </div>
   <div class="relative w-[90px] h-[90px] mx-auto overflow-hidden player-picture ">
     <img src="${photosrc.value}" alt="Messi" class="w-full h-full object-contain relative -right-2 bottom-0" draggable="false"/>
     <div class="absolute right-0 bottom-[-0.2rem] font-bold uppercase w-full h-5 px-3 text-right bg-none">
       <span class="ml-1 text-shadow-md">4*SM</span>
       <span class="ml-1 text-shadow-md">4*WF</span>
     </div>
   </div>
 </div>
 <!-- Bas de la carte -->
 <div class="relative ">
   <div class="block px-1 text-[#e9cc74] w-[80%] mx-auto">
     <!-- Nom du joueur -->
     <div class="block text-center text-base uppercase border-b border-opacity-10 border-[#e9cc74] pb-1 overflow-hidden">
       <span class="block text-shadow-md">${playerName.value}</span>
     </div>
     <!-- Caractéristiques du joueur -->
     <div class="flex justify-center my-1 player-features">
       <div class="items-center border-r border-opacity-10 border-[#e9cc74] px-2">
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">${pace.value}</div>
           <div class="font-light">PAC</div>
         </span>
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">${shooting.value}</div>
           <div class="font-light">SHO</div>
         </span>
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">${passing.value}</div>
           <div class="font-light">PAS</div>
         </span>
       </div>
       <div class="items-center px-2">
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">${dribbling.value}</div>
           <div class="font-light">DRI</div>
         </span>
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">${defending.value}</div>
           <div class="font-light">DEF</div>
         </span>
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">${physical.value}</div>
           <div class="font-light">PHY</div>
         </span>
       </div>
     </div>
   </div>
   <h1 class=" absolute w-[70px] h-[30px] bottom-[-60px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">${position.value || Position.textContent}</h1>
   </div>
   
   `
  }


}


Attaquant_centra();


let Photo_du_Joueur = document.getElementById("Photo_du_Joueur");

Photo_du_Joueur.addEventListener("wheel", (evnt) => {
  Photo_du_Joueur.scrollLeft += evnt.deltaX;

})
// photosrc.onclick = function () {
//   
// }
function getSrc(src, alt, position, flag, logo) {
  photosrc.value = src;
  playerName.value = alt;
  Position.textContent = position;
  console.log(flag);
  nationality.value = flag;
  clup.value = logo


}


// console.log(ALphoto);

// function  value_positi(position){

//   return position
// }

fetch("https://mohamedmoustir.github.io/api.p/")
  .then(result => result.json())

  .then(function (data) {
    let ALphoto = data.players;
    console.log(ALphoto);

    ALphoto.forEach(src => {

      console.log(src.flag);
      document.getElementById("Photo_du_Joueur").innerHTML += `
      <img onclick="getSrc(this.src,this.alt,this.name,this.sizes,this.srcset)" src="${src.photo}" alt=" ${src.name}" class=" w-[50px] h-[50px] rounded-b-full" name="${src.
          position
        }" sizes ="${src.flag}"  srcset="${src.logo}">
`
    })


  })
  .catch(console.log("dd"))

