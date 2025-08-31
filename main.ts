import express, { Express, RequestHandler } from "express";
import {handler} from "./handlers";

class FooClass {
    app: Express;

    private func() {
        this.app.get("/matoki", handler);
    }
}