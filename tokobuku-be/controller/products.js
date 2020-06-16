const db = require('./../database/mysql')
const { uploader } = require('../helpers/uploader')
const fs = require('fs')


const getAllDataProducts = (req,res) => {
    let sql = `select p.id, p.name as title, p.price, p.description, p.stock, p.tahun_terbit, p.halaman, p.bahasa, 
    c.category, a.name as author, pr.name as publisher, pi.url_image from products p 
    left join product_images pi on p.id =  pi.product_id
    join category c on p.category_id = c.id
    join authors a on p.authors_id = a.id
    join publishers pr on p.publishers_id = pr.id;`

    db.query(sql, (err,result) => {
        try{
            if(err) throw err
            res.json({
                error : false,
                data : result
            })
            //BELUM HANDLE PAGINATION
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })

}


const getProductById = (req,res) => {
    let id = req.params.id
    let sql = `select p.id, p.name as title, p.price, p.description, p.stock, p.tahun_terbit, p.halaman, p.bahasa, 
    c.category, a.name as author, pr.name as publisher, pi.url_image from products p 
    left join product_images pi on p.id =  pi.product_id
    join category c on p.category_id = c.id
    join authors a on p.authors_id = a.id
    join publishers pr on p.publishers_id = pr.id where p.id = ?;`

    db.query(sql, id, (err,result) => {
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


const postNewProduct = (req,res) => {
    const upload = uploader('/products', 'PRD-IMG').single('product_image')
    let data = req.body

    upload(req, res, (err) => {
        if(err) throw err

        let sql_1 = 'insert into products set ?'
        db.query(sql_1, data, (err,result)=>{
            try{
                if(err) throw err
                
                let dataImg = {
                    url_image : req.file.path,
                    product_id : result.insertId
                }
                let sql_2 = 'insert into product_images set ?'
                db.query(sql_2, dataImg, (err,resutl) => {
                    try{
                        if(err) throw err
                        res.json({
                            error : false,
                            message : 'product successfully added'
                        })
                    }catch(err){
                        res.json({
                            error : true,
                            message : err.message
                        })
                    }
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


const editProduct = (req,res) => {
    let id = req.params.id
    let data = req.body
    let sql = 'update products set ? where id = ?'

    db.query(sql, [data,id], (err,result)=>{
        try{
            if(err) throw err
            res.json({
                error : false,
                message : 'Update Product Success!'
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
}


const deleteProduct = (req,res) => {
    let id = req.params.id
    let sql_1 = 'delete from products where id = ?'

    db.query(sql_1, id, (err,result) => {
        try{
            if(err) throw err
            let sql_2 = 'select * from product_images where id = ?'
            db.query(sql_2, id, (err,result) => {
                try{
                    if(err) throw err
                    fs.unlinkSync(result[0].url_image)
                    let sql_3 = 'delete from product_images where id = ?'
                    db.query(sql_3, id, (err,result) => {
                        try{
                            if(err)throw err
                            res.json({
                                error : false,
                                message : 'Delete Success'
                            })
                        }catch(err){
                            res.json({
                                error : true,
                                message : err.message
                            })
                        }
                    })
                }catch(err){
                    res.json({
                        error : true,
                        message : err.message
                    })
                }
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
    getAllDataProducts,
    getProductById,
    postNewProduct,
    editProduct,
    deleteProduct
}