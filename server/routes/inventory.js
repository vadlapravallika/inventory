var express = require('express');
var router = express.Router();
const inventory = require('../controllers/inventory');
const { body } = require('express-validator');

// GET users listing(done)
router.get('/', inventory.inventory_list);

// POST inventory delete(done) 
router.post('/:id/delete', inventory.inventory_delete_post);

// GET inventory view(done)
router.get('/:id', inventory.inventory_detail);

// POST inventory add(done) 
router.post('/', inventory.inventory_create_post);

// POST inventory edit
router.post('/:id/edit', inventory.inventory_edit_post);

module.exports = router;
