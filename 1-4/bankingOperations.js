// Banking Operations

const user = {
    name: 'Oliver Sykes',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)
    
    if(transaction.type == 'credit'){
        user.balance += transaction.value
    } else {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(transactionType) {
    let higherTransaction = { type: transactionType, value: 0 }
    
    for(let transaction of user.transactions){
        if(transaction.type == transactionType && transaction.value > higherTransaction.value){
            higherTransaction.value = transaction.value
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0
    let average = 0

    for(let value of user.transactions) {
        sum += value.value
    }

    average = sum / user.transactions.length

    return average
}

function getTransactionsCount() {
    const transactionsCount = { credit: 0, debit: 0 }

    for(let transaction of user.transactions) {
        if(transaction.type == 'credit'){
            transactionsCount.credit++
        } else {
            transactionsCount.debit++
        }
    }

    return transactionsCount
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance)

console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue())

console.log(getTransactionsCount())
