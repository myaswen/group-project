# Scuttlr

## Table of contents
1. [Project Summary](#project-summary)
2. [Technologies Used](#technologies-used)
3. [App Screenshots](#app-screenshots)
4. [Local Run Instructions](#local-run-instructions)
5. [Future Features](#future-features)

---
## Project Summary
Scuttlr is fullstack, stateful web-app that draws functionality and style insperation from [tumblr.com](https://www.tumblr.com/). The current build of Scuttlr offers four key features of interaction: posts, comments, likes, and follows. Users are able to switch between the all-posts feed and a personal feed. A user's personal feed is influenced by the users that they follow. When logged in, users are able to like and make comments on any post.

---
## **Technologies Used**

### Backend:
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)

**| [WTForms](https://wtforms.readthedocs.io/en/3.0.x/) | [SQLAlchemy](https://www.sqlalchemy.org/) | [Alembic](https://alembic.sqlalchemy.org/en/latest/) |**

### Frontend:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

**| [React Player](https://www.npmjs.com/package/react-player) |**

---
## App Screenshots

### Sign Up Form
![](https://i.imgur.com/W8Jc5He.png)

### Log In Form
![](https://i.imgur.com/yHvXcnS.png)

### Logged out splash page
![](https://i.imgur.com/Xi6pPbt.png)

### Logged in splash page
![](https://i.imgur.com/AKKUfwN.png)

### Create Post Form
![](https://i.imgur.com/5HibyDj.png)
---

## Local Run Instructions
1. Clone the repository to a local directory.
2. In the root directory, copy the contents of the `.env.example` to a `.env` file.
    - Assign `DATABASE_URL` to `sqlite:///dev.db`
    - Assign `SECRET_KEY` to anything (but keep it a secret!)
    - `SCHEMA` is only used for live deployments and can be set to anything
3. In `./app`, install the backend dependencies:
```
pipenv install
```
4. Still in `./app`, run the Alembic migration:
```
pipenv run flask db upgrade
```
5. Then, seed the database:
```
pipenv run flask seed all
```
6. Start the backend server:
```
pipenv run flask run
```
7. Navigate to `./react-app` and install the frontend dependencies:
```
npm install
```
8. Start the frontend server:
```
npm start
```
---

## Future Features
* Ability to re-blog another user's post.

* Personal blog page customizations.

* Rich text support on posts.

* Post tags to help users find content related to their interests.

* Post and user search functionality with filtering by post type, tags, and post content.

* Expanded video and image post capabilities:

    * AWS3 integration to allow direct uploading of image and video files.

    * Media previews in the create post and video forms.

    * Support for posts with multiple media types and entries.


* Expanded user to user interaction capabilities:

    * Ability to reply to user comments creating a nested interaction.

    * User inbox for notifactions regarding blog interactions.

    * User to user direct messaging.

    * User tags/mentions.
---

## Code Highlights
