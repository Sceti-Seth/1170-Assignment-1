// document.addEventListener("DOMContentLoaded", function() {
//     window.alert("allahu akbar");
// });



function validateForm(){

    const form= document.getElementById("ContactForm");
    const submitButton= document.getElementById("submit-button");

const message = document.getElementById("message-panel");

submitButton.addEventListener("click", function validate(event)
{
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phonenumber = document.getElementById("phonenumber").value;

    const radio1 = document.getElementById("radio1").value;
    const radio2=document.getElementById("radio2").value;

    const usermessage=document.getElementById("usermessage").value;


    if(!name){
        message.innerHTML += "Please input your name <br>";
        message.style.color="red";
    }

    else if(!email){
        message.innerHTML += "Please input your email <br>";
        message.style.color="red";
    }
    else if(!(email.endsWith("dal.ca"))){
        message.innerHTML += "Not a valid dal email <br>";
        message.style.color = "red";
    }

    else if(!phonenumber){
        message.innerHTML += "Please input your phone number <br>";
        message.style.color="red";
    }

    else if(!(radio1) && !(radio2)){
        message.innerHTML += "Please select either Student or TA <br>";
        message.style.color ="red";
    }

}

)
}

validateForm();