function onclik() {
  if (document.getElementById("menu").style.visibility == "hidden") {
    document.getElementById("menu1").style.top = "-120vw";
    setTimeout(function() {
      document.getElementById("menu2").style.top = "-120vw";
    }, 200);
    setTimeout(function() {
      document.getElementById("menu").style.visibility = "visible";
    }, 200);
  } else {
    document.getElementById("menu1").style.top = "-250vw";
    setTimeout(function() {
      document.getElementById("menu2").style.top = "-250vw";
    }, 200);
    setTimeout(function() {
      document.getElementById("menu").style.visibility = "hidden";
    }, 200);
  }
}

var i = 0;
var txt = "National Institute of Technology Agartala";
var speed = 100;

function addSymbols() {
  document.getElementById("title").innerHTML = document
    .getElementById("title")
    .innerHTML.substr(
      0,
      document.getElementById("title").innerHTML.length - 38
    );
}

function typeWriter() {
  var symbols = ["*", "-", "$", "%", "?", "@"];
  if (i < txt.length) {
    var sym = symbols[Math.floor(Math.random() * 5)];
    if (txt.charAt(i) == "Z" || txt.charAt(i) == "Q") {
      document.getElementById("title").innerHTML +=
        '<span style="color: #95FFD3;">' + txt.charAt(i) + "</span>" + sym;
    } else {
      document.getElementById("title").innerHTML += txt.charAt(i) + sym;
    }

    document.getElementById("title").innerHTML = document
      .getElementById("title")
      .innerHTML.replace(
        sym,
        '<span style="color: #95FFD3;">' + sym + "</span>"
      );
    i++;
    setTimeout(addSymbols, speed);
    setTimeout(typeWriter, speed);
  }
}

function pressed(number) {
  if (
    document.getElementById("content" + number).style.visibility == "" ||
    document.getElementById("content" + number).style.visibility == "hidden"
  ) {
    document.getElementById("icon" + number).classList.add("icon_flipped");
    document.getElementById("content" + number).style.visibility = "visible";
    document.getElementById("content" + number).style.height = "100%";
  } else {
    document.getElementById("icon" + number).classList.remove("icon_flipped");
    document.getElementById("content" + number).style.visibility = "hidden";
    document.getElementById("content" + number).style.height = "0";
  }
}

title = [
  "OC Team Recruitment",
  "Talk on Social Entrepreunership",
  "Q & A Session"
];
time = ["10:00am", "2:00pm", "5:00pm"];
date = [
  "Saturday, November 2, 2019",
  "Sunday, November 3, 2019",
  "Thursday, November 7, 2019"
];
venue = ["E-CELL Class Room", "M100 RIC Building", "Auditorium"];
additional_info = [
  "Brainstorming, Team Structure, Recruitment",
  "Speaker-SHARAD SAGAR (Global) forbes 30 under 30 social entrepreneur.",
  "Guest- SWARAJ PRIYADARSHI (DIANA Prize Winner) (Social Entrepreunership)"
];

function content(number, r1, r2) {
  document.getElementById("button" + (number + 1)).style.opacity = "1";
  document.getElementById("button" + (r1 + 1)).style.opacity = "0.2";
  document.getElementById("button" + (r2 + 1)).style.opacity = "0.2";
  document.getElementById("content_title").innerHTML = title[number];
  document.getElementById("time").innerHTML = time[number];
  document.getElementById("date").innerHTML = date[number];
  document.getElementById("venue").innerHTML = venue[number];
  document.getElementById("info").innerHTML = additional_info[number];
}
