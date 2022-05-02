export interface IBodyNotificacionPost {
  token: string;
  notification: {
    title: string;
    body: string;
    image?: string;
  };
  data: string | { [key: string]: string };
}
