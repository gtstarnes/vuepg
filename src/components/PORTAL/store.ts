import { ref } from "vue";

type Login = {
    username: string,
    password: string,
}

let signUp = ref(false)
let loggedIn = ref(false)
let username = ref('')

function login(user:string){
    username.value = user;
    loggedIn.value = true;
}

function logout(){
    username.value = '';
    loggedIn.value = false;
    signUp.value = false;
}

function toggleSignUp() {
    signUp.value = !signUp.value
    console.log(signUp.value)
}

function getSignUp(){
    return signUp
}

export {login, logout, toggleSignUp, getSignUp, loggedIn, signUp}
