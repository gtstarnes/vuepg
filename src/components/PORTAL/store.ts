import { reactive } from "vue";

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

export { login, toggle, toggleState }