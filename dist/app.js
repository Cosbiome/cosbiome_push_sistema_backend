"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const notificaciones_routes_1 = __importDefault(require("./routes/notificaciones.routes"));
class App {
    constructor() {
        this.port = process.env.PORT || 4246;
        this.app = (0, express_1.default)();
    }
    execute() {
        this.middlewares();
        this.routes();
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
    middlewares() {
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)({
            origin: true,
        }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use("/notificaciones", notificaciones_routes_1.default);
    }
}
exports.default = App;
