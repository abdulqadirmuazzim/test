const exp = require('express')
app = exp()

app.get('/', (req, res) => {
    res.send("Salamualikum from express")
})
app.get('/about', (re, rs) => {
    rs.send("<h2>This in about testing our app on vercel</h2>")

})

app.listen(2000, () => console.log("running on http://2000"))


