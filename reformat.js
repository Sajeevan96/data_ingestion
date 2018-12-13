const fs = require('fs');

let jsonInput = fs.readFileSync('reuters_26-09-1997.json', 'UTF8');
let objects = jsonInput.split('\n');
let resultFile = "[";

elasticSearchHeader = {
    "index": {
        "_index": "reuters",
        "_type": "article",
    }
};

elasticSearchFields = {
    "date": "",
    "topics": "",
    "places": "",
    "people": "",
    "orgs": "",
    "exchanges": "",
    "companies": "",
    "text": {
        "title": "",
        "dateline": "",
        "body": "",
    }
};
objects.forEach((element, index) => {
    element = JSON.parse(element);
    elasticSearchHeader.index._id = index + 1;
    resultFile += JSON.stringify(elasticSearchHeader) + ',\n';
    elementToAdd = {"fields": {}};
    Object.keys(elasticSearchFields).forEach((key) => {
        elementToAdd.fields[key] = element[key];
    })
    resultFile += JSON.stringify(elementToAdd)
    if(objects.length - 1 != index){
        resultFile += '\n,';
    }
});
resultFile += "]";
fs.writeFileSync('reuters_26-09-1997_reformatted.json', resultFile, 'UTF8');
