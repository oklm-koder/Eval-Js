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

       let articlePrincipal = journal.articlePrincipal
        console.log(articlePrincipal);
        let articles = journal.articles[0]
        console.log(articles);
        
       
       /// ON ECRIT LE CODE ICI ! 
      let themes = journal.themes;
      console.log(themes);
      
     
      // ÉTAPE 2 : Sélectionner un conteneur HTML existant pour y insérer les films

       let themesContainer = document.getElementById('themes-container');
       let post = document.getElementById('post');
       let ProjetContainer = document.getElementById("projetContainer")
       
       
       
      //  console.log(articleContainer);
       
      // // Utilisez document.createElement() pour créer un élément <div>
      //  let themesCard = document.createElement('div');
      //  console.log(themesCard);
        let projetPrincipal = document.createElement('div');
        projetPrincipal.className ="Projet-principal"

        let cardsArt = document.createElement("div")
        
        


        // // 3.2 Ajouter une classe CSS à cette carte
        // // Utilisez la propriété .className
        // themesCard.className =" themes-card"
        // console.log(themesCard);
      
        // // 3.3 Créer les éléments suivants avec createElement() :
        let nomjournal = document.createElement('h2')
        let phraseAccroche = document.createElement('h1')
        let imgProjetP = document.createElement("img")

// ----------------------------------------------------------------

        let titreArt1 =document.createElement("h1")
        let descriptionArt1 =document.createElement("p")
        let dateArt1 =document.createElement("h3")
        let themeArt1 =document.createElement("h3")

        let btnArt1 =document.createElement("a")
        btnArt1.className = "bouton"
//  ----------------------------------------------------
let titresArt = document.createElement("h1")  
let datesArt =document.createElement("p") 
let themesArt =document.createElement("p") 
let imgsArt =document.createElement("img")   

        
        
        // let nomTheme = document.createElement('h2')
        //  let descriptionTheme = document.createElement('p')


        // console.log(nomjournal);
        // // 3.4 Remplir ces éléments :
        nomjournal.textContent = journal.nomJournal
        phraseAccroche.textContent= journal.phraseAccroche
// -----------------------------------------------------------
        imgProjetP.src = articlePrincipal.image
        titreArt1.textContent = articlePrincipal.titre
        descriptionArt1.textContent =articlePrincipal.description
        dateArt1.textContent = articlePrincipal.date
        themeArt1.textContent = articlePrincipal.theme
        btnArt1.textContent = "lire article"
// ------------------------------------------------------------
      imgsArt.src = articles.image
      themesArt.textContent = articles.theme
      datesArt.textContent = articles.date
      titresArt.textContent = articles.titre


        // nomTheme.textContent = themes.nom
        // descriptionTheme.textContent = themes.description
       

      // // 3.5 Ajouter chaque élément dans la carte :
        // // Utilisez .appendChild() pour ajouter les éléments créés dans la div de la carte

        themesContainer.appendChild(nomjournal)
        themesContainer.appendChild(phraseAccroche)
        // -----------------------------------------------
        post.appendChild(imgProjetP)
        post.appendChild(titreArt1)
        post.appendChild(dateArt1)
        post.appendChild(themeArt1)
        post.appendChild(descriptionArt1)
        post.appendChild(btnArt1)
      
        // ----------------------------------------------
        cardsArt.appendChild(imgsArt)
        cardsArt.appendChild(titresArt)
        cardsArt.appendChild(themesArt)
        cardsArt.appendChild(datesArt)
        ProjetContainer.appendChild(cardsArt)
        
        
        
        // themesCard.appendChild(nomTheme)
        // themesCard.appendChild(descriptionTheme)

       // themesContainer.appendChild(themesCard)
      let divContainer =document.createElement("div")
      themesContainer.appendChild(divContainer)
      divContainer.className = "divContainer"

      // post.appendChild(projetPrincipal)

        themes.forEach(theme => {
          
           let themesCard = document.createElement('div');

           themesCard.className =" themes-card"
           themesContainer.className = "themesContainer"

           let nomTheme = document.createElement('h2')
         let descriptionTheme = document.createElement('p')

         nomTheme.textContent = theme.nom
         descriptionTheme.textContent = theme.description

        themesCard.appendChild(nomTheme)
        themesCard.appendChild(descriptionTheme)
        

        divContainer.appendChild(themesCard)
        });



        
        



      
      
      
      



      

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici