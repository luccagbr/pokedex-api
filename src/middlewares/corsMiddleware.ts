import { Request } from "express";

export function corsMiddleware(req: Request, callback: CallableFunction) {
    let corsOptions: any = {
        origin: "*",
        optionsSuccessStatus: 204,
    };

    if (req.path === "/api/auth/login") {
        corsOptions = {
            ...corsOptions,
            credentials: true,
            methods: ["OPTIONS", "POST", "PUT"],
        };
    } else {
        corsOptions = {
            ...corsOptions,
            methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
            credentials: true,
        };
    }

    callback(null, corsOptions);
}
