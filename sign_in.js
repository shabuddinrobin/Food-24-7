var form = document.getElementById("form");
var email = document.getElementById("email");
var password = document.getElementById("pass1");

// --------------------CLOCK ---------------------

function showClock(){
    let rtClock= new Date();
    let hour =rtClock.getHours();
    let minute =rtClock.getMinutes();
    let second =rtClock.getSeconds();
    let watch = document.getElementById("watch");
   watch.innerHTML="Time ➔ "+ hour + " : "+  minute + " : "  + second;
   setTimeout(showClock, 500);
}
// --------------------ERROR---------------------

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// --------------------SUSSESS---------------------
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


form.addEventListener('submit', function(e){
        e.preventDefault();
            if(password.value === ''){
                showError(password, "Password is required");
            }
            else if(password.value.length < 8){
                showError(password, "Need 8 characters")
            }
            else if(password.value.length < 1){
                showError(password, "Need 8 characters")
            }
            else if(password.value.length >= 9){
                showError(password, "Only 8 characters indeed")
            }
                else{
                    showSuccess(password);
                }
            if(email.value === ''){
                showError(email, "email is required");
        }
                else{
                    showSuccess(email);
            }
        }
)
