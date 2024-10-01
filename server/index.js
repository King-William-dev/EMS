import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port number ${process.env.PORT}`);
});
