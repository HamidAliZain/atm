import inquirer from 'inquirer';
import chalk from 'chalk';
let figlet = require('figlet');

let useraAmount = 30000
let cond = true
figlet('Welcome', (error: any, data: any) => {
    console.log(chalk.blue(data));
});
setTimeout(() => {

    async function atm() {
        const name = await inquirer.prompt({
            name: 'name',
            message: 'Write your  Account name ',
            type: "input"
        })
        const password = await inquirer.prompt({
            name: 'password',
            message: 'Enter password',
            type: "password"
        })

        if (name.name.length == 0 || password.password.length == 0) {
            console.log(chalk.red('pasword  or account name incorrect '));

        } else {

            const account = await inquirer.prompt({
                message: 'choose Account',
                name: 'accounts'
                , choices: [
                    { name: 'current', value: 'current account' },
                    { name: 'saving', value: 'saving account' },
                ]
                , type: 'list'
            }
            )
            if (account.accounts == 'current account') {
                console.log(chalk.yellow(`${name.name}  your amount (${useraAmount} ) (${account.accounts})`));
                const options = await inquirer.prompt({
                    message: 'choose services',
                    name: 'services'
                    , choices: [
                        { name: 'cash withdraw', value: 'cash' },
                        { name: 'funds transfer', value: 'fund' },
                        { name: 'K-Selectric Bill', value: 'bill' },
                    ]
                    , type: 'list'
                })
                // user selected cash 
                if (options.services == 'cash') {
                    while (cond) {
                        const accountNumber = await inquirer.prompt({
                            message: 'Account Number',
                            name: 'accountNumber'
                            , type: 'number'
                        })
                        const amount = await inquirer.prompt({
                            message: 'Amount',
                            name: 'money',
                            type: 'number',
                        })
                        // cheking for not a nummber
                        if (isNaN(amount.money) || isNaN(accountNumber.accountNumber)) {
                            console.log(chalk.red('amount or account number incorrect'));
                        } else {
                            // amount checking
                            if (useraAmount - amount.money < 0) {
                                console.log(chalk.red('insufficient amount'));
                                cond = false
                            } else {
                                cond = false
                                console.log(chalk.green(`receive your cash  ${chalk.red(` (remaining amount ${useraAmount - amount.money})`)} `));
                            }
                        }
                    }
                }
                // user selected fund
                else if (options.services == 'fund') {
                    while (cond) {
                        const fundName = await inquirer.prompt({
                            message: 'Fund Name',
                            name: 'fundName'
                            , type: 'input'
                        })
                        const amount = await inquirer.prompt({
                            message: 'Fund Amount',
                            name: 'fundmoney',
                            type: 'number',
                        })
                        if (isNaN(amount.fundmoney) || fundName.fundName.length == 0) {
                            console.log(chalk.red('write amount number or fund name'));
                        } else {

                            if (amount.fundmoney >= 100) {
                                if (useraAmount - amount.fundmoney < 0) {
                                    console.log(chalk.red('insufficient amount'));
                                    cond = false

                                } else {
                                    console.log(chalk.green(`sucessfully send to ${fundName.fundName} ${chalk.red(` (remaining amount ${useraAmount - amount.fundmoney})`)}`));
                                    cond = false
                                }
                            } else {
                                console.log(chalk.red(' fund should be greater than  number 100'));
                            }
                        }
                    }
                }

                // user selected bill
                else {
                    while (cond) {
                        const accountNumber = await inquirer.prompt({
                            message: 'Account Number',
                            name: 'accountNumber'
                            , type: 'number'
                        })
                        const billAmount = await inquirer.prompt({
                            message: 'Bill Amount',
                            name: 'billmoney',
                            type: 'number',
                        })
                        if (isNaN(billAmount.billmoney) || isNaN(accountNumber.accountNumber)) {
                            console.log(chalk.red('bill amount or account number incorrect'));
                        } else {

                            if (billAmount.billmoney >= 0) {
                                if (useraAmount - billAmount.billmoney < 0) {
                                    console.log(chalk.red('insufficient amount'));
                                    cond = false
                                } else {
                                    console.log(chalk.green(`bill paid  ${chalk.red(` (remaining amount ${useraAmount - billAmount.billmoney})`)} `));
                                    cond = false
                                }

                            } else {
                                console.log(chalk.red('amount is greater then 0'));
                            }

                        }
                    }
                }
            } else {
                console.log(chalk.yellow(`${name.name}  your amount (${useraAmount} ) (${account.accounts})`));
                const options = await inquirer.prompt({
                    message: 'choose services',
                    name: 'services'
                    , choices: [
                        { name: 'cash withdraw', value: 'cash' },
                        { name: 'funds transfer', value: 'fund' },
                        { name: 'K-Selectric Bill', value: 'bill' },
                    ]
                    , type: 'list'
                })
                // user selected cash 
                if (options.services == 'cash') {
                    while (cond) {
                        const accountNumber = await inquirer.prompt({
                            message: 'Account Number',
                            name: 'accountNumber'
                            , type: 'number'
                        })
                        const amount = await inquirer.prompt({
                            message: 'Amount',
                            name: 'money',
                            type: 'number',
                        })
                        // cheking for not a nummber
                        if (isNaN(amount.money) || isNaN(accountNumber.accountNumber)) {
                            console.log(chalk.red('amount or account number incorrect'));
                        } else {
                            // amount checking
                            if (useraAmount - amount.money < 0) {
                                console.log(chalk.red('insufficient amount'));
                                cond = false
                            } else {
                                cond = false
                                console.log(chalk.green(`receive your cash  ${chalk.red(` (remaining amount ${useraAmount - amount.money})`)} `));
                            }
                        }
                    }
                }
                // user selected fund
                else if (options.services == 'fund') {
                    while (cond) {
                        const fundName = await inquirer.prompt({
                            message: 'Fund Name',
                            name: 'fundName'
                            , type: 'input'
                        })
                        const amount = await inquirer.prompt({
                            message: 'Fund Amount',
                            name: 'fundmoney',
                            type: 'number',
                        })
                        if (isNaN(amount.fundmoney) || fundName.fundName.length == 0) {
                            console.log(chalk.red('write amount number or fund name'));
                        } else {

                            if (amount.fundmoney >= 100) {
                                if (useraAmount - amount.fundmoney < 0) {
                                    console.log(chalk.red('insufficient amount'));
                                    cond = false

                                } else {
                                    console.log(chalk.green(`sucessfully send to ${fundName.fundName} ${chalk.red(` (remaining amount ${useraAmount - amount.fundmoney})`)}`));
                                    cond = false
                                }
                            } else {
                                console.log(chalk.red(' fund should be greater than  number 100'));
                            }
                        }
                    }
                }

                // user selected bill
                else {
                    while (cond) {
                        const accountNumber = await inquirer.prompt({
                            message: 'Account Number',
                            name: 'accountNumber'
                            , type: 'number'
                        })
                        const billAmount = await inquirer.prompt({
                            message: 'Bill Amount',
                            name: 'billmoney',
                            type: 'number',
                        })
                        if (isNaN(billAmount.billmoney) || isNaN(accountNumber.accountNumber)) {
                            console.log(chalk.red('bill amount or account number incorrect'));
                        } else {

                            if (billAmount.billmoney >= 0) {
                                if (useraAmount - billAmount.billmoney < 0) {
                                    console.log(chalk.red('insufficient amount'));
                                    cond = false
                                } else {
                                    console.log(chalk.green(`bill paid  ${chalk.red(` (remaining amount ${useraAmount - billAmount.billmoney})`)} `));
                                    cond = false
                                }

                            } else {
                                console.log(chalk.red('amount is greater then 0'));
                            }

                        }
                    }
                }

            }
        }
    }
    console.log(atm());
}, 1000);
