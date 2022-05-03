// Users and their respective technologies

const users = [
    {
        name: 'Carlos',
        technologies: ['HTML', 'CSS']
    },
    {
        name: 'Jasmine',
        technologies: ['JavaScript', 'CSS']
    },
    {
        name: 'Tuane',
        technologies: ['HTML', 'Node.js']
    }
]

for(let user of users) {
    console.log(`${user.name} works with ${user.technologies.join(', ')}`)
}

console.log('\n')

// Search for CSS technology

function userUsesCSS(user) {
    for(let technology of user.technologies) {
        if(technology == 'CSS')
            return true
    }

    return false
}

for(let user in users) {
    const verification = userUsesCSS(users[user])

    if(verification)
        console.log(`The user ${users[user].name} works with CSS`)
}
