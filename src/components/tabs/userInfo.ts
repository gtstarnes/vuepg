import { ref } from "vue"

type Post = {
    id:number,
    img:string,
    likes:number
    comments:number
}

type UserMeta = {
    name:string,
    username:string,
    followers:number,
    following:number,
    posts: Post[],
    reels: Post[],
    tagged: Post[],
}
type Tab = 'Posts' | 'Reels' | 'Tagged'

function randomNum(n:number) {
    return Math.floor(Math.random() * (n+1))
}
function randomColor() {
    let letters = '0123456789ABCDEF'
    let color = "#"
    for(let i=0;i < 6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color
}

//TABS INTERFACE
const tabs = ['Posts', 'Reels','Tagged']
let activeTab = ref('Posts')
function getTabs() {
    return tabs
}
function getActiveTab() {
    return activeTab
}
function changeTab(t:Tab){
    if (t !== activeTab.value){
        activeTab.value = t
    }
}