import express from "express";
import { bankRoutes  } from "./routes/bank.routes.js";


const app = express()
const port = 4000

app.use(express.json());
app.use(bankRoutes);

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})