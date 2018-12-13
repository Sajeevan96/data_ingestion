# Data ingestion

The goal of this project is to insert data.

There are 2 steps:
- 1) Data reshaping
- 2) Data ingestion

## Summary
***

* [Usage](#usage)
* [More Details](#more-details)

##  Usage

* If you do not have node.js installed in your computer, download it on https://nodejs.org/en/

* If you do not have npm installed in your computer, download it on https://www.npmjs.com/get-npm

* First, clone the project:
```sh
$ git clone https://github.com/Sajeevan96/data_ingestion
``` 

* Launch ElasticSearch.

* Install packages:
```sh
$ npm install
``` 

- 1) Data reshaping:
```sh
$ node reformat.js
``` 

- 2) Data ingestion
```sh
$ node article.js
``` 
