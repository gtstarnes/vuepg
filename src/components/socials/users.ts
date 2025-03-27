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
                href: 'https://github.com'
            },
            {
                title: 'Frontend Mentor',
                href: '#'
            },
            {
                title: 'LinkedIn',
                href: 'https://linkedin.com'
            },
            {
                title: 'Twitter',
                href: 'https://x.com'
            },
            {
                title: 'Instagram',
                href: 'https://instagram.com'
            },
        ],
        pic: 'purple'
    },
]

function getUsers() {
    return users
}

function getUser(index: number){
    return users[index] || null;
}

export { getUsers, getUser}