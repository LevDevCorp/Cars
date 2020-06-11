//Task 6 -Login Page




let user1 = {
    username:'L.nats51@yahoo.com',
    password:'123456789'
}

let user2 = {
    username:'leonidas',
    password:'222'
}

let user3 = {
    username:'jora',
    password:'123456789'
}

let user4 = {
    username:'kalistrate',
    password:'444'
}


let users = [];
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

function getFoundUser(users,username){
    for(let i=0;i<users.length;i++){
        if(users[i].username === username){
            return users[i];
        }
    }
}


function checkpassword(user , possiblePassword){
    let isSame = user.password === possiblePassword;
    return isSame;
}

function checkPasswordStrength(password){
    let passwordPattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[^\w]).{8,20}$/;
    let passwordStrength = passwordPattern.exec(password)
    return passwordStrength!==null;
}

function isEmailValid(email){
    let emailPattern = /^\s*[A-Z0-9_.]{2,}@[A-Z0-9_.]{2,}\.{A-Z0-9}{2,}\s*$/;
    let isemailValid = emailPattern.exec(email);
    return isEmailValid!==null;
}



function logIn(username,password){
    let isPasswordStrong = checkPasswordStrength(password);
    let possibleUser = getFoundUser(users, username);
    let validEmail = isEmailValid(username);
    if(!possibleUser){
        alert('მომხმარებელი ვერ მოიძებნა');
    } else {
        let isPasswordValid = checkpassword(possibleUser, password);
        if(isPasswordValid && isPasswordStrong && validEmail){
            alert("თქვენ წარმატებით შეხვედით სისტემაში, თუმცა გთხოვთ შეცვალოთ პაროლი");
        }else if(isPasswordValid) {
            alert("თქვენ წარმატებით შეხვედით სისტემაში");
        }else if (isPasswordStrong === false) {
            alert("გთხოვთ შეცვალოთ პაროლი");
        } else if (!validEmail){
            alert("იმეილი არის არასწორ ფორმატში, გთხოვთ გაასწოროთ");
        } else { 
            alert("პაროლი არასწორია");
        }
    }
}


//logIn('jora','123456789');

function loginSubmit(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    logIn(username, password);
}




function showThePassword(){
    let password = document.getElementById('password');
    let eyeSlash = document.getElementById('eye-slash');
    if(password.type === "password"){
        password.type = "text";
        eyeSlash.src = "images/eye-slash-regular.svg";
    } else {
        password.type = "password";
        eyeSlash.src = "images/eye-regular.svg";
    }
}