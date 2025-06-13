import { ref } from "vue"

type Login = {
    user: string,
    pass: string,
    status: boolean,
}

let details = ref({
    user: '',
    pass: '',
})
let loginStatus = ref(false);
let portalToggle = ref(false)


// getter methods
function getDetails() {
    return details
}
function getStatus() {
    return loginStatus
}
function getPortal () {
    return portalToggle
}

// interface
function changePortal() {
    portalToggle.value = !portalToggle.value
}
function logout() {
    loginStatus.value = false
    details.value = {user: '', pass: ''}
}
function login(user: string) {
    loginStatus.value = true
    details.value = {...details.value, user: user}
}
function signUp(user: string){
    loginStatus.value = true
    details.value = {...details.value, user: user}
}


export {
    getDetails,
    getStatus,
    getPortal,
    changePortal,
    logout,
    login,
    signUp
}