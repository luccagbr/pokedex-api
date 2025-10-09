import "dotenv/config";
import app from "./app";
import * as http from "http";

const initServer = async () => {
    try {
        const port: number = parseInt(process.env.PORT) || 5502;

        let server = undefined;

        if (process.env.NODE_ENV !== "development") {
            const https = await import("https");

            const options = { key: "", cert: "" };

            server = https.createServer(options, app);
        } else {
            server = http.createServer(app);
        }

        server.listen(port, "0.0.0.0", () => {
            console.log("App listen port: " + port);
        });
    } catch (error) {}
};

initServer();
