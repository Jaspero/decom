import cors from 'cors';

export const CORS = cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  optionsSuccessStatus: 200,
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Authorization', 'Content-Type'],
  credentials: true,
});
