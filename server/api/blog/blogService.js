const Blog = require('./blogSchema')

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
            let count = await newBlog.save().countDocuments();
            let createDetail = await newBlog.save()
            resolve({ count, createDetail })
        } catch (err) {
            reject(err)
        }
    })
}