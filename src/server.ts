const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 5000





async function mongooseApp() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/apllo-mongoose');

        console.log('Database connectoin successfull');

        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    } catch (error) {
        console.log(error);

    }

}
mongooseApp()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Mongoose app listening on port ${port}`)
})

