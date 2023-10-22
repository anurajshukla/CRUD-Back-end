const mongoose = require('mongoose')

const productSchema = mongoose.Schema( 
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        element: {
            type: String,
            requred: true,
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