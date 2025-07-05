const NodeHelper = require("node_helper");
const bodyParser = require("body-parser");

module.exports = NodeHelper.create({
    start() {
        this.expressApp.use(bodyParser.json());

        this.expressApp.post("/workout-tracking", (req, res) => {
            this.sendSocketNotification("WORKOUT_TRACKING_DATA", req.body);
            res.status(200).send("OK");
        });
        
    }
});