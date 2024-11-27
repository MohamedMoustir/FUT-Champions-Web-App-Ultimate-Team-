

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



let playerName = document.getElementById("playerName");
let photosrc = document.getElementById("photosrc");
let position = document.getElementById("position");
let Position = document.getElementById("Position");
let nationality = document.getElementById("nationality");
let pace = document.getElementById("pace")
let shooting = document.getElementById("shooting")
let passing = document.getElementById("passing")
let dribbling = document.getElementById("dribbling")
let defending = document.getElementById("defending")
let physical = document.getElementById("physical")
let clup = document.getElementById("clup")

let tablue_players = JSON.parse(localStorage.getItem("players")) || []



function ajoutePlayers(positio) {
  Photo_du_Joueur.classList.toggle("hidden")
  document.getElementById("pop_up_ajoute").classList.toggle("hidden")

  let playerCard = document.getElementById(`${positio}`);

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
    const found = tablue_players.some(element => element.position === position.value);

    if (found) {
      alert(`Position ${position.value} is already occupied.`);
      
    }else if (players.name && players.photo && players.position) {
      tablue_players.push(players)
      localStorage.setItem("players", JSON.stringify(tablue_players));     
      // afficheJoueurs(playerCard.id);
      afficheJoueurs();
      check(position.value)
      clearFields()
      
    } else {
      
    }
  }
 
  

}

function clearFields() {
  playerName.value = "";
  photosrc.value = "";
  position.value = "";
  // Position.value = "";
  nationality.value = "";
  pace.value = "";
  shooting.value = "";
  passing.value = "";
  dribbling.value = "";
  defending.value = "";
  physical.value = "";
  clup.value = "";
}





let Photo_du_Joueur = document.getElementById("Photo_du_Joueur");

Photo_du_Joueur.addEventListener("wheel", (evnt) => {
  Photo_du_Joueur.scrollLeft += evnt.deltaX;

})

function getSrc(src, alt, flag, positio) {
  photosrc.value = src;
  playerName.value = alt;
  nationality.value = flag;
  position.value = positio

// if (positio==position.value) {
//   alert("ee")
// }
}

fetch("https://mohamedmoustir.github.io/api.p/")
  .then(result => result.json())

  .then(function (data) {
    let ALphoto = data.players;


    ALphoto.forEach(src => {


      document.getElementById("Photo_du_Joueur").innerHTML += `
      <img onclick="getSrc(this.src,this.alt,this.name,this.sizes)" src="${src.photo}" alt=" ${src.name}" class=" w-[50px] h-[50px] rounded-b-full" name="${src.flag
        }" sizes="${src.position}"  >
`
afficheJoueurs(src.position)
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


  function afficheJoueurs(positio) {
   
  
    
   
    tablue_players.forEach(player => {
       const container = document.getElementById(player.position);
      if (container ) {
container.innerHTML =""
        container.innerHTML = `
         
            <div class="relative flex px-3 text-[#e9cc74]">
              <div class="absolute leading-[1.5rem] font-light uppercase py-2 overflow-hidden">
                <div class="text-base player-rating"></div>
                <div class="text-xs player-position"><span>${player.position.slice(7)}</span></div>
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
                      <div class="mr-1 font-bold">${player.flag}</div>
                      <div class="font-light">PAC</div>
                    </span>
                    <span class="flex text-xs uppercase">
                      <div class="mr-1 font-bold">${player.dribbling
                        }</div>
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
              <h1 class="absolute w-[70px] h-[30px] bottom-[-60px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">${player.position.slice(7)}</h1>
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path onclick = "btnEdite()" d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
</svg>
            </div>
         `;
      }
      
     
    });
  
  } 
  
  
  afficheJoueurs();
