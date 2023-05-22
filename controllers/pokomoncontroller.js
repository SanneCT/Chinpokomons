const Pokomon = require('../models/pokomon');
const mongoose = require('mongoose');

const sendPokomon = async (req, res) => {
    const { name, ability1, ability2, ability3, author } = req.body;

    try {
        const pokomon = await Pokomon.create({ name, ability1, ability2, ability3, author });

        res.status(200).json({ pokomon });

    } catch (error) {
        res.status(404).json({ error: error.message });

    };
};


const filter = async (req, res, next) => {
    const { username } = req.params;

    try {
        const pokomons = await Pokomon.find({ author: username }).sort({ createdAt: -1 });
        console.log(pokomons);

        res.render('sorted', { pokomons, username });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deletePokomon = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            message: 'Invalid pokomon ID'
        });
    }
    try {
        const pokomon = await Pokomon.findOneAndDelete({
            _id: id
        });

        if (!pokomon) {
            return res.status(404).json({
                message: 'pokomon not found'
            });
        }
        res.status(200).json(pokomon);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error deleting pokomon'
        });
    }
};

const updatePokomon = async (req, res) => {
    const { name, ability1, ability2, ability3 } = req.body;
    const pokomon = await Pokomon.findOne({ name });

    if (!pokomon) {
        return res.status(404).json({
            message: 'pokomon not found'
        });
    }

    try {
        const updatedPokomon = await Pokomon.findOneAndUpdate({ name }, { name, ability1, ability2, ability3 }, { new: true });

        res.status(200).json(updatedPokomon);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error updating pokomon'
        });
    }
};


module.exports = { sendPokomon, filter, deletePokomon, updatePokomon, }