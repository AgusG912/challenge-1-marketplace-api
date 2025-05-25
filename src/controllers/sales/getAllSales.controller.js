import { response } from "express";
import { prisma } from "../../database/dbConnection.js";

/** Retorna un JSON con la propiedad items, que contiene los productos. */
export const getAllSales = async (_, res = response) => {
    try {
        const sales = await prisma.sale.findMany();

        if (!sales) {
            return res.status(404).json({
                success: false,
                error: 'Error al obtener las ventas.'
            });
        }

        res.status(200).json({
            sales: sales
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Error al obtener las ventas.'
        });
    }
}