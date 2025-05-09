# 🎮 Game Search App

A full-stack web application that allows users to search for video games and view information using a modern UI and real-time data fetching.

## 🧩 Project Structure


## 🚀 Features

- 🔍 Game search functionality
- 🌐 Fetching data from external APIs
- 🔄 Backend and frontend communication
- 🔐 Secure environment variable handling

## ⚙️ Tech Stack

### Frontend
- React + Vite

### Backend
- Express.js

## 📦 Setup Instructions

### 1. Clone the repository
git clone https://github.com/noctis8/Game_search_app.git  
cd Game_search_app  

### 2. Install dependencies
### For frontend
cd client  
npm install

### For backend
cd ../server  
npm install

### 3. Create .env files
### For frontend and in client/.env  
VITE_API_BACKEND_URL=http://localhost:<your_backend_port> /api/v1/

### For backend and in server/.env
PORT=<your_backend_port>  
API_KEY=<your_api_key_here>  
CLIENT_URL=http://localhost:<your_frontend_port> 

### 3. Run the app
### For backend
cd server  
npm run dev

### For frontend
cd client  
npm run dev
