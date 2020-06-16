const db = require('./../database/mysql')
const passwordHasher = require('./../helpers/hashing')

const register = (req,res) => {
    const data = req.body
    //email validator formatnya harus bener (Ceknya di front end // npm instal validator)

    const input = {
        username : data.username,
        email : data.email,
        password : data.password,
        role : data.username.includes('admin') ? 'admin' : 'pembeli',  //di front end reactjs gaboleh input username yang includes admin, cuma di web admin bisanya
        isVerified : data.username.includes('admin') ? 1 : 0
    }

    const sqlUsernameCheck = 'select * from users where username = ?'
    db.query(sqlUsernameCheck, data.username, (err,result)=>{
        try{
            if(err) throw err
            if(result.length > 0 ){
                res.json({
                    error : true,
                    message : 'username has been taken'
                })
            }else{
                const sqlEmailCheck = 'select * from users where email = ?'
                db.query(sqlEmailCheck, data.email, (err,result) => {
                    try{
                        if(err) throw err
                        if(result.length > 0){
                            res.json({
                                error : true,
                                message : 'email has been taken'
                            })
                        }else{
                            const afterHashing = passwordHasher(input.password)
                            input.password = afterHashing

                            const sqlInsert = 'insert into users set ?'
                            db.query(sqlInsert, input, (err, result)=>{
                                try{
                                    if(err) throw err
                                    //BELUM SETTING BUAT SEND EMAIL VERIFICATION TO USER

                                    res.json({
                                        error : false,
                                        message : 'Register Success'
                                    })

                                }catch(err){
                                    res.json({
                                        error : true,
                                        message : err.message
                                    })
                                }
                            })
                        }
                    }catch(err){
                        res.json({
                            error : true,
                            message : err.message
                        })
                    }
                })
            }
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
}

const verify = (req,res) => {

}

const login = (req,res) => {
    const data = req.body

    const afterHashing = passwordHasher(data.password)
    data.password = afterHashing

    let sql = 'select * from users where username = ? and password = ?'
    db.query(sql, [data.username, data.password], (err, result)=>{
        try{
            if(err) throw err
            if(result.length === 0) throw {error : true, message : 'username or password invalid'}
            if(result[0].isVerified === 0) throw {error : true, message : 'Please Verify Your Email'}

            const dataUser = result[0]
            res.json({
                error : false,
                message : 'Login Success',
                data : {id : dataUser.id, username : dataUser.username, email : dataUser.email}
            })

        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })


}

const forgetPassword = (req,res) => {

}

const resetPassword = (req,res) => {

}

module.exports = {
    register,
    verify,
    login,
    forgetPassword,
    resetPassword
}
