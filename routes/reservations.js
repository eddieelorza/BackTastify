const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission')


// Get all resconst reservations = await sequelize.models.reservations
router.get('/', permission('admin', 'client'), async (req, res) => {
  const reservations = await sequelize.models.reservations.findAndCountAll();
  return res.status(200).json({ data: reservations });
});

// Create a new reservation
router.post('/', permission('admin'), async (req, res) => {
    const { body } = req;
  const reservation =  await sequelize.models.reservations.create({
    userId: body.userId,
    restaurantId: body.restaurantId,
    restaurantName: body.restaurantName,
    name: body.name,
    lastName: body.lastName,
    amountPeople: body.amountPeople,
    table: body.table,
    date: body.date,
    hour: body.hour,

  });
  await reservation.save();
  return res.status(201).json({ data: reservation })
});

// Update a reservation by id
router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req;
  const reservation = await sequelize.models.reservations.findByPk(id);
  if (!reservation) {
    return res.status(404).json({ code: 404, message: 'reservation not found' });
  }
  const updatedReservation = await reservation.update({
    userId: body.userId,
    restaurantId: body.restaurantId,
    restaurantName: body.restaurantName,
    name: body.name,
    amountPeople: body.amountPeople,
    table: body.table,
    date: body.date,
    hour: body.hour,
  });
  return res.json({ data: updatedReservation });
});

// Delete a reservation by id
router.delete('/:id', async (req, res) => {
  const { params: { id } } = req;
  const reservation = await sequelize.models.reservations.findByPk(id);
  if (!reservation) {
    return res.status(404).json({ code: 404, message: 'reservation not found' });
  }
  await reservation.destroy();
  return res.json();
});

module.exports = router;