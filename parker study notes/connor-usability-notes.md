# Usability Study — Tasks & Notes

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

## Preparation

- Recruit three participants per project member who reasonably match the target audience.
- Create a fresh browser session with no existing RideLog login.
- Prepare two searchable users with known usernames and at least one ride in the feed.
- Use only study data for delete tasks.
- Confirm that the deployed application and database are working before each session.
- Prepare screen, audio, and optional camera recording. Confirm that notifications and unrelated personal information will not appear.
- Make a short test recording with readable text and clear audio.
- Keep the mouse available for T1–T8, then place it out of reach for T9 and T10.
- Prepare a timer and a copy of the observation sheet.

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

- Age range: 35–44
- Social media frequency: Daily
- Fitness app experience: No
- Web application comfort: Somewhat comfortable
- Keyboard or assistive-technology experience: No

| Task               | Outcome (I/P/N) | Time  | Errors, prompts, quotations, and observations                                                                                          |
| ------------------ | --------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Initial impression | I               |       | Can tell it's RideLog, something to do with riding, transit? Biking. Identified login and registration. "Very on the nose, very understandable, and gives the photo option." |
| T1                 | I               | 0:15  | Very quick to hop to registration                                                                                                      |
| T2                 | I               | 1:06  | Immediately found the Log a Ride button; no issues with fields but did look closer when selecting a date                               |
| T3                 | I               | 0:12  | Immediately found edit button — "easy peasy"                                                                                           |
| T4                 | P               | 1:52  | Missed the follow button at first; browsed through posts before finding it. Suggested making follow button easier to find               |
| T5                 | I               | 0:09  | Noticed seconds shown on comment timestamp; likes the data, a fan of the seconds                                                       |
| T6                 | I               | 0:02  | Post comment has a pretty button; delete button should probably match its style                                                         |
| T7                 | I               | 0:15  |                                                                                                                                        |
| T8                 | I               | 0:13  | Liked the warning popup; secondary confirmation is a good touch                                                                        |
| T9                 | I               | 1:30  | Knows keyboard shortcuts. For someone not well versed, if they're just using KB they probably know. Never really used keyboard controls for this but it should work with general web app familiarity |
| T10                | I               | 1:08  | Clued in by standard from a good website; forces validation and notifies the issue because it was red; specific issues were clearly communicated |

Accessibility observations from T9 and T10:

- Focus visibility and order: Color to highlight around green and gray for notification, edit button, post button — keyboard color in relation to edit/delete/post comment may be hard to find for poor eyesight
- Controls that could not be reached or operated:
- Keyboard traps or unexpected focus movement:
- Feedback, errors, and status changes: Validation forces notification in red; specific issues clearly communicated
- Form error clarity and keyboard recovery: Warning text in red is good, gives the vibe that something is wrong

| Task    | Effective (1–5) | Intuitive/easy (1–5) | Notes |
| ------- | --------------: | -------------------: | ----- |
| T1      |               5 |                    5 |       |
| T2      |               5 |                    5 |       |
| T3      |               5 |                    5 |       |
| T4      |               5 |                    5 | Rated 5 effective "with prompt" |
| T5      |               5 |                    5 |       |
| T6      |               5 |                    5 |       |
| T7      |               5 |                    5 |       |
| T8      |               5 |                    5 |       |
| T9      |               5 |                    5 |       |
| T10     |               5 |                    5 |       |
| Overall |               5 |                    5 |       |

Keyboard-focus rating: 5

Form-error clarity rating: 5

Final comments: Finding people you don't know in a brand new app with only ~10 people. Maybe a dropdown search selection. Might be hard to find people unless you know they're there.

### Participant 2

Session date:

Recording evidence link:

Recording consent given:

Demographic answers:

- Age range: 25–34
- Social media frequency: Lurks daily, rarely posts
- Fitness app experience: No, not for cycling, but for other things like Apple Health tracking, weight training, etc.
- Web application comfort: Very comfortable
- Keyboard or assistive-technology experience: No, rarely

| Task               | Outcome (I/P/N) | Time  | Errors, prompts, quotations, and observations                                                                                          |
| ------------------ | --------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Initial impression | I               |       |                                                                                                                                        |
| T1                 | P               | 0:32  | Username vs email — initially added email into login field. "Didn't read it at all, used to email working in place of username, both should" |
| T2                 | I               | 0:39  | Had some issues selecting the calendar picker — icon could be brighter. Hard to see the picker. Saw everything he was expecting to see |
| T3                 | I               | 0:10  |                                                                                                                                        |
| T4                 | I               | 0:13  | Search box temporary placeholder text pointed search towards users                                                                     |
| T5                 | I               | 0:11  | Card layout made him confident the comment belongs to the post. Instant feedback from comment appearance confirmed it worked correctly  |
| T6                 | I               | 0:12  | Blue delete button is easy to see but looks unstyled compared to rest of app; could use red styling to indicate destructive action. Stood out but could be stylistically integrated |
| T7                 | I               | 0:14  | Edit profile was right where he expected, underneath handle and profile. Self explanatory                                              |
| T8                 | I               | 0:08  | Browser popup seems appropriate for destructive action; a more elegant way would be an in-app modal, but it didn't register on his radar |
| T9                 | I               | 0:30  | Tab ordering was sensible. Hard to judge because he doesn't often use keyboard-only workflows. Had a reasonably easy time              |
| T10                | I               | 0:10  | Form clearly in error state with error msgs, exclamation point, and red outline. Non-negativity for elevation gain worth considering — elevation gain can't be negative but general elevation can |

Accessibility observations from T9 and T10:

- Focus visibility and order: Calendar picker is black against a dark gray background, hard to see the icon itself. Selecting calendar picker from the field rather than the button
- Controls that could not be reached or operated:
- Keyboard traps or unexpected focus movement:
- Feedback, errors, and status changes: Form error state with error messages, exclamation point, and red outline
- Form error clarity and keyboard recovery: Difference between positive and non-negative number might be confusing

| Task    | Effective (1–5) | Intuitive/easy (1–5) | Notes |
| ------- | --------------: | -------------------: | ----- |
| T1      |               5 |                    4 | Assumed email would work in place of username |
| T2      |               5 |                    5 |       |
| T3      |               5 |                    5 |       |
| T4      |               5 |                    5 |       |
| T5      |               5 |                    5 |       |
| T6      |               5 |                    5 |       |
| T7      |               5 |                    5 |       |
| T8      |               5 |                    5 |       |
| T9      |               5 |                    5 |       |
| T10     |               5 |                    5 |       |
| Overall |               5 |                    5 |       |

Keyboard-focus rating: 5 — calendar picker icon hard to see (black on dark gray)

Form-error clarity rating: 4 — difference between positive and non-negative number might be confusing

Final comments: Core featureset is solid. Hierarchy between posts and comments doesn't feel strong — comments should feel more distinct, with ability to reply or react/like. Stats should feel distinct from description, easier to parse across posts. Would love aggregate stats on profile, elevation over time, data visualization and graphing. Gamification ideas: streaks, streak sharing, competing on streak length. Achievement features ("first 10 mile, trophy case"), profile customization. Discovery features: "for you" feed pulled from a pool, onboarding with zip code for nearby connections, "you may know this person" suggestions. Groups for organizing rides with aggregate group stats.

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
