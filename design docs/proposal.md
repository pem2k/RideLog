# Ridelog

**Team Members:** @Parker McKillop, @Najib Mosquera

## Description

RideLog is a full-stack social network built for cyclists who want to share their rides and connect with other riders. Users post about a ride with a title, description, and photo, plus stats like elevation gain and max speed. From there they can browse other people's rides, leave comments, add friends, and search for riders by name. Most cyclists end up scattering their ride photos and stats across generic social apps that were never built for the sport, and RideLog pulls all of that into one place made specifically for riders.

## User Personas

**Dana, the Weekend Rider**
Dana rides for fun on weekends and likes sharing routes and photos with a small circle of cycling friends. She isn't chasing numbers so much as the social side of things. She wants to see what everyone else has been riding and cheer them on in the comments.

**Marcus, the Data-Driven Cyclist**
Marcus logs every ride and pays close attention to his numbers, whether that's elevation, max speed, or distance. He wants a place to record rides with real detail and swap notes with other serious riders he's connected with.

**Priya, the New Rider**
Priya picked up cycling a few months ago and is still finding her footing. She's looking for people to follow so she can pick up tips, get a feel for what routes are out there, and feel like part of a community rather than riding on her own.

## User Stories

**Parker, Users, Friends & Auth**

- As a user, I want to register and log in securely so that my account stays protected.
- As Priya, I want to search for other users by name so that I can find people to follow.
- As Dana, I want to add other users as friends so that I can keep up with their rides.
- As a user, I want to view someone's profile and their posts so that I can see their ride history.
- As a user, I want to remove a friend so that I can manage my connections.

**Najib, Posts & Comments**

- As Dana, I want to create a ride post with a title, description, image, and stats like elevation and max speed so that I can share my ride with others.
- As Dana, I want to edit and delete my own posts so that I can fix mistakes or take down a ride.
- As Marcus, I want to view a feed of ride posts so that I can see what everyone has been riding.
- As Priya, I want to comment on a post so that I can ask questions and respond to other people's rides.
- As a user, I want to delete my own comments so that I can manage what I've said.

## Work Distribution

**Parker, Users & Friends collection plus Authentication**
All backend routes and frontend components for user registration, profile viewing, and user search. Friend add and remove logic along with the friends list. Implements Passport authentication (register, login, logout, session management) and protects the application routes.

**Najib, Posts & Comments collections**
All backend routes and frontend components for creating, editing, deleting, and viewing ride posts, including image upload and the stat fields. All backend routes and frontend components for adding, viewing, and deleting comments on posts. This also covers the main ride feed.

## Tech Stack

- **Frontend:** React with Hooks, React Bootstrap, HTML, CSS
- **Backend:** Node.js + Express, bcrypt
- **Database:** MongoDB (Native Node.js Driver)
- **Authentication:** Passport
- **Data Requests:** Fetch
- **Deployment:** Heroku

## Mongo Collections

**Users (Parker)**

- Create: Register a new user
- Read: View profiles, search users by name, view friends list
- Update: Add and remove friends, edit profile
- Delete: Remove a user account

**Posts (Najib)**

- Create: Add a new ride post (title, description, image, elevation, max speed)
- Read: View all posts, view the feed, view a single user's posts
- Update: Edit a post
- Delete: Remove a post

**Comments (Najib)**

- Create: Add a comment to a post
- Read: View comments on a post
- Delete: Remove own comment
