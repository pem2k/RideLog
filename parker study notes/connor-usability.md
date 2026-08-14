# Usability Study Report

Application: [RideLog](https://ridelog-app-528562a37f7f.herokuapp.com/)

Author: [Your name]

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

### Facilitator observation prompts

Do not interrupt the participant to ask these while they are actively working. Use them only after a task or when the participant has stopped thinking aloud.

- What did you expect to happen there?
- What were you looking for?
- What, if anything, made that difficult?
- Without clicking it, what do you think that control will do?

Avoid leading questions such as “Did you see the button at the top?” If help is required, record the prompt and the point at which it was given.

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

## Accessibility checks

| Check               | Result | Evidence link | Notes |
| ------------------- | ------ | ------------- | ----- |
| Keyboard navigation |        |               |       |
| Semantic structure  |        |               |       |
| axe or Lighthouse   |        |               |       |

## Experiment notes

Immediately after each session, write down observations while they are fresh. Rewatch the recording and note moments when the participant hesitated, became frustrated, took a wrong turn, missed feedback, lost keyboard focus, encountered clipped content, or needed help. Use observable evidence rather than guessing at the participant's intent.

Outcome codes: I = completed independently; P = completed with a prompt; N = not completed.

### Participant 1

Session date:

Recording evidence link:

Recording consent given:

Demographic answers:

- Age range:
- Social media frequency:
- Fitness app experience:
- Web application comfort:
- Keyboard or assistive-technology experience:

| Task               | Outcome (I/P/N) | Time | Errors, prompts, quotations, and observations |
| ------------------ | --------------- | ---- | --------------------------------------------- |
| Initial impression |                 |      |                                               |
| T1                 |                 |      |                                               |
| T2                 |                 |      |                                               |
| T3                 |                 |      |                                               |
| T4                 |                 |      |                                               |
| T5                 |                 |      |                                               |
| T6                 |                 |      |                                               |
| T7                 |                 |      |                                               |
| T8                 |                 |      |                                               |
| T9                 |                 |      |                                               |
| T10                |                 |      |                                               |

Accessibility observations from T9 and T10:

- Focus visibility and order:
- Controls that could not be reached or operated:
- Keyboard traps or unexpected focus movement:
- Feedback, errors, and status changes:
- Form error clarity and keyboard recovery:

| Task    | Effective (1–5) | Intuitive/easy (1–5) | Notes |
| ------- | --------------: | -------------------: | ----- |
| T1      |                 |                      |       |
| T2      |                 |                      |       |
| T3      |                 |                      |       |
| T4      |                 |                      |       |
| T5      |                 |                      |       |
| T6      |                 |                      |       |
| T7      |                 |                      |       |
| T8      |                 |                      |       |
| T9      |                 |                      |       |
| T10     |                 |                      |       |
| Overall |                 |                      |       |

Keyboard-focus rating:

Form-error clarity rating:

Final comments:

### Participant 2

Session date:

Recording evidence link:

Recording consent given:

Demographic answers:

- Age range:
- Social media frequency:
- Fitness app experience:
- Web application comfort:
- Keyboard or assistive-technology experience:

| Task               | Outcome (I/P/N) | Time | Errors, prompts, quotations, and observations |
| ------------------ | --------------- | ---- | --------------------------------------------- |
| Initial impression |                 |      |                                               |
| T1                 |                 |      |                                               |
| T2                 |                 |      |                                               |
| T3                 |                 |      |                                               |
| T4                 |                 |      |                                               |
| T5                 |                 |      |                                               |
| T6                 |                 |      |                                               |
| T7                 |                 |      |                                               |
| T8                 |                 |      |                                               |
| T9                 |                 |      |                                               |
| T10                |                 |      |                                               |

Accessibility observations from T9 and T10:

- Focus visibility and order:
- Controls that could not be reached or operated:
- Keyboard traps or unexpected focus movement:
- Feedback, errors, and status changes:
- Form error clarity and keyboard recovery:

| Task    | Effective (1–5) | Intuitive/easy (1–5) | Notes |
| ------- | --------------: | -------------------: | ----- |
| T1      |                 |                      |       |
| T2      |                 |                      |       |
| T3      |                 |                      |       |
| T4      |                 |                      |       |
| T5      |                 |                      |       |
| T6      |                 |                      |       |
| T7      |                 |                      |       |
| T8      |                 |                      |       |
| T9      |                 |                      |       |
| T10     |                 |                      |       |
| Overall |                 |                      |       |

Keyboard-focus rating:

Form-error clarity rating:

Final comments:

### Participant 3

Session date:

Recording evidence link:

Recording consent given:

Demographic answers:

- Age range:
- Social media frequency:
- Fitness app experience:
- Web application comfort:
- Keyboard or assistive-technology experience:

| Task               | Outcome (I/P/N) | Time | Errors, prompts, quotations, and observations |
| ------------------ | --------------- | ---- | --------------------------------------------- |
| Initial impression |                 |      |                                               |
| T1                 |                 |      |                                               |
| T2                 |                 |      |                                               |
| T3                 |                 |      |                                               |
| T4                 |                 |      |                                               |
| T5                 |                 |      |                                               |
| T6                 |                 |      |                                               |
| T7                 |                 |      |                                               |
| T8                 |                 |      |                                               |
| T9                 |                 |      |                                               |
| T10                |                 |      |                                               |

Accessibility observations from T9 and T10:

- Focus visibility and order:
- Controls that could not be reached or operated:
- Keyboard traps or unexpected focus movement:
- Feedback, errors, and status changes:
- Form error clarity and keyboard recovery:

| Task    | Effective (1–5) | Intuitive/easy (1–5) | Notes |
| ------- | --------------: | -------------------: | ----- |
| T1      |                 |                      |       |
| T2      |                 |                      |       |
| T3      |                 |                      |       |
| T4      |                 |                      |       |
| T5      |                 |                      |       |
| T6      |                 |                      |       |
| T7      |                 |                      |       |
| T8      |                 |                      |       |
| T9      |                 |                      |       |
| T10     |                 |                      |       |
| Overall |                 |                      |       |

Keyboard-focus rating:

Form-error clarity rating:

Final comments:

## Recording and document evidence

Recordings are stored outside the public repository.

| Evidence                | Link | Access verified while signed out or as the instructor | Date verified |
| ----------------------- | ---- | ----------------------------------------------------- | ------------- |
| Participant 1 recording |      |                                                       |               |
| Participant 2 recording |      |                                                       |               |
| Participant 3 recording |      |                                                       |               |
| Shared study report     |      |                                                       |               |

Study report shared with `john.guerra@gmail.com`:

Recording links verified:

## Prioritized issues and corresponding changes

| Issue and supporting evidence | Proposed change | Priority | Implemented? How was it verified? |
| ----------------------------- | --------------- | -------- | --------------------------------- |
|                               |                 |          |                                   |
|                               |                 |          |                                   |
|                               |                 |          |                                   |
|                               |                 |          |                                   |
|                               |                 |          |                                   |
