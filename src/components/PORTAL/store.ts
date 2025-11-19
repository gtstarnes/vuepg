import { ref } from "vue"

type User = {
    username: string,
    name: string,
    password: string,
}

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

const loginStatus = ref<boolean>(false);
const portalStatus = ref<boolean>(false) 

function toggleStatus(status:boolean) {
    return status = !status
}
function findUser(user:string){
    return users.value.find(u => {
        return u.username === user
    })
}

export {
    findUser
}