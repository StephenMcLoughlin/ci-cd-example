const express = require('express')
const { multiply } = require('./functions')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    const result = multiply(2,2)
    res.send('Hello World!', result)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})