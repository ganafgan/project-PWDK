const db = require('./../database/mysql')
const {uploader} = require('../helpers/uploader')


const postPaymentConfirmation = (req,res) => {
    const upload = uploader('/payment', 'PAY').single('pay_image')
    
    upload (req, res, (err) => {
        if(err) throw err
        const image = req.file
        const data = JSON.parse(req.body.data)
        const id = req.params.transaction_id

        const dataToUpdate = {
            transaction_status_id : 2,
            url_payment_proof : req.file.path,
            name_bank_account : data.nama,
            bank_account : data.no_rek,
        }

        const sql = 'update transaction set ? where id = ?'
        db.query(sql, [dataToUpdate, id], (err,result) => {
            try{
                if(err) throw err
                res.json({
                    error : false,
                    message : 'Payment Proof Updated'
                })
            }catch(err){
                res.json({
                    error : true,
                    message : err.message
                })
            }
        })
    })
}



const postUserProfilePict = (req,res) => {
    const upload = uploader('/profile', 'PROFILE').single('profile_image')

    upload(req, res, (err) => {
        if(err) throw err
        const image = req.file
        const id = req.params.user_id

        const dataToUpdate = {
            url_profile_image : req.file.path
        }

        const sql = 'update user_detail set ? where users_id = ?'
        db.query(sql, id, (err, result) => {
            try{
                if(err) throw err
                res.json({
                    error : false,
                    message : 'Profile Picture Updated'
                })
            }catch(err){
                res.json({
                    error : true,
                    message : err.message
                })
            }
        })
    })
}



const postAuthorPict = (req,res) => {
    const upload = uploader('/author', 'AUTHOR').single('author')

    upload(req, res, (err) => {
        if(err) throw err
        const image = req.file
        const id = req.params.id

        const dataToUpdate = {
            url_author_image : req.file.path
        }

        const sql = 'update authors set ? where id = ?'
        db.query(sql, [dataToUpdate,id], (err, result) => {
            try{
                if(err) throw err
                res.json({
                    error : false,
                    message : 'Author Picture Updated'
                })
            }catch(err){
                res.json({
                    error : true,
                    message : err.message
                })
            }
        })
    })
}



const postPublisherPict = (req,res) => {
    const upload = uploader('/publisher', 'PUBLISHER').single('publisher')

    upload(req, res, (err) => {
        if(err) throw err
        const image = req.file
        const id = req.params.id

        const dataToUpdate = {
            url_publisher_logo : req.file.path
        }

        const sql = 'update publihers set ? where id = ?'
        db.query(sql, id, (err, result) => {
            try{
                if(err) throw err
                res.json({
                    error : false,
                    message : 'Publisher Logo Updated'
                })
            }catch(err){
                res.json({
                    error : true,
                    message : err.message
                })
            }
        })
    })
}



module.exports = {
    postPaymentConfirmation,
    postUserProfilePict,
    postAuthorPict,
    postPublisherPict
}