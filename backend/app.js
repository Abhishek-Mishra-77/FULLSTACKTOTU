import express from "express";
import sequelize from "./utils/database.js";
import cors from "cors";
const app = express();

import userRoute from "./routes/userRoute.js";

app.use(cors());
app.use(express.json());

app.use("/", userRoute);

sequelize.sync({ force: false }).then(() => {
    app.listen(8000, () => {
        console.log(`Server is running on port 8000 and database connected.`);
    })
})
