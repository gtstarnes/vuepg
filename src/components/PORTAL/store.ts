import { ref } from "vue";

type User = {
    name:string,
    email:string,
    username:string,
    password:string,
}

const users = ref<User[]>([]);
const portalStatus = ref<boolean>(true);
