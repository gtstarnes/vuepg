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
const toggle = ref<boolean>(false) 