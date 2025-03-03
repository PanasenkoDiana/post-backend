import express from 'express'

import postRouter from "./PostApp/postRouter"
import categoryRouter from "./CategoryApp/categoryRouter"
import userRouter from "./UserApp/userRouter"

const cors = require("cors")

const app = express()
const HOST = 'localhost'
const PORT = 8000

app.use(cors())
app.use(express.json())


app.use("/api", postRouter)
app.use("/api", categoryRouter)
app.use("/api", userRouter)


app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});