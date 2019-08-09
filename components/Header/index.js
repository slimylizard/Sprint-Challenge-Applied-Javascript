// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

let headerContainer = document.querySelector('.header-container') 
function Header() {
    let div = document.createElement('div');
    div.classList.add('header');
    let span = document.createElement('span');
    span.classList.add('date');
    span.textContent = 'SMARCH 28, 2019';
    div.appendChild(span);
    let h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';
    div.appendChild(h1);
    let span2 = document.createElement('span');
    span2.classList.add('temp');
    span2.textContent = '98'
    div.appendChild(span2);
    return div;
}
let div1 = Header();
headerContainer.appendChild(div1);
