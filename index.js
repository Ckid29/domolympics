var header = document.getElementById("header")
header.textContent = ("Javascript Made This!!");
header.style.fontWeight = "bold";
header.style.fontSize = "x-large";
header.style.textAlign = "center";

//document.getElementById(name1)

var h4 = document.createElement("h4")
h4.textContent = ("Nathan Hundley");
h4.style.textAlign = "center";
h4.style.color = "pink";
header.append(h4)

var span = document.createElement("span")
span.textContent = (" wrote the Javascript")
span.style.color = "black";
//span.style.fontsize=
h4.append(span)

var message = document.getElementsByClassName("message")
//console.log(messages) used to check for arra
message[0].textContent = "Selphie: SQUALLLL, BESTTTT FRIIIIEND!"
message[1].textContent = "Squall: ...."
message[2].textContent = "Selphie: Come onnnnn, don't ignore me"
message[3].textContent = "Squall: ...."
message[4].textContent = "Selphie: Ur so meannnnn"
message[5].textContent = "Squall: Please remember to junction your GF. I don't want to die on field today."
message[6].textContent = "Selphie: Tee-hee okay"
//go on and on

//var messages = document.getElementByClassName("messages")

//for (var i = 0; i < message.length; i++) {
//    messages[i].textContent = ("[i]")
//    console.log(message[0])
//}

let btnClear = document.getElementById("clear-button")
//let messages = document.getElementByClassName("messages")
console.log(document.getElementsByClassName("messages"))
btnClear.addEventListener("click", () => {
    //message.forEach(messages => messages.value = "");
    document.getElementsByClassName("messages")[0].textContent = ""
});

//target left and right messages and try looping over the left and right message as well

var themeAdd = document.getElementById("theme-drop-down")


//when you console log message left we see that it comes back as an array
themeAdd.addEventListener("change", test)
function test() {
    var messageLeft = document.getElementsByClassName("left")
    var messageRight = document.getElementsByClassName("right")
    console.log(themeAdd.value, "value")
    if (themeAdd.value === "theme-one") {
        for (var i = 0; i < messageLeft.length; i++) {
            messageLeft[i].style.backgroundColor = "blue"

        }
    }
    else if (themeAdd.value === "theme-two") {
        for (var i = 0; i < messageRight.length; i++) {
            messageRight[i].style.backgroundColor = "red"
        }
    }

}

//<option value="theme-one" onclick="chBackcolor('red';"></option>