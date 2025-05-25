import { response } from 'express';
import { prisma } from '../../database/dbConnection.js';

export const createProduct = async (req, res = response) => {
    try {
        const { originalPrice } = req.body;
        const result = await prisma.$transaction(async (tx) => {
            /** Paso 1: Creamos un subproceso en la db para reservar el id del nuevo producto. */
            const product = await tx.product.create({
                data: {
                    ...req.body,
                    productCode: 'TMP',
                    comision: (originalPrice * 0.18),
                    costoEnvio: (originalPrice * 0.05)
                }
            });

            /** Paso 2: Construimos el serial de productCode con el idReservado. */
            const productCode = `MLM${product.id}`;

            /** Paso 3: Actualizamos el productCode con el valor definitivo. */
            return await tx.product.update({
                where: { id: product.id },
                data: { productCode }
            })
        })

        res.status(201).json({ success: true, item: result });
    } catch (err) {
        console.error("Error al crear el producto:", err);

        res.status(500).json({
            success: false,
            error: "La creación del producto ha fallado.",
            details: err.message
        });
    }
}