import admin from "firebase-admin";
const serviceAccount = require("../auth/cosbiome-distribucion-firebase-adminsdk-gsefg-60653652ea.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cosbiome-distribucion.firebaseio.com"
  
});

export default admin;
