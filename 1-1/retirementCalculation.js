// Retirement calculation

const personName = 'Silvana'
const sex = 'Female'
const age = 48
const contribuitionTime = 23

const contribuitionCalculation = age + contribuitionTime

const manCanRetire = (sex == 'Male') && (contribuitionTime >= 35) && (contribuitionCalculation >= 95)
const womanCanRetire = (sex == 'Female') && (contribuitionTime >= 30) && (contribuitionCalculation >= 85)

let message = ''

if(manCanRetire || womanCanRetire) {
    message = `${personName}, you can retire!`
} else {
    message = `${personName}, you cannot retire!`
}

console.log(message)