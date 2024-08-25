import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';
import database from './database/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

const allowedOrigins = [
  'http://localhost:5173',
  process.env.FRONTEND_URL_PROD
].filter(Boolean); 
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  console.log(req);
  return res.status(200).send('Welcome to Book Store Website');
});

app.use('/books', bookRoutes);

database().then(() => {
  const PORT = process.env.PORT || 5555;
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database:', err.message);
});
