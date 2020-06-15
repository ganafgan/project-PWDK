const db = require('./../database/mysql')


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
    let data = req.body
    let sql = 'insert into products set ?'

    db.query(sql, data, (err,result)=>{
        try{
            if(err) throw err
            res.json({
                error : false,
                message : 'Post New Product Success!'
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
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
    let sql = 'delete from products where id = ?'

    db.query(sql, id, (err,result) => {
        try{
            if(err) throw err
            res.json({
                error : false,
                message : 'Delete Product Success!'
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