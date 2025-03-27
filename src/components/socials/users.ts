type User = {
    name: string,
    city: string,
    country: string,
    bio: string,
    links: Links[],
}
type Links = {
    title: string,
    href: string,
}