# Movie Hub

A full-stack movie application built with **Next.js (App Router)** and **MongoDB**. The app allows users to browse movies, manage personal favourites, and authenticate securely.
The main focus of the project is authentication flow, favourites logic, and clean client–server interaction using Next.js API routes.

---

## Table of Contents

- [Description](#description)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies & Stack Explanation](#technologies--stack-explanation)
- [Architecture & Flow](#architecture--flow)
- [Installation & Run](#installation--run)
- [Project Structure](#project-structure)
- [Author](#author)

---

## Description

Movie Hub allows users to:

- Browse movies fetched from TMDB API
- Register and log in with authentication
- Add and remove movies from favourites
- Access a personal favourites page
- Experience a responsive, modern UI

Frontend is built with **Next.js (React + App Router)** and styled with **Tailwind CSS**.
Backend logic is implemented via **Next.js API routes**, with **MongoDB** for data persistence.

---

## Live Demo

Try it online via our [Live Demo](https://movie-hub-next.onrender.com)!

---

## Features

- User authentication (Register / Login / Logout)
- Persistent user session (/api/auth/me)
- Add remove favourite movies
- Favourites stored per user in MongoDB
- Protected routes (favourites page)
- Client-side state management via custom hooks
- Responsive movie cards with hover effects
- Error and loading state handling
- REST API built with Next.js API routes

---

## Technologies & Stack Explanation

- **Next.js (App Router)** — frontend framework and backend API
- **React** — UI and component logic
- **Type Script** — static typing and safer code
- **Tailwind CSS** — utility-first styling
- **MongoDB** — database for users and favourites
- **Mongoose** — ODM for MongoDB
- **TMDB API** — external movie data source
- **REST API** — implemented with Next.js API routes
- **Docker & Docker Compose** — for containerization and environment orchestration

---

## Architecture & Flow

*Authentication* 
1. User submits login or register form 
2. Frontend sends POST request to /api/auth/login or /api/auth/register 
3. API validates credentials and sets session 
4. User data is fetched via /api/auth/me 
5. Auth state is stored in AuthContext

*Favourites* 
1. User clicks bookmark icon on a movie card 
2. Frontend sends POST / DELETE request to /api/favourites 
3. API updates favourites in MongoDB 
4. Updated favourites are fetched and synced in UI 
5. Favourites page displays user-specific data

---

## Installation & Run

### 1. The Quickest Way (Docker Compose)

_Requires [Docker](https://www.docker.com/get-started/)_

1. Create a `.env` file in the root directory:
   ```bash
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   TMDB_API_KEY=your_tmdb_key
   ```
2. Run the container:
   ```bash
   docker-compose up --build
   ```
3. Open http://localhost:3000 in your browser

### 2. Manual Setup

```bash
npm install
```

Create a .env file in the root directory:
```bash
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_key
```
```bash
npm run dev
```

Frontend + API will be available at: http://localhost:3000

---

## Project Structure

```
movie-hub/
├─ docker-compose.yml
├─ Dockerfile
├─ app/
│  ├─ api/
│  │  ├─ auth/
│  │  │  ├─ login/route.ts
│  │  │  ├─ register/route.ts
│  │  │  ├─ logout/route.ts
│  │  │  └─ me/route.ts
│  │  └─ favourites/route.ts
│  ├─ login/page.tsx
│  ├─ register/page.tsx
│  ├─ favourites/page.tsx
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ MovieCard.tsx
│  ├─ MoviesGrid.tsx
│  ├─ Pagination.tsx
│  ├─ Footer.tsx
│  ├─ SearchBar.tsx
│  ├─ AuthForm.tsx
│  ├─ AuthButtons.tsx
│  ├─ UserButtons.tsx
│  └─ Navbar.tsx
├─ context/
│  └─ useAuth.tsx
│  └─ useFavourites.tsx
├─ lib/
│  ├─ db.ts
│  └─ utils.ts
├─ public/
├─ package.json
└─ next.config.js
```

---

## Author

**Taras Poiatsyka**\
[GitHub](https://github.com/tvsxar)
