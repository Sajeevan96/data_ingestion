const express = require('express');
const client = require('./connection')
const fs = require('fs');

const router = express.Router();

const reuters = JSON.parse(fs.readFileSync('reuters_26-09-1997_reformatted.json', 'utf8'));


// Add reuters articles into ElasticSearch
client.indices.exists({ index: 'reuters' })
    .then((resp) => {
        if (!resp) {
            client.bulk({ body: reuters })
                .then(() => client.indices.putMapping(mappingJson))      
        }
    })



module.exports = router;