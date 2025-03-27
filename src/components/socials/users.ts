type User = {
    name: string,
    city: string,
    country: string,
    bio: string,
    links: Links[],
    pic: 'purple'
}
type Links = {
    title: string,
    href: string,
}