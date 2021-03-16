function toggle() {
	document.querySelector(".navbar").classList.toggle("navbar--open");
}

function myFunction(x) {
  x.classList.toggle("change");
}

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
        console.log("verified!");
    }

    else {
        window.location.href = "https://sowmya.sarovar.ml";
    }

})