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

module.exports.create = function (data) {
    return new Promise(async (resolve, reject) => {
        try {
            let newProject = await new Project(data);
            let count = await newProject.save().countDocuments();
            let createDetail = await newProject.save()
            resolve({ count, createDetail })
        } catch (err) {
            reject(err)
        }
    })
}