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