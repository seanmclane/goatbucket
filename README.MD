# GoatBucket - A wallet for [GoatNickels](https://github.com/seanmclane/goatnickels)

![GoatBucket Screenshot](./pre-alpha.png)

You need place to hold your GoatNickels. Put 'em in a bucket!

## Quick Start Guide

### Download the app
Get the desktop app for your OS [here](https://goatnickels.com/download).

### Creating an account
Upon startup, you will be prompted to make an account. This sets up a new account in the app and creates a file at `~/.goatnickels/keystore.json`. **Make a backup of this file!** If you lose your key, you will not be able to recover GoatNickels in the account.

All accounts start with `goat_` and are followed by a long hash. Raw account balances are in Pellets, the smallest unit of goat money. 1 Pellet = .00000001 GoatNickels.

### Checking your balance
The Wallet page shows your account number and current balance. The balance refreshes automatically every five seconds. At first you will have a balance of zero and your account does not exist in the blockchain until a transaction is made. To get some GoatNickels and establish your account you have two options:
1. Get a friend to send some to your account number
2. Start mining GoatNickels, following the guide at the [GoatNickels](https://github.com/seanmclane/goatnickels) page.

### Sending GoatNickels
The Transactions page lets you paste an address and set an amount to send. Amounts in the wallet are all in GoatNickels.
