import { Request, Response } from "express";
import { IBodyNotificacionPost } from "../@types";
import admin from "../utils/firebase";

class NotificacionesController {
  static async postNotificaciones(req: Request, res: Response) {
    let body: IBodyNotificacionPost = req.body;

    
    try {
      
      
      
      await admin.messaging().send({
        token: body.token,
        notification: {
          title: body.notification.title,
          body: body.notification.body,
          imageUrl: body.notification.image,
        },
        data: body.data as {
          [key: string]: string;
        }
      });
  
      return res.status(200).json({
        message: "Notificaciones enviadas",
      });
    } catch (error) {
      console.log(error);
      
      return res.status(500).json({ error: 'error' });
    }
  }
}

export default NotificacionesController;
