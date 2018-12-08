function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;


	if (question1 == "True") {
		correct++;
}
	if (question2 == "True") {
		correct++;
}
	if (question3 == "False") {
		correct++;
}
	if (question4 == "True") {
	correct++;
}
	if (question5 == "False") {
	correct++;
}


	var pictures = ["win.gif", "pretty_good.gif", "whatever.gif", "meh.gif", "lose.gif"];
	var messages = ["Great job! You got a perfect score!", "That's pretty good", "It's not that bad", "Still need more practice", "You really need to do better"];
	var score;


	if (correct == 0) {
		score = 4;
	}

	if (correct < 3 && correct > 0) {
		score = 3;
	}

	if (correct == 3) {
		score = 2;
	}

	if (correct ==4) {
		score = 1;
	}

	if (correct == 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
