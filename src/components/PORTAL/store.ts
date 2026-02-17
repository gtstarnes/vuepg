import { ref } from "vue";

//types
type User = {
    name:string,
    email:string,
    username:string,
    password:string,
}

//variables
const users = ref<User[]>([]);
const portalStatus = ref<boolean>(true);
const loginStatus = ref<boolean>(false);

//interface

function getPortalStatus() {
    return portalStatus.value;
}
function getLoginStatus() {
    return loginStatus.value;
}
function getUserByUsername(user:string){
    return users.value.find(u => {
        return u.username === user; 
    })
}
function changePortal() {
    portalStatus.value = !portalStatus.value;
}