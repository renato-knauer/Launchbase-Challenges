// Incomings and Outgoings

const users = [
    {
      name: "Salvio",
      incomings: [115.3, 48.7, 98.3, 14.5],
      outgoings: [85.3, 13.5, 19.9]
    },
    {
      name: "Marcio",
      incomings: [24.6, 214.3, 45.3],
      outgoings: [185.3, 12.1, 120.0]
    },
    {
      name: "Lucia",
      incomings: [9.8, 120.3, 340.2, 45.3],
      outgoings: [450.2, 29.9]
    }
]

function sumValues(values) {
    let sum = 0
    
    for(let value of values) {
        sum += value
    }

    return sum
}

function balanceCalculation(incomings, outgoings) {
    const userIncoming = sumValues(incomings)
    const userOutgoing = sumValues(outgoings)

    balance = userIncoming - userOutgoing

    return balance
}

for(let user in users) {
    const balance = balanceCalculation(users[user].incomings, users[user].outgoings)

    if(balance > 0) {
        console.log(`${users[user].name} has a POSITIVE balance of $${balance.toFixed(2)}`)
    } else {
        console.log(`${users[user].name} has a NEGATIVE balance of $${balance.toFixed(2)}`)
    }
}
