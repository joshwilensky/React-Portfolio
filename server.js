const express = require('express')
const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}


app.listen(PORT, function () {
    console.log('PORT', PORT)
})