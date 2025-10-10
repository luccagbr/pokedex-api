import { Request } from "express";

export function corsMiddleware(req: Request, callback: CallableFunction) {
    const envStatus: "development" | "production" | string = process.env.NODE_ENV;

    if (
        !(process.env.NODE_ENV === "development" && process.env.FRONTEND_URL_LOCAL) ||
        !(process.env.FRONTEND_URL_PRODUCTION === "production" && process.env.FRONTEND_URL_PRODUCTION)
    ) {
        throw new Error("Nenhuma URL informada!");
    }

    let urlActive = undefined;

    switch (envStatus) {
        case "development":
            urlActive = process.env.FRONTEND_URL_LOCAL;
            break;
        case "production":
            urlActive = process.env.FRONTEND_URL_PRODUCTION;
            break;
    }

    let corsOptions: any = {
        origin: urlActive,
        optionsSuccessStatus: 204,
    };

    if (req.path === "/api/auth/login") {
        corsOptions = {
            ...corsOptions,
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
