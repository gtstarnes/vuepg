import { ref } from "vue"

type User = {
    username: string,
    name: string,
    password: string,
}
type Portal = "login" | "signup"

const users = ref<User[]>([
    {
        username: 'azzclappa',
        name: 'Jeff',
        password: '1234'
    },
    {
        username: 'urmom',
        name: 'Bob',
        password: '1234'
    },
])
const portals = [
    {
        name: "login",
        inputs: [
            {
                type: "text",
                name: "username",
                id: "username",
                placeholder: "Username",
                label: "Username"
            },
            {
                type: "text",
                name: "password",
                id: "password",
                placeholder: "Password",
                label: "Password"
            },
        ]
    },
    {
        name: "signup",
        inputs: [
            {
                type: "text",
                name: "name",
                id: "name",
                placeholder: "Name",
                label: "Name"
            },
            {
                type: "text",
                name: "username",
                id: "username",
                placeholder: "Username",
                label: "Username"
            },
            {
                type: "text",
                name: "password",
                id: "password",
                placeholder: "Password",
                label: "Password"
            },
        ]
    }
]

const loginStatus = ref<boolean>(false);
const portalStatus = ref<boolean>(false);
const currentPortal = ref<string>("login")

function getPortal() {
    return portals.find(portal => {
        return portal.name === currentPortal.value
    })
}
function toggleStatus(status:boolean) {
    return status = !status
}
function changePortal(portal: Portal) {
    currentPortal.value = portal
}
function findUser(user:string){
    return users.value.find(u => {
        return u.username === user
    })
}

export {
    findUser,
    getPortal
}