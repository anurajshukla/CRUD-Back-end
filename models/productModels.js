const mongoose = require('mongoose')

const productSchema = mongoose.Schema( 
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        age: {
            type: Number,
            requred: true,
            default: 0
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamp: true
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;