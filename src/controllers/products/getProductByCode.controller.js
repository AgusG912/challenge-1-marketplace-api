import { response } from 'express';
import { prisma } from '../../database/dbConnection.js';

// Endpoint para obtener un producto por código
export const getProductByCode = async (req, res = response) => {
    const { productCode } = req.params;

    try {
        const product = await prisma.product.findFirst({
            where: { productCode },
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                error: 'Producto no encontrado.'
            });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Error al obtener el producto'
        });
    }
};
