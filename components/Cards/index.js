// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let cards = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res =>{
        console.log(res.data);
        let newdata = Array.from(res.data);
        console.log(newdata);
        const deck = cardCreator(newdata);
        cards.append(deck);
    });
function cardCreator(article){
    let card = document.createElement('div');
    card.classList.add('card');

    let headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article.headline;

    let author = document.createElement('div');
    author.classList.add('author');
    card.append(headline, author);

    let imgdiv = document.createElement('div');
    imgdiv.classList.add('img-container');

    let aimg = document.createElement('img');
    aimg.src = article.authorPhoto;
    imgdiv.append(aimg);

    let span = document.createElement('span');
    span.textContent = `By ${article.authorName}`
    author.append(imgdiv, span);
    return card;
}

