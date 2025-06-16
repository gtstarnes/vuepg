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