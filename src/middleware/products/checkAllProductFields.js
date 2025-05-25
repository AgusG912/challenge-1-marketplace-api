import { check } from "express-validator";
import { checkBody } from "../general/checkBody.js";
import { checkBodyAllowKeys } from "../general/checkBodyAllowKeys.js";
import { allowedBodyKeys } from "../../schema/allowed-bodyKeys.config.js";
import { handleErrorMessage } from "../general/handleErrorMessage.js";

const checkBodyKeys = checkBodyAllowKeys(allowedBodyKeys);
export const checkAllProductFields = [
    checkBody,
    checkBodyKeys,

    check("title")
        .isString()
        .withMessage("El campo 'title' debe ser una cadena de texto.")
        .isLength({ min: 3 })
        .withMessage("El campo 'title' debe tener al menos 3 caracteres."),

    check("originalPrice")
        .isFloat({ min: 0 })
        .withMessage("El precio original debe ser un número decimal positivo o 0."),

    check("price")
        .isFloat({ min: 0 })
        .withMessage("El price debe ser un número decimal positivo o 0."),

    handleErrorMessage
];
