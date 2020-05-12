function advocatesLoader() {
  console.log("hello");
  var yaName = [
    "Aruna choudhary ",
    "Sowmya",
    "Yashoda",
    "Mohan",
    "Ch. Ajit",
    "Thippani manideep",
    "Sai ",
    "J.G.Sushma ",
    "MANDRU SANJAY KUMAR",
    "KARTHICK",
    "MUMMANENI SAI HARSHA",
    "Akanksha Mudgal ",
    "Savudam Sai Sathvik",
    "CHANDAN",
    "Aishwarya",
    "HARSHA",
    "SUDHARSHAN",
    "Chakri",
    "Sudipa",
    "Irfan",
    "Ranadheer ",
    "Sushmita",
    "Sai kumar",
    "Harsha",
    "Anil",
    "Akanshya ",
    "Satya datta jupalli",
  ];
  var college = [
    "MNIT ,Allahabad ",
    "IIT BHILAI",
    "NIT Warangal",
    "Vignan",
    "Gitam college Vizag",
    "Maulana azad national Institute of technology",
    "IIT VARANASI",
    "NIT Kurukshetra ",
    "NIT Durgapur",
    "IIT Roorkee",
    "IIT Dharwad",
    "NIT ARUNACHAL PRADESH ",
    "IIT Gandhinagar",
    "IIIT kota",
    "Andhra University",
    "IIT DHANBAD",
    "NIT PATNA",
    "IIT Bhubaneswar",
    "Ravenshaw University",
    "Gurunanak Institutions",
    "IIT Bombay ",
    "Andhra University women's ",
    "IIT VARANASI",
    "NIT Jamshedpur ",
    "LPU",
    "CET , Bhubaneshwar ",
    "VITAP",
  ];
  for (var i = 0; i < yaName.length; i++) {
    var container = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src", "./ya/ya" + (i + 1) + ".jpeg");
    image.classList.add("advocate_image");
    container.classList.add("container");
    var advocate_text = document.createElement("p");
    advocate_text.classList.add("advocate_text");
    advocate_text.innerHTML = yaName[i] + "<br>" + college[i];
    container.appendChild(image);
    container.appendChild(advocate_text);
    document.getElementById("container_box").appendChild(container);
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
