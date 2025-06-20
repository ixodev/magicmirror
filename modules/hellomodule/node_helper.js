const NodeHelper = require("node_helper");
module.exports = NodeHelper.create({
    start: function (){
        this.expressApp.get("/test", function (req, res) {
		    res.send("GET request to /test");
	    });
    }
});
