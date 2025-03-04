import { reactive } from "vue";

export const loggedIn =  reactive({
    user: '',
    status: false,
})

export const toggle = reactive({state: false})