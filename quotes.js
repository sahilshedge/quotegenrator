
let quotes=[
    {
        quote:"I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
        author:"Rosa Parks",
    },
    {
        quote:"To love oneself is the beginning of a lifelong romance." ,
        author:"Oscar Wilde",
    },
     
    {
        quote:"Sometimes the most important thing in a whole day is the rest we take between two deep breaths." ,
        author:"Etty Hillesum",
    }, 

    {
         quote:"Almost everything will work again if you unplug it for a few minutes, including you.",
        author:" Anne Lamott",
    },
    {
        quote:"Time you enjoy wasting is not wasted time.",
        author:"Bell Hooks",
    },
    {
        quote:"Self-care is how you take your power back.",
        author:" Lalah Delia",
    },
    {
        quote:"Being happy never goes out of style.",
        author:"Lilly Pulitzer",
    },
{
        quote:"No one can make you feel inferior without your consent.",
        author:"Eleanor Roosevelt",
    },
]
function genrateQuotes(){

// localStorage.setItem("myquotes",JSON.stringify(quotes));

 let getQuotes=JSON.parse(localStorage.getItem("myquotes"));

let randomIndex=Math.floor(Math.random()*getQuotes.length);

let randomQuotes=getQuotes[randomIndex].quote;
let randomAuthor=getQuotes[randomIndex].author;

let selectedQuote=document.getElementById("screen");
selectedQuote.innerHTML=randomQuotes;

let selectedAuthor =document.getElementById("author");
selectedAuthor.innerHTML=randomAuthor;

}

function addQuote(){

let writtenQuote=document.getElementById("new-quote").value;
let authorName=document.getElementById("name").value;
let changeQuote=JSON.parse(localStorage.getItem("myquotes"));


let addedQuote={ quote:writtenQuote,author:authorName};


changeQuote.push(addedQuote);
localStorage.setItem("myquotes",JSON.stringify(changeQuote));

document.getElementById("new-quote").value='';
document.getElementById("name").value="";

}
