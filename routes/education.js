const router = require("express").Router();

const educationList = [{
    institution: "Copenhagen School of Design and Technology",
    education: "AP in Computer Science",
    startDate: new Date("2019-08-26"),
    endDate: new Date("2022-01-18"),
    courses: ["Software Development", "Software Design", "Technology", "IT Organization", "Node.js", "Python", "Creative Coding"]
}];

router.get("/api/education", (req, res) => {
    res.send({data: educationList});
});

module.exports = {
    router
};