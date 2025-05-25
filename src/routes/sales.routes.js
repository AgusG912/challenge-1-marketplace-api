import { Router } from "express";
import { getAllSales } from "../controllers/sales/getAllSales.controller.js";
import { checkProductByCode } from "../middleware/products/checkProductByCode.js";
import { getSalesByProductCode } from "../controllers/sales/getSalesByCode.controller.js";


const router = Router();

/**
 *  GET:
 *      - Se listan todas las rutas que permitan obtener informacion sobre los productos.
 */
router.get('/sales', getAllSales);
router.get('/sales/:productCode', checkProductByCode, getSalesByProductCode);

export default router;