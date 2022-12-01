#!/bin/bash

## basic configuration vars
git_branch="main"
node_version="18"

# Added this usefull function from a Stack Overflow post:
# Link: http://stackoverflow.com/questions/5947742/how-to-change-the-output-color-of-echo-in-linux
function coloredEcho() {
  local exp=$1
  local color=$2
  if ! [[ $color =~ '^[0-9]$' ]]; then
    case $(echo $color | tr '[:upper:]' '[:lower:]') in
    black) color=0 ;;
    red) color=1 ;;
    green) color=2 ;;
    yellow) color=3 ;;
    blue) color=4 ;;
    magenta) color=5 ;;
    cyan) color=6 ;;
    white | *) color=7 ;; # white or invalid color
    esac
  fi
  tput setaf $color
  echo $exp
  tput sgr0
}

# Base installation function:
# 1 os setup
function setupServer() {
  # Simple setup.sh for Node Project
  coloredEcho "Setting up a machine for project development..." blue

  curl -V

  # install nvm
  coloredEcho "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash" blue
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
  export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
  source ~/.zshrc

  coloredEcho "nvm install $node_version" blue
  nvm install $node_version

  coloredEcho "Machine is ready" blue
}

# setup project
function setupProject() {
  # git clone/pull and install deps as well
  coloredEcho "Installing dependencies..." magenta
  git checkout $git_branch
  git pull
  npm install --global yarn
  yarn
  coloredEcho "Project is ready read README.md for running localy" magenta
}

setupServer # machin setup with os dependances and node

setupProject # install dependences and pull
