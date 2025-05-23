type Login = {
    username: string,
    password: string,
}

let signUp:boolean = false
let loggedIn = false;
let username = ''

function login(user:string){
    username = user;
    loggedIn = true;
}

function logout(){
    username = '';
    loggedIn = false;
    signUp = false;
}

function toggleSignUp() {
    signUp = !signUp
}

export {login, logout, toggleSignUp, signUp, loggedIn}
