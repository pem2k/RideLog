# RideLog

A full-stack social network for cyclists, built for CS 5610 Web Development. This project uses Node.js, Express, MongoDB (native driver), Passport, React, and React Bootstrap.

Users can create an account, log in, post about their rides with photos and stats, browse a feed of everyone's rides, comment on posts, search for other riders, and follow the people they want to keep up with.

## Project Objective

The goal of this project is to build a full-stack web application using Node.js + Express + MongoDB on the backend and React (with Hooks) on the frontend.

Cyclists typically scatter their ride photos and stats across generic social apps that weren't built for the sport. RideLog pulls that into one place made specifically for riders: log a ride with a title, description, photo, and stats (distance, elevation gain, max speed), then browse, comment on, and follow other riders.

## Live Website

[ADD LIVE DEPLOYMENT LINK HERE]

## Screenshots

[ADD APP SCREENSHOTS HERE]

### Design Mockups

These mockups were created during the design phase, before implementation:

UPDATE IF NEEDED - 

| Login | Register | Feed |
| :---: | :---: | :---: |
| ![Login mockup](design%20docs/RideLog-login.svg) | ![Register mockup](design%20docs/RideLog-register.svg) | ![Feed mockup](design%20docs/RideLog-feed.svg) |

| Ride Editor | Profile | Search |
| :---: | :---: | :---: |
| ![Ride editor mockup](design%20docs/RideLog-ride-editor.svg) | ![Profile mockup](design%20docs/RideLog-profile.svg) | ![Search mockup](design%20docs/RideLog-search.svg) |

## Video Demonstration

[ADD VIDEO DEMONSTRATION LINK HERE]

## Class Reference

This project was created for:

- CS 5610 Web Development
- [CS 5610 Web Development Class Website](https://johnguerra.co/classes/webDevelopment_spring2026/)

## Author

Najib Mosquera and Parker McKillop

- GitHub: [Parker McKillop](https://github.com/pem2k)
- GitHub: [Najib Mosquera](https://github.com/NHazelJ)
- LinkedIn: [ADD PARKER'S LINKEDIN HERE]
- LinkedIn: [ADD NAJIB'S LINKEDIN HERE]

## Features

- User signup and login with session-based authentication (Passport)
- Password hashing with bcrypt
- Create, edit, and delete ride posts (title, description, photo, ride date, distance, elevation gain, max speed)
- Paginated ride feed, newest rides first
- Comment on posts, delete your own comments
- Search for other users by name
- Follow / unfollow other users
- View another user's profile and their ride history
- Owner-only edit/delete controls on posts and comments
- MongoDB database storage (native driver, no Mongoose)
- Client-side rendering with React and React Router
- Environment variables for local configuration

## User Personas

**Dana, the Weekend Rider**
Dana rides for fun on weekends and likes sharing routes and photos with a small circle of cycling friends. She isn't chasing numbers so much as the social side of things. She wants to see what everyone else has been riding and cheer them on in the comments.

**Marcus, the Data-Driven Cyclist**
Marcus logs every ride and pays close attention to his numbers, whether that's elevation, max speed, or distance. He wants a place to record rides with real detail and swap notes with other serious riders he's connected with.

**Priya, the New Rider**
Priya picked up cycling a few months ago and is still finding her footing. She's looking for people to follow so she can pick up tips, get a feel for what routes are out there, and feel like part of a community rather than riding on her own.

## User Stories

**Parker — Users, Follows & Auth**

- As a user, I want to register and log in securely so that my account stays protected.
- As Priya, I want to search for other users by name so that I can find people to follow.
- As Dana, I want to follow other users so that I can keep up with their rides.
- As a user, I want to view someone's profile and their posts so that I can see their ride history.
- As a user, I want to unfollow someone so that I can manage who I follow.

**Najib — Posts & Comments**

- As Dana, I want to create a ride post with a title, description, image, and stats like elevation and max speed so that I can share my ride with others.
- As Dana, I want to edit and delete my own posts so that I can fix mistakes or take down a ride.
- As Marcus, I want to view a feed of ride posts so that I can see what everyone has been riding.
- As Priya, I want to comment on a post so that I can ask questions and respond to other people's rides.
- As a user, I want to delete my own comments so that I can manage what I've said.

## Main User Flow

1. A user opens the app.
2. The user creates an account.
3. The user logs in.
4. The user creates a ride post by entering a title, description, photo, ride date, distance, elevation gain, and max speed.
5. The app saves the post in MongoDB, associated with the logged-in user.
6. The dashboard (feed) shows every user's rides, newest first, paginated.
7. The user can comment on any ride, and delete their own comments.
8. The user can edit or delete their own ride posts.
9. The user can search for other riders and follow/unfollow them.
10. The user can view another rider's profile and ride history.
11. The user can log out.

## Pages

UPDATE AS NEEDED
- **Login** — page for existing users to log in
- **Register** — page for new users to create an account
- **Ride Feed** (`/`) — main dashboard, shows paginated ride posts from all users, with a "Log a Ride" action
- **Create/Edit Ride** (`/rides/new`, `/rides/:postId/edit`) — shared form for logging a new ride or editing an existing one, owner-only for edit
- **User Profile** — [PENDING — backend routes exist (`GET /api/users/:userId`, follow/unfollow, search), frontend page not yet built]

## Backend Routes

**Auth** (`/api/auth`)

- `POST /register`
- `POST /login`
- `POST /logout`
- `GET /me`

**Users** (`/api/users`)

- `GET /search?q=`
- `PATCH /me` (update display name / bio)
- `GET /:userId`
- `POST /:userId/follow`
- `DELETE /:userId/follow`

**Posts** (`/api/posts`)

- `POST /`
- `GET /feed?page=&limit=`
- `GET /:postId`
- `PATCH /:postId`
- `DELETE /:postId`
- `GET /:postId/comments`
- `POST /:postId/comments`

**Comments** (`/api/comments`)

- `DELETE /:commentId`

## MongoDB Collections

This project uses three MongoDB collections — more than the two required.

### Users (Parker)

- **Create:** register a new user
- **Read:** view a profile, search users by name
- **Update:** edit display name / bio, follow / unfollow (updates `following`/`followers` arrays)
- **Delete:** [PENDING — account deletion isn't implemented yet]

### Posts (Najib)

- **Create:** add a new ride post (title, description, image, ride date, distance, elevation, max speed)
- **Read:** view the feed, view a single post
- **Update:** edit a post
- **Delete:** remove a post (also cascades to delete its comments)

### Comments (Najib)

- **Create:** add a comment to a post
- **Read:** view a post's comments
- **Delete:** remove your own comment

## Tech Stack
UPDATE AS NEEDED
- React with Hooks
- React Router
- React Bootstrap
- Node.js
- Express
- MongoDB native driver
- Passport (passport-local)
- bcrypt
- express-session + connect-mongo
- ESLint
- Prettier
- Git and GitHub
- MIT License
- Deployment: Heroku

## Important Project Restrictions

This project does not use:

UPDATE AS NEEDED
- Mongoose
- Template engines such as EJS, Pug, or Handlebars
- CommonJS `require`
- axios
- CORS

The project uses ES modules with `import`/`export`, and the frontend talks to the backend via `fetch` through a Vite dev proxy.

## Folder Structure
UPDATE AS NEEDED
```
RideLog/
  design docs/
    RideLog-color-palette.png
    RideLog-feed.svg
    RideLog-login.svg
    RideLog-profile.svg
    RideLog-register.svg
    RideLog-ride-editor.svg
    RideLog-search.svg

  backend/
    config/
      passport.js
    db/
      connectDB.js
    middleware/
      ensureAuthenticated.js
    models/
      User.js
      Post.js
      Comment.js
    routes/
      auth.js
      users.js
      posts.js
      comments.js
    seed/
    .env.example
    package.json
    server.js

  frontend/
    src/
      api/
        posts.js
        comments.js
      components/
        LoginForm.jsx
        RegisterForm.jsx
        NavBar.jsx
        RideForm.jsx
        RideForm.css
        PostCard.jsx
        PostCard.css
        RideFeedPage.jsx
        CommentForm.jsx
        CommentList.jsx
      context/
        AuthContext.jsx
        useAuth.js
      App.jsx
      main.jsx
      custom-bootstrap.scss
    package.json
    vite.config.js

  rubric.md
  README.md
```

## Environment Variables

This project uses environment variables for local configuration.

Create a `.env` file in `backend/` (copy `backend/.env.example`):

```
MONGO_URI=mongodb://localhost:27017
MONGO_DB_NAME=ridelog
SESSION_SECRET=change-this-to-a-random-string
PORT=3001
```

Do not commit real secret credentials to GitHub. The `.env` file stays local and is listed in `.gitignore`; `backend/.env.example` shows other developers what variables they need without exposing private values.

> Note: the frontend's Vite dev proxy (`frontend/vite.config.js`) forwards `/api` requests to `http://localhost:3001`, so the backend's `PORT` should be set to `3001` for local development.

## How to Install and Run Locally

### 1. Clone the repository

```
git clone [ADD REPO URL HERE]
```

### 2. Install backend dependencies

```
cd backend
npm install
```

### 3. Install frontend dependencies

```
cd ../frontend
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running locally (or point `MONGO_URI` at a MongoDB Atlas cluster).

### 5. Create the backend `.env` file

Copy `backend/.env.example` to `backend/.env` and fill in real values (see [Environment Variables](#environment-variables) above).

### 6. Start the backend

```
cd backend
npm run dev
```

### 7. Start the frontend

```
cd frontend
npm run dev
```

### 8. Open the app in the browser

```
http://localhost:5173
```

## How to Use the App

1. Open the app in your browser.
2. Create a new account.
3. Log in.
4. Click "Log a Ride" and enter a title, description, photo, ride date, distance, elevation gain, and max speed.
5. View your ride on the feed, along with everyone else's rides, newest first.
6. Comment on a ride, or delete your own comments.
7. Edit or delete your own ride posts.
8. Search for other riders and follow/unfollow them.
9. Log out when finished.

## Available NPM Scripts

**Backend** (`backend/`)

```
npm run dev     # start with auto-restart
npm start       # start normally
```

**Frontend** (`frontend/`)

```
npm run dev       # start the Vite dev server
npm run build     # build for production
npm run lint      # run ESLint
```

## Project Requirements Checklist

- Node.js backend
- Express server
- MongoDB database
- At least two MongoDB collections (three: users, posts, comments)
- CRUD-style database operations, each student with full CRUD in at least one collection (Najib: Posts)
- Parker's Users collection: Delete operation not yet implemented
- React frontend with Hooks
- Client-side rendering
- Signup form
- Login form
- Create/edit ride form
- Passport authentication (register, login, logout, session)
- Organized folders for frontend, backend, database, routes, models, CSS
- ESLint config file for the backend (frontend has one; backend does not yet)
- Prettier formatting verified across the codebase
- Bootstrap / React Bootstrap styling
- `package.json` for both frontend and backend
- MIT LICENSE file (declared in `package.json`, file itself not yet added)
- No Mongoose
- No template engines
- No CommonJS `require`
- No axios / no CORS
- No secret credentials committed (double-check before submission)
- Database seeded with 1,000+ synthetic records
- Public demo video
- Screenshots
- Deployment link

## Design Document Summary

The design document includes:

- Project description
- User personas (Dana, Marcus, Priya)
- User stories
- Division of work
- Tools and libraries
- Design mockups (see `design docs/`)

## Division of Work

**Parker — Users, Follows & Authentication**

- Backend and frontend for user registration, login, and logout
- Passport authentication (local strategy, sessions) and route protection
- User model: `sanitizeUser`, `findById`, `updateUser`, `followUser`, `unfollowUser`, `searchUsers`
- `GET /api/users/search`, `PATCH /api/users/me`, `GET /api/users/:userId`, follow/unfollow routes
- Frontend auth pages (`LoginForm`, `RegisterForm`), `NavBar`, `AuthContext`
- Initial project scaffolding and design docs / color palette

**Najib — Posts & Comments**

- Backend and frontend for creating, editing, deleting, and viewing ride posts, including the image field and stat fields
- Backend and frontend for adding, viewing, and deleting comments on posts
- The paginated main ride feed (backend endpoint and frontend page)
- `PostCard` component with owner-only edit/delete controls
- README file
- Slides of the project

## How AI Was Used

**Najib**

- Reviewing the codebase to determine what was and wasn't implemented yet for each ticket before starting work
- Debugging the Posts CRUD backend, plus the minimal Passport/session auth needed to unblock it
- Debugging the paginated ride feed endpoint and its supporting MongoDB index
- Debugging the comments API — nested routes, validation, and cascade-delete of comments when a post is deleted
- Debugging the `RideForm`, `PostCard`, `RideFeedPage`, and `CommentForm`/`CommentList` React components
- Debugging a git merge conflict in `backend/server.js` between two feature branches

**Parker**

[ADD PARKER'S "HOW AI WAS USED" SECTION HERE]

## Security Notes

This project does not expose real MongoDB credentials in the README.

Local development uses a `MONGO_URI` pointing at `localhost` or a placeholder Atlas string. Any real secret values should be stored in `backend/.env` and not committed to GitHub.

## License

This project uses the MIT License.
