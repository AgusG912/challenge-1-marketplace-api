import { prisma } from '../../database/dbConnection.js';

export const patchProducts = async (req, res) => {
  try {
    const { productCode } = req.params;
    const updateFields = req.body;

    const product = await prisma.product.findFirst({
      where: { productCode }
    })

    if(!product) return res.status(404).json({ success:false, error: 'Producto no encontrado.' });

    const { id } = product;

    const updatedRow = await prisma.product.update({
      where: { id },
      data: {
        ...updateFields
      }
    });

    res.json(updatedRow);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}