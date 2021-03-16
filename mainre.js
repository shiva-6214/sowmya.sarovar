function check() {
	var sec = document.getElementById("entersec");
    /*var capttext = document.getElementById("captext");
    var txtcap = document.getElementById("entercap");*/

    /*var string1 = document.getElementById('captext').value;
    var string2 = document.getElementById('entercap').value;
    
    if (string1 == string2) {
        window.location.href = "home.html";
    }

    else {
        alert("Wrong! Try Again...");
    }*/

	var input = document.getElementById("entercap").value;

	if (input == captcha && sec.value == "Dhanveer Singh" || input == captcha && sec.value == "Dhanvir Singh" || input == captcha && sec.value == "Dhanbir Singh" || input == captcha && sec.value == "Dhanbeer Singh" || input == captcha && sec.value == "Hari Singh") {
		window.location.href = "home";
		document.getElementById("entercap").innerHTML = "";
		sessionStorage.setItem("Correcthaina", "sahipage");
	}
	else {
		alert("Wrong! Try Again...");
	}

	var a = Math.floor((Math.random() * 10));
	var b = Math.floor((Math.random() * 10));
	var c = Math.floor((Math.random() * 10));
	var d = Math.floor((Math.random() * 10));

	captcha = a.toString() + b.toString() + c.toString() + d.toString();

	document.getElementById("captext").innerHTML = captcha;

}

var captcha;

function generate() {
	// program to generate random strings

	// declare all characters
	/*const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	
	function generateString(length) {
		let result = ' ';
		const charactersLength = characters.length;
		for ( let i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
	
		return result;
	}
	
		document.getElementById("captext").innerHTML = (generateString(5));*/
	var a = Math.floor((Math.random() * 10));
	var b = Math.floor((Math.random() * 10));
	var c = Math.floor((Math.random() * 10));
	var d = Math.floor((Math.random() * 10));

	captcha = a.toString() + b.toString() + c.toString() + d.toString();

	document.getElementById("captext").innerHTML = captcha;
}

/*//// */

/*generate = () => {
// console.log(status)
let first = alphabets[Math.floor(Math.random() * alphabets.length)];
let second = Math.floor(Math.random() * 10);
let third = Math.floor(Math.random() * 10);
let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
let sixth = Math.floor(Math.random() * 10);
captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
console.log(captcha);
document.getElementById('generated-captcha').value = captcha;
document.getElementById("entered-captcha").value = '';
status.innerText = "Captcha Generator"
}

 check = () => {
// console.log(status)
let userValue = document.getElementById("entered-captcha").value;
console.log(captcha);
console.log(userValue);
if(userValue == captcha){
    status.innerText = "Correct!!"
}else{
    status.innerText = "Try Again!!"
    document.getElementById("entered-captcha").value = '';
}
}*/