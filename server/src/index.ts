import express from "express";
import { UserRouter } from "./routes/userRoutes";
import { SummaryRouter } from "./routes/summaryRoutes";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/user", UserRouter);
app.use("/summary", SummaryRouter);

app.get("/", (req, res) => {
    res.json({
        messgge: "Hello RecapTube",
    });
});

app.listen(PORT, () => {
    console.log(`Server Running on : http://localhost:${PORT}`);
});
