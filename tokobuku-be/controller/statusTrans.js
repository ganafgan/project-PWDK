const db = require('./../database/mysql')

const getTransactionStatus = (req,res) => {
    let sql = 'select * from transaction_status;'
    db.query(sql, (err,result)=>{
        try{
            if(err) throw err
            res.json({
                error : false,
                data : result
            })
        }catch(err){
            res.json({
                error :true,
                message : err.message
            })
        }
    })
}

module.exports = {
    getTransactionStatus
}