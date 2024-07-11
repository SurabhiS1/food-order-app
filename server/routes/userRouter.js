const express = require('express')

const router = express.Router()

const User = require('../model/userModel');

router.post('/create-user', async (req, res) => {

    console.log('Request Body:', req.body); // Log request body
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        id: req.body.id,
    });

    try {
        const savedUser = await user.save();
        res.status(200).send({ data: savedUser });
    } catch (err) {
        console.log('Request Body at Error:', req.body);
        res.status(400).send({ error: err });

    }
});




module.exports = router;