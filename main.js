// Quiz
document.getElementById("btn").addEventListener("click", markQuiz);

let ans1 = document.getElementById("ans1-in");
let ans2 = document.getElementById("ans2-in");
let ans3 = document.getElementById("ans3-in");
let ans4 = document.getElementById("ans4-in");

let feedback1 = document.getElementById("feedback1");
let feedback2 = document.getElementById("feedback2");
let feedback3 = document.getElementById("feedback3");
let feedback4 = document.getElementById("feedback4");

let scoreFinal = document.getElementById("score-out");
let endMsg = document.getElementById("msg-out");
let scorePercent = document.getElementById("score-percent");

function markQuiz() {
  // Q1
  if (
    ans1.value.toLowerCase() === "dog" ||
    ans1.value.toLowerCase() === "a dog"
  ) {
    ans1.style.borderColor = `green`;
    ans1.style.borderWidth = `4px`;
    feedback1.innerHTML = "Correct";
    feedback1.style.color = `green`;
    q1 = 1;
  } else {
    ans1.style.borderColor = "red";
    ans1.style.borderWidth = `4px`;
    feedback1.style.color = `red`;
    feedback1.innerHTML = "Incorrect";

    q1 = 0;
  }

  // Q2
  if (
    ans2.value.toLowerCase() === "feet" ||
    ans2.value.toLowerCase() === "their feet"
  ) {
    ans2.style.borderColor = `green`;
    ans2.style.borderWidth = `4px`;
    feedback2.innerHTML = "Correct";
    feedback2.style.color = `green`;
    q2 = 1;
  } else {
    ans2.style.borderColor = "red";
    ans2.style.borderWidth = `4px`;
    feedback2.style.color = `red`;
    feedback2.innerHTML = "Incorrect";
    q2 = 0;
  }

  // Q3
  if (
    ans3.value.toLowerCase() === "murder" ||
    ans3.value.toLowerCase() === "a murder"
  ) {
    ans3.style.borderColor = `green`;
    ans3.style.borderWidth = `4px`;
    feedback3.innerHTML = "Correct";
    feedback3.style.color = `green`;
    q3 = 1;
  } else {
    ans3.style.borderColor = "red";
    ans3.style.borderWidth = `4px`;
    feedback3.innerHTML = "Incorrect";
    feedback3.style.color = `red`;

    q3 = 0;
  }

  // Q4
  if (ans4.value.toLowerCase() === "black") {
    ans4.style.borderColor = `green`;
    ans4.style.borderWidth = `4px`;
    feedback4.innerHTML = "Correct";
    feedback4.style.color = `green`;
    q4 = 1;
  } else {
    ans4.style.borderColor = "red";
    ans4.style.borderWidth = `4px`;
    feedback4.innerHTML = "Incorrect";
    feedback4.style.color = `red`;
    q4 = 0;
  }

  // score calc
  scoreNum = q1 + q2 + q3 + q4;
  scorePercentNum = scoreNum * 25;
  scoreFinal.innerHTML = scoreNum;
  scorePercent.innerHTML = scorePercentNum;
  if (scoreNum === 4) {
    endMsg.innerHTML = "Perfect Score!";
  } else if (scoreNum === 3) {
    endMsg.innerHTML = "Awesome!";
  } else if (scoreNum === 2) {
    endMsg.innerHTML = "Getting There!";
  } else if (scoreNum === 1) {
    endMsg.innerHTML = "Try Again!";
  } else {
    endMsg.innerHTML = "More Practice!";
  }
}
