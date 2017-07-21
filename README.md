# Summary

Basic React App that allows a user to add Courses. 
It has Redux which I am learning for shits and gigs... 
Tests, linting and babel all set up



******************************************************************************************************************************        
## GIT
******************************************************************************************************************************

SET UP GIT FOR FIRST TIME:

1 add a .gitignore to the root directory
    go to: https://www.gitignore.io/
    type in node and generate
    this generates a .gitignore file for you...
    copy and paste this into the .gitignore file in your root directory.
    this ignores stuff like node_modules folder which is useless...


2 Go to github and sign in - create a new repository.

Run these commands:
    `git init`
    `git status` (notice everything in red)
    `git add --all`
    `git status (notice everything in green)`
    `git commit -m "description"`
    `git status` (notice now says nothing to commit - your code is safe)
    (the next step depends on the generated url)
    `git remote add origin https://github.com/...`
    `git push -u origin master`


PUSHING CHANGES:

change file
`git status` (to see what is outstanding - notice it is red)
`git add --all`
`git status` (notice it is green)
`git commit -m "description"`
`git status` (notice now says nothing to commit - your code is safe)
`git push -u origin master`

******************************************************************************************************************************

******************************************************************************************************************************        
## GIT ReduxBasic BRANCH
******************************************************************************************************************************

Note the first time I have done Redux is here. 

This has basic one Action, Reducer, Store and uses the React-Redux's Connection Function and Provider Component.

To get back to this, I have created a branch called ReduxBasic (locally) and ReduxBasic (remotely).

This branch contains verbose comments.

`git branch --all`
`git checkout ReduxBasic`

Note, to push to this branch, do add and commit, then:
`git push -u origin ReduxBasic`

then to switch back:

`git branch --all`
`git checkout master`

******************************************************************************************************************************

******************************************************************************************************************************        
## GIT ReduxThunkFirst BRANCH
******************************************************************************************************************************

Note ReduxHelper is good for starter, but it doesn't use Asynchronous calls (use Thunk) and the CoursesPage.js (which should be a Container Component) has Presentational (dumb) logic. So the Refactor refers to separating this Presentational logic into a new couple of classes. 

This has basic one Action, Reducer, Store and uses the React-Redux's Connection Function and Provider Component.

To get back to this, I have created a branch called ReduxThunkFirst (locally) and ReduxThunkFirst (remotely)

This branch contains verbose comments.

`git branch --all`
`git checkout ReduxThunkFirst`

Note, to push to this branch, do add and commit, then:
`git push -u origin ReduxThunkFirst`

then to switch back:

`git branch --all`
`git checkout master`

******************************************************************************************************************************


******************************************************************************************************************************        
## GIT ReduxThunkSecond BRANCH
******************************************************************************************************************************

Note ReduxThunkFirst uses Asynchronous calls (use Thunk) for GET. This branch handles a CREATE, new GET and UPDATE. It also creates a new Container Component with three Presentational Components, one being a Child and a Parent. 

This adds three Actions, adds a Reducer and expands on the last Reducer, and uses the React-Redux's Connection Function and Provider Component.

To get back to this, I have created a branch called ReduxThunkSecond (locally) and ReduxThunkSecond (remotely)

This branch contains verbose comments.

`git branch --all`
`git checkout ReduxThunkSecond`

Note, to push to this branch, do add and commit, then:
`git push -u origin ReduxThunkSecond`

then to switch back:

`git branch --all`
`git checkout master`

******************************************************************************************************************************


******************************************************************************************************************************
## SET UP
******************************************************************************************************************************

To set me up:

`git -c http.sslVerify=false clone https://github.com/lbelfield/pluralsight-redux-starter.git`

`npm install`


To make the app run
    `npm run build`
    `npm start`
    `npm test`
    `localhost:3000`

******************************************************************************************************************************
=======
