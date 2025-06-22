import { createServer } from "http"
import app from "./app.js"
import { connectToDB } from "./db/db.js"

const server = createServer(app);
const PORT = 9300;

connectToDB()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log("Error connecting to db")
    })