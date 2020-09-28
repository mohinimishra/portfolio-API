const BlogService = require('./blogService');

module.exports.getList = (req, res, next) => {
    BlogService.blogList().then(({ count, blogs }) => {
        res.status(200).json({ message: 'List Of Blogs', count: count, data: blogs })
    }).catch((err) => {
        next(err)
    })
}

module.exports.getDetails = (req, res, next) => {
    let slug = req.params.slug
    BlogService.blogDetails(slug).then(({ count, detail }) => {
        res.status(200).json({ message: "Details of Blogs", count, data: detail })
    }).catch((err) => {
        next(err)
    })
}

module.exports.create = (req, res, next) => {
    let data = req.body
    data.slug = data.name.split(' ').join('-').toLowerCase();
    let classes = ['primar', 'success', 'danger', 'info', 'warning'];
    let random = parseInt(Math.random() * classes.length)
    let randomClass = classes[random]
    data.tags = { name: data.tags, class: randomClass }
    BlogService.create(data).then(({ createDetail }) => {
        res.status(200).json({ message: "Create Project List", data: createDetail })
    }).catch((err) => {
        next(err)
    })
}

module.exports.delete = (req, res, next) => {
    BlogService.deleteBlog(req.params._id).then(({ del }) => {
        res.status(200).json({ message: 'Blog Deleted Succesfully' })
    }).catch((err) => {
        next(err)
    })
}

module.exports.update = (req, res, next) => {
    let data = req.body
    if (data.tags) {
        let classes = ['primar', 'success', 'danger', 'info', 'warning'];
        let random = parseInt(Math.random() * classes.length)
        let randomClass = classes[random]
        data.tags = { name: data.tags, class: randomClass }
        BlogService.updateBlog(req.params._id, data).then((updateblog) => {
            res.status(200).json({ message: 'Blog Update Succesfully', data: updateblog })
        }).catch((err) => {
            next(err)
        })
    }
    else {
        BlogService.updateBlog(req.params._id, data).then((updateblog) => {
            res.status(200).json({ message: 'Blog Update Succesfully', data: updateblog })
        }).catch((err) => {
            next(err)
        })
    }


}