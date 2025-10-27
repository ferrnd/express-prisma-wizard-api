//Caminho da URL.
import { Router } from "express";
import * as bruxoController from "../controllers/bruxoController.js";

const router = Router();

router.get("/", bruxoController.listarTodos);
router.get("/:id", bruxoController.listarUm);
router.post("/", bruxoController.criar);
router.delete("/:id", bruxoController.deletar)

export default router;
