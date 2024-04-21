import Router from "express";

export const UserRouter = Router();

UserRouter.post("/signup", (req, res) => {
    res.json({
        message: "Signup",
    });
});

UserRouter.post("/signin", (req, res) => {
    res.json({
        message: "Signin",
    });
});
