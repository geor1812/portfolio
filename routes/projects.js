const router = require("express").Router();

const projects = [{
    title: "Portfolio",
    type: "swd",
    description: "This personal portfolio, which has been implemented using Node.js in conjunction with Express. The Bootstrap library was used for front-end styling.",
    startDate: new Date("2021-04-25"),
    endDate: new Date("2021-05-09"),
    links: [{url: "https://github.com/geor1812/portfolio",
            description: "Github"}]
}, {
    title: "Node.js Documentation Website",
    type: "swd",
    description: "A website that documents what I have learned during the first months of the Node.js elective. The project was implemented using Node.js with Express, the styling was done with Bootstrap.",
    startDate: new Date("2021-03-17"),
    endDate: new Date("2021-03-24"),
    links: [{url: "https://nodejs-docu.herokuapp.com/",
            description: "Website"},
            {url:"https://github.com/geor1812/nodejs-docu",
            description: "Github"}]
}, {
    title: "Memento",
    type: "swd",
    description: "A notes taking application in which the user can create multiple types of notes and manage them. The project uses a MySQL database and Java with Spring Boot for the back-end, which acts as an API. The front-end application was implemented using React.",
    startDate: new Date("2020-12-01"),
    endDate: new Date("2020-12-20"),
    links: [{url: "https://github.com/geor1812/memento-backend",
            description: "Back-end Github"},
            {url:"https://github.com/geor1812/memento-frontend",
            description: "Front-end Github"}]
}, {
    title: "Websites2",
    type: "swd",
    description: "A basic webshop with no payment implemented. This project was created using MySQL, Java, Spring Boot, React and Bootstrap.",
    startDate: new Date("2020-10-27"),
    endDate: new Date("2020-12-09"),
    links: [{url: "https://websites2.herokuapp.com/products",
            description: "Back-end API(access this link first)"},
            {url:"https://websites2-frontend.herokuapp.com/",
            description: "Front-end website"},
            {url: "https://github.com/geor1812/websites2",
            description: "Back-end Github"},
            {url:"https://github.com/geor1812/websites2-frontend",
            description: "Front-end Github"}]
}];

router.get("/api/projects", (req, res) => {
    res.send({data: projects})
});

module.exports = {
    router
};