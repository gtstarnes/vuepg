type User = {
    name: string,
    city: string,
    country: string,
    bio: string,
    links: Links[],
    pic: string
}
type Links = {
    title: string,
    href: string,
}

const users: User[] = [
    {
        name: 'Jessica Randall',
        city: 'London',
        country: 'United Kingdom',
        bio: 'Front-end developer and avid reader.',
        links: [
            {
                title: 'GitHub',
                href: '#'
            },
            {
                title: 'Frontend Mentor',
                href: '#'
            },
            {
                title: 'LinkedIn',
                href: '#'
            },
            {
                title: 'Twitter',
                href: '#'
            },
            {
                title: 'Instagram',
                href: '#'
            },
        ],
        pic: 'purple'
    },
]

function getUsers() {
    return users
}

function getUser(index: number){
    return users[index];
}

export default { getUsers, getUser}