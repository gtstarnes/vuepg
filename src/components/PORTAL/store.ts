import { reactive, type Ref } from "vue";

const login = reactive({
    user: '',
    status: false,
})

const toggle = reactive({
    state: false
})

function toggleState() {
    toggle.state = !toggle.state
}

const handleSubmit = (e: Event, username:string) => {
    e.preventDefault()
    login.user = username
    login.status = true;
}

export { login, toggle, toggleState, handleSubmit }