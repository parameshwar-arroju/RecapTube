"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./routes/userRoutes");
const summaryRoutes_1 = require("./routes/summaryRoutes");
require("dotenv/config");
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.json());
app.use("/user", userRoutes_1.UserRouter);
app.use("/summary", summaryRoutes_1.SummaryRouter);
app.get("/", (req, res) => {
    res.json({
        messgge: "Hello RecapTube",
    });
});
app.listen(PORT, () => {
    console.log(`Server Running on : http://localhost:${PORT}`);
});
