"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Notificaciones_1 = __importDefault(require("../controllers/Notificaciones"));
const NotificacionesRuouter = (0, express_1.Router)();
NotificacionesRuouter.post("/", Notificaciones_1.default.postNotificaciones);
exports.default = NotificacionesRuouter;
