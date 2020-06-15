const express = require('express')
const app = express()
const port = 4000

app.use(express.json())

app.use('/auth', require('./router/authentication'))



app.get('/', (req, res)=>{
    res.send('<h1>API TOKO BUKU 2020</h1>')
})
app.listen(port, ()=>console.log('API run on port ' + port))
