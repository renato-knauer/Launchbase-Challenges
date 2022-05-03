// IMC calculation

const personName = 'Carlos'
const weight = 84
const height = 1.88
const sex = 'Male'

const imc = weight / (height * height)

let message = ''

if(imc >= 30) {
    message = `Name: ${personName}\nSex: ${sex}\nYou are overweight`
} else {
    message = `Name: ${personName}\nSex: ${sex}\nYou are not overweight`
}

console.log(message)
