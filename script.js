let yearEl = document.querySelector(".yea");
let currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

var calcBtn = document.querySelector(".calc");

let btnNavEl = document.querySelector(".nav-btns");
let headerEl = document.querySelector(".nav-container");
var calGrade = document.querySelector(".heading-ul");
calGrade.addEventListener("click", (e) => {
  window.location.replace("index.html");
});

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

let themeChange = document.querySelector(".toggle");

if (localStorage.getItem("darkMode") === null) {
  localStorage.setItem("darkMode", "false");
}
checkStatus();

function checkStatus() {
  if (localStorage.getItem("darkMode") === "true") {
    themeChange.checked = true;
    document.querySelector(".body").classList.add("light-theme");

    document.querySelector(".nav-container").classList.add("light-theme");

    document
      .querySelector(".hero-section-content h1")
      .classList.add("light-theme");

    document
      .querySelector(".hero-section-content p")
      .classList.add("light-theme");

    document
      .querySelector(".table-container-heading")
      .classList.add("light-theme");

    let spans = document.querySelectorAll(".table-container li span");
    for (const span of spans) {
      span.classList.add("light-theme");
    }

    let selects = document.querySelectorAll(".table-container li select ");
    for (const select of selects) {
      select.classList.add("light-theme");
    }

    document.querySelector(".gpa-text").classList.add("light-theme");

    document.querySelector(".scale-gpa p").classList.add("light-theme");

    document.querySelector(".scale-gpa-text").classList.add("light-theme");

    // let names = document.querySelectorAll(".about-us-names ");
    // for (const name of names) {
    //   name.classList.add("light-theme");
    // }
  } else {
    themeChange.checked = false;
    document.querySelector(".body").classList.remove("light-theme");

    document.querySelector(".nav-container").classList.remove("light-theme");

    document
      .querySelector(".hero-section-content h1")
      .classList.remove("light-theme");

    document
      .querySelector(".hero-section-content p")
      .classList.remove("light-theme");

    document
      .querySelector(".table-container-heading")
      .classList.remove("light-theme");

    let spans = document.querySelectorAll(".table-container li span");
    for (const span of spans) {
      span.classList.remove("light-theme");
    }

    let selects = document.querySelectorAll(".table-container li select ");
    for (const select of selects) {
      select.classList.remove("light-theme");
    }

    document.querySelector(".gpa-text").classList.remove("light-theme");

    document.querySelector(".scale-gpa p").classList.remove("light-theme");

    document.querySelector(".scale-gpa-text").classList.remove("light-theme");

    // let names = document.querySelectorAll(".about-us-names ");
    // for (const name of names) {
    //   name.classList.remove("light-theme");
    // }
  }
}

function changeStatus() {
  if (localStorage.getItem("darkMode") === "true") {
    localStorage.setItem("darkMode", "false");

    document.querySelector(".body").classList.remove("light-theme");

    document.querySelector(".nav-container").classList.remove("light-theme");

    document
      .querySelector(".hero-section-content h1")
      .classList.remove("light-theme");

    document
      .querySelector(".hero-section-content p")
      .classList.remove("light-theme");

    document
      .querySelector(".table-container-heading")
      .classList.remove("light-theme");

    let spans = document.querySelectorAll(".table-container li span");
    for (const span of spans) {
      span.classList.remove("light-theme");
    }

    let selects = document.querySelectorAll(".table-container li select ");
    for (const select of selects) {
      select.classList.remove("light-theme");
    }

    document.querySelector(".gpa-text").classList.remove("light-theme");

    document.querySelector(".scale-gpa p").classList.remove("light-theme");

    document.querySelector(".scale-gpa-text").classList.remove("light-theme");
  } else {
    localStorage.setItem("darkMode", "true");

    document.querySelector(".body").classList.add("light-theme");

    document.querySelector(".nav-container").classList.add("light-theme");

    document
      .querySelector(".hero-section-content h1")
      .classList.add("light-theme");

    document
      .querySelector(".hero-section-content p")
      .classList.add("light-theme");

    document
      .querySelector(".table-container-heading")
      .classList.add("light-theme");

    let spans = document.querySelectorAll(".table-container li span");
    for (const span of spans) {
      span.classList.add("light-theme");
    }

    let selects = document.querySelectorAll(".table-container li select ");
    for (const select of selects) {
      select.classList.add("light-theme");
    }

    document.querySelector(".gpa-text").classList.add("light-theme");

    document.querySelector(".scale-gpa p").classList.add("light-theme");

    document.querySelector(".scale-gpa-text").classList.add("light-theme");
  }
}

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  var grade1;
  var grade2;
  var grade3;
  var grade4;
  var grade5;
  var grade6;
  var grade7;
  var grade8;
  var grade9;
  var grade10;

  var cred1 = parseInt(document.getElementById("credits1").value);
  var cred2 = parseInt(document.getElementById("credits2").value);
  var cred3 = parseInt(document.getElementById("credits3").value);
  var cred4 = parseInt(document.getElementById("credits4").value);
  var cred5 = parseInt(document.getElementById("credits5").value);
  var cred6 = parseInt(document.getElementById("credits6").value);
  var cred7 = parseInt(document.getElementById("credits7").value);
  var cred8 = parseInt(document.getElementById("credits8").value);
  var cred9 = parseInt(document.getElementById("credits9").value);
  var cred10 = parseInt(document.getElementById("credits10").value);

  switch (document.getElementById("grades1").value) {
    case "S":
      grade1 = 10;
      break;
    case "A":
      grade1 = 9;
      break;
    case "B":
      grade1 = 8;
      break;
    case "C":
      grade1 = 7;
      break;
    case "D":
      grade1 = 6;
      break;
    case "E":
      grade1 = 5;
      break;
    case "F":
      grade1 = 0;
      break;
    case "N":
      grade1 = 0;
      break;
    default:
      grade1 = "x";
  }

  switch (document.getElementById("grades2").value) {
    case "S":
      grade2 = 10;
      break;
    case "A":
      grade2 = 9;
      break;
    case "B":
      grade2 = 8;
      break;
    case "C":
      grade2 = 7;
      break;
    case "D":
      grade2 = 6;
      break;
    case "E":
      grade2 = 5;
      break;
    case "F":
      grade2 = 0;
      break;
    case "N":
      grade2 = 0;
      break;
    default:
      grade2 = "x";
  }

  switch (document.getElementById("grades3").value) {
    case "S":
      grade3 = 10;
      break;
    case "A":
      grade3 = 9;
      break;
    case "B":
      grade3 = 8;
      break;
    case "C":
      grade3 = 7;
      break;
    case "D":
      grade3 = 6;
      break;
    case "E":
      grade3 = 5;
      break;
    case "F":
      grade3 = 0;
      break;
    case "N":
      grade3 = 0;
      break;
    default:
      grade3 = "x";
  }

  switch (document.getElementById("grades4").value) {
    case "S":
      grade4 = 10;
      break;
    case "A":
      grade4 = 9;
      break;
    case "B":
      grade4 = 8;
      break;
    case "C":
      grade4 = 7;
      break;
    case "D":
      grade4 = 6;
      break;
    case "E":
      grade4 = 5;
      break;
    case "F":
      grade4 = 0;
      break;
    case "N":
      grade4 = 0;
      break;
    default:
      grade4 = "x";
  }

  switch (document.getElementById("grades5").value) {
    case "S":
      grade5 = 10;
      break;
    case "A":
      grade5 = 9;
      break;
    case "B":
      grade5 = 8;
      break;
    case "C":
      grade5 = 7;
      break;
    case "D":
      grade5 = 6;
      break;
    case "E":
      grade5 = 5;
      break;
    case "F":
      grade5 = 0;
      break;
    case "N":
      grade5 = 0;
      break;
    default:
      grade5 = "x";
  }

  switch (document.getElementById("grades6").value) {
    case "S":
      grade6 = 10;
      break;
    case "A":
      grade6 = 9;
      break;
    case "B":
      grade6 = 8;
      break;
    case "C":
      grade6 = 7;
      break;
    case "D":
      grade6 = 6;
      break;
    case "E":
      grade6 = 5;
      break;
    case "F":
      grade6 = 0;
      break;
    case "N":
      grade6 = 0;
      break;
    default:
      grade6 = "x";
  }

  switch (document.getElementById("grades7").value) {
    case "S":
      grade7 = 10;
      break;
    case "A":
      grade7 = 9;
      break;
    case "B":
      grade7 = 8;
      break;
    case "C":
      grade7 = 7;
      break;
    case "D":
      grade7 = 6;
      break;
    case "E":
      grade7 = 5;
      break;
    case "F":
      grade7 = 0;
      break;
    case "N":
      grade7 = 0;
      break;
    default:
      grade7 = "x";
  }

  switch (document.getElementById("grades8").value) {
    case "S":
      grade8 = 10;
      break;
    case "A":
      grade8 = 9;
      break;
    case "B":
      grade8 = 8;
      break;
    case "C":
      grade8 = 7;
      break;
    case "D":
      grade8 = 6;
      break;
    case "E":
      grade8 = 5;
      break;
    case "F":
      grade8 = 0;
      break;
    case "N":
      grade8 = 0;
      break;
    default:
      grade8 = "x";
  }

  switch (document.getElementById("grades9").value) {
    case "S":
      grade9 = 10;
      break;
    case "A":
      grade9 = 9;
      break;
    case "B":
      grade9 = 8;
      break;
    case "C":
      grade9 = 7;
      break;
    case "D":
      grade9 = 6;
      break;
    case "E":
      grade9 = 5;
      break;
    case "F":
      grade9 = 0;
      break;
    case "N":
      grade9 = 0;
      break;
    default:
      grade9 = "x";
  }

  switch (document.getElementById("grades10").value) {
    case "S":
      grade10 = 10;
      break;
    case "A":
      grade10 = 9;
      break;
    case "B":
      grade10 = 8;
      break;
    case "C":
      grade10 = 7;
      break;
    case "D":
      grade10 = 6;
      break;
    case "E":
      grade10 = 5;
      break;
    case "F":
      grade10 = 0;
      break;
    case "N":
      grade10 = 0;
      break;
    default:
      grade10 = "x";
  }

  if (
    (grade1 == "x" && cred1 >= 1) ||
    (grade2 == "x" && cred2 >= 1) ||
    (grade3 == "x" && cred3 >= 1) ||
    (grade4 == "x" && cred4 >= 1) ||
    (grade5 == "x" && cred5 >= 1) ||
    (grade6 == "x" && cred6 >= 1) ||
    (grade7 == "x" && cred7 >= 1) ||
    (grade8 == "x" && cred8 >= 1) ||
    (grade9 == "x" && cred9 >= 1) ||
    (grade10 == "x" && cred10 >= 1)
  ) {
    let gpaTextHolder = document.querySelector(".gpa-text-holder");
    gpaTextHolder.classList.add("active");
    let gpaText = document.querySelector(".gpa-text");
    gpaText.classList.add("active");
    gpaText.innerText =
      "Please select the respective grade(s) for the course(s) of which credit(s) are already opted";
  } else if (
    (grade1 != "x" && cred1 == 0) ||
    (grade2 != "x" && cred2 == 0) ||
    (grade3 != "x" && cred3 == 0) ||
    (grade4 != "x" && cred4 == 0) ||
    (grade5 != "x" && cred5 == 0) ||
    (grade6 != "x" && cred6 == 0) ||
    (grade7 != "x" && cred7 == 0) ||
    (grade8 != "x" && cred8 == 0) ||
    (grade9 != "x" && cred9 == 0) ||
    (grade10 != "x" && cred10 == 0)
  ) {
    let gpaTextHolder = document.querySelector(".gpa-text-holder");
    gpaTextHolder.classList.add("active");
    let gpaText = document.querySelector(".gpa-text");
    gpaText.classList.add("active");
    gpaText.innerHTML =
      "Please select the respective credit(s) for the course(s) of which grade(s) are already opted";
  } else {
    if (grade1 == "x") grade1 = 0;
    if (grade2 == "x") grade2 = 0;
    if (grade3 == "x") grade3 = 0;
    if (grade4 == "x") grade4 = 0;
    if (grade5 == "x") grade5 = 0;
    if (grade6 == "x") grade6 = 0;
    if (grade7 == "x") grade7 = 0;
    if (grade8 == "x") grade8 = 0;
    if (grade9 == "x") grade9 = 0;
    if (grade10 == "x") grade10 = 0;

    var gpa1 = parseInt(grade1 * cred1);
    var gpa2 = parseInt(grade2 * cred2);
    var gpa3 = parseInt(grade3 * cred3);
    var gpa4 = parseInt(grade4 * cred4);
    var gpa5 = parseInt(grade5 * cred5);
    var gpa6 = parseInt(grade6 * cred6);
    var gpa7 = parseInt(grade7 * cred7);
    var gpa8 = parseInt(grade8 * cred8);
    var gpa9 = parseInt(grade9 * cred9);
    var gpa10 = parseInt(grade10 * cred10);

    var finalGPA =
      (gpa1 + gpa2 + gpa3 + gpa4 + gpa5 + gpa6 + gpa7 + gpa8 + gpa9 + gpa10) /
      (cred1 +
        cred2 +
        cred3 +
        cred4 +
        cred5 +
        cred6 +
        cred7 +
        cred8 +
        cred9 +
        cred10);

    if (finalGPA >= 0) {
      let gpaTextHolder = document.querySelector(".gpa-text-holder");
      gpaTextHolder.classList.add("active");
      let gpaText = document.querySelector(".gpa-text");
      gpaText.classList.add("active");
      gpaText.innerHTML = "GPA : " + finalGPA.toFixed(2);

      let scaleGpa = document.querySelector(".scale-gpa");
      let gifContent = document.querySelector(".gif-content");

      let imgChange = document.querySelector("#changing-img");
      imgChange.scrollIntoView({
        behavior: "smooth",
      });
      setTimeout(() => {
        scaleGpa.classList.add("active");
        gifContent.classList.add("active");
      }, 1100);

      let scaleButton = document.querySelector(".scale-content button");
      scaleButton.addEventListener("click", () => {
        document.querySelector(".scale-gpa-text").classList.add("active");
        let scaleGpaText = document.querySelector(".scale-gpa-text");
        scaleGpaText.innerHTML = ((finalGPA.toFixed(2) / 10) * 4).toFixed(2);
      });

      if (finalGPA > 9) {
        let imgChange = document.querySelector(".changing-img");

        imgChange.setAttribute("src", "Comp1.gif");

        imgChange.classList.add("active");
      }
      if (finalGPA > 8.5 && finalGPA <= 9) {
        let imgChange = document.querySelector(".changing-img");

        imgChange.setAttribute("src", "Comp2.gif");

        imgChange.classList.add("active");
      }

      if (finalGPA > 8 && finalGPA <= 8.5) {
        let imgChange = document.querySelector(".changing-img");

        imgChange.setAttribute("src", "Comp3.gif");

        imgChange.classList.add("active");
      }
      if (finalGPA >= 0 && finalGPA <= 8) {
        let imgChange = document.querySelector(".changing-img");

        imgChange.setAttribute("src", "Comp4.gif");
        imgChange.classList.add("active");
      }
    } else {
      let gpaTextHolder = document.querySelector(".gpa-text-holder");
      gpaTextHolder.classList.add("active");
      let gpaText = document.querySelector(".gpa-text");
      gpaText.classList.add("active");

      gpaText.innerHTML = "Enter the values to get gpa";
    }
  }
});
