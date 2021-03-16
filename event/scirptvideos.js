window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const name = sessionStorage.getItem('Correcthaina');
    
    /*document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-surname').innerHTML = surname;*/

    if (name == "sahipage") {
        console.log("Verified!");
    }

    else {
        window.location.href = "https://sowmya.sarovar.ml";
    }

})

function toggle() {
	document.querySelector(".navbar").classList.toggle("navbar--open");
}

function myFunction(x) {
  x.classList.toggle("change");
}

/*function loadhogaya() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overimg").style.display = "none";
  document.getElementById("txtOverlaytext").innerHTML="Click on the button to view large mode!";
  document.getElementById("textspan").style.fontSize="20px";
  document.getElementById("text").style.height="400px";
  document.getElementById("text").style.width="600px";
  document.getElementById("textspan").style.display="block";  
}

function onvideo1() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overimg").src = "https://drive.google.com/file/d/1bvcnSrGdRq4cT5gPJ6NFLJKoS1I_WrP1/preview";
    document.getElementById("text").style.width="800px";
    document.getElementById("text").style.height="600px";
    document.getElementById("overimg").style.width="750px";
    document.getElementById("overimg").style.display = "block";
  document.getElementById("textspan").style.display="none";
}*/

function off() {
    document.getElementById("overlay").style.display = "none";
}