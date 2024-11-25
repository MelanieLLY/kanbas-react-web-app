import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';
import cors from "cors";

const app = express();
app.use(cors()); 
Hello(app);
Lab5(app);

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});