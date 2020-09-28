const Project = require('./projectSchema');

module.exports.projectList = function (filter) {
    return new Promise(async (resolve, reject) => {

        try {
            let count = await Project.find(filter).countDocuments();
            let projects = await Project.find(filter)
            resolve({ count, projects })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports.projectDetails = function (slug) {
    return new Promise(async (resolve, reject) => {
        try {
            let count = await Project.findOne({ slug: slug }).countDocuments();
            let detail = await Project.findOne({ slug: slug })
            resolve({ count, detail })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports.createProject = function (data) {
    return new Promise(async (resolve, reject) => {
        try {
            let newProject = await new Project(data);
            let createDetail = await newProject.save()
            resolve({ createDetail })
        } catch (err) {
            reject(err)
        }
    })
}

module.exports.deleteProject = function (_id) {
    return new Promise(async (resolve, reject) => {
        try {
            let del = await Project.findOneAndDelete({ _id })
            resolve({ del })
        } catch (err) {
            reject(err)
        }
    })
}

module.exports.updateProject = function (id, data) {
    return new Promise(async (resolve, reject) => {
        try {
            let updateProj = await Project.findByIdAndUpdate(id, { $set: data }, { new: true })
            resolve(({ updateProj }))
        } catch (error) {
            reject(error)
        }
    })
}
