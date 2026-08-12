# Usability Study Report

Application: [RideLog](https://ridelog-app-528562a37f7f.herokuapp.com/)

Authors: Najib Mosquera and Parker McKillop

## Application scope

### Application description

RideLog is a social ride-logging web application for cyclists. Users can create accounts, log rides with statistics and an optional photo, follow other cyclists, browse a ride feed, comment on rides, and manage their profile and posts.

### Target audience

- Recreational and commuter cyclists, primarily ages 18–45, who want to record and share rides
- People comfortable with basic websites and social platforms
- People who may or may not have used fitness applications such as Strava, MapMyRide, or Garmin Connect
- Keyboard and assistive-technology users are included in the target audience

### Data description

- User data: username, email, display name, bio, and follower/following relationships
- Ride posts: title, description, date, distance in miles, elevation gain in feet, maximum speed in mph, and an optional photo
- Comments: text, author, date, and associated ride post
- Feed: paginated ride posts from followed users

## Main tasks and success criteria

For every task, record whether the participant completed it independently, completed it with a prompt, or could not complete it. Also record completion time, errors or wrong turns, requests for help, and comments made while thinking aloud.

- T1 — Register and log in: create an account, log out, and log back in. Success means the participant reaches the authenticated ride feed after both registration and the second login.
- T2 — Create a ride post: publish a ride containing a title, description, date, distance, elevation, and maximum speed. A photo is optional. Success means the new ride appears in the application with the entered information.
- T3 — Edit a ride post: change the distance on the ride created in T2. Success means the corrected distance is displayed on the saved post.
- T4 — Find and follow another user: search for a prepared rider and follow them. Success means the rider's profile shows that the follow action took effect.
- T5 — Comment on a ride post: add a comment to a prepared ride from another user. Success means the comment appears with the participant's username.
- T6 — Delete a comment: remove the comment created in T5. Success means that comment is no longer displayed.
- T7 — View and edit a profile: open the participant's profile and update the display name or bio. Success means the saved profile displays the new value.
- T8 — Delete a ride post: delete the test ride created in T2. Success means the ride is no longer present in the participant's ride history.
- T9 — Complete a core workflow using only the keyboard: search for a prepared rider, open the rider's profile, follow or unfollow them, return to the feed, and post a comment without using a mouse or touch input. Success means every action can be reached and activated with the keyboard, focus remains visible and follows a logical order, no keyboard trap occurs, and the participant can tell whether each action succeeded.
- T10 — Identify a form error using only the keyboard: open the Log a Ride form, leave every field empty, and try to submit it. Explain what needs to be corrected, return to the Title field, enter a title, and stop. Success means the participant can understand the validation feedback and reach and correct the field without using a mouse or touch input.

## Experiment

### Session schedule

Target duration: approximately 45 minutes.

| Activity                                       | Target time |
| ---------------------------------------------- | ----------: |
| Welcome, consent, and think-aloud instructions |   4 minutes |
| Demographic questions                          |   4 minutes |
| Initial impression                             |   2 minutes |
| T1–T8                                          |  23 minutes |
| T9–T10 accessibility tasks                     |   8 minutes |
| Post-test questionnaire and final comments     |   4 minutes |

If a participant exceeds the task budget, stop the task after a reasonable attempt, record it as incomplete or assisted, and continue. Do not rush consent or the final comments.

### Preparation

- Recruit three participants per project member who reasonably match the target audience.
- Create a fresh browser session with no existing RideLog login.
- Prepare two searchable users with known usernames and at least one ride in the feed.
- Use only study data for delete tasks.
- Confirm that the deployed application and database are working before each session.
- Prepare screen, audio, and optional camera recording. Confirm that notifications and unrelated personal information will not appear.
- Make a short test recording with readable text and clear audio.
- Keep the mouse available for T1–T8, then place it out of reach for T9 and T10.
- Prepare a timer and a copy of the observation sheet.

### Introduction and consent

Read aloud:

Welcome, and thank you for participating. Today we are testing RideLog, not you. I will ask you to complete several activities while thinking aloud. Please say what you are looking for, what you expect to happen, and anything that seems confusing. You may ask questions, skip any question, take a break, or stop at any time.

Ask: May I record the screen and audio for this class usability study? The recording will be used to review the session and will be shared only as required for the course.

Record whether consent was given. Do not record if the participant does not consent.

Then say: Please approach the application as a cyclist who wants to record rides and connect with other riders. During the last two tasks, I will ask you to avoid the mouse so we can evaluate keyboard access.

### Demographic questions

Tell the participant that every question is optional and that they may choose not to answer.

1. What is your age range? 18–24, 25–34, 35–44, 45+, or prefer not to answer.
2. How often do you use social media or content-sharing platforms? Daily, weekly, rarely, never, or prefer not to answer.
3. Have you used a fitness or activity-tracking application such as Strava, MapMyRide, or Garmin Connect? Yes, no, or prefer not to answer.
4. How comfortable are you with web applications? Very comfortable, somewhat comfortable, not very comfortable, or prefer not to answer.
5. Do you regularly use keyboard navigation, screen magnification, a screen reader, voice control, or other accessibility settings? Please share only what you are comfortable sharing.

Do not ask a participant to disclose a disability.

### Task script

Initial impression:

I am going to show you a web application. Before starting the tasks, look at the screen and tell me what you think the application is for and what you expect you can do with it.

T1 — Register and log in:

Imagine you just heard about RideLog and want to try it. Create an account. Then log out and log back in.

T2 — Create a ride post:

You finished a bike ride and want to share it. Create a ride post with a title, description, date, distance, elevation gain, and maximum speed. Add a photo if you would like.

T3 — Edit a ride post:

You realize the distance on the ride you just posted is incorrect. Find the post and change its distance to 14 miles.

T4 — Find and follow another user:

Search for [prepared username], open that rider's profile, and follow them.

T5 — Comment on a ride post:

Find the prepared ride titled [prepared ride title] and leave a supportive comment on it.

T6 — Delete a comment:

You changed your mind about the comment you just posted. Delete it.

T7 — View and edit your profile:

Open your profile and update either your display name or your bio. Save the change.

T8 — Delete a ride post:

Delete the test ride you created earlier in the session.

T9 — Keyboard-only core workflow:

For this task, do not use the mouse, trackpad, or touchscreen. Using only the keyboard, search for [keyboard-task username], open that rider's profile, follow or unfollow the rider, return to the feed, and post a comment on one ride. Please continue thinking aloud, especially when you are looking for keyboard focus or are unsure what is selected.

If the participant asks which keys are available, explain that Tab and Shift+Tab move between interactive controls, Enter or Space commonly activates a control, and arrow keys may operate some controls. Providing this general keyboard reminder is not a task failure, but record that it was provided. Do not identify the next interface control.

T10 — Keyboard form error:

Continue without the mouse. Open the Log a Ride form, leave every field empty, and try to submit it. Tell me what needs to be corrected and how you know. Then return to the Title field, enter a title, and stop.


### Post-test questionnaire

Use this five-point scale for each statement:

1 — Strongly disagree; 2 — Disagree; 3 — Neutral; 4 — Agree; 5 — Strongly agree

For each task T1–T10, ask the participant to rate both statements:

1. The application allowed me to complete this task effectively.
2. This task was intuitive and easy to complete.

Then ask:

1. The application was effective overall.
2. The application was intuitive and easy to use overall.
3. I always understood which element had keyboard focus during T9 and T10.
4. The form errors in T10 were clear and easy to find.
5. Do you have any final comments or suggestions for improvement?


## Experiment notes

Immediately after each session, write down observations while they are fresh. Rewatch the recording and note moments when the participant hesitated, became frustrated, took a wrong turn, missed feedback, lost keyboard focus, encountered clipped content, or needed help. Use observable evidence rather than guessing at the participant's intent.

Outcome codes: I = completed independently; P = completed with a prompt; N = not completed.

### Najib's Participant 1 : Henry Li

Session date: 08/09/2026

Recording evidence link: https://youtu.be/GdGiS7HxHVE

Recording consent given: Yes

Demographic answers:

- Age range: 35-44
- Social media frequency: Daily
- Fitness app experience: Apple watch Health App
- Web application comfort: very comfortable
- Keyboard or assistive-technology experience: keyboard and mouse

| Task               | Outcome (I/P/N) | Time | Errors, prompts, quotations, and observations |
| ------------------ | --------------- | ---- | --------------------------------------------- |
| Initial impression | successful | 2:25 |  standard login page, toggle dark/light mode    |
| T1 | successful |4 min |google login, or other platform login, make stronger password protection (add symbols), eye icon with toggle to show real password. Maybe UX improvement, bicycle picture|
| T2 | successful | 10 |  add an asterik next to the description or any field. or a "|" at the end. In the photo area, make the font color darker so it's easier to see. Add more supporting type of files other than .jpg|
| T3 | successful |15 min | no error, user was able to updated accordingly |
| T4 | successful |18 min | user was able to serach,open rider and follow  |
| T5 | successful |20 min | user recommend newest comment on top, older bottom |
| T6 | successful |24 min | add an edit button too, not just delete button  |
| T7 | successful |25 min | everything good in here |
| T8 | successful |26 min | everything good nothing to add|
| T9 | successful |28 min | everything was done with the keyboard successfully |
| T10| successful |32 min | task completely with the keyboard alone |

Accessibility observations from T9 and T10:

- Focus visibility and order: 5
- Controls that could not be reached or operated:5
- Keyboard traps or unexpected focus movement:5
- Feedback, errors, and status changes:5
- Form error clarity and keyboard recovery:5

| Task    | Effective (1–5) | Intuitive/easy (1–5) | 
| ------- | --------------: | -------------------: |
| T1      |       4         |          5           | 
| T2      |       5         |          5           | 
| T3      |       4         |          5           | 
| T4      |       4         |          5           | 
| T5      |       4         |          5           | 
| T6      |       4         |          5           | 
| T7      |       4         |          5           | 
| T8      |       5         |          5           | 
| T9      |       4         |          5           | 
| T10     |       5         |          5           | 
| Overall |       5         |          5           | 

Keyboard-focus rating: 5

Form-error clarity rating: 5

### Post-test questionnaire

Use this five-point scale for each statement:

1 — Strongly disagree; 2 — Disagree; 3 — Neutral; 4 — Agree; 5 — Strongly agree

For each task T1–T10, ask the participant to rate both statements:

1. The application allowed me to complete this task effectively : 5
2. This task was intuitive and easy to complete : 5

Then ask:

1. The application was effective overall : 5
2. The application was intuitive and easy to use overall : 4
3. I always understood which element had keyboard focus during T9 and T10 : 5
4. The form errors in T10 were clear and easy to find : 5
5. Do you have any final comments or suggestions for improvement? Fixing the recommended suggestion will improve the app

### Najib's Participant 2 : Shen

Session date: 08/09/2026

Recording evidence link: https://youtu.be/zddrBMzq4qo

Recording consent given: Yes

Demographic answers:

- Age range: Prefer not to answer
- Social media frequency: Daily
- Fitness app experience: No
- Web application comfort: Somewhat comfortable
- Keyboard or assistive-technology experience: Keyboard

| Task               | Outcome (I/P/N) | Time | Errors, prompts, quotations, and observations |
| ------------------ | --------------- | ---- | --------------------------------------------- |
| Initial impression |  Successful     |3 min | riding bicycle, creating stories about riding, calendar. Likes dark color and to be super simple. Logo will be nice to have. keep it simple better for the eye. |
| T1 | Successful | 6 min | when creating account, anticipating how long username is or password is, have a suggestion. add more hints to user to know when it's optional and when it's not. put default parameters for username and password (transparent edger to propose the user to use a similar password)|
| T2 | Successful | 10 min | for require put a asterisk and for the optional put like (optional next to the field), add a cancel button if user decides to not enter an log, fix the choose file color, make it more darker. calendar logo should be brighter - easy on the eye|
| T3 | Successful | 17 min | all good here |
| T4 | Successful | 20 min | so clicking the following letter to go in and see who are you following |
| T5 | Successful | 22 min | newest comment in the top. |
| T6 | Successful | 24 min | have an extra layer of the question "are you sure you want to delete the comment" |
| T7 | Successful | 25 min | the "@username" should update to the newer profile name, accordingly |
| T8 | Successful | 27 min | nothing to improve, all good here |
| T9 | Successful | 30 min | we need to fix the order, newer has to come on top, older at the bottom |
| T10| Successful | 35 min | not much at all to be improve here |

Accessibility observations from T9 and T10:

- Focus visibility and order: 5
- Controls that could not be reached or operated: 5
- Keyboard traps or unexpected focus movement: 5
- Feedback, errors, and status changes: 5
- Form error clarity and keyboard recovery: 5

| Task    | Effective (1–5) | Intuitive/easy (1–5) |
| ------- | --------------: | -------------------: | 
| T1      |       4         |         5            |       
| T2      |       4         |         5            |       
| T3      |       4         |         5            |       
| T4      |       5         |         5            |       
| T5      |       5         |         5            |       
| T6      |       5         |         5            |    
| T7      |       4         |         5            |   
| T8      |       4         |         5            |       
| T9      |       5         |         5            |  
| T10     |       5         |         5            |   
| Overall |       5         |         5            | 

Keyboard-focus rating: 5

Form-error clarity rating:  5

### Post-test questionnaire

Use this five-point scale for each statement:

1 — Strongly disagree; 2 — Disagree; 3 — Neutral; 4 — Agree; 5 — Strongly agree

For each task T1–T10, ask the participant to rate both statements:

1. The application allowed me to complete this task effectively : 5
2. This task was intuitive and easy to complete : 5

Then ask:

1. The application was effective overall : 5
2. The application was intuitive and easy to use overall : 4
3. I always understood which element had keyboard focus during T9 and T10 : 5
4. The form errors in T10 were clear and easy to find : 5
5. Do you have any final comments or suggestions for improvement? Fixing the recommended suggestion will improve the app

### Najib's Participant 3 : Jennifer Chou

Session date: 08/10/2026

Recording evidence link: https://youtu.be/BozIYbLhcP0

Recording consent given: Yes

Demographic answers:

- Age range: 35-44
- Social media frequency: Daily
- Fitness app experience: Apple health app
- Web application comfort: Very comfortable
- Keyboard or assistive-technology experience:keyboard navigation, screen magnification, a screen reader, voice control

| Task               | Outcome (I/P/N) | Time | Errors, prompts, quotations, and observations |
| ------------------ | --------------- | ---- | --------------------------------------------- |
| Initial impression|  Successful    | 4 min  | ride sharing application,maybe a picture in the background, Add logo, add Rides section next to the Profile |
| T1 |  Successful   | 6 min  | pretty straight forward, see something more in the background, maybe a picture that gives more information and brighter background |
| T2 |  Successful   | 9 min | having maybe 1 log a ride or expecting something different so it's not confusing which one to click on, having some preset values like suggesting, adding time section in the questionare when logging a ride, title should be above the picture|
| T3 |  Successful  | 14 min | good enough for the editting part    |
| T4 |  Successful  | 15 min | having a pop up suggesting, like people who you may know, around you|
| T5 |  Successful  | 17 min | newer first and then older lower. Add a divider between comments and also add an edit function for the comments |
| T6 |  Successful  | 19 min | have a pop up windows asking if you are sure that you want to delete the comment |
| T7 |  Successful  | 20 min | Profile was blending in with the Rides maybe have a divider or make sure it looks better, maybe Edit profile stand out, just have the profile alone not with the rides, have Rides section there alone so it's easier to navigate|
| T8 |  Successful  | 22 min | delete was pretty hidden, change color and update |
| T9 |  Successful  | 24 min | no suggestion, everything on the keyboard navigation worked as expected    |
| T10|  Successful  | 29 min | error showing were as expected and nothing to change here |

Accessibility observations from T9 and T10:

- Focus visibility and order: 5
- Controls that could not be reached or operated:5
- Keyboard traps or unexpected focus movement:5
- Feedback, errors, and status changes:5
- Form error clarity and keyboard recovery:5

| Task    | Effective (1–5) | Intuitive/easy (1–5) | 
| ------- | --------------: | -------------------: |
| T1      |       4         |          5           | 
| T2      |       5         |          5           | 
| T3      |       5         |          5           | 
| T4      |       4         |          5           | 
| T5      |       5         |          5           | 
| T6      |       4         |          5           | 
| T7      |       5         |          5           | 
| T8      |       4         |          5           | 
| T9      |       5         |          5           | 
| T10     |       5         |          5           | 
| Overall |       5         |          5           | 

Keyboard-focus rating: 5

Form-error clarity rating: 5

### Post-test questionnaire

Use this five-point scale for each statement:

1 — Strongly disagree; 2 — Disagree; 3 — Neutral; 4 — Agree; 5 — Strongly agree

For each task T1–T10, ask the participant to rate both statements:

1. The application allowed me to complete this task effectively : 4
2. This task was intuitive and easy to complete : 5

Then ask:

1. The application was effective overall : 5
2. The application was intuitive and easy to use overall : 4
3. I always understood which element had keyboard focus during T9 and T10 : 4
4. The form errors in T10 were clear and easy to find : 4
5. Do you have any final comments or suggestions for improvement? Fixing the recommended suggestion will improve the app

## Recording and document evidence

Recordings are stored outside the public repository.

| Evidence                | Link | Access verified while signed out or as the instructor | Date verified |
| ----------------------- | ---- | ----------------------------------------------------- | ------------- |
| Najib's Participant 1 recording - Henry | https://youtu.be/GdGiS7HxHVE    |  yes       |  08/10/2026   |
| Najib's Participant 2 recording - Jennifer | https://youtu.be/BozIYbLhcP0    |  yes    |  08/10/2026   |
| Najib's Participant 3 recording - Shen | https://youtu.be/zddrBMzq4qo    | yes         |  08/10/2026   |


Recording links verified: verified

## Prioritized issues and corresponding changes

| Issue and supporting evidence | Proposed change | Priority | Implemented? How was it verified? |
| ----------------------------- | --------------- | -------- | --------------------------------- |
|                               |                 |          |                                   |
|                               |                 |          |                                   |
|                               |                 |          |                                   |
|                               |                 |          |                                   |
|                               |                 |          |                                   |
