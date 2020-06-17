const db = require('./../database/mysql');
const passwordHasher = require('./../helpers/hashing');
const { createJwt } = require('../helpers/jwt');
const transporter = require('./../helpers/nodemailerTransporter');


const register = (req,res) => {
    const data = req.body
    //email validator formatnya harus bener (Ceknya di front end // npm instal validator)

    //Get 4 digit Kode OTP Kasaran buat di back end ==========================================================
    let random_1 = Math.round(Math.random() * 9)
    let random_2 = Math.round(Math.random() * 9)
    let random_3 = Math.round(Math.random() * 9)
    let random_4 = Math.round(Math.random() * 9)
    var otp = `${random_1}${random_2}${random_3}${random_4}`
    otp = Number(otp)

    //Get 4 digit Kode OTP Kasaran buat di back end ==========================================================


    // Untuk get 4 digit Kode OTP buat di Front Endnya Pake Looping =========================================================
    // let otp = ''
    // for(var i = 0; i < 4; i++){
    //     otp += Math.round(Math.random() * 9)
    // }
    // console.log(Number(otp))
    // Untuk get 4 digit Kode OTP buat di Front Endnya Pake Looping ==========================================================

    const input = {
        username : data.username,
        email : data.email,
        password : data.password,
        role : data.username.includes('admin') ? 'admin' : 'user',  //di front end reactjs gaboleh input username yang includes admin, cuma di web admin bisanya
        isVerified : data.username.includes('admin') ? 1 : 0,
        otp : data.username.includes('admin') ? 0 : otp  
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
                                    if(err) throw er

                                    //SETTING EMAIL VERIFICATION WITH OTP BELUM BERES
                                    if(input.isVerified === 0){
                                        transporter.sendMail({
                                            from : "TokoBuku",
                                            to : data.email,
                                            subject : "<TokoBuku> Verify Your Email Now! <TokoBuku>",
                                            html : `
                                            <h2>Thanks for signing up! Here is your verification code : ${otp} <h2>
                                            `
                                        }).then((response)=>{
                                            res.json({
                                                error : false,
                                                message : "Register Success, Check your Email to Verify"
                                            })
                                        })
                                        .catch((err)=>{
                                            console.log(err)
                                        })
                                    }else{
                                        res.json({
                                            error :false,
                                            message : 'Register User Admin Success!'
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
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
}



const verify = (req,res) => {

    // const token = req.params.token
    // const dataToken = decodedToken(token)
    // console.log(dataToken)

    // let sqlUpdate = 'update users set verified = 1 where id = ? and email = ?;'
    // db.query(sqlUpdate, [dataToken.id, dataToken.email], (err, result)=>{
    //     try{
    //         if(err) throw err
    //         res.json({
    //             error : false,
    //             message : "verify success"
    //         })

    //     }catch(err){
    //         res.json({
    //             error : true, 
    //             message : err.message
    //         })
    //     }
    // })

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
            // if(result[0].isVerified === 0) throw {error : true, message : 'Please Verify Your Email'}

            const dataUser = result[0]
            const token = createJwt({id : dataUser.id, username : dataUser.username, email : dataUser.email, role : dataUser.role})

            res.json({
                error : false,
                message : 'Login Success',
                data : {id : dataUser.id, username : dataUser.username, email : dataUser.email},
                token : token
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

    // const data = req.body                                            INPUT EMAIL ATAU USERNAME DULU

    // const sqlEmailCheck = 'select * from users where email = ?'
    // db.query(sqlEmailCheck, data.email, (err,result)=>{
    //     try{
    //         if(err) throw err
    //         if(result.length === 0 ) throw {error : true, message : 'email not available'}

    //         console.log(result)
    //         const token = createJwt({email : result[0].email, id : result[0].id})
    //         transporter.sendMail({
    //             from : 'Warehouse',
    //             to : data.email,
    //             subject : 'RESET YOUR PASSWORD',
    //             html : `
    //             <h1>Click Link <a href= 'http://localhost:3000/reset-password/${token}'> Here </a> to reset your password
    //             `
    //         }).then((response)=>{
    //             res.json({
    //                 error : false,
    //                 message : 'Check Your Email to Reset Your Password'
    //             })
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //         })

            

    //     }catch(err){
    //         res.json({
    //             error : true,
    //             message : err.message
    //         })
    //     }
    // })


}



const resetPassword = (req,res) => {
    // const token = req.params.token
    // const dataToken = decodedToken(token)
    // const data = req.body
    // const afterHashing = passwordHasher(data.password)
    // data.password = afterHashing

    // console.log(dataToken)
    // const sql = 'update users set ? where id = ? and email = ?'
    // db.query(sql, [data, dataToken.id, dataToken.email], (err,result)=>{
    //     try{
    //         if(err) throw err
    //         res.json({
    //             error : false,
    //             message : 'Reset Password Success'
    //         })

    //     }catch(err){
    //         res.json({
    //             error : true,
    //             message : err.message
    //         })
    //     }
    // })
}


//VERIFY, FORGET PASS, & RESET PASS BELUM FINAL

module.exports = {
    register,
    verify,
    login,
    forgetPassword,
    resetPassword
}
