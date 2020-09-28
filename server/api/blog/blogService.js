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

module.exports.deleteBlog = function (_id) {
    return new Promise(async (resolve, reject) => {
        try {
            let del = await Blog.findByIdAndDelete(_id)
            resolve({ del })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports.updateBlog = function (_id, data) {
    console.log(data)
    return new Promise(async (resolve, reject) => {
        try {
            let updateblog = await Blog.findByIdAndUpdate(_id, { $set: data }, { new: true })
            resolve(updateblog)
        } catch (error) {
            reject(error)
        }
    })
}