const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomChar = 0

function generatePassword() {
    let password1 = document.getElementById("pw1")
    let password2 = document.getElementById("pw2")
    let passwordOne = ""
    let passwordTwo = ""
    

    for (let i = 0; i < 16; i++) {
        randomChar = Math.floor( (Math.random() * characters.length - 1) + 1 )
        passwordOne += characters[randomChar]
    }
    password1.textContent = passwordOne
    
    for (let i = 0; i < 16; i++) {
        randomChar = Math.floor( (Math.random() * characters.length - 1) + 1 )
        passwordTwo += characters[randomChar]
    }
    password2.textContent = passwordTwo
    
}

