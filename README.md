# Callify - Video Conferencing App

![Callify Gif](https://github.com/Anish202020/Web-Development-Data/blob/main/GIFs/Business.gif)
<p align="center">
  
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-3D2EFC?style=for-the-badge&logo=clerk&logoColor=white)
![GetStream](https://img.shields.io/badge/GetStream-087EE1?style=for-the-badge&logo=getstream&logoColor=white&logoWidth=20)


![Shad CN](https://img.shields.io/badge/ShadCN-000000?style=for-the-badge&logo=shadcn&logoColor=white)
![Acenternity UI](https://img.shields.io/badge/Acenternity_UI-000000?style=for-the-badge&logo=ui-accent&logoColor=white)


</p>

## Introduction
<img src="https://github.com/Anish202020/Web-Development-Data/blob/main/Logos/Website%20Logos/1.png" width="100" alt="accessibility text">

Callify is a video conferencing application designed to provide secure, real-time communication with a range of features to enhance user experience. This documentation outlines the key functionalities and features of the Callify app.

## Video Explanation
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=black&label=Explanation)](https://www.youtube.com/watch?v=-muNwJdUUJ4)

## Technologies Used

<details>
  <summary>Click to See The Technology Stack</summary>
  
  1. Next Js
  2. Tailwind Css 
  3. Clerk
  4. Get Stream
  5. Shad Cn
  6. Aceternity UI

<p align="center">
  <img src="https://github.com/Anish202020/Web-Development-Data/blob/main/Logos/Services%20Logos/3.png" height="50" alt="accessibility text">
  <img src="https://github.com/Anish202020/Web-Development-Data/blob/main/Logos/Services%20Logos/7.png" height="50" alt="accessibility text">
  <img src="https://github.com/Anish202020/Web-Development-Data/blob/main/Logos/Services%20Logos/16.png" height="50" alt="accessibility text">
  <img src="https://github.com/Anish202020/Web-Development-Data/blob/main/Logos/Services%20Logos/12.png" height="50" alt="accessibility text">
  <img src="https://github.com/Anish202020/Web-Development-Data/blob/main/Logos/Services%20Logos/14.png" height="50" alt="accessibility text">
  <img src="https://github.com/Anish202020/Web-Development-Data/blob/main/Logos/Services%20Logos/15.png" height="50" alt="accessibility text">

  

  <p align="center">Technology Stack</p>
  
 

 </p>


</details>

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

## Getting Started
### Prerequisites
Node.js
Clerk and GetStream API keys

## Installation
### Clone the repository:
```bash
git clone https://github.com/Anish202020/callify-meet.git
cd callify-meet
```

### Install dependencies:
```bash

npm install
```
### Set up environment variables for Clerk and GetStream(.env.local) .
```bash

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```

### Start the application:
```bash
npm run dev
```
---
