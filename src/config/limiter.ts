import { rateLimit } from "express-rate-limit";

export const limiter = rateLimit({
  // windowMs: 15 * 60 * 1000, // 15 minutes
  windowMs: 60 * 1000, // 1 minutes
  limit: process.env.NODE_ENV === "production" ? 5 : 100, // Limit each IP to 5 requests per `window` (here, per 1 minutes)
  // standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  // legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: { error: "Has alcanzado el límite de peticiones" },
});

