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
var questions = [
  [
    "What would you do if money was never the option ?",
    "On what Topic can you talk at length to a room full of audience ? ",
    "When working on something-You enjoy the task without worrying and you lose track of time? ",
  ],
  [
    "What practical skills are you talented at ?",
    "Have you won any awards - If yes, what skills did you use to achieve it ? ",
    "What are the skills that you feel easy to do, while others might not ?",
  ],
  [
    "Are there any social/environmental or economic problems that you want to help solve?",
    "Are there any issues in your community or work that touch you emotionally?",
    "If you were to ask your family/close friends around you, What would they say that you support for ?",
  ],
  [
    "What Skills are you getting paid for? ( or what skills will you be using to get paid for in near future)",
    "Do you use your talents and passion in what you do for a career? ",
    "How can you use the skills you are good at and you love doing to earn money ?",
  ],
];
function pdfFile() {
  console.log(answer);
  var pdf = new jsPDF();
  let yaxis = 10;
  let number = 0;
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j < 3; j++) {
      pdf.setFontSize(12);
      pdf.text(++number + ") " + questions[i][j], 10, yaxis);
      yaxis += 10;
      pdf.setFontSize(10);
      pdf.text(answer[i][j], 10, yaxis);
      yaxis += 10;
    }
  }
  pdf.save("result.pdf");
}
