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
var txt3 = "Anxiety doesn't mean Nervousness";
var k = 0;
var speed = 50;

function addSymbols3() {
  document.getElementById("title3").innerHTML = document
    .getElementById("title3")
    .innerHTML.substr(
      0,
      document.getElementById("title3").innerHTML.length - 38
    );
}

function typeWriter3() {
  var symbols = ["*", "-", "$", "%", "?", "@"];
  if (k < txt3.length) {
    var sym = symbols[Math.floor(Math.random() * 5)];
    if (txt3.charAt(k) == "x" || (txt3.charAt(k) == "a" && k > 3)) {
      document.getElementById("title3").innerHTML +=
        '<span style="color: #70db70;">' + txt3.charAt(k) + "</span>" + sym;
    } else {
      document.getElementById("title3").innerHTML += txt3.charAt(k) + sym;
    }

    document.getElementById("title3").innerHTML = document
      .getElementById("title3")
      .innerHTML.replace(
        sym,
        '<span style="color: #70db70;">' + sym + "</span>"
      );
    k++;
    setTimeout(addSymbols3, speed);
    setTimeout(typeWriter3, speed);
  }
}

$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#t1",
  })
    .on("start", function () {
      typeWriter3();
    })
    .addTo(controller);
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#t1",
  })
    .setClassToggle("#text1", "ani")
    .addTo(controller);
  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#t1",
  })
    .setClassToggle("#text2", "ani")
    .addTo(controller);
  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#t1",
  })
    .setClassToggle("#button1", "but_ani")
    .addTo(controller);
  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#t1",
  })
    .setClassToggle("#customBtn", "but_ani")
    .addTo(controller);
});

const button1 = document.getElementById("button1");
// let signin = false;

// function check() {
//     if (!signin) {
//         alert("Please sign in to proceed");
//     }
// }

// function redirect() {
//     document.getElementById('abtn').href = "http://www.google.in";
// }

function onSignIn(googleUser) {
  button1.style.backgroundColor = "#70db70";
  button1.disabled = false;
  var profile = googleUser.getBasicProfile();
  $.ajax({
    url:
      "https://docs.google.com/forms/u/5/d/e/1FAIpQLSfU0HVYIb9Tw1fCb2YPwSbM5_PJqq5N3mCL4VXf99J4tt0Daw/formResponse",
    data: {
      "entry.28725096": profile.getName(),
      "entry.1092948244": profile.getEmail(),
    },
    type: "POST",
    dataType: "xml",
  });
}

function signOut() {
  // if (signin) {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
  // signin = "false";
  // }
}

var googleUser = {};
var startApp = function () {
  console.log("fdabs");
  gapi.load("auth2", function () {
    auth2 = gapi.auth2.init({
      client_id:
        "355243087266-ejcdhnmpjthed1jli8dtv2grq3gtoua7.apps.googleusercontent.com",
      cookiepolicy: "single_host_origin",
    });
    attachSignin(document.getElementById("customBtn"));
  });
};

function attachSignin(element) {
  console.log(element.id);
  auth2.attachClickHandler(
    element,
    {},
    function (googleUser) {
      window.location.href = window.location.origin + "/anxietytest.html";
      var profile = googleUser.getBasicProfile();
      var profile = googleUser.getBasicProfile();
      $.ajax({
        url:
          "https://docs.google.com/forms/u/5/d/e/1FAIpQLSdaUun4-lKr9hkPmjtLQsbl24SPO3-Gh5OS8_JzokqGH8eERA/formResponse",
        data: {
          "entry.1758988128": profile.getName(),
          "entry.1916594965": profile.getEmail(),
        },
        type: "POST",
        dataType: "xml",
      });
    },
    function (error) {
      alert(JSON.stringify(error, undefined, 2));
    }
  );
}
