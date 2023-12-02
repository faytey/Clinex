import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export default async function handler(req, res) {

  try {
    const {id, picturelink, date, description, sociallink} = req.body;

    let query = 'UPDATE clinexposts SET';
    const values = [];

    // Build the query dynamically based on provided values
    const fieldsToUpdate = [
        "picturelink",
        "date",
        "description",
        "sociallink",
    ];

    fieldsToUpdate.forEach((field, index) => {
      if (
        req.body[field] !== undefined &&
        req.body[field] !== null &&
        req.body[field] !== ""
      ) {
        query += ` ${field} = $${index + 1},`;
        values.push(req.body[field]);
      }
    });

    if (values.length === 0) {
      res.status(400).json({ error: 'No valid fields to update' });
      return;
    }

    query = query.slice(0, -1); // Remove the trailing comma
    query += ' WHERE id = $' + (values.length + 1);

    // Add data to the values array
    values.push(id);

    await sql.query(query, values);

    res.status(200).json({ message: 'Blog data updated successfully' });
    console.log("Blog data updated successfully")
  } catch (error) {
    console.error('Error updating data in database:', error);
    res.status(500).json({ error: 'Error updating data in database' });
  } 
}
