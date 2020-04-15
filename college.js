function onclik() {
  if (document.getElementById("menu").style.visibility == "hidden") {
    document.getElementById("menu1").style.top = "-120vw";
    setTimeout(function () {
      document.getElementById("menu2").style.top = "-120vw";
    }, 200);
    setTimeout(function () {
      document.getElementById("menu").style.visibility = "visible";
    }, 200);
  } else {
    document.getElementById("menu1").style.top = "-250vw";
    setTimeout(function () {
      document.getElementById("menu2").style.top = "-250vw";
    }, 200);
    setTimeout(function () {
      document.getElementById("menu").style.visibility = "hidden";
    }, 200);
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
  "Awareness Champaign.",
  "Literacy Campaign",
  "Stigma busting Campaign",
];
date = ["April 1st week", " April 2nd week", "April 3rd week"];
venue = [
  "Hyper local model",
  "Grassroot Education model",
  "contact based education model",
];
additional_info = ["400", "100", "150"];

function content(number, r1, r2) {
  document.getElementById("button" + (number + 1)).style.opacity = "1";
  document.getElementById("button" + (r1 + 1)).style.opacity = "0.2";
  document.getElementById("button" + (r2 + 1)).style.opacity = "0.2";
  document.getElementById("content_title").innerHTML = title[number];
  document.getElementById("date").innerHTML = date[number];
  document.getElementById("venue").innerHTML = venue[number];
  document.getElementById("info").innerHTML = additional_info[number];
}

function clicked(number) {
  if (
    document.getElementById("faq" + number).style.visibility == "" ||
    document.getElementById("faq" + number).style.visibility == "hidden"
  ) {
    document.getElementById("faq" + number).style.visibility = "visible";
    document.getElementById("faq" + number).style.padding = "15px";
    document.getElementById("faq" + number).style.height = "100%";
  } else {
    document.getElementById("faq" + number).style.visibility = "hidden";
    document.getElementById("faq" + number).style.height = "0";
    document.getElementById("faq" + number).style.padding = "0";
  }
}
