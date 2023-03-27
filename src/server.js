import("express-async-errors");
import express from "express";
import routes from "./routes/index.js";
import AppError from "./utils/AppError.js";

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "Client Side Error",
            message: error.message,
        });
    }
    console.log(error);
    return response.status(500).json({
        status: "Server Side Error",
        message: "Internal Error Server",
    });
});

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});
