const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission')

// Get all resconst addresses = await sequelize.models.addresses
router.get('/', permission('admin', 'client'), async (req, res) => {
  const addresses = await sequelize.models.addresses.findAndCountAll();
  return res.status(200).json({ data: addresses });
});

// Create a new address
router.post('/', permission('admin'), async (req, res) => {
  const { body } = req;
  const address =  await sequelize.models.addresses.create({
    userId: body.userId,
    name: body.name,
    lastName: body.lastName,
    address: body.address,
    postCode: body.postCode,
    state: body.state,
    city: body.city,
    numTel: body.numTel,


  });
  await address.save();
  return res.status(201).json({ data: address })
});

// Update a address by id
router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req;
  const address = await sequelize.models.addresses.findByPk(id);
  if (!address) {
    return res.status(404).json({ code: 404, message: 'address not found' });
  }
  const updatedAddress = await address.update({
    userId: body.userId,
    name: body.name,
    lastName: body.lastName,
    address: body.address,
    postCode: body.postCode,
    state: body.state,
    city: body.city,
    numTel: body.numTel,


  });
  return res.json({ data: updatedAddress });
});

// Delete a address by id
router.delete('/:id', async (req, res) => {
  const { params: { id } } = req;
  const address = await sequelize.models.addresses.findByPk(id);
  if (!address) {
    return res.status(404).json({ code: 404, message: 'address not found' });
  }
  await address.destroy();
  return res.json();
});

module.exports = router;