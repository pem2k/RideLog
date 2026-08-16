# Usability Study Report

Application: [RideLog](https://ridelog-main-30492-abe90ed7ea11.herokuapp.com/)

Author: Parker

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

Avoid leading questions such as "Did you see the button at the top?" If help is required, record the prompt and the point at which it was given.

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

| Check               | Result           | Evidence link                  | Notes                                                                                                                                                                                                                                                                                                |
| ------------------- | ---------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Keyboard navigation | Pass with issues | Participant session recordings | All participants completed T9 keyboard workflow. Tab order is logical. Issues: keyboard focus not always followed by viewport scroll after saving a ride; calendar picker icon hard to see (black on dark gray); focus highlight colors (green/gray) may be hard to see for users with poor eyesight |
| Semantic structure  | Fail             | Lighthouse report              | Missing `<main>` landmark — page has no main landmark element for screen reader navigation                                                                                                                                                                                                           |
| axe or Lighthouse   | 92/100           | /tmp/lighthouse-report.json    | Two failures: (1) Insufficient color contrast on login page register link — contrast ratio 3.84:1, expected 4.5:1 (foreground #0d6efd on background #1a1b17). (2) Document missing a `<main>` landmark element                                                                                       |

## Experiment notes

Immediately after each session, write down observations while they are fresh. Rewatch the recording and note moments when the participant hesitated, became frustrated, took a wrong turn, missed feedback, lost keyboard focus, encountered clipped content, or needed help. Use observable evidence rather than guessing at the participant's intent.

Outcome codes: I = completed independently; P = completed with a prompt; N = not completed.

### Participant 1

Session date: 2026-08-10

Recording evidence link: https://youtu.be/lyhIAivAfRU

Recording consent given: Yes (at 0:45 in recording)

Demographic answers:

- Age range: 35–44
- Social media frequency: Daily
- Fitness app experience: No
- Web application comfort: Somewhat comfortable
- Keyboard or assistive-technology experience: No

| Task               | Outcome (I/P/N) | Time | Errors, prompts, quotations, and observations                                                                                                                                                        |
| ------------------ | --------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Initial impression | I               |      | Could tell it is RideLog, something to do with riding — transit? Biking. Identified login and registration. "Very on the nose, very understandable, and gives the photo option."                       |
| T1                 | I               | 0:15 | Very quick to navigate to registration.                                                                                                                                                                |
| T2                 | I               | 1:06 | Immediately found the Log a Ride button. No issues with fields, but did look closer when selecting a date.                                                                                             |
| T3                 | I               | 0:12 | Immediately found the edit button — "easy peasy."                                                                                                                                                      |
| T4                 | P               | 1:52 | Missed the follow button at first and browsed through posts before finding it. Suggested making the follow button easier to find.                                                                       |
| T5                 | I               | 0:09 | Noticed seconds shown on comment timestamp. Likes the data — a fan of the seconds.                                                                                                                     |
| T6                 | I               | 0:02 | Post comment has a styled button; the delete button should probably match its style.                                                                                                                    |
| T7                 | I               | 0:15 |                                                                                                                                                                                                        |
| T8                 | I               | 0:13 | Liked the warning popup. The secondary confirmation is a good touch.                                                                                                                                   |
| T9                 | I               | 1:30 | Knows keyboard shortcuts. Noted that someone not well versed in keyboard navigation would likely still know the basics if they are already using keyboard-only input. Never really used keyboard controls for this type of application, but it should work with general web app familiarity. |
| T10                | I               | 1:08 | Recognized the error state by standard conventions from a well-built website. The form forces validation and notifies the user of the issue because the fields turn red. Specific issues were clearly communicated. |

Accessibility observations from T9 and T10:

- Focus visibility and order: Focus highlight uses green and gray colors around the notification, edit, and post buttons. The keyboard focus color on the edit, delete, and post comment buttons may be hard to identify for users with poor eyesight.
- Controls that could not be reached or operated: None observed.
- Keyboard traps or unexpected focus movement: None observed.
- Feedback, errors, and status changes: Validation forces a notification in red. Specific issues were clearly communicated.
- Form error clarity and keyboard recovery: Warning text in red is effective and gives the impression that something is wrong.

| Task    | Effective (1–5) | Intuitive/easy (1–5) | Notes                           |
| ------- | --------------: | -------------------: | ------------------------------- |
| T1      |               5 |                    5 |                                 |
| T2      |               5 |                    5 |                                 |
| T3      |               5 |                    5 |                                 |
| T4      |               5 |                    5 | Rated 5 effective "with prompt" |
| T5      |               5 |                    5 |                                 |
| T6      |               5 |                    5 |                                 |
| T7      |               5 |                    5 |                                 |
| T8      |               5 |                    5 |                                 |
| T9      |               5 |                    5 |                                 |
| T10     |               5 |                    5 |                                 |
| Overall |               5 |                    5 |                                 |

Keyboard-focus rating: 5

Form-error clarity rating: 5

Final comments: Finding people you don't know is difficult in a brand new app with only around 10 users. A dropdown search suggestion list could help. It might be hard to find people unless you already know they are on the platform.

### Participant 2

Session date: 2026-08-10

Recording evidence link: https://youtu.be/qtSPJ5R_wEk

Recording consent given: Yes (at 0:30 in recording)

Demographic answers:

- Age range: 25–34
- Social media frequency: Lurks daily, rarely posts
- Fitness app experience: No, not for cycling, but for other things like Apple Health tracking, weight training, etc.
- Web application comfort: Very comfortable
- Keyboard or assistive-technology experience: No, rarely

| Task               | Outcome (I/P/N) | Time | Errors, prompts, quotations, and observations                                                                                                                                                     |
| ------------------ | --------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Initial impression | I               |      |                                                                                                                                                                                                   |
| T1                 | P               | 0:32 | Username vs. email confusion — initially entered email into the login field. "Didn't read it at all, used to email working in place of username. Both should work."                                  |
| T2                 | I               | 0:39 | Had some issues selecting the calendar picker — the icon could be brighter. Hard to see the picker. Saw everything he was expecting to see.                                                          |
| T3                 | I               | 0:10 |                                                                                                                                                                                                      |
| T4                 | I               | 0:13 | Search box placeholder text pointed the search toward users.                                                                                                                                         |
| T5                 | I               | 0:11 | Card layout made him confident the comment belongs to the post. Instant feedback from the comment appearing confirmed it worked correctly.                                                            |
| T6                 | I               | 0:12 | Blue delete button is easy to see but looks unstyled compared to the rest of the app. Could use red styling to indicate a destructive action. It stood out, but could be stylistically integrated.    |
| T7                 | I               | 0:14 | Edit profile was right where he expected, underneath the handle and profile section. Self-explanatory.                                                                                                |
| T8                 | I               | 0:08 | Browser popup seems appropriate for a destructive action. A more elegant approach would be an in-app modal, but the browser popup did not register as a problem.                                      |
| T9                 | I               | 0:30 | Tab ordering was sensible. Hard to judge because he does not often use keyboard-only workflows. Had a reasonably easy time.                                                                           |
| T10                | I               | 0:10 | Form was clearly in an error state with error messages, an exclamation point, and a red outline. Non-negativity for elevation gain is worth considering — elevation gain cannot be negative, but general elevation can be. |

Accessibility observations from T9 and T10:

- Focus visibility and order: Calendar picker icon is black against a dark gray background, making it hard to see. Participant selected the calendar picker from the input field rather than the icon button.
- Controls that could not be reached or operated: None observed.
- Keyboard traps or unexpected focus movement: None observed.
- Feedback, errors, and status changes: Form displayed a clear error state with error messages, an exclamation point, and a red outline.
- Form error clarity and keyboard recovery: The difference between "positive" and "non-negative" number validation might be confusing to users.

| Task    | Effective (1–5) | Intuitive/easy (1–5) | Notes                                         |
| ------- | --------------: | -------------------: | --------------------------------------------- |
| T1      |               5 |                    4 | Assumed email would work in place of username |
| T2      |               5 |                    5 |                                               |
| T3      |               5 |                    5 |                                               |
| T4      |               5 |                    5 |                                               |
| T5      |               5 |                    5 |                                               |
| T6      |               5 |                    5 |                                               |
| T7      |               5 |                    5 |                                               |
| T8      |               5 |                    5 |                                               |
| T9      |               5 |                    5 |                                               |
| T10     |               5 |                    5 |                                               |
| Overall |               5 |                    5 |                                               |

Keyboard-focus rating: 5 — Calendar picker icon is hard to see (black on dark gray).

Form-error clarity rating: 4 — The difference between "positive" and "non-negative" number validation might be confusing.

Final comments: Core feature set is solid. The hierarchy between posts and comments does not feel strong — comments should feel more distinct, with the ability to reply or react/like. Stats should feel distinct from the description and be easier to parse across different posts. Would love aggregate stats on the profile page, elevation over time, data visualization, and graphing. Gamification ideas: streaks, streak sharing, and competing on maintaining streak length. Achievement features (e.g., "first 10-mile ride," trophy case), profile customization. Discovery features: a "for you" feed pulled from a broader pool, onboarding with zip code for nearby connections, and "you may know this person" suggestions. Groups for organizing rides with aggregate group stats.

### Participant 3

Session date: 2026-08-11

Recording evidence link: https://youtu.be/pyrgIFxvn1g

Recording consent given: Yes (at 0:55 in recording)

Demographic answers:

- Age range: 25–34
- Social media frequency: Weekly (Instagram, TikTok, YouTube)
- Fitness app experience: Yes, Google Fit only
- Web application comfort: Somewhat comfortable
- Keyboard or assistive-technology experience: No

| Task               | Outcome (I/P/N) | Time | Errors, prompts, quotations, and observations                                                                                                                                                                                                                                                          |
| ------------------ | --------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Initial impression |                 |      |                                                                                                                                                                                                                                                                                                        |
| T1                 | P               | 1:24 | Immediately tried to sign in instead of register. Stored credential popups got in the way of the registration fields. Entered email instead of username (repeated issue across participants). Completed with prompting.                                                                                    |
| T2                 | I               | 1:30 | Immediately accessed the Log a Ride button. Did not understand the calendar picker and manually entered the date. Forgot the description and went back after the error popup. The error popup did not disappear until re-submission. Expected the description to be optional. Thinks more flexibility should allow posts with incomplete data. |
| T3                 | I               | 0:09 | Immediately found the edit button. Likes that everything is editable. Suggested adding an "edited" tag to show that changes were made, so commenters do not look bad if the original post is changed.                                                                                                      |
| T4                 | I               | 0:33 | Wanted a follow button directly in search results rather than having to enter the profile. The click range on search result cards should be extended (had to click the username text specifically, not the whole card).                                                                                      |
| T5                 | I               | 0:22 | Found the post easily, navigated back to the ride feed, and left a comment without issue. Suggested linking the commenter's username to their profile.                                                                                                                                                     |
| T6                 | I               | 0:02 | No issue with the delete button. Expected delete to be behind a three-dot dropdown menu for more intentionality before removing a comment.                                                                                                                                                                 |
| T7                 | I               | 0:26 | Immediate feedback from the profile name change is good. If the page were longer and changes occurred off-screen, an acknowledgement popup would help, but items are close together so the immediate change was easy to see.                                                                                |
| T8                 | I               | 0:09 | Likes the browser popup for delete — it is "up in your face" and grants additional gravity. The browser popup forces user interaction before anything else, which is better than an in-app modal that could be skipped past.                                                                                |
| T9                 | P               | 1:30 | Needed prompting for keyboard controls in general. Tab order made sense and focus did not jump to unexpected spots. Felt clunky because the participant is not used to keyboard navigation, but it was pretty intuitive overall.                                                                             |
| T10                | I               | 0:15 | Knew things needed to be filled out from the color and exclamation point. Thinks some fields should be optional (description, elevation) — only title, date, and distance should be required.                                                                                                               |

Accessibility observations from T9 and T10:

- Focus visibility and order: Tab order was sensible within the site. There was an issue with leaving the site and navigating back through the browser toolbar. After saving a ride, focus jumps back to the top. Keyboard focus is not always followed by the viewport — once tabbing cycles, focus can become invisible.
- Controls that could not be reached or operated: None observed.
- Keyboard traps or unexpected focus movement: After saving a ride, focus jumps back to the title rather than staying in context.
- Feedback, errors, and status changes: Color and exclamation point clearly indicate errors.
- Form error clarity and keyboard recovery: Warnings are effective for required fields, but the participant felt that description and elevation should be optional.

| Task    | Effective (1–5) | Intuitive/easy (1–5) | Notes                                                                                                         |
| ------- | --------------: | -------------------: | ------------------------------------------------------------------------------------------------------------- |
| T1      |               4 |                    5 | Email/username confusion                                                                                      |
| T2      |               5 |                    5 |                                                                                                               |
| T3      |               5 |                    5 |                                                                                                               |
| T4      |               4 |                    5 | No follow button in search results; had to click the username text specifically rather than the card to enter the profile |
| T5      |               5 |                    5 |                                                                                                               |
| T6      |               5 |                    5 |                                                                                                               |
| T7      |               5 |                    5 |                                                                                                               |
| T8      |               5 |                    5 |                                                                                                               |
| T9      |               5 |                    5 |                                                                                                               |
| T10     |               5 |                    5 |                                                                                                               |
| Overall |               5 |                    5 |                                                                                                               |

Keyboard-focus rating: 5 — Within the site there were no issues, but leaving and returning through the browser toolbar is problematic. Keyboard focus should be followed by viewport scroll.

Form-error clarity rating: 5

Final comments: No additional comments. Overall a very intuitive site. Had no trouble completing tasks outside of the username/email issue and the keyboard focus controls.

## Recording and document evidence

Recordings are stored outside the public repository.

| Evidence                | Link                                                                 | Access verified while signed out or as the instructor | Date verified |
| ----------------------- | -------------------------------------------------------------------- | ----------------------------------------------------- | ------------- |
| Participant 1 recording | https://youtu.be/lyhIAivAfRU                                         | Yes                                                   | 2026-08-15    |
| Participant 2 recording | https://youtu.be/qtSPJ5R_wEk                                         | Yes                                                   | 2026-08-15    |
| Participant 3 recording | https://youtu.be/pyrgIFxvn1g                                         | Yes                                                   | 2026-08-15    |
| Shared study report     | https://github.com/pem2k/RideLog/blob/main/usability-study-parker.md | Yes                                                   | 2026-08-15    |

Study report shared with `john.guerra@gmail.com`: Yes — 2026-08-15

Recording links verified: Yes — 2026-08-15

## Prioritized issues and corresponding changes

| Issue and supporting evidence                                                                                                                                                                                                                                                            | Proposed change                                                                                                                                          | Priority | Implemented? How was it verified? |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------- |
| Login accepts username only — P2 and P3 both entered email instead of username and needed prompting. P2: "Didn't read it at all, used to email working in place of username, both should." Repeated across 2 of 3 participants                                                           | Allow login with either email or username, or add clear placeholder/label text specifying "Username"                                                     | High     | Yes. Added `findByUsernameOrEmail` to the backend passport strategy so login accepts both username and email. Updated placeholder to "Username or Email". Verified via curl and Lighthouse (accessibility 1.0). |
| Insufficient color contrast on register link — Lighthouse score 92, failed contrast audit. Register link has 3.84:1 ratio (foreground #0d6efd on background #1a1b17), below the required 4.5:1 WCAG threshold                                                                            | Change the link color or background to achieve at least 4.5:1 contrast ratio                                                                             | High     | Yes. Replaced unstyled link with `variant="outline-primary"` Bootstrap Button. Lighthouse reports accessibility 1.0 with zero contrast failures on login and register pages. |
| Missing `<main>` landmark — Lighthouse failed landmark-one-main audit. No `<main>` element wrapping page content, impacting screen reader navigation                                                                                                                                     | Wrap the primary page content in a `<main>` element                                                                                                      | High     | Yes. Wrapped `<Routes>` in a `<main>` element in App.jsx. Lighthouse `landmark-one-main` audit now passes (score 1.0). |
| Follow button hard to discover — P1 missed the follow button and needed prompting (T4, 1:52). P3 wanted a follow button directly in search results and noted the click target on search result cards was too narrow (had to click username text, not the whole card)                     | Make follow button more prominent on profile. Add follow button to search results. Extend click target on search result cards to the full card area      | High     | Yes. Made entire UserCard clickable for navigation. Added inline Follow/Unfollow button to each search result card with optimistic state toggling. Added a Discover page and Who to Follow sidebar on the feed. |
| Calendar picker icon low visibility — P2: "black against a dark gray background, hard to see the icon itself." P3 didn't use the picker at all and manually entered the date. 2 of 3 participants had issues                                                                             | Increase calendar picker icon contrast or brighten the icon so it is visible against the dark background                                                 | Medium   | Yes. Restyled file selector button to match theme via `.form-control::file-selector-button` CSS. Calendar picker icon recolored for visibility against the dark background. |
| Delete comment button unstyled — P1: "Post comment has a pretty button; the delete button should probably match." P2: "looks unstyled compared to rest of app; could use red styling to indicate destructive action." P3 expected delete behind a 3-dot dropdown for more intentionality | Style the delete button consistently with the rest of the app. Use red or destructive-action styling to clearly indicate the action                      | Medium   | Yes. Changed delete button to `variant="outline-danger" size="sm"` and added `danger` to the SCSS theme-colors map. Added `window.confirm` dialog before deletion. |
| Keyboard focus not followed by viewport — P3 observed that after saving a ride, focus jumps back to the top of the page but the viewport does not scroll to follow. Keyboard focus can become invisible when tabbing cycles                                                              | Ensure viewport scrolls to follow keyboard focus. After form submission, set focus to a contextually appropriate element that is visible in the viewport | Medium   | Not implemented. Deferred due to time constraints. |
| Focus highlight colors may be hard to see — P1 noted green and gray focus highlight colors around edit, delete, and post comment buttons may be difficult to see for users with poor eyesight                                                                                            | Increase focus indicator contrast or use a thicker, higher-contrast outline that meets WCAG 2.4.7 (visible focus)                                        | Medium   | Yes. Set `$focus-ring-color` and `$focus-ring-width: 3px` in Bootstrap SCSS variables. Lighthouse accessibility score is 1.0 with no focus-related failures. |
| Too many required fields — P3 forgot to add a description, expected it to be optional, and had to correct on error. P3: "Only title, date, and distance should be required." Error popup did not disappear until re-submission                                                           | Consider making description, elevation, and max speed optional. Dismiss error messages once the user begins correcting the field                         | Low      | Not implemented. Deferred as low priority. |
