# Data ingestion with Elasticsearch

The goal of this project is to insert data.

There are 2 steps:
1) Data reshaping
2) Data ingestion

## Summary
***

* [Usage](#usage)
* [Installation](#installation)
* [Project using Elasticsearch](#project-using-elasticsearch)

## Installation

* If you do not have node.js installed in your computer, download it on https://nodejs.org/en/

* If you do not have npm installed in your computer, download it on https://www.npmjs.com/get-npm

##  Usage

* First, clone the project:
```sh
$ git clone https://github.com/Sajeevan96/data_ingestion
``` 

* Launch ElasticSearch.

* Install packages by using this command in a command prompt:
```sh
cd data_ingestion
$ npm install
``` 

1 - Data reshaping:
```sh
$ node reformat.js
``` 
In this step, data from reuters_26-09-1997 JSON file will be reshaped before writing it in the reuters_26-09-1997_reformatted JSON file. This step is mandatory in order to import the data into Elasticsearch.

2 - Data ingestion:
```sh
$ node article.js
``` 
The data is injected by using the Elasticsearch Javascript API (see https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html). We are using the **bulk method** that allows to send several lines in one go.

##  Project using Elasticsearch

The project is available on the following link: https://github.com/Sajeevan96/elastic. This project is a web application with **data ingestion, queries and visualization** using the Reuters dataset. 

