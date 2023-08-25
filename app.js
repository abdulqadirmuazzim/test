const exp = require('express')

const app = exp()

app.use(exp.static(`${__dirname}\\public`))

app.use((req, res, next) => {
    console.log(`Incoming request for ${req.originalUrl}`);
    next();
});

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
    <h1>testing testing from express</h1>
    <script type="text/javascript" src="/ser.js"></script>
    </body>
    </html>`)
})


let port = process.env.PORT || 2000
app.listen(2000, () => console.log("running on http://localhost:2000"))



module.exports = app;