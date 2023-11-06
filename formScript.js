const section = document.querySelector('section')
const form = document.querySelector('form')
section.setAttribute('style','text-align:center')
const input = document.querySelectorAll('input')
//Applying style to input field.
for(let i=0;i<input.length;i++){
    input[i].setAttribute('style','line-height:35px;width:45vh;padding-left:10px;outline:none;border-color:lightgrey ;border-radius:5px;font-size:18px')
}
//Applying style to span tag.
const errorMessage = document.querySelectorAll('span')
for(let i=0;i<errorMessage.length;i++){
    errorMessage[i].setAttribute('style','line-height:35px;width:35vh;padding-left:10px;color:orange;font-size:13px')
}

function firstName(){
    const firstName = input[0].value              //its not calculating last index value
    
    console.log(firstName)
    if(!firstName.match(/^[A-Z]{1}[a-z]{1,14}$/)){
        input[0].setAttribute('style','line-height:35px;width:45vh;padding-left:10px;outline:none;border:2px solid orange;border-radius:5px;font-size:18px')
        errorMessage[0].innerHTML="FirstName must starts with Capital and Contains 4-15 Characters"
    }else{
        input[0].setAttribute('style','line-height:35px;width:45vh;padding-left:10px;outline:none;border:2px solid green;border-radius:5px;font-size:18px')
        errorMessage[0].innerHTML=""
    }
}
input[0].addEventListener('keyup',firstName)

function userName(){
    const userName = input[1].value
    // console.log(userName)
    if(!userName.match(/^[A-Za-z]{3,6}[0-9]{2,6}$/)){
        input[1].setAttribute('style','line-height:35px;width:45vh;padding-left:10px;outline:none;border:2px solid orange;border-radius:5px;font-size:18px')
        errorMessage[1].innerHTML="Username must contains 5 - 12 Characters"
    }else{
        input[1].setAttribute('style','line-height:35px;width:45vh;padding-left:10px;outline:none;border:2px solid green;border-radius:5px;font-size:18px')
        errorMessage[1].innerHTML=""
    }
}

input[1].addEventListener('keyup',userName)

function mailaddress(){
    const mailaddress = input[2].value
    // console.log(mailaddress)
    if(!mailaddress.match(/^[A-Za-z0-9]{4,15}[@]{1}[a-z]{4,}[.]{1}[a-z]{2,4}$/)){
        input[2].setAttribute('style','line-height:35px;width:45vh;padding-left:10px;outline:none;border:2px solid orange;border-radius:5px;font-size:18px')
        errorMessage[2].innerHTML="Email must be a valid address, e.g:mail.domain.in"
    }else{
        input[2].setAttribute('style','line-height:35px;width:45vh;padding-left:10px;outline:none;border:2px solid green;border-radius:5px;font-size:18px')
        errorMessage[2].innerHTML=""
    }
}
input[2].addEventListener('keyup',mailaddress)

function password(){
    const password = input[3].value
    // console.log(password)
    if(!password.match(/^[A-Za-z0-9]{4,15}[\@\_\-]{1,2}[0-9A-Za-z]{3,15}$/)){
        if(password.length<=8 || password.length>=20){
            input[3].setAttribute('style','line-height:35px;width:45vh;padding-left:10px;outline:none;border:2px solid orange;border-radius:5px;font-size:18px')
            errorMessage[3].innerHTML="Password must Alphanumeric allows(@,_,-)and 8 - 20 Characters"
        }
    }else{
        input[3].setAttribute('style','line-height:35px;width:45vh;padding-left:10px;outline:none;border:2px solid green;border-radius:5px;font-size:18px')
        errorMessage[3].innerHTML=""
    }
}
input[3].addEventListener('keyup',password)

function mobilenumber(){
    const mobilenumber = input[4].value
    // console.log(mobilenumber)
    if(!mobilenumber.match(/^[6,7,8,9]{1}[0-9]{9}$/)){
        input[4].setAttribute('style','line-height:35px;width:45vh;padding-left:10px;outline:none;border:2px solid orange;border-radius:5px;font-size:18px')
        errorMessage[4].innerHTML="Please enter valid Mobile number(10 digits)"
    }else{
        input[4].setAttribute('style','line-height:35px;width:45vh;padding-left:10px;outline:none;border:2px solid green;border-radius:5px;font-size:18px')
        errorMessage[4].innerHTML=""
    }
}
input[4].addEventListener('keyup',mobilenumber)

function panCard(){
    const panCard = input[5].value
    // console.log(panCard)
    if(!panCard.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)){
        input[5].setAttribute('style','line-height:35px;width:45vh;padding-left:10px;outline:none;border:2px solid orange;border-radius:5px;font-size:18px')
        errorMessage[5].innerHTML="Enter a valid PANCARD Number "
    }else{
        input[5].setAttribute('style','line-height:35px;width:45vh;padding-left:10px;outline:none;border:2px solid green;border-radius:5px;font-size:18px')
        errorMessage[5].innerHTML=""
    }
}
input[5].addEventListener('keyup',panCard)