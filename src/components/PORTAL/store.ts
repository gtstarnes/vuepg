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