/* MMM-WorkoutStarter, written by Younes Bendimerad */


Module.register("MMM-WorkoutStarter", {

    getStyles: function() {
        return [this.file("MMM-WorkoutStarter.css")];
    },

	getDom: function() {
        // Div to hold the button
        const mainContainer = document.createElement("div");
        // Start Workout Button
        const startButton = document.createElement("button");
        startButton.innerHTML = "Start new Workout Session 💪";
        startButton.className = "workout-start-btn";
        startButton.onclick = (() => {
            // Send notification to MMM-WorkoutTracker and dismiss other displayed modules, don't need any payload
            MM.getModules().enumerate(module => module.hide(2000));
        });

        mainContainer.appendChild(startButton);

        return mainContainer;
    }
        

});