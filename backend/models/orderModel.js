import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    orderItems: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            }
        }
    ],
    shippingAddress: {
        country: {
            type: String,
            required: true,
            default: 'Philippines'
        },
        region: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        },
        municipality: {
            type: String,
            required: true
        },
        barangay: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        zip: {
            type: Number,
            required: true
        },
        addressLine: {
            type: String,
            required: true
        },
        shippingMethod: {
            type: String,
            required: true
        },
        shippingInstruction: {
            type: String,
            required: true
        }
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email: {type: String}
    },
    shippingPrice: {
        type: Number,
        required: true
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    courier: {
        type: String,
        required: true
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliverAt: {
        type: Date
    },
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

export default Order;