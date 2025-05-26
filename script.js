function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
        let journal = data.journal
       console.log(journal);
       
       /// ON ECRIT LE CODE ICI ! 
      let themes = journal.themes;
      console.log(themes);
      
     
      // ÉTAPE 2 : Sélectionner un conteneur HTML existant pour y insérer les films

       let themesContainer = document.getElementById('themes-container');
      //  console.log(articleContainer);
       
      // // Utilisez document.createElement() pour créer un élément <div>
      //  let themesCard = document.createElement('div');
      //  console.log(themesCard);
        
        // // 3.2 Ajouter une classe CSS à cette carte
        // // Utilisez la propriété .className
        // themesCard.className =" themes-card"
        // console.log(themesCard);
      
        // // 3.3 Créer les éléments suivants avec createElement() :
        let nomjournal = document.createElement('h2')
        let phraseAccroche = document.createElement('h1')
        
        // let nomTheme = document.createElement('h2')
        //  let descriptionTheme = document.createElement('p')

        // console.log(nomjournal);
        // // 3.4 Remplir ces éléments :
        nomjournal.textContent = journal.nomJournal
        phraseAccroche.textContent= journal.phraseAccroche
        // nomTheme.textContent = themes.nom
        // descriptionTheme.textContent = themes.description
       

      // // 3.5 Ajouter chaque élément dans la carte :
        // // Utilisez .appendChild() pour ajouter les éléments créés dans la div de la carte

        themesContainer.appendChild(nomjournal)
        themesContainer.appendChild(phraseAccroche)
        // themesCard.appendChild(nomTheme)
        // themesCard.appendChild(descriptionTheme)

       // themesContainer.appendChild(themesCard)

        themes.forEach(theme => {
          // 
           let themesCard = document.createElement('div');
          
           divContainer.className = "divContainer"
           themesCard.className =" themes-card"
           

           let nomTheme = document.createElement('h2')
          let descriptionTheme = document.createElement('p')

         nomTheme.textContent = theme.nom
         descriptionTheme.textContent = theme.description
         
         divContainer.appendChild(themesCard)

        themesCard.appendChild(nomTheme)
        themesCard.appendChild(descriptionTheme)
        

        themesContainer.appendChild(themesCard)


         

        });
        



      
      
      
      



      

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici