const exp = require('express')
const { v4 } = require('uuid');

const app = exp()

app.get('/api', (req, res) => {
    const path = `/api/item/${v4()}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1,Hello! Go to item: <a href="${path stale-while-revalidate');
    res.end(`}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
    const { slug } = req.params;
    res.end(`Item: ${slug}`);
});


module.exports = app;

app.get('/', (req, res) => {
    res.send(`<h1>Salamualikum from express</h1>
    <style>
    body{
        margin:0;
        background: linear-gradient(to right, orange, red);
    }
    </style>`)
})
app.get('/about', (re, rs) => {
    rs.send("<h2>This in about testing our app on vercel</h2>")

})
let port = process.env.PORT || 2000
app.listen(2000, () => console.log("running on http://2000"))


