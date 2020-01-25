(function () {
  var questions = [
    'Little interest or <span style="color: #70db70;">pleasure</span> in doing things in the past two weeks',
    'Feeling down, <span style="color: #70db70;">depressed</span> or hopeless in the past two weeks',
    'Trouble falling or staying <span style="color: #70db70;">asleep</span> or sleeping too much in the past two weeks',
    'Feeling <span style="color: #70db70;">tired</span> or having little energy in the past two weeks',
    'Poor <span style="color: #70db70;">appetite</span> or overeating in the past two weeks',
    'Feeling bad about yourself or that you are a <span style="color: #70db70;">failure</span> or have let yourself or your family down in the past two weeks',
    'Trouble <span style="color: #70db70;">concentrating</span> on things, such as studying or watching movies in the past two weeks',
    'Moving or speaking so slowly or behaving <span style="color: #70db70;">restlessly</span>than usual in the past two weeks',
    'Thoughts that you would be better off dead,or of <span style="color: #70db70;">hurting</span> yourself in the past two weeks'
  ];
  var ch = 0;
  var depressionCount = 0;

  displayQuestions();
  var width = (screen.availWidth / 9);
  var barwidth = 0;

  function displayQuestions() {
    if (ch < 9) {
      document.getElementById("q").innerHTML =
        `<span class="anim">` + questions[ch] + `</span>`;
      barwidth += width;
      document.getElementById('progressbar').style.width = barwidth.toString() + 'px';
      ch++;
    } else {
      barwidth += width;
      document.getElementById('progressbar').style.width = barwidth.toString() + 'px';
      displayResult(depressionCount);
    }
  }

  var o1 = document.getElementById("o1");
  var o2 = document.getElementById("o2");
  var o3 = document.getElementById("o3");
  var o4 = document.getElementById("o4");

  o1.onclick = function () {
    displayQuestions();
  };
  o2.onclick = function () {
    depressionCount += 1;
    displayQuestions();
  };
  o3.onclick = function () {
    depressionCount += 2;
    displayQuestions();
  };
  o4.onclick = function () {
    depressionCount += 3;
    displayQuestions();
  };
})();

function displayResult(s) {
  document.getElementById("question").classList.add("opac");
  document.getElementById("options").classList.add("opac");
  document.getElementById("res").classList.remove("opac");
  var str;
  if (s <= 4) {
    str = "Minimal depression";
  } else if (s > 4 && s <= 9) {
    str = "Mild depression";
  } else if (s > 9 && s <= 14) {
    str = "moderate depression";
  } else if (s > 14 && s <= 19) {
    str = "Moderately severe depression";
  } else {
    str = "severe depression";
  }
  document.getElementById("r").innerHTML = "Result:\n" + str;
  document.getElementById("percent").innerHTML = Math.ceil((s / 27) * 100).toString() + '%';
  document.getElementById("circle2")
    .style.strokeDashoffset = (660 * (s / 27)).toString();
  console.log(s);
}

$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  var scene0 = new ScrollMagic.Scene({
      triggerElement: "#container2"
    })
    .setClassToggle("#o1", "comeup")
    .addTo(controller);
});