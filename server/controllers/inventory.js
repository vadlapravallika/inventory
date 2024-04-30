const inventoryRepo = require('../libs/inventoryRepo.js');
const { validationResult } = require('express-validator');

/* GET inventory listing. */
exports.inventory_list = async function(req, res, next) {
    const data = await inventoryRepo.findAll();
    res.json({msg:"Success" ,inventories: data });
};


/* GET a inventory */
exports.inventory_detail = async function(req, res, next) {
    const inventory = await inventoryRepo.findById(req.params.id);
    if (inventory) {
      res.json({inventory: inventory});
    } else {
      res.json({msg: 'Something Went Wrong'});
    }
};

/* POST inventorys delete */
exports.inventory_delete_post = async function(req, res, next) {
    await inventoryRepo.deleteById(req.params.id);
    res.json({msg: "Successfully Deleted"});
};

/* POST inventory add */
exports.inventory_create_post = async function(req, res, next) {
    const result = validationResult(req.body);

    if (!result.isEmpty()) {
        res.json({msg: result.array()});
    } else {
        await inventoryRepo.create(req.body);
        res.json({msg: "Product Successfully uploaded"});
    }
};

// Post inventory edit
exports.inventory_edit_post = async function(req, res, next) {
    const result = validationResult(req.body);
    if (!result.isEmpty()) {
        const user = await inventoryRepo.findById(req.params.id);
        res.json({msg: result.array()});
    }else{
        await inventoryRepo.update(req.body);
        res.json({msg: "Successfully Updated"});
    }   
};