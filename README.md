# healthmate

## Sample images

<img width="1434" alt="Screenshot 2023-09-16 at 2 35 01 PM" src="https://github.com/aditya-mittal24/healthmate/assets/93635516/a5f60e83-c024-4577-92da-523a48880894">
<img width="1440" alt="Screenshot 2023-09-16 at 2 34 52 PM" src="https://github.com/aditya-mittal24/healthmate/assets/93635516/234e8056-2ffe-4305-9056-e26b3df5078f">
<img width="1440" alt="Screenshot 2023-09-16 at 2 40 54 PM" src="https://github.com/aditya-mittal24/healthmate/assets/93635516/ba1c404d-36d9-48fc-b088-d8db3e338143">
<img width="1440" alt="Screenshot 2023-09-16 at 2 35 10 PM" src="https://github.com/aditya-mittal24/healthmate/assets/93635516/bdde0302-5289-4bde-84e9-8105997e014f">
<img width="1440" alt="Screenshot 2023-09-16 at 3 11 42 PM" src="https://github.com/aditya-mittal24/healthmate/assets/93635516/5319bdb5-253c-4bc6-bff5-3d16480de828">
<img width="1435" alt="Screenshot 2023-09-16 at 3 10 55 PM" src="https://github.com/aditya-mittal24/healthmate/assets/93635516/6b5a775d-fffe-4174-a90b-495d9e7217fd">

## Setup

## Backend

The first thing to do is to clone the repository:

```sh
$ git clone https://github.com/aditya-mittal24/healthmate.git
$ cd healthmate
```

Create a virtual environment to install dependencies in and activate it:

```sh
$ source env/bin/activate
```

Then install the dependencies:

```sh
(env)$ pip install -r requirements.txt
```
Note the `(env)` in front of the prompt. This indicates that this terminal
session operates in a virtual environment set up by `virtualenv2`.

Once `pip` has finished downloading the dependencies:
```sh
(env)$ python3 manage.py runserver
```

## Frontend
```sh
$ cd frontend/healthmate
```
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


