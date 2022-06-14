
const orderSchema =  mongoose.Schema({

    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderItems : [{
        name : {
            type: String,
            required: true,
        },
        qty : {
            type: Number,
            required: true,
        },
        
    }],
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    }
}
, {
    timestamps: true,
}
);
const Order = mongoose.model("Order", orderSchema);

