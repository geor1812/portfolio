const router = require("express").Router();

/*
    Skills Schema
        title: string
        description: string
        type: string
        progress: number(1 to 5)
*/

const skills = [{
        title: "Java",
        description: "I have studied Java for two years and have gained a good understanding of object oriented programming and the most used elements of the language.",
        type: "language",
        progress: 4
    }, {
        title: "JavaScript",
        description: "I have a firm grasp on using JavaScript as a full-stack language, using it to create servers (NodeJS), but also to build dynamic webpages.",
        type: "language",
        progress: 4
    }, {
        title: "Python",
        description: "I am able to use simple and advanced elements of the language. I am able to write pythonic code that follows the industry's best practices.",
        type: "language",
        progress: 3
    }, {
        title: "Processing",
        description: "I have created multiple generative art projects using Processing, both in 2D and 3D. I have a good understanding of how to use mathematical functions to generate visual art.",
        type: "language",
        progress: 3
    }, {
        title: "SQL",
        description: "I have a good understanding of all the core concepts of the language as well as relation databases in general, which I have used in numerous projects.",
        type: "language",
        progress: 4
    }, {
        title: "HTML",
        description: "My first introduction to HTML was in 2015 and I have been using it ever since in all web projects. In 2019 I obtained a HTML certification as part of my highschool education.",
        type: "language",
        progress: 5
    }, {
        title: "CSS",
        description: "I am able to use and understand CSS, but I prefer using styling libraries or frameworks",
        type: "language",
        progress: 2
    }, {
        title: "FoxDot",
        description: "I have recently started learning FoxDot for the purpose of live-coding music. This being a creative language, I am currently in the process of discovering what works and how.",
        type: "language",
        progress: 1
    }, {
        title: "Express",
        description: "I have used Express in multiple projects to create servers which serve files, handle requests and other server related tasks",
        type: "fandl",
        progress: 3
    }, {
        title: "Git",
        description: "I am able to use create and maintain repositories, use commands and work in a team environment on a project using Git's standard workflow.",
        type: "service",
        progress: 3
    }, {
        title: "REST API Development",
        description: "I am able to design and implement REST APIs that conform to industry standards. I understand the inner workings of HTTP methods, requests and responses.",
        type: "industry",
        progress: 3
    }, {
        title: "React",
        description: "",
        type: "fandl",
        progress: 3
    }, {
        title: "Spring Boot",
        description: "",
        type: "fandl",
        progress: 2
    }, {
        title: "Bootstrap",
        description: "",
        type: "fandl",
        progress: 4
    }, {
        title: "Docker",
        description: "",
        type: "service",
        progress: 3
    }, {
        title: "Amazon Web Services",
        description: "",
        type: "service",
        progress: 1
    }, {
        title: "Heroku",
        description: "",
        type: "service",
        progress: 4
    }, {
        title: "Agile Development",
        description: "",
        type: "industry",
        progress: 4
    }, {
        title: "Jenkins",
        description: "",
        type: "service",
        progress: 2
    }, {
        title: "Networking",
        description: "",
        type: "industry",
        progress: 3
    }, {
        title: "CI/CD",
        description: "",
        type: "industry",
        progress: 1
    }
];

router.get("/api/skills", (req, res) => {
    res.send({data: skills})
});

module.exports = {
    router
};