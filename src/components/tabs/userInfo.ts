import { ref } from "vue"

type Post = {
    id:number,
    img:string,
    likes:number
    comments:number
}

type User = {
    name:string,
    username:string,
    pic:string,
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

// Creation Methods
function createPost():Post {
    return {
        id: randomNum(1000),
        img: randomColor(),
        likes:randomNum(500),
        comments:randomNum(500),
    }
}
function genPosts(n:number):Post[] {
    let posts: Post[] = [];
    let i = 0;
    while (i < n) {
        posts[i] = createPost()
        i++
    }
    return posts
}
const user:User = {
    name: "Bob Ducca",
    username: "AzzClappa3000",
    pic: randomColor(),
    followers: randomNum(10000),
    following: randomNum(10000),
    posts: genPosts(randomNum(100)),
    reels: genPosts(randomNum(100)),
    tagged: genPosts(randomNum(100)),
}
function getUser():User{
    return user
}

export {getUser, getTabs, getActiveTab}