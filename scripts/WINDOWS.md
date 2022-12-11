# Setting Windows 11 for Node

## Install Node version manager(nvm)

[Download NVM](https://github.com/coreybutler/nvm-windows/releases) : download latest release `nvm-setup.exe` and install

[Visual Studio Code](https://code.visualstudio.com/) is recommended for this project and use VS Code Terminal 

Open Docs in to VS Code


## Setup Git(if not)
If using git for the first time or not set username and email then follow this commands

```bash
# set user name
git config --global user.name "your name"

git config --global user.email "your github email address"
```

## Set up
Open terminal and follow these instructions

```bash
# install node
nvm install 18

# use Node 18
nvm use 18

# install pnpm
npm install -g pnpm

# install dependencies 
pnpm install


# run development server
pnpm dev
```
