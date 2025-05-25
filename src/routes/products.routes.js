import { Router } from 'express';
import { createProduct } from '../controllers/products/createProducts.controller.js';
import { patchProducts } from '../controllers/products/patchProducts.controller.js';
import { checkProductByCode } from '../middleware/products/checkProductByCode.js';
import { checkProductFields } from '../middleware/products/checkProductFields.js';
import { checkAllProductFields } from '../middleware/products/checkAllProductFields.js';
import { getAllProducts } from '../controllers/products/getAllProducts.controller.js';
import { getProductByCode } from '../controllers/products/getProductByCode.controller.js';

const router = Router();

/**
 *  GET:
 *      - Se listan todas las rutas que permitan obtener informacion sobre los productos.
 */
router.get('/products', getAllProducts);
router.get('/products/:productCode', checkProductByCode, getProductByCode);

/**
 * POST:
 *      - Se listan las rutas que permiten crear productos.
 */
router.post('/products/new', checkAllProductFields, createProduct);

/**
 * PATH / PUT
 *      - Se listan las rutas que permite actualizar los valores.
 */
router.patch('/products/update/:productCode', [checkProductByCode, checkProductFields], patchProducts);
router.put('/products/update/:productCode', [checkProductByCode, checkAllProductFields], patchProducts);

export default router;