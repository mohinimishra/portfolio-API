const Blog = require('./blogSchema');
const { response } = require('express');

module.exports.blogList = function () {
    return new Promise(async (resolve, reject) => {
        try {
            let count = await Blog.find().countDocuments();
            let blogs = await Blog.find()
            resolve({ count, blogs })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports.blogDetails = function (slug) {
    return new Promise(async (resolve, reject) => {
        try {
            let count = await Blog.findOne({ slug: slug }).countDocuments();
            let detail = await Blog.findOne({ slug: slug })
            resolve({ count, detail })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports.create = function (data) {
    return new Promise(async (resolve, reject) => {
        try {
            let newBlog = await new Blog(data);
            let createDetail = await newBlog.save()
            resolve({ createDetail })
        } catch (err) {
            reject(err)
        }
    })
}

module.exports.update = function (slug, data) {
    return new Promise(async (resolve, reject) => {
        try {
            let updateBlog = await Blog.findByIdAndUpdate({ slug: slug }, { $set: data })
            resolve({ updateBlog })
        } catch (error) {
            next(err)
        }
    })
}