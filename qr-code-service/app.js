import express from "express";
import apiRoutes from "./routes/index.js"
import cors from 'cors';

const app = express();
app.use(cors());
// Use your API routes
app.use(apiRoutes);

// Start the server
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
export default app;
