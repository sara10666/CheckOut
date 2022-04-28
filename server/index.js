'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
//require('dotenv').config();
const router = require('./router');
const PORT = process.env.PORT || 3001;

const db = require('./model/index');

app.use(cors());
app.use(express.json());
app.use(router);
//making another commit
(async () => {
    try {
        await db.sequelize.sync({force:true});
    } catch (e) {
        console.log('ERROR: ', e)
    }
    app.listen(PORT);
    console.log(`server listening on port ${PORT}`);
})();