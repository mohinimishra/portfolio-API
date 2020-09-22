const ProjectService = require('./projectService');


function filter(req) {
    let query = { status: 'active' };

    if (req.query.status) {
        query.status = req.query.status
    }

    if (req.query.tags) {
        query["tags.name"] = req.query.tags
    }

    return query
}


module.exports.getList = (req, res, next) => {
    let filte = filter(req)
    ProjectService.projectList(filte).then(({ count, projects }) => {
        res.json({ message: 'List Of Projects', count: count, data: projects })
    }).catch((err) => next(err))
}

module.exports.getDetails = (req, res, next) => {
    let slug = req.params.slug
    ProjectService.projectDetails(slug).then(({ count, detail }) => {
        res.json({ message: "Details of Projects", count, data: detail })
    })
}

module.exports.create = (req, res, next) => {

}