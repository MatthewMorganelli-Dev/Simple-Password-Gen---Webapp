const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
let genButton1 = document.getElementById("btn1")
let genButton2 = document.getElementById("btn2")
let genPass = document.getElementById("generateButton")
let pass1 = ""
let pass2 = ""

function generateRandom1(){
    genButton1.textContent = ""
    for (let i = 1; i < 15; i++){
        genButton1.textContent += characters[Math.floor(Math.random()*characters.length)]
    }
}

function generateRandom2(){
    genButton2.textContent = ""
    for (let i = 1; i < 15; i++){
        genButton2.textContent += characters[Math.floor(Math.random()*characters.length)]
    }
}

function passwordsTT(){
    generateRandom1()
    generateRandom2()
    pass1 = genButton1.textContent
    pass2 = genButton2.textContent
    console.log(pass1 + " " + pass2)
}

function copy1(){
      // Copy the text inside the text field
  navigator.clipboard.writeText(pass1);

  // Alert the copied text
  alert("Copied the text: " + pass1);
}

function copy2(){
    // Copy the text inside the text field
navigator.clipboard.writeText(pass2);

// Alert the copied text
alert("Copied the text: " + pass2);
}

genPass.addEventListener("click", passwordsTT)

genButton1.addEventListener("click", copy1)

genButton2.addEventListener("click", copy2)