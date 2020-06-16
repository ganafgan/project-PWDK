const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/public', express.static('public'))

app.use('/auth', require('./router/authentication'))
app.use('/user', require('./router/users'))
app.use('/products', require('./router/products'))
app.use('/category', require('./router/category'))
app.use('/authors', require('./router/authors'))
app.use('/publishers', require('./router/publishers'))
app.use('/rating-review', require('./router/ratingReview'))
app.use('/wishlist', require('./router/wishlist'))
app.use('/cart', require('./router/cart'))
app.use('/transaction', require('./router/transaction'))
app.use('/uploader', require('./router/uploader'))


app.get('/', (req, res)=>{
    res.send('<h1>API TOKO BUKU 2020</h1>')
})
app.listen(port, ()=>console.log('API run on port ' + port))
