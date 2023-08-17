const exp = require('express')
const { v4 } = require('uuid');

const app = exp()

app.get('/api', (req, res) => {
    const path = `/api/item/${v4()}`;
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
    const { slug } = req.params;
    res.end(`Item: ${slug}`);
});



app.get('/', (req, res) => {
    res.send("Salamualikum from express")
})
app.get('/about', (re, rs) => {
    rs.send("<h2>This in about testing our app on vercel</h2>")

})

app.listen(2000, () => console.log("running on http://2000"))



module.exports = app;