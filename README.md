# Welcome to MERN September 2021!
with your gracious host: @mazurasdf
[link to youtube playlist here](https://www.youtube.com/playlist?list=PLBZwc4aWOVuIT7bD_evBgCzBfEKolalfU)

## Here's some handy information for this repo:
* in your terminal of choice, run `git clone https://github.com/mazurasdf/MERN_September2021.git`
* cd into the project of your choice
##### if the project is react only
1. run `npm install` to install the dependencies of the project
2. run `npm start` to the get the react server running
#### if the project is back end only
1. run `npm install` to install the dependencies of the project
2. run `nodemon server.js` to get the server running
#### if the project is full stack
1. run `npm install` to install the dependencies of the back end
2. run `nodemon server.js` to get the back end running
3. open a second terminal(second instance window or hit plus VS Code's terminal to make a second one
4. in the second terminal, cd into the react project, usually called "client"
5. run `npm install` to install the dependencies of the front end
6. run `npm start` to get the front end going alongside the back end

## Here's some handy info about using git in your terminal:

#### Push to GitHub for the first time
* cd into project from terminal (need to be inside your project)
* `git init` (initialize an empty repo in your project)
* `git add .` (add everything that's been changed, staging it for pushing into github)
* `git commit -m "First commit"` (Give a descriptive name to what you're adding)
* `git branch -M main` (create the main branch, overwrites default master branch)
* `git remote add origin "your origin url here"` (connects you to the git repository)
* `git push -u origin main` (add everything you staged with git add to your repo)

#### Update an existing project
* cd into the project from terminal (need to be inside your project)
* `git add .` (adds all the files you changed, staging it for pushing into github)
* `git commit -m "Second commit or whatever"` (Give a descriptive name to what you're editing)
* `git push` (add everything you just committed to your repo)

#### Other handy git commands
* `git pull` downloads any updates made by yourself or other collaborators
* `git checkout nameOfBranch` if you have multiple branches, this will change the working branch

#### Don't forget these steps when setting up your full stack project!
* create project folder
* create server.js with boilerplate code adjusted for the name of your routes file
* run `npm init -y`
* run `npm install express mongoose cors`
    * this adds all the necessary dependencies for our back end
* set up the file structure as such
    * ![back end structure](https://github.com/NicholeKing/MERN_Nov2020/blob/main/full-stack-lecture/img/backend_structure.PNG?raw=true)
    * don't forget to add the files and code in the server folder!
* create the frontend by running `npx create-react-app client` from the main project folder
* `cd client/`
* run `npm install axios react-router-dom`
    * this adds the dependencies we need for the front end

:broccoli: :broccoli: :broccoli:
