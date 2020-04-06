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
var answer = [];
function pressed() {
  document.getElementById("content").style.display = "none";
  document.getElementById("results").style.display = "block";
  for (var i = 0; i <= 3; i++) {
    var subAnswers = [];
    for (var j = 0; j < 3; j++) {
      var content = document.getElementById(
        "answer" + i.toString() + j.toString()
      ).value;
      subAnswers.push(content);
      document.getElementById(
        "a" + i.toString() + j.toString()
      ).innerHTML = content;
    }
    answer.push(subAnswers);
  }
}

function pdfFile() {
  console.log(answer);
  var pdf = new jsPDF();
  let yaxis = 10;
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j < 3; j++) {
      pdf.text(answer[i][j], 10, yaxis);
      yaxis += 10;
    }
  }
  pdf.save("result.pdf");
}
