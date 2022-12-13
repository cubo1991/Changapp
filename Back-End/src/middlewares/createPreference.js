const express = require("express");
const router = express();
//const cors = require("cors");
const mercadopago = require("mercadopago");

require("dotenv").config()
// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
});


// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static("../../client"));
// app.use(cors());

router.post("/", (req, res) => {
    const { items } = req.body
    console.log(items)
    let preference = {
        items: items.map((item) => {
            return {
                id: item.id,
                title: item.description,
                /* description: item.brand,
                 picture_url: item.image,
                 category_id: item.gender,*/
                quantity: 1,
                //  currency_id: "COP",
                unit_price: Number(item.pricePerHour),
            };
        }),
        back_urls: {
            "success": "http://localhost:3001/feedback",
            "failure": "http://localhost:3001/feedback",
            "pending": "http://localhost:3001/feedback"
        },
        auto_return: "approved",
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            console.log(`Created Preference! ${response.body.id}`)
            res.json({
                id: response.body.id
            });
        }).catch(function (error) {
            console.log(error);
        });
});

router.get('/feedback', function (req, res) {
    res.json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
    });
});

module.exports = router;