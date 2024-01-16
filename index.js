const express = require('express')
const routes = require('./src/routes')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(routes)


app.listen(PORT, () => console.log(`App Listening on http://localhost:${PORT}`))