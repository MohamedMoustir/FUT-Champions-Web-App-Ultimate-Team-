
let arry = ["btnCM", "btnST", "btnRM", "btnRL", "btnCDM", "btnRB", "btnLB", "btnCB", "btnGK"];
let positionsArray = ["ST", "CM", "CM", "RM", "RL", "CDM", "RB", "LB", "CB", "CB", "GK"];

let id = 1;







// document.getElementById("CM").classList.add("-top-[80px]")
// document.getElementById("CM").classList.add("gap-[100px]")
// document.getElementById("GK").classList.add("-top-[800px]")
// document.getElementById("CDM").classList.add("-top-[400px]")









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
let photoscr = document.getElementById("playerImage");
let position = document.getElementById("playerPosition");
let nationality = document.getElementById("nationality");



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
  
  const playerCard = document.getElementById(`player-${playerId}`);
  document.getElementById("btnajout").onclick =function(){
 
  playerCard.innerHTML = `
  
    <div class="relative flex px-3 text-[#e9cc74] " >
   <div class="absolute leading-[1.5rem] font-light uppercase py-2 overflow-hidden">
     <div class="text-base player-rating"><span>97</span></div>
     <div class="text-xs player-position"><span>RW</span></div>
     <div class="block w-[1.2rem] h-[12px] my-1 player-nation">
       <img src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg" alt="Argentina" class="w-full h-full object-contain" draggable="false"/>
     </div>
     <div class="block w-[1.5rem] h-[25px] player-club">
       <img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" class="w-full h-full object-contain" draggable="false"/>
     </div>
   </div>
   <div class="relative w-[90px] h-[90px] mx-auto overflow-hidden player-picture ">
     <img src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png" alt="Messi" class="w-full h-full object-contain relative -right-2 bottom-0" draggable="false"/>
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
           <div class="mr-1 font-bold">97</div>
           <div class="font-light">PAC</div>
         </span>
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">95</div>
           <div class="font-light">SHO</div>
         </span>
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">94</div>
           <div class="font-light">PAS</div>
         </span>
       </div>
       <div class="items-center px-2">
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">99</div>
           <div class="font-light">DRI</div>
         </span>
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">35</div>
           <div class="font-light">DEF</div>
         </span>
         <span class="flex text-xs uppercase">
           <div class="mr-1 font-bold">68</div>
           <div class="font-light">PHY</div>
         </span>
       </div>
     </div>
   </div>
   <h1 class="absolute w-[70px] h-[30px] bottom-[-60px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">GK</h1>
   </div>
   
   `
  }
  console.log(playerName);
  ajoute_player()
}


Attaquant_centra();

//   function ajoutePlayers(playerId) {
//     return playerId
    
// //     const playerCard = document.getElementById(`player-${playerId}`);
// //     playerCard.innerHTML += `
// //     <div class="relative flex px-3 text-[#e9cc74]  " >
// //    <div class="absolute leading-[1.5rem] font-light uppercase py-2 overflow-hidden">
// //      <div class="text-base player-rating"><span>97</span></div>
// //      <div class="text-xs player-position"><span>RW</span></div>
// //      <div class="block w-[1.2rem] h-[12px] my-1 player-nation">
// //        <img src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg" alt="Argentina" class="w-full h-full object-contain" draggable="false"/>
// //      </div>
// //      <div class="block w-[1.5rem] h-[25px] player-club">
// //        <img src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg" alt="Barcelona" class="w-full h-full object-contain" draggable="false"/>
// //      </div>
// //    </div>
// //    <div class="relative w-[90px] h-[90px] mx-auto overflow-hidden player-picture ">
// //      <img src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png" alt="Messi" class="w-full h-full object-contain relative -right-2 bottom-0" draggable="false"/>
// //      <div class="absolute right-0 bottom-[-0.2rem] font-bold uppercase w-full h-5 px-3 text-right bg-none">
// //        <span class="ml-1 text-shadow-md">4*SM</span>
// //        <span class="ml-1 text-shadow-md">4*WF</span>
// //      </div>
// //    </div>
// //  </div>
// //  <!-- Bas de la carte -->
// //  <div class="relative ">
// //    <div class="block px-1 text-[#e9cc74] w-[80%] mx-auto">
// //      <!-- Nom du joueur -->
// //      <div class="block text-center text-base uppercase border-b border-opacity-10 border-[#e9cc74] pb-1 overflow-hidden">
// //        <span class="block text-shadow-md"></span>
// //      </div>
// //      <!-- Caractéristiques du joueur -->
// //      <div class="flex justify-center my-1 player-features">
// //        <div class="items-center border-r border-opacity-10 border-[#e9cc74] px-2">
// //          <span class="flex text-xs uppercase">
// //            <div class="mr-1 font-bold">97</div>
// //            <div class="font-light">PAC</div>
// //          </span>
// //          <span class="flex text-xs uppercase">
// //            <div class="mr-1 font-bold">95</div>
// //            <div class="font-light">SHO</div>
// //          </span>
// //          <span class="flex text-xs uppercase">
// //            <div class="mr-1 font-bold">94</div>
// //            <div class="font-light">PAS</div>
// //          </span>
// //        </div>
// //        <div class="items-center px-2">
// //          <span class="flex text-xs uppercase">
// //            <div class="mr-1 font-bold">99</div>
// //            <div class="font-light">DRI</div>
// //          </span>
// //          <span class="flex text-xs uppercase">
// //            <div class="mr-1 font-bold">35</div>
// //            <div class="font-light">DEF</div>
// //          </span>
// //          <span class="flex text-xs uppercase">
// //            <div class="mr-1 font-bold">68</div>
// //            <div class="font-light">PHY</div>
// //          </span>
// //        </div>
// //      </div>
// //    </div>
// //    <h1 class="absolute w-[70px] h-[30px] bottom-[-60px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">GK</h1>
// //    </div>
   
//   //  `

//   }


// document.getElementById("btnajout").addEventListener("click", () => {
//   ajoutePlayers(playerId)
  
//  console.log;(playerName.value) 
//  photoscr 
//  position 
//  nationality 
// });

