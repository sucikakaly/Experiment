const axios = require('axios')
const express = require('express')
const app = express()

app.get('/', (req,res)=> {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {
        res.json(result.data)
    })
})

app.listen(3000, ()=> console.log('server run at port 3000'))