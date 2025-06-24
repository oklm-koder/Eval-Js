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
        let articles = journal.articles
        console.log(articles);

        let auteur = journal.auteurs
        console.log(auteur);
        
        
       
       /// ON ECRIT LE CODE ICI ! 
      let themes = journal.themes;
      console.log(themes);
      
     
      // ÉTAPE 2 : Sélectionner un conteneur HTML existant pour y insérer les films

       let themesContainer = document.getElementById('themes-container');
       let post = document.getElementById('post');
       let ProjetContainer = document.getElementById("projetContainer")
       let auteurContainer = document.getElementById("auteur-container")
      // -----------------------------------
      //  Les Theme Dans La Nav
      
      let theme1 = document.getElementById("theme1")
      let theme2 = document.getElementById("theme2")
      let theme3 = document.getElementById("theme3")
      let theme4 = document.getElementById("theme4")
      let theme5 = document.getElementById("theme5")
      let theme6 = document.getElementById("theme6")

      let contTheme1= themes[0].nom
      let contTheme2= themes[1].nom
      let contTheme3= themes[2].nom
      let contTheme4= themes[3].nom
      let contTheme5= themes[4].nom
      let contTheme6= themes[5].nom

      
      theme1.textContent =contTheme1
      theme2.textContent =contTheme2
      theme3.textContent =contTheme3
      theme4.textContent =contTheme4
      theme5.textContent =contTheme5
      theme6.textContent =contTheme6
      


      
      

       
       
      //  console.log(articleContainer);
       
      // // Utilisez document.createElement() pour créer un élément <div>
      //  let themesCard = document.createElement('div');
      //  console.log(themesCard);
        let projetPrincipal = document.createElement('div');
        projetPrincipal.className ="Projet-principal"

        
        let textProjetPrincipale = document.createElement("div")
        textProjetPrincipale.className ="info-art-prnicipal"

        let themeEtDate =document.createElement("div")
        themeEtDate.className ="theme-date"
        let ensenbleAuteur = document.createElement("div")
        ensenbleAuteur.className="ensenble-des-auteur"

        // let infoAuteur = document.createElement("article")
        // infoAuteur.className ="info-auteur"
        // let texteAuteur = document.createElement("div")
        // texteAuteur.className ="texte-auteur"
       
        

        // let cardsArt = document.createElement("div")
        // cardsArt.className ="carte-des-article"

        // let infoArticles =document.createElement("div")
        // infoArticles.className = "info-des-articles"

        // let themeEtDateArticles = document.createElement("div")
        // themeEtDateArticles.className = "theme-date"
        
        // // 3.2 Ajouter une classe CSS à cette carte
        // // Utilisez la propriété .className
        // themesCard.className =" themes-card"
        // console.log(themesCard);
      
        // // 3.3 Créer les éléments suivants avec createElement() :
        let nomjournal = document.createElement('h2')
        nomjournal.className ="transi"
        let phraseAccroche = document.createElement('h1')
        phraseAccroche.className ="transi"
        let imgProjetP = document.createElement("img")
        imgProjetP.className = "img1"

// ----------------------------------------------------------------

        let titreArt1 = document.createElement("h1")
        let descriptionArt1 =document.createElement("p")
        let dateArt1 = document.createElement("h3")
        let themeArt1 =document.createElement("h3")

        let btnArt1 = document.createElement("a")
        btnArt1.className = "bouton"
//  ----------------------------------------------------
// let titresArt = document.createElement("h1")  
// let datesArt =document.createElement("p") 
// let themesArt =document.createElement("p") 
// let imgsArt =document.createElement("img")   
// imgsArt.className ="img-articles"
//  let btnArt =document.createElement("a")
//     btnArt.className = "bouton"


        
// ------------------------------------

// let imageAuteur = document.createElement("img")
// imageAuteur.className ="image-auteur"
// let prenomAuteur = document.createElement("p")
// let ExperienceAuteur = document.createElement("p")
// let presentationAuteur = document.createElement("p")

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
      // imgsArt.src = articles.image
      // themesArt.textContent = articles.theme
      // datesArt.textContent = articles.date
      // titresArt.textContent = articles.titre
      //  btnArt.textContent = "lire article"


        // nomTheme.textContent = themes.nom
        // descriptionTheme.textContent = themes.description
//  --------------------------------------------------------
// Auteur
// imageAuteur.src = auteur.image
// prenomAuteur.textContent =auteur.prenom
// ExperienceAuteur.textContent =auteur.typeExperience
// presentationAuteur.textContent =auteur.presentation


      // // 3.5 Ajouter chaque élément dans la carte :
        // // Utilisez .appendChild() pour ajouter les éléments créés dans la div de la carte

        themesContainer.appendChild(nomjournal)
        themesContainer.appendChild(phraseAccroche)
        // -----------------------------------------------
        // Post Principal
        

        themeEtDate.appendChild(themeArt1)
        themeEtDate.appendChild(dateArt1)
        post.appendChild(imgProjetP)
        textProjetPrincipale.appendChild(titreArt1)
        textProjetPrincipale.appendChild(themeEtDate)
 
        textProjetPrincipale.appendChild(descriptionArt1)
        textProjetPrincipale.appendChild(btnArt1)
        

        post.appendChild(textProjetPrincipale)
        



        
        
      
// ----------------------------------------------
        // Autre Article
        // cardsArt.appendChild(imgsArt)
        // infoArticles.appendChild(titresArt)
        // infoArticles.appendChild(themeEtDateArticles)
        // themeEtDateArticles.appendChild(themesArt)
        // themeEtDateArticles.appendChild(datesArt)
        // infoArticles.appendChild(btnArt)
        // cardsArt.appendChild(infoArticles)
// -------------------------------------------
        // Auteur
        // infoAuteur.appendChild(imageAuteur)
        // infoAuteur.appendChild(texteAuteur)
        // texteAuteur.appendChild(prenomAuteur)
        // texteAuteur.appendChild(ExperienceAuteur)
        // texteAuteur.appendChild(presentationAuteur)
        
        // auteurContainer.appendChild(infoAuteur)
        




        // ProjetContainer.appendChild(cardsArt)
    
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


        articles.forEach(articles => {

          let cardsArt = document.createElement("div")
        cardsArt.className ="carte-des-article"

        let infoArticles =document.createElement("div")
        infoArticles.className = "info-des-articles"

        let themeEtDateArticles = document.createElement("div")
        themeEtDateArticles.className = "theme-date"

        let titresArt = document.createElement("h2")  
       let datesArt =document.createElement("p") 
       let themesArt =document.createElement("p") 
       let imgsArt =document.createElement("img")   
       imgsArt.className ="img-articles"
       let btnArt =document.createElement("a")
       btnArt.className = "bouton"

       imgsArt.src = articles.image
      themesArt.textContent = articles.theme
      datesArt.textContent = articles.date
      titresArt.textContent = articles.titre
       btnArt.textContent = "lire article"


       cardsArt.appendChild(imgsArt)
        infoArticles.appendChild(titresArt)
        infoArticles.appendChild(themeEtDateArticles)
        themeEtDateArticles.appendChild(themesArt)
        themeEtDateArticles.appendChild(datesArt)
        infoArticles.appendChild(btnArt)
        cardsArt.appendChild(infoArticles)
      
        

        
        ProjetContainer.appendChild(cardsArt)
        

          
        });


      auteurContainer.appendChild(ensenbleAuteur)
       auteur.forEach(auteur => {
          let infoAuteur = document.createElement("article")
         infoAuteur.className ="info-auteur"
         let texteAuteur = document.createElement("div")
        texteAuteur.className ="texte-auteur"


        let imageAuteur = document.createElement("img")
imageAuteur.className ="image-auteur"
let prenomAuteur = document.createElement("p")
let ExperienceAuteur = document.createElement("p")
let presentationAuteur = document.createElement("p")

imageAuteur.src = auteur.image
prenomAuteur.textContent =auteur.prenom
ExperienceAuteur.textContent =auteur.typeExperience
presentationAuteur.textContent =auteur.presentation

        infoAuteur.appendChild(imageAuteur)
        infoAuteur.appendChild(texteAuteur)
        texteAuteur.appendChild(prenomAuteur)
        texteAuteur.appendChild(ExperienceAuteur)
        texteAuteur.appendChild(presentationAuteur)
        
        auteurContainer.appendChild(infoAuteur)
        ensenbleAuteur.appendChild(infoAuteur)
        

       
          
        });
        



      
      
      
      



      

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici

//  https://i.pinimg.com/736x/8b/90/70/8b9070eaa36b7cd89a1f16dba3a955e2.jpg