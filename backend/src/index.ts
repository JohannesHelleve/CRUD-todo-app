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
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
  );


app.listen(PORT, async () => {
    console.log(`App listening on port ${PORT}`);
});