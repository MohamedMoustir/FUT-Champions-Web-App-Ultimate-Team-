
let arry = ["btnCM", "btnST", "btnRM", "btnRL", "btnCDM", "btnRB", "btnLB", "btnCB", "btnGK"];
let positionsArray = ["ST", "CM", "CM", "RM", "RL", "CDM", "RB", "LB", "CB", "CB", "GK"];

let id = 1;

function chenge_formation(soccer) {
  console.log(soccer);

  if (soccer == "4141") {
    document.getElementById("CM").classList.remove("-top-[80px]")
    document.getElementById("CM").classList.remove("gap-[100px]")
    document.getElementById("GK").classList.remove("-top-[800px]")
    document.getElementById("CDM").classList.remove("-top-[400px]")

  } else {
    document.getElementById("CM").classList.add("-top-[80px]")
    document.getElementById("CM").classList.add("gap-[100px]")
    document.getElementById("GK").classList.add("-top-[800px]")
    document.getElementById("CDM").classList.add("-top-[400px]")
  }
}



function Attaquant_centra() {
 

  positionsArray.forEach(positio => {
    const container = document.getElementById(positio);
    container.innerHTML += `
      <div onclick="ajoutePlayers(${positio})" 
        class="btnCB relative top-[150px] w-[150px] h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200 " 
        style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');" id="${positio}">
       <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" class=" text-green-700 relative left-[62%] top-[27%] -translate-x-1/2">

  <path d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
  

        <h1 class="absolute w-[70px] h-[30px] bottom-[-30px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">GK</h1>
      </div>`;
  
   console.log(container);
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
let tablue_players = JSON.parse(localStorage.getItem("players")) || []





function ajoutePlayers(position) {
  Photo_du_Joueur.classList.toggle("hidden")
  document.getElementById("pop_up_ajoute").classList.toggle("hidden")
console.log(position);

  const playerCard = document.getElementById(`player-${position}`);

  document.getElementById("btnajout").onclick = function () {
    document.getElementById("pop_up_ajoute").classList.toggle("hidden")
  Photo_du_Joueur.classList.toggle("hidden")

    let players = {
      name: playerName.value,
      photo: photosrc.value,
      position: position.value,
      nationality: nationality.value,
      flag: shooting.value,
      club: clup.value,
      passing: passing.value,
      dribbling: dribbling.value,
      defending: defending.value,
      physical: physical.value
    }
    tablue_players.push(players)


  }
}

// function afficheJoueurs() {
//   // Videz les conteneurs des joueurs existants
//   let allPlayerContainers = document.querySelectorAll(".player-container");
//   allPlayerContainers.forEach(container => container.innerHTML = "");

//   // Affichez à nouveau les joueurs à partir du tableau
//   tablue_players.forEach(player => {
//     const container = document.getElementById();
//     console.log(player.position);
    
//     if (container) {
//       container.innerHTML += `
//         <div class="btnCB relative top-[150px] w-[150px] h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200" 
//           style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');">
//           <div class="relative flex px-3 text-[#e9cc74]">
//             <div class="absolute leading-[1.5rem] font-light uppercase py-2 overflow-hidden">
//               <div class="text-base player-rating"></div>
//               <div class="text-xs player-position"><span>${player.position}</span></div>
//               <div class="block w-[1.2rem] h-[12px] my-1 player-nation">
//                 <img src="${player.nationality}" alt="Nationalité" class="w-full h-full object-contain"/>
//               </div>
//               <div class="block w-[1.5rem] h-[25px] player-club">
//                 <img src="${player.club}" alt="Club" class="w-full h-full object-contain"/>
//               </div>
//             </div>
//             <div class="relative w-[90px] h-[90px] mx-auto overflow-hidden player-picture">
//               <img src="${player.photo}" alt="${player.name}" class="w-full h-full object-contain"/>
//             </div>
//           </div>
//           <div class="relative">
//             <div class="block px-1 text-[#e9cc74] w-[80%] mx-auto">
//               <div class="block text-center text-base uppercase pb-1">${player.name}</div>
//               <div class="flex justify-center my-1 player-features">
//                 <div class="items-center border-r border-opacity-10 border-[#e9cc74] px-2">
//                   <span class="flex text-xs uppercase">
//                     <div class="mr-1 font-bold">${player.pace}</div>
//                     <div class="font-light">PAC</div>
//                   </span>
//                   <span class="flex text-xs uppercase">
//                     <div class="mr-1 font-bold">${player.shooting}</div>
//                     <div class="font-light">SHO</div>
//                   </span>
//                   <span class="flex text-xs uppercase">
//                     <div class="mr-1 font-bold">${player.passing}</div>
//                     <div class="font-light">PAS</div>
//                   </span>
//                 </div>
//                 <div class="items-center px-2">
//                   <span class="flex text-xs uppercase">
//                     <div class="mr-1 font-bold">${player.dribbling}</div>
//                     <div class="font-light">DRI</div>
//                   </span>
//                   <span class="flex text-xs uppercase">
//                     <div class="mr-1 font-bold">${player.defending}</div>
//                     <div class="font-light">DEF</div>
//                   </span>
//                   <span class="flex text-xs uppercase">
//                     <div class="mr-1 font-bold">${player.physical}</div>
//                     <div class="font-light">PHY</div>
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <h1 class="absolute w-[70px] h-[30px] bottom-[-60px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">${player.position}</h1>
//           </div>
//         </div>`
//       ;
//     }
//   });
// }
window.onload = function () {
  
  if (localStorage.getItem("players") != null) {
    tablue_players = JSON.parse(localStorage.getItem("players"));
  }

  Attaquant_centra();
}



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


    ALphoto.forEach(src => {


      document.getElementById("Photo_du_Joueur").innerHTML += `
      <img onclick="getSrc(this.src,this.alt,this.name,this.sizes,this.set)" src="${src.photo}" alt=" ${src.name}" class=" w-[50px] h-[50px] rounded-b-full" name="${src.
          position
        }" sizes ="${src.flag}"  >
`
    })


  })
  .catch(console.log("dd"))



let carousel_cards = document.getElementById('carousel-cards');

function slideLeft() {
  carousel_cards.style.scrollBehavior = "smooth"
  carousel_cards.scrollLeft -= 500

}


function slideRighe() {
  carousel_cards.style.scrollBehavior = "smooth"
  carousel_cards.scrollLeft += 500
}

fetch("https://mohamedmoustir.github.io/api.p/")
  .then(result => result.json())

  .then(function (data) {
    let ALphoto = data.players;
    console.log(ALphoto);

    ALphoto.forEach(src => {


      carousel_cards.innerHTML += `
      <div onclick="" 
        class="btnCB relative top-[150px] w-[150px] h-[240px] bg-cover bg-center bg-none p-4 z-[2] h-[100%] transition ease-in duration-200 " 
        style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');" id="">
    <div class="relative flex px-3 text-[#e9cc74] " >
   <div class="absolute leading-[1.5rem] font-light uppercase py-2 overflow-hidden">
     <div class="text-base player-rating"><span></span></div>
     <div class="text-xs player-position"><span>${src.position}</span></div>
     <div class="block w-[1.2rem] h-[12px] my-1 player-nation">
       <img src="${src.flag
        }" alt="Argentina" class="w-full h-full object-contain" draggable="false"/>
     </div>
     <div class="block w-[1.5rem] h-[25px] player-club">
       <img src="${src.logo
        }" alt="Barcelona" class="w-full h-full object-contain" draggable="false"/>
     </div>
   </div>
   <div class="relative w-[90px] h-[90px] mx-auto overflow-hidden player-picture ">
     <img src="${src.photo}" alt="Messi" class="w-full h-full object-contain relative -right-2 bottom-0" draggable="false"/>
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
       <span class="block text-shadow-md">${src.name || 20}</span>
     </div>
     <!-- Caractéristiques du joueur -->
     <div class="flex justify-center my-1 player-features">
       <div class="items-center border-r border-opacity-10 border-[#e9cc74] px-2">
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">${src.pace || 95}</div>
           <div class="font-light">PAC</div>
         </span>
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">${src.shooting || 90}</div>
           <div class="font-light">SHO</div>
         </span>
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">${src.passing || 97}</div>
           <div class="font-light">PAS</div>
         </span>
       </div>
       <div class="items-center px-2">
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">${src.dribbling || 85}</div>
           <div class="font-light">DRI</div>
         </span>
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">${src.defending || 45}</div>
           <div class="font-light">DEF</div>
         </span>
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">${src.physical || 90}</div>
           <div class="font-light">PHY</div>
         </span>
       </div>
     </div>
   </div>
   </div>
    </div>
`
    })



  })

  function afficheJoueurs() {
    // Videz les conteneurs des joueurs existants
    let allPlayerContainers = document.querySelectorAll(".player-container");
    allPlayerContainers.forEach(container => container.innerHTML = "");
  console.log("test");
  
    // Affichez à nouveau les joueurs à partir du tableau
    tablue_players.forEach(player => {
      const container = document.getElementById(player.position);
      if (container) {
        container.innerHTML += `
          <div class="btnCB relative top-[150px] w-[150px] h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200" 
            style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');">
            <div class="relative flex px-3 text-[#e9cc74]">
              <div class="absolute leading-[1.5rem] font-light uppercase py-2 overflow-hidden">
                <div class="text-base player-rating"></div>
                <div class="text-xs player-position"><span>${player.position}</span></div>
                <div class="block w-[1.2rem] h-[12px] my-1 player-nation">
                  <img src="${player.nationality}" alt="Nationalité" class="w-full h-full object-contain"/>
                </div>
                <div class="block w-[1.5rem] h-[25px] player-club">
                  <img src="${player.club}" alt="Club" class="w-full h-full object-contain"/>
                </div>
              </div>
              <div class="relative w-[90px] h-[90px] mx-auto overflow-hidden player-picture">
                <img src="${player.photo}" alt="${player.name}" class="w-full h-full object-contain"/>
              </div>
            </div>
            <div class="relative">
              <div class="block px-1 text-[#e9cc74] w-[80%] mx-auto">
                <div class="block text-center text-base uppercase pb-1">${player.name}</div>
                <div class="flex justify-center my-1 player-features">
                  <div class="items-center border-r border-opacity-10 border-[#e9cc74] px-2">
                    <span class="flex text-xs uppercase">
                      <div class="mr-1 font-bold">${player.pace}</div>
                      <div class="font-light">PAC</div>
                    </span>
                    <span class="flex text-xs uppercase">
                      <div class="mr-1 font-bold">${player.shooting}</div>
                      <div class="font-light">SHO</div>
                    </span>
                    <span class="flex text-xs uppercase">
                      <div class="mr-1 font-bold">${player.passing}</div>
                      <div class="font-light">PAS</div>
                    </span>
                  </div>
                  <div class="items-center px-2">
                    <span class="flex text-xs uppercase">
                      <div class="mr-1 font-bold">${player.dribbling}</div>
                      <div class="font-light">DRI</div>
                    </span>
                    <span class="flex text-xs uppercase">
                      <div class="mr-1 font-bold">${player.defending}</div>
                      <div class="font-light">DEF</div>
                    </span>
                    <span class="flex text-xs uppercase">
                      <div class="mr-1 font-bold">${player.physical}</div>
                      <div class="font-light">PHY</div>
                    </span>
                  </div>
                </div>
              </div>
              <h1 class="absolute w-[70px] h-[30px] bottom-[-60px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">${player.position}</h1>
            </div>
          </div>
        `;
      }
    });
  }
  afficheJoueurs();