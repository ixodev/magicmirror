Module.register("MMM-WorkoutTracker", {
	defaults: {
		statsDisplayTexts: ["Current exercise: push-ups", "Num of reps: 0", "Calories: ... kcal", "Cardio: ... bpm"],
		appTitle: "WorkoutTracker",
		divWhiteBorderClass: "white-border"
	},

	currentExercise: "",
	repsPerExercise: 0,
	caloriesBurnt: 0, // cal
	cardio: 0, // bpm (beats per minute)


	getStyles () {
		return [this.file("MMM-WorkoutTracker.css")];
	},

	start () {

	},

	addWhiteBorderClassToContainer(container) {
		container.classList.add(this.defaults.divWhiteBorderClass);
	},

	createStatsDisplays(container) {
		var statsDisplaysContainer = document.createElement("div");
		this.addWhiteBorderClassToContainer(statsDisplaysContainer);

		var statsDisplays = [];

		for(x = 0; x < this.defaults.statsDisplayTexts.length; ++x) {
			const element = document.createElement("p");
			element.innerHTML = this.defaults.statsDisplayTexts[x];
			statsDisplaysContainer.appendChild(element);
			statsDisplays.push(element);
		}

		container.appendChild(statsDisplaysContainer);
		return statsDisplaysContainer;
	},

	createHeadlineBanner(container) {
		var headlineBanner = document.createElement("div");
		this.addWhiteBorderClassToContainer(headlineBanner);

		var title = document.createElement("h3");
		title.innerHTML = this.defaults.appTitle;
		headlineBanner.appendChild(title);

		container.appendChild(headlineBanner);

		return headlineBanner;
	},

	createQuitButton(container) {
		var quitButtonContainer = document.createElement("div");
		this.addWhiteBorderClassToContainer(quitButtonContainer);

		var quitButton = document.createElement("button");
		quitButton.className = "big-button";
		quitButton.innerHTML = "Stop Workout Session";

		quitButton.onclick = () => {
			this.stopWorkoutTracking();
			this.hide(1000);
			setTimeout(() => {
					this.sendNotification("WORKOUT_TRACKING_END", {});
			}, 1000);
		};

		quitButtonContainer.appendChild(quitButton);
		container.appendChild(quitButtonContainer);

		return quitButtonContainer;
	},

	getDom () {
		const mainContainer = document.createElement("div");
		mainContainer.className = "workout-tracker-wrapper";
		
		containers = {
			headlineBanner: this.createHeadlineBanner(mainContainer),
			stats: this.createStatsDisplays(mainContainer),
			quitButton: this.createQuitButton(mainContainer)
		};

		return mainContainer;
	},

	notificationReceived(notification, payload, sender) {
		if(sender) {
			if(sender.name === "MMM-WorkoutStarter" && notification === "WORKOUT_TRACKING_START") {
				this.show(1000);
				this.startWorkoutTracking();
			}
		}
	},

	socketNotificationReceived(notification, payload) {
		//if(notification == "WORKOUT_TRACKING_DATA") {
		console.log("J");
		console.log(JSON.stringify(payload));
		//}
	},

	startWorkoutTracking() {
		// Test purpose
	},
	
	stopWorkoutTracking() {

	}

});
