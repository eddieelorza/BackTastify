const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission')

// Get all resconst restaurants = await sequelize.models.restaurants
router.get('/', permission('admin', 'client'), async (req, res) => {
  const restaurants = await sequelize.models.restaurants.findAndCountAll();
  return res.status(200).json({ data: restaurants });
});
// Create a new restaurant
router.post('/', permission('admin'), async (req, res) => {
  const { body } = req;
  const restaurant =  await sequelize.models.restaurants.create({
    image: body.image,
    restaurantName: body.restaurantName,
    description: body.description,
    address: body.address,
    openHour: body.openHour,
    closeHour: body.closeHour,
    capacity: body.capacity,
    status: body.status,

  });
  await restaurant.save();
  return res.status(201).json({ data: restaurant })
});

// Update a restaurant by id
router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req;
  const restaurant = await sequelize.models.restaurants.findByPk(id);
  if (!restaurant) {
    return res.status(404).json({ code: 404, message: 'restaurant not found' });
  }
  const updatedrestaurant = await restaurant.update({
    image: body.image,
    restaurantName: body.restaurantName,
    description: body.description,
    address: body.address,
    openHour: body.openHour,
    closeHour: body.closeHour,
    capacity: body.capacity,
    status: body.status,

  });
  return res.json({ data: updatedrestaurant });
});

// Delete a restaurant by id
router.delete('/:id', async (req, res) => {
  const { params: { id } } = req;
  const restaurant = await sequelize.models.restaurants.findByPk(id);
  if (!restaurant) {
    return res.status(404).json({ code: 404, message: 'restaurant not found' });
  }
  await restaurant.destroy();
  return res.json();
});

module.exports = router;