# Project Title
Sanskrit

## Overview

Sanskrit is an application to help yogis learn the sanskrit names of their favorite poses. This is meant to go alongside yoga teaches on history, philosophy and technique.


### Problem

During my 200 hour yoga teacher training I found no tools to help me learning this whole other language of sanskrit. The only options were dry textbooks, which weren't engaging.



### User Profile

Yoga Enthusiast
    - currently or interest in yoga trainings
    - wanting to deepen their knowledge of yoga poses in the sanskrit language


### Features

- As a user, I want to be to see the sanskrit & english name, image, and description of a pose.
- As a user, I want to be able to find tips and tricks of a pose.
- As a user, I want a to be able to test my knowledge in a fun and engaging way.

- As a user, I want to be able to create an account to track my progress 
- As a user, I want to be able to login to my account to see previous quiz scores.

- As a logged in user, I want to be able to change my difficulty level 


## Implementation

### Tech Stack

- React
- TypeScript
- Express
- Client libraries: 
    - react
    - react-router
    - axios
- Server libraries:
    - express
    - bcrypt for password hashing

### APIs

- No external APIs will be used

### Sitemap

- Home page/Register/Login
- Purpose/Mission statement
- Begin Quiz
- Quiz Page
- Success page
- Wrong Answer page
- Score page
- Reference

### Mockups

#### Home Page
![](welcome.png)


#### Mission Page
![](mission.png)

#### Begin Quiz Page
![](begin.png)

#### Quiz Page
![](quiz.png)

#### Success Page
![](success.png)

#### Wrong Answer Page
![](wrong-answer.png)

#### Score Page
![](score.png)




### Endpoints

**GET /poses**

- Get cafés, with an optional "visited" if the user is logged in or not

Parameters:
- longitude: User-provided location as a number
- latitude: User-provided location as a number
- token (optional): JWT used to add "visited" boolean


Response:
```
[
    {
        "id": 1,
        "english_name": "Child Pose",
        "sanskrit_name": "Bālāsana",
        "photo": "childpose.png",
        "description": "The child's pose helps to stretch your back and muscles around your hips."
        "tips": "In this pose, kneel and sit on your knees. Lean forward, keeping your buttocks on your heels, and rest your forehead on the floor. Move your arms so they're next to your legs, palms facing up"
    },
    ...
]
```


**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**POST /users/login**

- Login a user

Parameters:
- email: User's email
- password: User's provided password

Response:
```
{
    "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

### Auth


## Roadmap

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing
    - create json file with data
    - find images of the poses and edit so they are all the same size


- Deploy client and server projects so all commits will be reflected in production

- Feature: Login Form
    - Create GET /users endpoint

- Feature: Register Form 
    - Implement register page + form
    - Create POST /users/register endpoint

- Feature: Get Quiz data
    - Create GET /poses endpoint 

- Feature: Sanskrit character/buttons
    - Create reusable components with with character for users to click

- Feature: Mission page

- Feature: Success page

- Feature: Score page


- Bug fixes

- DEMO DAY

## Nice-to-haves

- Video/ Animations or people or characters doing the pose 
- levels (1,2,3) of challenge
- login authentication 
- audio, pronunciations of the name 