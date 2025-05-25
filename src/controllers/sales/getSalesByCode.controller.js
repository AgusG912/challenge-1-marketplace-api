import { response } from "express";
import { prisma } from "../../database/dbConnection.js";

// Endpoint para obtener un producto por código
export const getSalesByProductCode = async (req, res = response) => {
    const { productCode } = req.params;

    try {
        const { sales } = await prisma.product.findFirst({
            where: { productCode },
            include: { sales:true }
        });


        if (!sales) {
            return res.status(404).json({
                success: false,
                error: 'Producto no encontrado.'
            });
        }

        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Error al obtener las ventas del producto.'
        });
    }
};
