import { reactive } from "vue";

const login = reactive({
    user: '',
    status: false,
})

const toggle = reactive({
    state: false
})

export default { login, toggle}