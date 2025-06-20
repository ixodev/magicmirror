Module.register("hellomodule", {
  // Default module config.
  defaults: {
    text: "Wilkommen zum Calisthenics SmartMirror!",
  },

  start: function() {
	  Log.log(this.name + "wurde erfolgreich gestartet");
  },

  // Override dom generator.
  getDom: function () {
    const wrapper = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = this.config.text;
    wrapper.appendChild(p);

    const p2 = document.createElement("p");
    p2.innerHTML = "RTSPStream Module coming soon...";
    wrapper.appendChild(p2);


    this.sendNotification("SHOW_ALERT", {title: "Notification from me", type: "notification", effect: "exploader", message: "Hi this is a magic mirror test"});

    return wrapper;


  }

});