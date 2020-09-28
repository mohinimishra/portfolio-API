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
        res.status(200).json({ message: 'List Of Projects', count: count, data: projects })
    }).catch((err) => next(err))
}

module.exports.getDetails = (req, res, next) => {
    let slug = req.params.slug
    ProjectService.projectDetails(slug).then(({ detail }) => {
        res.status(200).json({ message: "Details of Projects", data: detail })
    }).catch(err => next(err))
}

module.exports.create = (req, res, next) => {
    let data = req.body;
    data.slug = data.name.split(' ').join('-').toLowerCase();
    // tag section
    let t = data.tags.split(',');
    let classes = ['success', 'danger', 'info', 'warning'];
    data.tags = t.map((ele, i) => {
        return { name: ele, class: classes[i] }
    });
    // related projects
    ProjectService.createProject(data).then(({ createDetail }) => {
        res.status(200).json({ 'message': 'Project Created Sucessfully', data: createDetail })
    }).catch((err) => {
        next(err)
    })
}

module.exports.delete = (req, res, next) => {
    ProjectService.deleteProject(req.params._id).then(({ del }) => {
        res.status(200).json({ message: 'Project Deleted Succesfully.' })
    }).catch((err) => { next(err) })
}

module.exports.update = (req, res, next) => {
    let data = req.body
    if (data.name || data.tags) {
        let t = data.tags.split(',')
        let classes = ['success', 'danger', 'info', 'warning'];
        data.tags = t.map((ele, i) => {
            return { name: ele, class: classes[i] }
        })
        ProjectService.updateProject(req.params._id, data).then(({ updateProj }) => {
            res.status(200).json({ message: "Project Updated Succesfully", data: updateProj })
        }).catch((err) => { next(err) })
    } else {
        ProjectService.updateProject(req.params._id, data).then(({ updateProj }) => {
            res.status(200).json({ message: "Project Updated Succesfully", data: updateProj })
        }).catch((err) => { next(err) })
    }
}

