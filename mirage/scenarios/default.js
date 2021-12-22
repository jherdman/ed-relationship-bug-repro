export default function (server) {
  const car1 = server.create('car', { brand: 'Subaru', model: 'Outback' });
  const car2 = server.create('car', { brand: 'Subaru', model: 'WRX' });

  server.create('colour', { name: 'Midnight blue', car: car1 });
  server.create('colour', { name: 'Ivory', car: car1 });

  server.create('colour', { name: 'Cherry red', car: car2 });
  server.create('colour', { name: 'Black', car: car2 });
}
