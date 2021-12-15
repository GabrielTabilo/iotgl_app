import { Router } from 'express';
const router = Router();

router.get("/testing", (req, res) => { //req: todo lo que entra "requerimientos" --- res: todo lo que sale "respuestas"
  console.log("Bye IoT")
  res.send("Hello IoT GL API");
});

export default router; //exportamos router para que sea considerado por express
