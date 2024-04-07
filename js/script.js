let orignal="I love my country Pakistan. <br> I like my city Faisalabad. <br> I love my Homeland."




// clear statement
document.getElementById("clear").onclick=function(){
   
    document.getElementById("result").innerHTML="";
}
// clear input
document.getElementById("remove").onclick=function(){
    document.getElementById("input1").value="";
}
// add cities
function addCities(){
    
    var add=document.getElementById("input1").value;
    if(!add){
        alert("Enter your city in input field.")
        return;
        console.log(add)
    }
    let cityFirstLetter=add.slice(0,1)
    let firstLetter=cityFirstLetter.toUpperCase();
    let remainingLetter=add.slice(1)
    let lastLetters=remainingLetter.toLowerCase();
    let city=firstLetter + lastLetters;
    console.log(city)

     let cityFound=false
for (let i= 0; i< cities.length; i++){
    if(cities[i]===city){
         cityFound=true;
         document.getElementById("result").innerHTML='<span style="color:red;">"' + city + '"</span> already exist in list'
    }

}
    if(cityFound==false){
        cities.push(city)
    document.getElementById("result").innerHTML='<span style="color:green;">"' + city + '"</span> has been added in list'
    }
}

// all cities
var cities=["Faisalabad","Lahore","Karachi","Islamabad","Burewala","Sheikhupura","Kashmir" ]
document.getElementById("allcities").onclick=function(){
    

    document.getElementById("result").innerHTML="";
    for( var index=0; index< cities.length; index++){
        document.getElementById("result").innerHTML+=  (index+1) + ")" + cities[index] + "</br>";
    }
}

// lower case
function lowerCase(){
    let lower=orignal.toLowerCase();
    document.getElementById("result").innerHTML=lower;
    

}
// upper case
function upperCase(){
    let upper=orignal.toUpperCase();
    document.getElementById("result").innerHTML=upper;
    
}
// capitalize
function capitalize(){
    let capital='<span style="text-transform:capitalize;">' + orignal + '</span>'; 
document.getElementById("result").innerHTML=capital;

}

// better formating
function betterFormating(){
    let better=document.getElementById("input1").value;
    let lowerBetter=better.toLowerCase();
    let capital2='<span style="text-transform:capitalize;">' + lowerBetter + '</span>'; 
    document.getElementById("result").innerHTML=capital2;
}

// check city
function checkCities(){
    
    var add=document.getElementById("input1").value;
    if(!add){
        alert("Enter your city in input field.")
        return;
        console.log(add)
    }
    let cityFirstLetter=add.slice(0,1)
    let firstLetter=cityFirstLetter.toUpperCase();
    let remainingLetter=add.slice(1)
    let lastLetters=remainingLetter.toLowerCase();
    let city=firstLetter + lastLetters;
   

     let cityFound=false
for (let i= 0; i< cities.length; i++){
    if(cities[i]===city){
         cityFound=true;
         document.getElementById("result").innerHTML='<span style="color:green;">"' + city + '"</span> found in the list'
    }

}
    if(cityFound==false){
    
    document.getElementById("result").innerHTML='Sorry we couldn\'t find your city <span style="color:red;">"' + city + '"</span>  in the list' 
    
}}

// FIND WORD
function findWord(){
      let newOrignal=orignal.toLowerCase();
      let word=document.getElementById("input1").value;
      if(!word){
        let message=("please type word for find");
        return;
      }
      word=word.toLowerCase();
      let findWord=newOrignal.indexOf(word);
      
      if(findWord!==-1){
        document.getElementById("result").innerHTML='Your find word <span style="color:green;">"' + word + '"</span>  is at index' + findWord  
      }
      else{
        document.getElementById("result").innerHTML='Your word <span style="color:red;">"' + word + '"</span> does not exist  in the orignal string' 
      }
      
}
// replace word
function replaceWord(){
    let newOrignal=orignal.toLowerCase();
    let word1=document.getElementById("input1").value;
    if(!word1){
      alert("please type word for replace");
      return;
    }
    let replaceWith=prompt("Enter a word which you want to replace.")
    if(!replaceWith){
        alert('please type word for find'+ word1 + ".");
        return;
      }
      replaceWith=replaceWith.toLowerCase();
      word1=word1.toLowerCase();
     let replaceText=newOrignal.replaceAll(word1 , replaceWith);
     document.getElementById("result").innerHTML=replaceText;
}
function clearOutput(){
    let clearOutput=document.getElementById("result").innerHTML;
    if(clearOutput === ""){
        toastify
Toastify({
    text: "Output is already cleared.",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
    }
    else{
        document.getElementById("result").innerHTML="";
        Toastify({
    text: "Output is cleared successfully.",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right,green )",
    },
    onClick: function(){} // Callback after click
  }).showToast();

    }
}