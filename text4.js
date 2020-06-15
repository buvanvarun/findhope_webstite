(function () {
  var questions = [
    'In the last month, how often have you beens <span style="color:#70DB70">upset</span> because of something that  happened unexpectedly?',
    'In the last month, how often have you felt that you were unable to <span style="color:#70DB70">control</span> the important things in your life?',
    ' In the last month, how often have you felt <span style="color:#70DB70">nervous</span> and <span style="color:#70DB70">stressed</span>?',
    'In the last month, how often have you felt <span style="color:#70DB70">confident</span> about your ability to handle  your personal problems?',
    ' In the last month, how often have you felt that things were going <span style="color:#70DB70">your way?</span>',
    'In the last month, how often have you found that you could not <span style="color:#70DB70">cope</span> withall the things that you had to do?',
    'In the last month, how often have you been able to <span style="color:#70DB70">control irritations</span> inyour life?',
    'In the last month, how often have you felt that you were on <span style="color:#70DB70">top of things</span>?',
    'In the last month, how often have you been <span style="color:#70DB70">angered</span> because of things that happened that were outside of your control?',
    'In the last month, how often have you felt <span style="color:#70DB70">difficulties</span> were piling up so high thatyou could not overcome them?',
  ];

  var ch = 0;
  var depressionCount = 0;
  var reasons = {};
  displayQuestions();
  var width = screen.availWidth / 7;
  var barwidth = 0;

  function displayQuestions() {
    if (ch < 7) {
      document.getElementById("q").innerHTML =
        `<span class="anim">` + questions[ch] + `</span>`;
      barwidth += width;
      document.getElementById("progressbar").style.width =
        barwidth.toString() + "px";
      ch++;
    } else {
      barwidth += width;
      document.getElementById("progressbar").style.width =
        barwidth.toString() + "px";
      displayResult(depressionCount, reasons);
    }
  }

  var o1 = document.getElementById("o1");
  var o2 = document.getElementById("o2");
  var o3 = document.getElementById("o3");
  var o4 = document.getElementById("o4");
  var o5 = document.getElementById("o5");
  const reversAnswer = (i) => {
    depressionCount += 4 - i;
  };
  o1.onclick = function () {
    reasons[ch] = 0;
    if (ch === 3 && ch === 4 && ch === 6 && ch === 7) {
      reversAnswer(0);
    }
    displayQuestions();
  };
  o2.onclick = function () {
    reasons[ch] = 1;
    depressionCount += 1;
    if (ch === 3 && ch === 4 && ch === 6 && ch === 7) {
      reversAnswer(0);
    }
    displayQuestions();
  };
  o3.onclick = function () {
    reasons[ch] = 2;
    depressionCount += 2;
    if (ch === 3 && ch === 4 && ch === 6 && ch === 7) {
      reversAnswer(0);
    }
    displayQuestions();
  };
  o4.onclick = function () {
    reasons[ch] = 3;
    depressionCount += 3;
    if (ch === 3 && ch === 4 && ch === 6 && ch === 7) {
      reversAnswer(0);
    }
    displayQuestions();
  };
  o5.onclick = function () {
    reasons[ch] = 4;
    depressionCount += 4;
    if (ch === 3 && ch === 4 && ch === 6 && ch === 7) {
      reversAnswer(0);
    }
    displayQuestions();
  };
})();

function displayResult(s, reasons) {
  document.getElementById("question").classList.add("opac");
  document.getElementById("options").classList.add("opac");
  document.getElementById("res").classList.remove("opac");
  var str;
  if (s <= 13) {
    str = "Low Stress";
  } else if (s > 13 && s <= 26) {
    str = "Moderate Stress";
  } else {
    str = "High perceived Stress";
  }

  document.getElementById("r").innerHTML = "Result:\n" + str;
  document.getElementById("percent").innerHTML =
    Math.ceil((s / 30) * 100).toString() + "%";
  document.getElementById("circle2").style.strokeDashoffset = (
    660 *
    (s / 30)
  ).toString();
  console.log(s);
  var items = Object.keys(reasons).map(function (key) {
    return [key, reasons[key]];
  });
  items.sort(function (first, second) {
    return second[1] - first[1];
  });
  reasons = items.slice(0, 3);
  console.log(reasons[0][0], reasons[1][0], reasons[2][0]);
}

$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  var scene0 = new ScrollMagic.Scene({
    triggerElement: "#container2",
  })
    .setClassToggle("#o1", "comeup")
    .addTo(controller);
});
