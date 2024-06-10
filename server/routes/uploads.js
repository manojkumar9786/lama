const express = require('express');
const router = express.Router();
const Upload = require('../models/uploads');

router.get('/:projectId', async (req, res) => {
    try {
        const uploads = await Upload.find({ projectId: req.params.projectId });
        res.json(uploads);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const upload = new Upload(req.body);
    try {
        const newUpload = await upload.save();
        res.status(201).json(newUpload);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Upload.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Upload deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const upload = await Upload.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(upload);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
