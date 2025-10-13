import { Request } from "express";

export function corsMiddleware(req: Request, callback: CallableFunction) {
    let urlActive = undefined;

    let corsOptions: any = {
        origin: urlActive,
        optionsSuccessStatus: 204,
    };

    if (req.path === "/api/auth/login") {
        corsOptions = {
            ...corsOptions,
            methods: ["OPTIONS", "POST", "PUT"],
            credentials: true,
            origin: process.env.FRONTEND_URL,
        };
    } else {
        corsOptions = {
            ...corsOptions,
            methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
            allowedHeaders: ["Content-Type", "Authorization"],
        };
    }

    callback(null, corsOptions);
}
