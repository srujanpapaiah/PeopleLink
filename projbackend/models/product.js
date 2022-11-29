const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 64
    },
    unitPrice: {
        type: Number,
        required: true,
        maxlength: 32,
        trim: true
    },
    stp: {
        type: Number,
        required: true,
        maxlength: 32,
        trim: true
    },
    premium: {
        type: Number,
        required: true,
        maxlength: 32,
        trim: true
    },
    asp: {
        type: Number,
        required: true,
        maxlength: 32,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 64
    },
    competitors: {
        type: String,
        trim: true,
        maxlength: 64
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    stock: {
        type: Number
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: string
    }
}, {timestamps: true});

module.exports = mongoose.model("Product", productSchema);