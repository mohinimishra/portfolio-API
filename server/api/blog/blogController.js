const BlogService = require('./blogService');

module.exports.getList = (req, res, next) => {
    BlogService.blogList().then(({ count, blogs }) => {
        res.json({ message: 'List Of Blogs', count: count, data: blogs })
    }).catch((err) => next(err))
}

module.exports.getDetails = (req, res, next) => {
    let slug = req.params.slug
    BlogService.blogDetails(slug).then(({ count, detail }) => {
        res.json({ message: "Details of Blogs", count, data: detail })
    })
}