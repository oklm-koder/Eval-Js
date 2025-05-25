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
       /// ON ECRIT LE CODE ICI ! 
      let theme = data.theme[0];
      console.log(theme);
      
      console.log(nomJournal);
      // ÉTAPE 2 : Sélectionner un conteneur HTML existant pour y insérer les films

       let articleContainer = document.getElementById('article-container');
      //  console.log(articleContainer);
       
      // // Utilisez document.createElement() pour créer un élément <div>
       let articleCard = document.createElement('div'); 
        // // 3.2 Ajouter une classe CSS à cette carte
        // // Utilisez la propriété .className
       articleCard.className = "article-card"
      console.log(articleCard);
      

      
      
      // let maineArticle = document.createElement('div');
      // maineArticle.className = "section-article"

      // let articlePoster =  document.createElement('img')
      // let articleTitle = document.createElement('p')
      // let themeTitle = document.createElement('p')
      // let dateTitle = document.createElement('p')
      // let articleDescription = document.createElement('p')

      



      

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici