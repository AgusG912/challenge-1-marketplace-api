import { param } from "express-validator"
import { handleErrorMessage } from "../general/handleErrorMessage.js";

/**
 * [ ^MLM ]: El string obligatoriamente debe iniciar por MLM.
 * [ 1-9  ]: El primer dígito debe estar entre 1-9 (evita que el número comience con 0).
 * [ \d*  ]: Permite cualquier cantidad de dígitos después del primer número.
 * [  $   ]: Indica que la coincidencia debe terminar justo después del número.
 */
const regexProductCode = /^MLM([1-9]\d*)$/

export const checkProductByCode = [
    param('productCode').exists().withMessage('El código del producto es obligatorio'),
    param('productCode', 'El código debe tener al menos cuatro (4) caracteres.').isLength({min:4}),
    param('productCode', 'El código de producto no es válido.').matches( regexProductCode ),
    handleErrorMessage,
];