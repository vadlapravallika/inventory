const {ProductModel} = require("../models/inventory")
const {dbConnect} = require("./db")
const mongoose = require('mongoose')

async function run() {
    dbConnect()
    return 'Connected to the MongoDB server...';
}

run().then(console.log).catch(console.error);

const inventoryRepo = {
    findAll: async () => {
        const users = await ProductModel.find({});       
        return users;
    },
    findById: async (uuid) => {
        const filter = {_id: new mongoose.Types.ObjectId(uuid)};
        const doc = await ProductModel.findOne(filter);
        return doc
    },
    findByUserId: async (id) => {
        const filter = {userId: id};
        const doc = await ProductModel.find(filter);
        return doc
    },
    create: async (job) => {
        const doc = {...job};
        const result = await ProductModel.create(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`); 
    },
    deleteById: async (uuid) => {
        const filter = {_id: new mongoose.Types.ObjectId(uuid)};
        const result = await ProductModel.deleteOne(filter);
        if (result.deletedCount === 1) {
            console.log('Successfully delted one document');
        } else {
            console.log('No documents matched the query. Delted 0 documents');
        }
    },
    update: async (job) => {
        const filter = {_id: new mongoose.Types.ObjectId(job._id)};
        const updateDoc = {
            $set: {
                ...job
            }
        };
        const result = await ProductModel.updateOne(filter, updateDoc);
        console.log(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`);
    },

};

module.exports = inventoryRepo;