# 📚 Book Management CRUD App

This is a simple Book Management CRUD application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to perform basic CRUD operations: Create, Read, Update, and Delete books.

The frontend is deployed on Vercel, and the backend is deployed on Render.

## 📕 Show Books Page
![image](https://github.com/user-attachments/assets/4372ba32-0d96-48c3-983c-2fafba8e5413)

## 📖 Details Page
![image](https://github.com/user-attachments/assets/9f665b25-45c2-4c44-b433-2e67f6f28c27)

## 🗑️ Delete Book Page
![image](https://github.com/user-attachments/assets/4a0657d6-23c1-47d0-bd0f-b662ac85c22e)

## 📝 Edit Book Page
![image](https://github.com/user-attachments/assets/d96acea8-c599-4f70-80e7-9b546c88bfc4)


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
