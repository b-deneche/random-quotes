
const colors = ["darkred","darkblue","darkgreen","blue","darkblue"];


function getQuote(index,comp){
fetch("https://type.fit/api/quotes")
.then(function(response) {
    return response.json();
  })
.then(function(data) {
    ///console.log(data[index].text);
    comp.textContent = data[index].text;
  });
}

function getAuthor(index,comp){
fetch("https://type.fit/api/quotes")
.then(function(response) {
    return response.json();
  })
.then(function(data) {
   // console.log(data[index].author);
    comp.textContent = data[index].author;
  });
}


const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
const auteur = document.querySelector("#author");
const box = document.querySelector("#quotebox");

let i =  Math.round(Math.random()*100,0)%100;
console.log(i);

/*event listner*/
btn.addEventListener('click',()=>{
    i =  Math.round(Math.random()*100,0)%100;
    getQuote(i,text);
    getAuthor(i,auteur);
    i = (i+1) % 5;
    //document.getElementById("quotebox").style.backgroundColor = colors[i];
})
