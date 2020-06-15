const db = require('./../database/mysql')

const getDataAuthors = (req,res) => {
    let sql = 'select * from authors;'

    db.query(sql, (err,result) => {
        try{
            if(err) throw err
            res.json({
                error : false,
                data : result
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
}


const postNewAuthor = (req,res) => {
    let data = req.body
    let sql = 'insert into authors set ?'

    db.query(sql, data, (err,result) => {
        try{
            if(err) throw err
            res.json({
                error : false,
                message : 'Post New Author Success!'
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
}


const getAuthorFiltered = (req,res) => {
    const name = req.query.name
    let sql = 'select * from authors where name = ?'

    db.query(sql, name, (err,result) => {
        try{
            if(err) throw err
            res.json({
                error : false,
                data : result
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
}


module.exports = {
    getDataAuthors,
    postNewAuthor,
    getAuthorFiltered
}