const router = require("express").Router();

const projects = [{
    title: "Portfolio",
    description: "Personal porfolio implemented using Node.js, Express & Bootstrap",
    startDate: new Date("2021-04-25"),
    endDate: new Date("2021-05-09"),
    gitLink: "https://github.com/geor1812/portfolio"
}];

router.get("/api/projects", (req, res) => {
    res.send({data: projects})
});

module.exports = {
    router
};