const express = require('express')
const { multiply } = require('./functions/functions')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    const result = multiply(2,2)
    console.log(result)
    res.status(200).send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})