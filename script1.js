var problems = [
  "Lack of interest in things",
  "Felling hopeless",
  "Sleeplessness",
  "Feeling tired all the time",
  "appetite",
  "Failure",
  "Focus",
  "Restlessness",
  "Hurting yourself"
];
var solutions = [
  "<h1>Tips to overcome lack of interest</h1><br><br><h2>Passion</h2><br>You will more easily feel passion for something in the short-term if the end-goal is meaningful for you in the long-term (i.e. if you can envision a better future).<br><br><h2>Sleep</h2><br>Sleep works to reduce depression and anhedonia by reducing fatigue, improving cognitive function, and increasing motivation.<br><br><h2><br>Mindfulness</h2>Stop seeking pleasure all the time. Constant exposure to pleasurable stimuli will remove any sense of novelty in your life.",
  "<h1>Tips to overcome hopelessness</h1><br><br><h2>Ask for help</h2><br>Ask for help. Howes frequently tells his clients that 'hopelessness is often just a powerful reminder that we can’t do it all by ourselves. Many situations that feel or truly are hopeless to an individual suddenly becomes doable when other people get involved.'<br><br><h2>Focus on purpose</h2><br>Focus on what gives you meaning and purpose in these four areas: connection, passion, cause and spirituality.<br><br><h2>Think in moments</h2><br>Maybe you feel hopeless about the future, about a year from now or a month from now. So focus on this very moment. Focus on this very minute.",
  "<h1>Tips to better sleep</h1><br><br><h2>Stick to a sleep schedule</h2><br>Set aside no more than eight hours for sleep. The recommended amount of sleep for a healthy adult is at least seven hours. Most people don't need more than eight hours in bed to achieve this goal.<br><h2>Pay attention to what you eat and drink</h2><br>Don't go to bed hungry or stuffed. In particular, avoid heavy or large meals within a couple of hours of bedtime. Your discomfort might keep you up.<br><h2>Create a restful environment</h2><br>Create a room that's ideal for sleeping. Often, this means cool, dark and quiet. Exposure to light might make it more challenging to fall asleep. Avoid prolonged use of light-emitting screens just before bedtime. Consider using room-darkening shades, earplugs, a fan or other devices to create an environment that suits your needs.<br>.",
  "<h1>Tips to stop feeling tired all the time</h1><br><br><h2>Dietary suggestions </h2><br>Drink lots of water. A dehydrated body functions less efficiently.<br>Eat breakfast. Food boosts your metabolism and gives your body energy to burn. The brain relies on glucose for fuel, so choose carbohydrate-rich breakfast foods such as cereals or whole grain bread.<br><br><h2>Sleep suggestions</h2><br>Get enough sleep. Adults need about 8 hours per night.<br> Limit caffeine. Too much caffeine, especially in the evening, can cause insomnia. Limit caffeinated drinks to 5 or fewer per day, and avoid these types of drinks after dinner.",
  "<h1>Tips to improve appetite</h1><br><br><h2>Mediterranean diet</h2><br>There is some research to support that a Mediterranean-style diet, which is high in fruits, nuts, legumes, and olive oil, and low in saturated fats, decreases the risk of depression.<br><h2>Omega-3 fatty acids</h2><br>These substances are found in cold-water fish and have been shown to be important in brain function. Some studies show that they may enhance a person's response to antidepressant medications.<br><h2>Vitamins and nutrients</h2><br>Research shows that deficiency of nutrients such as vitamin B12, vitamin B6, and tryptophan can have a negative effect on mood. Consequently, poor nutrition that results from loss of appetite can further exacerbate depression",
  "<h1>Tips to overcome failure</h1><br><br><h2>First, just accept how you feel</h2><br>When you’ve just failed it will most likely hurt. Sometimes a bit. Sometimes a lot.Don’t try to push it away by distracting yourself or by trying to push the responsibility onto the rest of the world (if you deep down know that this one’s on you partly or fully).<br><h2>Remember: you’re not a failure just because you had a setback.</h2><br>When you’ve had a setback it’s very easy to start thinking that you will always keep failing in this area of your life. It’s easy to start thinking that YOU are indeed a failure.<br><h2>Be constructive and learn from this situation.</h2><br>See it more as valuable feedback and something you can use to improve rather than only a big blow and setback.",
  "<h1>Tips to improve your focus</h1><br><br><h2>Know What Influences Your Focus</h2><br>Your focus is very dependent on many physical and mental factors too. Some are good for your focus, others are not.<br>The most obvious is sleep; if you don’t sleep sufficient your focus and judgment suffers. Also, exercise and the types of food we eat, significantly impacts your ability to stay focused<br>More surprisingly, coffee, contrary to what many of us believe, is not useful for your focus. The caffeine suppresses your drowsiness, but scatters your focus. Needless to say, alcohol is bad for your focus, too.<br>"
];
var reason = [];
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
  var width = screen.availWidth / 9;
  var barwidth = 0;
  var reasons = {};

  function displayQuestions() {
    if (ch < 9) {
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

  o1.onclick = function () {
    reasons[ch] = 0;
    displayQuestions();
  };
  o2.onclick = function () {
    reasons[ch] = 1;
    depressionCount += 1;
    displayQuestions();
  };
  o3.onclick = function () {
    reasons[ch] = 2;
    depressionCount += 2;
    displayQuestions();
  };
  o4.onclick = function () {
    reasons[ch] = 3;
    depressionCount += 3;
    displayQuestions();
  };
})();

function displayResult(s, reasons) {
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
  document.getElementById("percent").innerHTML =
    Math.ceil((s / 27) * 100).toString() + "%";
  document.getElementById("circle2").style.strokeDashoffset = (
    660 *
    (s / 27)
  ).toString();
  console.log(s);
  var items = Object.keys(reasons).map(function (key) {
    return [key, reasons[key]];
  });
  items.sort(function (first, second) {
    return second[1] - first[1];
  });
  reasons = items.slice(0, 3);
  reason = [reasons[0][0], reasons[1][0], reasons[2][0]];
  document.getElementById("tip1").innerHTML = solutions[reasons[0][0] - 1];
  document.getElementById("r1").innerHTML = problems[reasons[0][0] - 1];
  document.getElementById("r2").innerHTML = problems[reasons[1][0] - 1];
  document.getElementById("r3").innerHTML = problems[reasons[2][0] - 1];
}

$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  var scene0 = new ScrollMagic.Scene({
      triggerElement: "#container2"
    })
    .setClassToggle("#o1", "comeup")
    .addTo(controller);
});

function content(number, r1, r2) {
  document.getElementById("button" + (number + 1)).style.opacity = "1";
  document.getElementById("button" + (r1 + 1)).style.opacity = "0.2";
  document.getElementById("button" + (r2 + 1)).style.opacity = "0.2";
  document.getElementById("tip1").innerHTML = solutions[reason[number] - 1];
}