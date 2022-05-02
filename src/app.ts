import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import NotificacionesRuouter from "./routes/notificaciones.routes";

class App {
  app: Express;
  port: number | string = process.env.PORT || 4246;

  constructor() {
    this.app = express();
  }

  execute() {
    this.middlewares();
    this.routes();

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(
      cors({
        origin: true,
      })
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.app.use("/notificaciones", NotificacionesRuouter);
  }
}

export default App;
