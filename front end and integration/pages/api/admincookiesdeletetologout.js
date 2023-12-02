import express from 'express';
import cookieParser from 'cookie-parser';
import { serialize, parse } from 'cookie';

const app = express();

app.use(express.json());
app.use(cookieParser());

export default async function handler(req, res) {
  const cookies = parse(req.headers.cookie || '');

  // Clear the JWT cookie by setting its expiration to a past date
  const clearedCookie = serialize('admincookie', '', {
    expires: new Date(0),
    path: '/', // Set the path to the root to cover all paths
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Ensure secure in production
    sameSite: 'strict',
  });

  res.setHeader('Set-Cookie', clearedCookie);

  return res.status(200).send('Cookie has been cleared, and the user is logged out');
}
