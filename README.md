**README**  

# **Gestion des Joueurs pour Équipe de Football**  
Ce projet est une application web permettant de gérer les joueurs d'une équipe de football, y compris l'ajout, la modification, l'affichage, et la suppression de joueurs.  

---

## **Fonctionnalités** 

1. **Ajout de Joueurs**  
   - Formulaire interactif pour ajouter les informations des joueurs comme :  
     - Nom du joueur.  
     - Photo.  
     - Nationalité (drapeau).  
     - Club (logo).  
     - Position.  
     - Attributs (vitesse, passe, dribble, etc.).  
   - Validation des données utilisateur avec **RegEx** pour éviter les erreurs.  

2. **Affichage des Joueurs**  
   - Les joueurs sont affichés dynamiquement sur l'écran, chaque joueur ayant :  
     - Photo et nom.  
     - Nationalité et club.  
     - Attributs techniques (vitesse, passe, physique, etc.).  

3. **Suppression/Modification**  
   - Option pour modifier ou supprimer un joueur via une interface intuitive.  


4. **Animations et Design Moderne**  
   - Design adapté aux écrans modernes avec **CSS Tailwind**.  
   - Effets d'animation pour une expérience utilisateur fluide.  

---

## **Technologies Utilisées**  
- **HTML**  
- **CSS** avec **Tailwind CSS**  
- **JavaScript**  
- **API Fetch** pour récupérer les données des joueurs externes.  
- **LocalStorage** pour stocker et gérer les données localement.  

---

## **Installation et Utilisation**  

1. **Cloner le Projet**  
  
   git clone https://github.com/MohamedMoustir/FUT-Champions-Web-App-Ultimate-Team-.git
 
   ```

2. **Ouvrir dans un Navigateur**  
   - Ouvrez simplement le fichier `index.html` dans un navigateur.  

3. **Ajouter des Joueurs**  
   - Cliquez sur le bouton d'ajout.  
   - Remplissez le formulaire et validez.  

4. **Gestion des Données**  
   - Les joueurs ajoutés sont stockés localement (dans le navigateur).  
   - Les modifications ou suppressions sont automatiquement mises à jour.  

---

## **API Utilisée**  
- L'application récupère des données via une API externe :  
  [API des Joueurs](https://mohamedmoustir.github.io/api.p/).  

---

## **Démonstration Vidéo**  
[Voir la Démo](#) *(lien à ajouter)*  

---

## **Problèmes Connus**  
- Les performances peuvent être réduites si de nombreux joueurs sont ajoutés.  
- Les validations RegEx doivent être régulièrement ajustées pour certains formats spécifiques.  

---

## **Contact**  
- **Développeur** : Mohamed Moustir  
- **Email** : itsmoustir@gmail.com 


--- 
<div class=" relative -left-[100px]">
        <div id="manager" class="absolute player-draggable playercard-field"><div class="manager-slot"><button class="cardbutton button-reset" aria-label="Card Button"><img src="/design2/img/static/evolutions/placeholder-card-normal.webp" class="managercard-bg placeholder-enable-hover-shadow"><div class="add-manager-icon-wrapper-modern"><span class="display-contents"><svg class="" viewBox="0 0 36 42" fill="none" width="36"><path d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z" stroke="currentColor" stroke-width="1.5"></path></svg></span><div class="absolute font-large">+</div></div><div class="manager-slot-label">Manager</div></button></div></div>
        <div id="ST" class="flex justify-center relative -left-[7%] -top-[100px] ">
          <div
            class="btnCB   relative top-[150px]  h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200"
            style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');"
            id="player-ST">

            <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
              class="text-green-700 relative left-[62%] top-[27%] -translate-x-1/2">
              <path
                d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z"
                stroke="currentColor" stroke-width="1.5" fill="none" />
            </svg>

            <!-- Optionally, you can add a label showing the position -->
            <h1
              class="absolute w-[70px] h-[30px] bottom-[-30px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">
              ST</h1>
          </div>
        </div>

        <div id="CM" class="flex justify-center  -left-[100px]  relative  -top-[350px] gap-[380px]">
          <div
            class="btnCB relative top-[150px]   h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200"
            style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');"
            id="player-LW">

            <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
              class="text-green-700 relative left-[62%] top-[27%] -translate-x-1/2">
              <path
                d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z"
                stroke="currentColor" stroke-width="1.5" fill="none" />
            </svg>

            <!-- Optionally, you can add a label showing the position -->
            <h1
              class="absolute w-[70px] h-[30px] bottom-[-30px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">
              LW</h1>
          </div>
          <div
            class="btnCB relative top-[150px]  h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200"
            style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');"
            id="player-RW">

            <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
              class="text-green-700 relative left-[62%] top-[27%] -translate-x-1/2">
              <path
                d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z"
                stroke="currentColor" stroke-width="1.5" fill="none" />
            </svg>

            <!-- Optionally, you can add a label showing the position -->
            <h1
              class="absolute w-[70px] h-[30px] bottom-[-30px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">
              RW</h1>
          </div>
        </div>

        <div id="RM_RL" class="flex justify-evenly -left-[100px]   relative -top-[280px] gap-[120px] ">
          <div id="LB" class="">
            <div
              class="btnCB relative top-[150px]  h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200"
              style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');"
              id="player-LM">

              <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
                class="text-green-700 relative left-[62%] top-[27%] -translate-x-1/2">
                <path
                  d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z"
                  stroke="currentColor" stroke-width="1.5" fill="none" />
              </svg>

              <!-- Optionally, you can add a label showing the position -->
              <h1
                class="absolute w-[70px] h-[30px] bottom-[-30px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">
                LM</h1>
            </div>
          </div>
          <div id="RL" class="">
            <div
              class="btnCB relative top-[150px]  h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200"
              style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');"
              id="player-RM">

              <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
                class="text-green-700 relative left-[62%] top-[27%] -translate-x-1/2">
                <path
                  d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z"
                  stroke="currentColor" stroke-width="1.5" fill="none" />
              </svg>

              <!-- Optionally, you can add a label showing the position -->
              <h1
                class="absolute w-[70px] h-[30px] bottom-[-30px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">
                RM</h1>
            </div>
          </div>

        </div>
        <div id="CDM" class="flex justify-center -left-[7%]  relative -top-[400px]">
          <div
            class="btnCB relative top-[150px]  h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200"
            style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');"
            id="player-CDM">

            <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
              class="text-green-700 relative left-[62%] top-[27%] -translate-x-1/2">
              <path
                d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z"
                stroke="currentColor" stroke-width="1.5" fill="none" />
            </svg>

            <!-- Optionally, you can add a label showing the position -->
            <h1
              class="absolute w-[70px] h-[30px] bottom-[-30px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">
              CDM</h1>
          </div>

        </div>


        <div id="LB_RB" class=" flex justify-evenly  -left-[100px]  relative -top-[480px]  gap-[500px]">

          <div id="LB" class="">
            <div
              class="btnCB  relative top-[150px] h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200"
              style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');"
              id="player-LB">

              <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
                class="text-green-700 relative left-[62%] top-[27%] -translate-x-1/2">
                <path
                  d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z"
                  stroke="currentColor" stroke-width="1.5" fill="none" />
              </svg>

              <!-- Optionally, you can add a label showing the position -->
              <h1
                class="absolute w-[70px] h-[30px] bottom-[-30px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">
                LB</h1>
            </div>
          </div>
          <div id="RB" class="">
            <div
              class="btnCB relative top-[150px]  h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200"
              style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');"
              id="player-RB">

              <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
                class="text-green-700 relative left-[62%] top-[27%] -translate-x-1/2">
                <path
                  d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z"
                  stroke="currentColor" stroke-width="1.5" fill="none" />
              </svg>

              <!-- Optionally, you can add a label showing the position -->
              <h1
                class="absolute w-[70px] h-[30px] bottom-[-30px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">
                RB</h1>
            </div>
          </div>

        </div>
        <div id="player-CBB" class="flex justify-center -left-[100px]  relative -top-[640px] gap-[80px] lg:gap-[200px]">
          <div
            class="btnCB relative top-[150px]  h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200"
            style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');"
            id="player-CBL">

            <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
              class="text-green-700 relative left-[62%] top-[27%] -translate-x-1/2">
              <path
                d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z"
                stroke="currentColor" stroke-width="1.5" fill="none" />
            </svg>

            <!-- Optionally, you can add a label showing the position -->
            <h1
              class="absolute  w-[70px] h-[30px] bottom-[-30px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">
              CBL</h1>
          </div>
          <div
            class="btnCB relative top-[150px]  h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200"
            style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');"
            id="player-CBR">

            <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
              class="text-green-700 relative left-[62%] top-[27%] -translate-x-1/2">
              <path
                d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z"
                stroke="currentColor" stroke-width="1.5" fill="none" />
            </svg>

            <!-- Optionally, you can add a label showing the position -->
            <h1
              class="absolute  w-[70px] h-[30px] bottom-[-30px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">
              CBR</h1>
          </div>
        </div>
        <div id="GK" class="flex justify-center -left-[7%]  relative -top-[800px] gap-[280px]">
          <div
            class="btnCB relative top-[200px]  h-[240px] bg-cover bg-center bg-none p-4 z-[2] transition ease-in duration-200"
            style="background-image: url('https://www.futbin.com/design2/img/static/evolutions/placeholder-card-normal.webp');"
            id="player-GK">

            <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"
              class="text-green-700 relative left-[62%] top-[27%] -translate-x-1/2">
              <path
                d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z"
                stroke="currentColor" stroke-width="1.5" fill="none" />
            </svg>

            <!-- Optionally, you can add a label showing the position -->
          </div>
          <h1
            class="absolute w-[70px] h-[30px] bottom-[-30px] bg-[#1e1d1d] left-1/2 transform -translate-x-1/2 text-center text-white rounded-full">
            GK</h1>
        </div>

      </div>
