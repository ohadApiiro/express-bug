import express, { Express, RequestHandler } from "express";
import {handler, handler2, handler3} from "./handlers";

class FooClass {
    app: Express;

    private func() {
        this.app.get("/matoki", handler);
        app.get("/matoki", handler3);
    }
}

app: Express;
app.get("/matoki2", handler2);