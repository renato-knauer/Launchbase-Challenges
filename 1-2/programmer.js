// Programmer Skills

const programmer = {
    ProgrammerName: 'Oliver Sykes',
    age: 32,
    technologies: [
        {
            technologyName: 'C++',
            expertise: 'Desktop'
        },
        {
            technologyName: 'Python',
            expertise: 'Data Science',
        },
        {
            technologyName: 'JavaScript',
            expertise: 'Web/Mobile',
        }
    ]
}

console.log(`The user ${programmer.ProgrammerName} is ${programmer.age} years old and uses the technology ${programmer.technologies[0].technologyName} with expertise in ${programmer.technologies[0].expertise}`)
