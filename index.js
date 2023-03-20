"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let figlet = require('figlet');
let useraAmount = 30000;
let cond = true;
figlet('Welcome', (error, data) => {
    console.log(chalk_1.default.blue(data));
});
setTimeout(() => {
    function atm() {
        return __awaiter(this, void 0, void 0, function* () {
            const name = yield inquirer_1.default.prompt({
                name: 'name',
                message: 'Write your  Account name ',
                type: "input"
            });
            const password = yield inquirer_1.default.prompt({
                name: 'password',
                message: 'Enter password',
                type: "password"
            });
            if (name.name.length == 0 || password.password.length == 0) {
                console.log(chalk_1.default.red('pasword  or account name incorrect '));
            }
            else {
                const account = yield inquirer_1.default.prompt({
                    message: 'choose Account',
                    name: 'accounts',
                    choices: [
                        { name: 'current', value: 'current account' },
                        { name: 'saving', value: 'saving account' },
                    ],
                    type: 'list'
                });
                if (account.accounts == 'current account') {
                    console.log(chalk_1.default.yellow(`${name.name}  your amount (${useraAmount} ) (${account.accounts})`));
                    const options = yield inquirer_1.default.prompt({
                        message: 'choose services',
                        name: 'services',
                        choices: [
                            { name: 'cash withdraw', value: 'cash' },
                            { name: 'funds transfer', value: 'fund' },
                            { name: 'K-Selectric Bill', value: 'bill' },
                        ],
                        type: 'list'
                    });
                    // user selected cash 
                    if (options.services == 'cash') {
                        while (cond) {
                            const accountNumber = yield inquirer_1.default.prompt({
                                message: 'Account Number',
                                name: 'accountNumber',
                                type: 'number'
                            });
                            const amount = yield inquirer_1.default.prompt({
                                message: 'Amount',
                                name: 'money',
                                type: 'number',
                            });
                            // cheking for not a nummber
                            if (isNaN(amount.money) || isNaN(accountNumber.accountNumber)) {
                                console.log(chalk_1.default.red('amount or account number incorrect'));
                            }
                            else {
                                // amount checking
                                if (useraAmount - amount.money < 0) {
                                    console.log(chalk_1.default.red('insufficient amount'));
                                    cond = false;
                                }
                                else {
                                    cond = false;
                                    console.log(chalk_1.default.green(`receive your cash  ${chalk_1.default.red(` (remaining amount ${useraAmount - amount.money})`)} `));
                                }
                            }
                        }
                    }
                    // user selected fund
                    else if (options.services == 'fund') {
                        while (cond) {
                            const fundName = yield inquirer_1.default.prompt({
                                message: 'Fund Name',
                                name: 'fundName',
                                type: 'input'
                            });
                            const amount = yield inquirer_1.default.prompt({
                                message: 'Fund Amount',
                                name: 'fundmoney',
                                type: 'number',
                            });
                            if (isNaN(amount.fundmoney) || fundName.fundName.length == 0) {
                                console.log(chalk_1.default.red('write amount number or fund name'));
                            }
                            else {
                                if (amount.fundmoney >= 100) {
                                    if (useraAmount - amount.fundmoney < 0) {
                                        console.log(chalk_1.default.red('insufficient amount'));
                                        cond = false;
                                    }
                                    else {
                                        console.log(chalk_1.default.green(`sucessfully send to ${fundName.fundName} ${chalk_1.default.red(` (remaining amount ${useraAmount - amount.fundmoney})`)}`));
                                        cond = false;
                                    }
                                }
                                else {
                                    console.log(chalk_1.default.red(' fund should be greater than  number 100'));
                                }
                            }
                        }
                    }
                    // user selected bill
                    else {
                        while (cond) {
                            const accountNumber = yield inquirer_1.default.prompt({
                                message: 'Account Number',
                                name: 'accountNumber',
                                type: 'number'
                            });
                            const billAmount = yield inquirer_1.default.prompt({
                                message: 'Bill Amount',
                                name: 'billmoney',
                                type: 'number',
                            });
                            if (isNaN(billAmount.billmoney) || isNaN(accountNumber.accountNumber)) {
                                console.log(chalk_1.default.red('bill amount or account number incorrect'));
                            }
                            else {
                                if (billAmount.billmoney >= 0) {
                                    if (useraAmount - billAmount.billmoney < 0) {
                                        console.log(chalk_1.default.red('insufficient amount'));
                                        cond = false;
                                    }
                                    else {
                                        console.log(chalk_1.default.green(`bill paid  ${chalk_1.default.red(` (remaining amount ${useraAmount - billAmount.billmoney})`)} `));
                                        cond = false;
                                    }
                                }
                                else {
                                    console.log(chalk_1.default.red('amount is greater then 0'));
                                }
                            }
                        }
                    }
                }
                else {
                    console.log(chalk_1.default.yellow(`${name.name}  your amount (${useraAmount} ) (${account.accounts})`));
                    const options = yield inquirer_1.default.prompt({
                        message: 'choose services',
                        name: 'services',
                        choices: [
                            { name: 'cash withdraw', value: 'cash' },
                            { name: 'funds transfer', value: 'fund' },
                            { name: 'K-Selectric Bill', value: 'bill' },
                        ],
                        type: 'list'
                    });
                    // user selected cash 
                    if (options.services == 'cash') {
                        while (cond) {
                            const accountNumber = yield inquirer_1.default.prompt({
                                message: 'Account Number',
                                name: 'accountNumber',
                                type: 'number'
                            });
                            const amount = yield inquirer_1.default.prompt({
                                message: 'Amount',
                                name: 'money',
                                type: 'number',
                            });
                            // cheking for not a nummber
                            if (isNaN(amount.money) || isNaN(accountNumber.accountNumber)) {
                                console.log(chalk_1.default.red('amount or account number incorrect'));
                            }
                            else {
                                // amount checking
                                if (useraAmount - amount.money < 0) {
                                    console.log(chalk_1.default.red('insufficient amount'));
                                    cond = false;
                                }
                                else {
                                    cond = false;
                                    console.log(chalk_1.default.green(`receive your cash  ${chalk_1.default.red(` (remaining amount ${useraAmount - amount.money})`)} `));
                                }
                            }
                        }
                    }
                    // user selected fund
                    else if (options.services == 'fund') {
                        while (cond) {
                            const fundName = yield inquirer_1.default.prompt({
                                message: 'Fund Name',
                                name: 'fundName',
                                type: 'input'
                            });
                            const amount = yield inquirer_1.default.prompt({
                                message: 'Fund Amount',
                                name: 'fundmoney',
                                type: 'number',
                            });
                            if (isNaN(amount.fundmoney) || fundName.fundName.length == 0) {
                                console.log(chalk_1.default.red('write amount number or fund name'));
                            }
                            else {
                                if (amount.fundmoney >= 100) {
                                    if (useraAmount - amount.fundmoney < 0) {
                                        console.log(chalk_1.default.red('insufficient amount'));
                                        cond = false;
                                    }
                                    else {
                                        console.log(chalk_1.default.green(`sucessfully send to ${fundName.fundName} ${chalk_1.default.red(` (remaining amount ${useraAmount - amount.fundmoney})`)}`));
                                        cond = false;
                                    }
                                }
                                else {
                                    console.log(chalk_1.default.red(' fund should be greater than  number 100'));
                                }
                            }
                        }
                    }
                    // user selected bill
                    else {
                        while (cond) {
                            const accountNumber = yield inquirer_1.default.prompt({
                                message: 'Account Number',
                                name: 'accountNumber',
                                type: 'number'
                            });
                            const billAmount = yield inquirer_1.default.prompt({
                                message: 'Bill Amount',
                                name: 'billmoney',
                                type: 'number',
                            });
                            if (isNaN(billAmount.billmoney) || isNaN(accountNumber.accountNumber)) {
                                console.log(chalk_1.default.red('bill amount or account number incorrect'));
                            }
                            else {
                                if (billAmount.billmoney >= 0) {
                                    if (useraAmount - billAmount.billmoney < 0) {
                                        console.log(chalk_1.default.red('insufficient amount'));
                                        cond = false;
                                    }
                                    else {
                                        console.log(chalk_1.default.green(`bill paid  ${chalk_1.default.red(` (remaining amount ${useraAmount - billAmount.billmoney})`)} `));
                                        cond = false;
                                    }
                                }
                                else {
                                    console.log(chalk_1.default.red('amount is greater then 0'));
                                }
                            }
                        }
                    }
                }
            }
        });
    }
    console.log(atm());
}, 1000);
