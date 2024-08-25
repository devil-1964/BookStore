# 📚 Book Management CRUD App

This is a simple Book Management CRUD application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to perform basic CRUD operations: Create, Read, Update, and Delete books.

The frontend is deployed on Vercel, and the backend is deployed on Render.

## 🚀 Features

- **Create**: Add new books to your collection.
- **Read**: View the list of all books.
- **Update**: Edit the details of existing books.
- **Delete**: Remove books from the collection.
- No authentication is required.

## 🛠️ Tech Stack

- **Frontend**: React, Axios, React Router DOM, Material-UI (MUI)
  - Deployed on [Vercel](https://book-store-omega-eight.vercel.app/)
- **Backend**: Node.js, Express, MongoDB
  - Deployed on Render
- **API Requests**: Managed using Axios for handling HTTP requests.

## 📌 Environment Variables

### **Backend .env**:
- Add your Frontend URL in `FRONTEND_URL_PROD`
- Add MongoDB Atlas in `MONGO_URL`
- Add PORT
```
FRONTEND_URL_PROD=
MONGO_URL=
PORT=
```
### **Frontend .env**:
- Add your Backend URL in `VITE_REACT_APP_API_URL`
```
VITE_REACT_APP_API_URL=
```
