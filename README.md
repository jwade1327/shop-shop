# MERN / React-Redux Shopping Website

## Description

This is a full-stack MERN website using React-Redux on the front-end. This project was crafting using React's storeContex GlobalState and then refactored using Redux. I kept the old refactored code so showcase the switch between the two. Apollo GraphQL manages the server request from the front-end. Concurrently is the intermediary package that handles the front and backend server. In addition, Stripe-test has been set up to show how to purchase items from the store. 
    
## Table of Contents 
* [Installation](#Installation) 
* [Usage](#Usage) 
* [License](#License) 
* [Questions](#Questions) 

## Installation

Front-end packages: react, apollo/react-hooks, apollo-boost, apollo-link-context,  stripe/stripe-js, graphql, graphql-tag, jwt-decode, and redux. On the backend I used: apollo-server-express, bycrypt, express, jsonwebtoken, mongoose, and stripe. You can download this package and "npm i" in both the front-end and back end which will install of the dependencies in the package.json.   
    
## Usage

You're free to use and expand upon this project on your own. Currently there isn't a way to manage the database through an admin account so that would need to be fixed. Data is currently ran by navigating to the server and populating the database through the seeds file. At the present the quanity of the database is not affected by the current API pathways. There is another issue that the navigating to the homepage does not clear the currentCategory selected. 
    
![GitHub license](https://img.shields.io/badge/license-isc-blue.svg)

## License
    
This project falls under the isc license. Please visit [isc](https://choosealicense.com/licenses/isc) to learn more.