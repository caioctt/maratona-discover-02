const express = require('express');
const routes = express.Router();
const views = __dirname+"/views/"

const profile = {
    name: "Caio Tavares",
    avatar: "",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 4,
    "vacation-per-year": 4
}

routes.get('/', (request,response)=> {
    return response.render(views+"/index")
})
routes.get('/job', (request,response)=> {
    return response.render(views+"/job")
})
routes.get('/job/edit', (request,response)=> {
    return response.render(views+"/job-edit")
})
routes.get('/profile', (request,response)=> {
    return response.render(views+"/profile", {profile})
})

module.exports = routes;