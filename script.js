function changeColor() { 
let myThing= document.getElementById("star");


if(myThing.style.color==="purple") {
myThing.style.color="whitesmoke";
} 

else {
    myThing.style.color= "purple";
}
}

function changeText()   {
let myThing = document.getElementById ("Pitbull");

if (myThing.innerHTML === "Pitbull-Mr.Worldwide") { 
    myThing.innerHTML="Baldcap Baddies for life!";

} else { 
myThing.innerHTML="Pitbull-Mr.Worldwide";
 } 

}


function showMessage(){
    let myThing = document.getElementById("newsTitle");

    myThing.innerHTML="Are you one of these baldies?";
    myThing.style.color= "blue"
}

function resetMessage(){
    let myThing = document.getElementById ("newsTitle");
    
    myThing.innerHTML = "Latest News";
    myThing.style.color = "white";
}



