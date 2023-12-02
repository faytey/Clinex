import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export default async function handler(req, res) {

  try {
    const {picturelink, date, description, sociallink} = req.body;
    const query = 'INSERT INTO clinexposts (picturelink, date, description, sociallink) VALUES ($1, $2, $3, $4)';
    const values = [picturelink, date, description, sociallink];

    await sql.query(query, values);

    res.status(200).json({ message: 'Blog post added successfully' });
    console.log("Blog post added successfully")
  } catch (error) {
    console.error('Error adding blog data in datase:', error);
    res.status(500).json({ error: 'Error adding blog data in database' });
  } 
}

