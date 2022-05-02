"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = __importDefault(require("../utils/firebase"));
class NotificacionesController {
    static postNotificaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = req.body;
            try {
                yield firebase_1.default.messaging().send({
                    token: body.token,
                    notification: {
                        title: body.notification.title,
                        body: body.notification.body,
                        imageUrl: body.notification.image,
                    },
                    data: body.data
                });
                return res.status(200).json({
                    message: "Notificaciones enviadas",
                });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error: 'error' });
            }
        });
    }
}
exports.default = NotificacionesController;
