import express, { Application } from "express";
import morgan from "morgan";

//Routes
import indexRoutes from "./routes/index.routes";
import postRoutes from "./routes/post.routes";

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set("port", this.port || process.env.PORT || 4000);
  }
  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api", indexRoutes);
    this.app.use("/api/post", postRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on PORT: ", this.app.get("port"));
  }
}
