import { response } from 'express';
import { prisma } from '../../database/dbConnection.js';

/** Retorna un JSON con la propiedad items, que contiene los productos. */
export const getAllProducts = async (_, res = response) => {
    try {
        const products = await prisma.product.findMany();

        if (!products) {
            return res.status(404).json({
                success: false,
                error: 'Error al obtener los productos.'
            });
        }


        res.status(200).json({
            items: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Error al obtener los productos.'
        });
    }
}