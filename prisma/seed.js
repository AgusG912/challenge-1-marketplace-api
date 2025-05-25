import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  console.log('[SEED] Iniciando...');
  await prisma.product.createMany({
    data: [
      {
        productCode: 'MLM1',
        originalPrice: 5000,
        price: 3000,
        title: 'Guitar',
        comision: 500,
        costoEnvio: 149.5,
      },
      {
        productCode: 'MLM2',
        originalPrice: 3000,
        price: 1500,
        title: 'Chair',
        comision: 500,
        costoEnvio: 170,
      },
      {
        productCode: 'MLM3',
        originalPrice: 100000,
        price: 80000,
        title: 'PC',
        comision: 20000,
        costoEnvio: 5000,
      },
      {
        productCode: 'MLM4',
        originalPrice: 15000,
        price: 8000,
        title: 'RAM1',
        comision: 2000,
        costoEnvio: 1000,
      },
      {
        productCode: 'MLM5',
        originalPrice: 500,
        price: 100,
        title: 'USB',
        comision: 50,
        costoEnvio: 10,
      },
    ],
  });
  console.log('[SEED] Product agregados de manera satisfactoria.');


  await prisma.sale.createMany({
    data: [


      {
        "productId": 3,
        "client": "María González",
        "location": "Buenos Aires",
        "paymentMethod": "Tarjeta",
        "salePrice": 84500.00,
        "paidShipping": true,
        "createdAt": "2025-05-01T09:15:00Z"
      },
      {
        "productId": 1,
        "client": "Carlos López",
        "location": "Córdoba",
        "paymentMethod": "Efectivo",
        "salePrice": 3750.00,
        "paidShipping": false,
        "createdAt": "2025-05-01T11:30:00Z"
      },
      {
        "productId": 5,
        "client": "Ana Martínez",
        "location": "Rosario",
        "paymentMethod": "Transferencia",
        "salePrice": 275.00,
        "paidShipping": true,
        "createdAt": "2025-05-01T14:45:00Z"
      },
      {
        "productId": 2,
        "client": "Juan Pérez",
        "location": "Mendoza",
        "paymentMethod": "Tarjeta",
        "salePrice": 2250.00,
        "paidShipping": false,
        "createdAt": "2025-05-02T10:20:00Z"
      },
      {
        "productId": 4,
        "client": "Lucía Sánchez",
        "location": "La Plata",
        "paymentMethod": "Efectivo",
        "salePrice": 11250.00,
        "paidShipping": true,
        "createdAt": "2025-05-02T16:10:00Z"
      },
      {
        "productId": 1,
        "client": "Roberto Fernández",
        "location": "San Miguel de Tucumán",
        "paymentMethod": "Transferencia",
        "salePrice": 4200.00,
        "paidShipping": false,
        "createdAt": "2025-05-02T17:30:00Z"
      },
      {
        "productId": 3,
        "client": "Sofía Rodríguez",
        "location": "Mar del Plata",
        "paymentMethod": "Tarjeta",
        "salePrice": 92000.00,
        "paidShipping": true,
        "createdAt": "2025-05-03T09:45:00Z"
      },
      {
        "productId": 5,
        "client": "Diego Álvarez",
        "location": "Salta",
        "paymentMethod": "Efectivo",
        "salePrice": 150.00,
        "paidShipping": false,
        "createdAt": "2025-05-03T12:15:00Z"
      },
      {
        "productId": 2,
        "client": "Valeria Gómez",
        "location": "Santa Fe",
        "paymentMethod": "Tarjeta",
        "salePrice": 1800.00,
        "paidShipping": true,
        "createdAt": "2025-05-03T15:30:00Z"
      },
      {
        "productId": 4,
        "client": "Pablo Díaz",
        "location": "Corrientes",
        "paymentMethod": "Transferencia",
        "salePrice": 9500.00,
        "paidShipping": false,
        "createdAt": "2025-05-04T10:00:00Z"
      },
      {
        "productId": 1,
        "client": "Camila Romero",
        "location": "Bahía Blanca",
        "paymentMethod": "Efectivo",
        "salePrice": 3500.00,
        "paidShipping": true,
        "createdAt": "2025-05-04T13:20:00Z"
      },
      {
        "productId": 3,
        "client": "Gabriel Torres",
        "location": "Resistencia",
        "paymentMethod": "Tarjeta",
        "salePrice": 87500.00,
        "paidShipping": false,
        "createdAt": "2025-05-04T17:45:00Z"
      },
      {
        "productId": 5,
        "client": "Florencia Medina",
        "location": "Posadas",
        "paymentMethod": "Transferencia",
        "salePrice": 320.00,
        "paidShipping": true,
        "createdAt": "2025-05-05T09:30:00Z"
      },
      {
        "productId": 2,
        "client": "Eduardo Ruiz",
        "location": "Neuquén",
        "paymentMethod": "Efectivo",
        "salePrice": 2600.00,
        "paidShipping": false,
        "createdAt": "2025-05-05T11:45:00Z"
      },
      {
        "productId": 4,
        "client": "Carolina Herrera",
        "location": "San Juan",
        "paymentMethod": "Tarjeta",
        "salePrice": 10500.00,
        "paidShipping": true,
        "createdAt": "2025-05-05T14:10:00Z"
      },
      {
        "productId": 1,
        "client": "Martín Castro",
        "location": "Paraná",
        "paymentMethod": "Transferencia",
        "salePrice": 4800.00,
        "paidShipping": false,
        "createdAt": "2025-05-06T10:15:00Z"
      },
      {
        "productId": 3,
        "client": "Agustina Silva",
        "location": "Formosa",
        "paymentMethod": "Efectivo",
        "salePrice": 91000.00,
        "paidShipping": true,
        "createdAt": "2025-05-06T12:30:00Z"
      },
      {
        "productId": 5,
        "client": "Facundo Mendoza",
        "location": "San Luis",
        "paymentMethod": "Tarjeta",
        "salePrice": 210.00,
        "paidShipping": false,
        "createdAt": "2025-05-06T16:45:00Z"
      },
      {
        "productId": 2,
        "client": "Daniela Ríos",
        "location": "Jujuy",
        "paymentMethod": "Transferencia",
        "salePrice": 1950.00,
        "paidShipping": true,
        "createdAt": "2025-05-07T09:20:00Z"
      },
      {
        "productId": 4,
        "client": "Gustavo Acosta",
        "location": "Río Cuarto",
        "paymentMethod": "Efectivo",
        "salePrice": 12500.00,
        "paidShipping": false,
        "createdAt": "2025-05-07T11:40:00Z"
      },
      {
        "productId": 1,
        "client": "Luciana Vega",
        "location": "Concordia",
        "paymentMethod": "Tarjeta",
        "salePrice": 3900.00,
        "paidShipping": true,
        "createdAt": "2025-05-07T15:00:00Z"
      },
      {
        "productId": 3,
        "client": "Hernán Pereyra",
        "location": "Comodoro Rivadavia",
        "paymentMethod": "Transferencia",
        "salePrice": 96000.00,
        "paidShipping": false,
        "createdAt": "2025-05-08T10:10:00Z"
      },
      {
        "productId": 5,
        "client": "Natalia Ferreyra",
        "location": "San Nicolás",
        "paymentMethod": "Efectivo",
        "salePrice": 180.00,
        "paidShipping": true,
        "createdAt": "2025-05-08T13:25:00Z"
      },
      {
        "productId": 2,
        "client": "Oscar Domínguez",
        "location": "Tandil",
        "paymentMethod": "Tarjeta",
        "salePrice": 2400.00,
        "paidShipping": false,
        "createdAt": "2025-05-08T17:50:00Z"
      },
      {
        "productId": 4,
        "client": "Verónica Morales",
        "location": "Villa María",
        "paymentMethod": "Transferencia",
        "salePrice": 8800.00,
        "paidShipping": true,
        "createdAt": "2025-05-09T09:35:00Z"
      },
      {
        "productId": 1,
        "client": "Lautaro Juárez",
        "location": "Zárate",
        "paymentMethod": "Efectivo",
        "salePrice": 4500.00,
        "paidShipping": false,
        "createdAt": "2025-05-09T12:50:00Z"
      },
      {
        "productId": 3,
        "client": "Yamila Castro",
        "location": "Olavarría",
        "paymentMethod": "Tarjeta",
        "salePrice": 83000.00,
        "paidShipping": true,
        "createdAt": "2025-05-09T16:15:00Z"
      },
      {
        "productId": 5,
        "client": "Federico Rojas",
        "location": "Rafaela",
        "paymentMethod": "Transferencia",
        "salePrice": 420.00,
        "paidShipping": false,
        "createdAt": "2025-05-10T10:05:00Z"
      },
      {
        "productId": 2,
        "client": "Brenda Molina",
        "location": "Pilar",
        "paymentMethod": "Efectivo",
        "salePrice": 2700.00,
        "paidShipping": true,
        "createdAt": "2025-05-10T13:20:00Z"
      },
      {
        "productId": 4,
        "client": "Maximiliano Suárez",
        "location": "Temperley",
        "paymentMethod": "Tarjeta",
        "salePrice": 14200.00,
        "paidShipping": false,
        "createdAt": "2025-05-10T17:40:00Z"
      },
      {
        "productId": 1,
        "client": "Abril Chávez",
        "location": "Merlo",
        "paymentMethod": "Transferencia",
        "salePrice": 3100.00,
        "paidShipping": true,
        "createdAt": "2025-05-10T19:15:00Z"
      },
      {
        "productId": 3,
        "client": "Marcelo Villalba",
        "location": "Berazategui",
        "paymentMethod": "Efectivo",
        "salePrice": 89000.00,
        "paidShipping": false,
        "createdAt": "2025-05-10T20:30:00Z"
      },
      {
        "productId": 5,
        "client": "Silvina Acuña",
        "location": "San Fernando",
        "paymentMethod": "Tarjeta",
        "salePrice": 350.00,
        "paidShipping": true,
        "createdAt": "2025-05-10T21:45:00Z"
      },
      {
        "productId": 2,
        "client": "Nicolás Ledesma",
        "location": "Escobar",
        "paymentMethod": "Transferencia",
        "salePrice": 1650.00,
        "paidShipping": false,
        "createdAt": "2025-05-10T22:10:00Z"
      },
      {
        "productId": 4,
        "client": "Romina Ponce",
        "location": "Moreno",
        "paymentMethod": "Efectivo",
        "salePrice": 9200.00,
        "paidShipping": true,
        "createdAt": "2025-05-10T23:25:00Z"
      },
      {
        "productId": 1,
        "client": "Walter Giménez",
        "location": "Lomas de Zamora",
        "paymentMethod": "Tarjeta",
        "salePrice": 4950.00,
        "paidShipping": false,
        "createdAt": "2025-05-10T23:55:00Z"
      }
    ]
  });
  console.log('[SEED] Sale agregadas de manera satisfactoria.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('[SEED] Ejecucion completada satisfactoriamente.');
  });