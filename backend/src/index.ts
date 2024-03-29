import express from "express";
import pool from "./db";
import cors from "cors";

const app = express();
const PORT = 8787;



app.use(express.json());
app.use(cors());

app.get('/todo', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM todo');
      res.status(200).json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
);

app.post('/todo', async (req, res) => {
    try {
      const { task } = req.body;
      await pool.query('INSERT INTO todo (task) VALUES ($1)', [task]);
      res.status(201).send('Task added!');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
);


app.listen(PORT, async () => {
    console.log(`App listening on port ${PORT}`);
});