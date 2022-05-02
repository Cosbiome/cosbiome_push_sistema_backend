import { Router } from "express";
import NotificacionesController from "../controllers/Notificaciones";

const NotificacionesRuouter = Router();

NotificacionesRuouter.post("/", NotificacionesController.postNotificaciones);

export default NotificacionesRuouter;
