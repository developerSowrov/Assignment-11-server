# Talkzy Server

## Purpose

The server-side of Talkzy handles all backend operations, including database management, API endpoints, and secure data transfer. It enables seamless interactions between the client-side application and the MongoDB database.

## Live URL

[Talkzy Server Live](https://assignment-11-server-nu-peach.vercel.app/) 

## Key Features

- **API Endpoints**:

  - Add new tutors (`POST /add`)
  - Retrieve all tutors (`GET /allTutors`)
  - Filter tutors by category (`GET /find-tutors/:category`)
  - Fetch specific tutor details (`GET /details/:id`)
  - Retrieve user's booked tutorials (`GET /my-tutorial/:email`)
  - Delete a tutor (`DELETE /delete/:id`)
  - Update tutor details (`PATCH /updated/:id`)
  - Book a tutorial (`POST /booked`)
  - Fetch booked tutorials (`GET /booked-tutorial`)
  - Update reviews (`PATCH /reviewUpdate/:id`)

- **Database Integration**:

  - MongoDB for handling tutorial and booking data.

- **Environment Configuration**:
  - Secure environment variables for sensitive information like database credentials.

## NPM Packages Used

- [dotenv](https://www.npmjs.com/package/dotenv): For managing environment variables.
- [express](https://www.npmjs.com/package/express): To create and manage server routes.
- [cors](https://www.npmjs.com/package/cors): To handle cross-origin requests.
- [mongodb](https://www.npmjs.com/package/mongodb): For database operations and communication with MongoDB.
