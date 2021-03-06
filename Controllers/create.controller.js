var db = require('../db')


module.exports = {
    post:(req,res)=>{
        var errors = []
        if(!req.body.name){
            errors.push('Name errors is required.')
        }
        if(errors.length != 0){
            res.render('../Views/create.pug',{errors:errors,value:req.body})
            return
        }
        db.get('users').push(req.body.name).write()
        console.log(req.body.name)
        res.redirect('/users')
    },
    get:(req,res)=>res.render("../Views/create.pug")
}