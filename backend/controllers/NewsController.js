const New = require("../models/News");
const cloudinary = require("cloudinary");
const Redis = require("redis");

exports.addNew = async (req, res) => {
    try {
        const news = await New.create(req.body);

        res.status(201).json({
            news
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.updateNews = async (req, res) => {
    try {
        const news = await New.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            news
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.deleteNews = async (req, res) => {
    try {
        const news = await New.findByIdAndDelete(req.params.id);

        res.status(200).json({
            news
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getAllNews = async (req, res) => {
    try {
        const news = await New.find({})

        res.status(200).json({
            news,
            news_total: news.length
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getNewsById = async (req, res) => {
    try {
        const news = await New.findById(req.params.id);

        res.status(200).json({
            news
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};