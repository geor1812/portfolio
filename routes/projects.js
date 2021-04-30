const router = require("express").Router();

const projects = [{

}]

router.get("/api/projects", (req, res) => {
    res.send({data: projects})
});

module.exports = {
    router
};