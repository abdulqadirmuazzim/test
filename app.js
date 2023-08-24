const exp = require('express')
// const { v4 } = require('uuid');

const app = exp()

app.use(exp.static('public'))


app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="/coo.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Testing app</title>
    </head>
    <body>
    <h1>Salamualikum from express</h1>
    <script type="text/javascript" src="/ser.js"></script>
    </body>
    </html>`)
})
app.get('/about', (re, rs) => {
    rs.send("<h2>This in about testing our app on vercel</h2>")

})
let port = process.env.PORT || 2000
app.listen(2000, () => console.log("running on http://localhost:2000"))



module.exports = app;