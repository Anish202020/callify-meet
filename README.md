# Callify - Video Conferencing App
<img src="https://github.com/Anish202020/callify-meet/blob/main/public/data/logo-removebg-preview.png" width="100" alt="accessibility text">


## Introduction
[![Watch the video](https://github.com/Anish202020/callify-meet/blob/main/public/data/Business.png)](https://www.youtube.com/watch?v=-muNwJdUUJ4)

Callify is a video conferencing application designed to provide secure, real-time communication with a range of features to enhance user experience. This documentation outlines the key functionalities and features of the Callify app.


## Technologies Used
1. Next Js
2. Tailwind Css
3. Shad Cn
4. Aceternity UI
5. Clerk
6. Get Stream

## Authentication
Callify implements authentication and authorization features using Clerk. Users can securely log in via:

- Social sign-on
- Traditional email and password methods
- Biometric authentication
Appropriate access levels and permissions are ensured within the platform.

## New Meeting
Users can quickly start a new meeting, configuring camera and microphone settings before joining.

## Meeting Controls
Participants have full control over various aspects of the meeting, including:

- Recording
- Emoji reactions
- Screen sharing
- Muting/unmuting
- Sound adjustments
- Grid layout
- Participant list view
- Individual participant management (pinning, muting, unmuting, blocking, allowing video share)
## Exit Meeting
Participants can leave a meeting individually, or creators can end the meeting for all attendees.

## Schedule Future Meetings
Users can schedule future meetings by inputting meeting details (date, time). These meetings are accessible on the 'Upcoming Meetings' page for sharing the link or immediate start.

## Past Meetings List
Users can access a list of previously held meetings, including details and metadata.

## View Recorded Meetings
Users can access recordings of past meetings for review or reference.

## Personal Room
Each user has a personal room with a unique meeting link for instant meetings, which can be shared with others.

## Join Meetings via Link
Users can easily join meetings created by others by providing a link.

## Secure Real-time Functionality
All interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.

## Responsive Design
Callify follows responsive design principles to ensure an optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions.

## Dataflow

<details>
  <summary>Click to See The DataFlow Diagram</summary>
  
  
  <img src="https://github.com/Anish202020/callify-meet/blob/main/public/data/diagram-export-10-2-2024-11_58_31-AM.png" alt="accessibility text">

  The Dataflow Diagram of Complete Interaction of the Callify - Video Conferencing App is Above.
</details>

## Team Members
1. Aditya Jyoti Sahu - 1AY21CS017
2. Anish Kumar - 1AY21CS028
3. Dalavai Hruday - 1AY21CS049
4. Hanji Ranjan - 1AY21CS060

---
First Install NPM Packages
```bash
npm i react-icons 
```


Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

