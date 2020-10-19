const orphanages = require('./database/fakedata.js')

module.exports = {
    // require, resquest 
    index(req, res){
        return res.render('index')
    },

    orphanage(req, res) {
        return res.render('orphanage')
    },

    orphanages(req, res){
        return res.render('orphanages', {orphanages})
    },

    createOrphanage(req, res){
        return res.render('create-orphanage')
    }
}