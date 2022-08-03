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

var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i + 1),
  })
  .add({
    targets: ".ml3",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/*
let themeChange = document.querySelector(".toggle");
themeChange.addEventListener("click", (e) => {
  e.preventDefault;
  document.querySelector(".body").classList.toggle("light-theme");

  document.querySelector(".nav-container").classList.toggle("light-theme");

  document
    .querySelector(".table-container-heading")
    .classList.toggle("light-theme");

  let spans = document.querySelectorAll(".table-container li span");
  for (const span of spans) {
    span.classList.toggle("light-theme");
  }

  let inputs = document.querySelectorAll(".table-container li input");
  for (const input of inputs) {
    input.classList.toggle("light-theme");
  }

  document.querySelector(".gpa-text").classList.toggle("light-theme");

  document.querySelector(".scale-gpa p").classList.toggle("light-theme");

  document.querySelector(".scale-gpa-text").classList.toggle("light-theme");
});

*/

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
      .querySelector(".table-container-heading")
      .classList.add("light-theme");

    let spans = document.querySelectorAll(".table-container li span");
    for (const span of spans) {
      span.classList.add("light-theme");
    }

    let selects = document.querySelectorAll(".table-container li input ");
    for (const select of selects) {
      select.classList.add("light-theme");
    }

    document.querySelector(".gpa-text").classList.add("light-theme");

    document.querySelector(".scale-gpa p").classList.add("light-theme");

    document.querySelector(".scale-gpa-text").classList.add("light-theme");
  } else {
    themeChange.checked = false;
    document.querySelector(".body").classList.remove("light-theme");

    document.querySelector(".nav-container").classList.remove("light-theme");

    document
      .querySelector(".table-container-heading")
      .classList.remove("light-theme");

    let spans = document.querySelectorAll(".table-container li span");
    for (const span of spans) {
      span.classList.remove("light-theme");
    }

    let selects = document.querySelectorAll(".table-container li input ");
    for (const select of selects) {
      select.classList.remove("light-theme");
    }

    document.querySelector(".gpa-text").classList.remove("light-theme");

    document.querySelector(".scale-gpa p").classList.remove("light-theme");

    document.querySelector(".scale-gpa-text").classList.remove("light-theme");
  }
}

function changeStatus() {
  if (localStorage.getItem("darkMode") === "true") {
    localStorage.setItem("darkMode", "false");

    document.querySelector(".body").classList.remove("light-theme");

    document.querySelector(".nav-container").classList.remove("light-theme");

    document
      .querySelector(".table-container-heading")
      .classList.remove("light-theme");

    let spans = document.querySelectorAll(".table-container li span");
    for (const span of spans) {
      span.classList.remove("light-theme");
    }

    let selects = document.querySelectorAll(".table-container li input ");
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
      .querySelector(".table-container-heading")
      .classList.add("light-theme");

    let spans = document.querySelectorAll(".table-container li span");
    for (const span of spans) {
      span.classList.add("light-theme");
    }

    let selects = document.querySelectorAll(".table-container li input ");
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
  var sem1c = parseInt(document.getElementById("grades1").value);
  var sem1g = parseFloat(document.getElementById("credits1").value);

  var sem2c = parseInt(document.getElementById("grades2").value);
  var sem2g = parseFloat(document.getElementById("credits2").value);

  var sem3c = parseInt(document.getElementById("grades3").value);
  var sem3g = parseFloat(document.getElementById("credits3").value);

  var sem4c = parseInt(document.getElementById("grades4").value);
  var sem4g = parseFloat(document.getElementById("credits4").value);

  var sem5c = parseInt(document.getElementById("grades5").value);
  var sem5g = parseFloat(document.getElementById("credits5").value);

  var sem6c = parseInt(document.getElementById("grades6").value);
  var sem6g = parseFloat(document.getElementById("credits6").value);

  var sem7c = parseInt(document.getElementById("grades7").value);
  var sem7g = parseFloat(document.getElementById("credits7").value);

  var sem8c = parseInt(document.getElementById("grades8").value);
  var sem8g = parseFloat(document.getElementById("credits8").value);

  var sem9c = parseInt(document.getElementById("grades9").value);
  var sem9g = parseFloat(document.getElementById("credits9").value);

  var sem10c = parseInt(document.getElementById("grades10").value);
  var sem10g = parseFloat(document.getElementById("credits10").value);
  sem1c = sem1c || 0;
  sem1g = sem1g || 0;

  sem2c = sem2c || 0;
  sem2g = sem2g || 0;

  sem3c = sem3c || 0;
  sem3g = sem3g || 0;

  sem4c = sem4c || 0;
  sem4g = sem4g || 0;

  sem5c = sem5c || 0;
  sem5g = sem5g || 0;

  sem6c = sem6c || 0;
  sem6g = sem6g || 0;

  sem7c = sem7c || 0;
  sem7g = sem7g || 0;

  sem8c = sem8c || 0;
  sem8g = sem8g || 0;

  sem9c = sem9c || 0;
  sem9g = sem9g || 0;

  sem10c = sem10c || 0;
  sem10g = sem10g || 0;
  /*

  var totalCredits1 = document.getElementById("grades1").value;
  var totalCredits2 = document.getElementById("grades2").value;
  var totalCredits3 = document.getElementById("grades3").value;
  var totalCredits4 = document.getElementById("grades4").value;
  var totalCredits5 = document.getElementById("grades5").value;
  var totalCredits6 = document.getElementById("grades6").value;
  var totalCredits7 = document.getElementById("grades7").value;
  var totalCredits8 = document.getElementById("grades8").value;
  var totalCredits9 = document.getElementById("grades9").value;
  var totalCredits10 = document.getElementById("grades10").value;

  var gpa1 = document.getElementById("credits1").value;
  var gpa2 = document.getElementById("credits2").value;
  var gpa3 = document.getElementById("credits3").value;
  var gpa4 = document.getElementById("credits4").value;
  var gpa5 = document.getElementById("credits5").value;
  var gpa6 = document.getElementById("credits6").value;
  var gpa7 = document.getElementById("credits7").value;
  var gpa8 = document.getElementById("credits8").value;
  var gpa9 = document.getElementById("credits9").value;
  var gpa10 = document.getElementById("credits10").value;
*/
  if (
    sem1g < 0 ||
    sem2g < 0 ||
    sem3g < 0 ||
    sem4g < 0 ||
    sem5g < 0 ||
    sem6g < 0 ||
    sem7g < 0 ||
    sem8g < 0 ||
    sem9g < 0 ||
    sem10g < 0
  ) {
    let gpaTextHolder = document.querySelector(".gpa-text-holder");
    gpaTextHolder.classList.add("active");
    let gpaText = document.querySelector(".gpa-text");
    gpaText.classList.add("active");

    gpaText.innerHTML = "Kindly Check your entries ( should not be negative )";
  } else if (
    /*(totalCredits1.length == 0 && gpa1 >= 1) ||
    (totalCredits2.length == 0 && gpa2 >= 1) ||
    (totalCredits3.length == 0 && gpa3 >= 1) ||
    (totalCredits4.length == 0 && gpa4 >= 1) ||
    (totalCredits5.length == 0 && gpa5 >= 1) ||
    (totalCredits6.length == 0 && gpa6 >= 1) ||
    (totalCredits7.length == 0 && gpa7 >= 1) ||
    (totalCredits8.length == 0 && gpa8 >= 1) ||
    (totalCredits9.length == 0 && gpa9 >= 1) ||
    (totalCredits10.length == 0 && gpa10 >= 1)
   {
    let gpaTextHolder = document.querySelector(".gpa-text-holder");
    gpaTextHolder.classList.add("active");
    let gpaText = document.querySelector(".gpa-text");
    gpaText.classList.add("active");
    gpaText.innerText =
      "Please select the respective Total Credit(s) for the Semester(s) of which GPA(s) are already opted";
  }
  */
    sem1g > 10 ||
    sem2g > 10 ||
    sem3g > 10 ||
    sem4g > 10 ||
    sem5g > 10 ||
    sem6g > 10 ||
    sem7g > 10 ||
    sem8g > 10 ||
    sem9g > 10 ||
    sem10g > 10 ||
    sem1c > 50 ||
    sem2c > 50 ||
    sem3c > 50 ||
    sem4c > 50 ||
    sem5c > 50 ||
    sem6c > 50 ||
    sem7c > 50 ||
    sem8c > 50 ||
    sem9c > 50 ||
    sem10c > 50
  ) {
    let gpaTextHolder = document.querySelector(".gpa-text-holder");
    gpaTextHolder.classList.add("active");
    let gpaText = document.querySelector(".gpa-text");
    gpaText.classList.add("active");

    gpaText.innerHTML =
      "Kindly Check your entries (0< CREDITS <=50) & (0< GPA <=10)";
  } else if (
    (sem1c > 0 && sem1g == 0) ||
    (sem2c > 0 && sem2g == 0) ||
    (sem3c > 0 && sem3g == 0) ||
    (sem4c > 0 && sem4g == 0) ||
    (sem5c > 0 && sem5g == 0) ||
    (sem6c > 0 && sem6g == 0) ||
    (sem7c > 0 && sem7g == 0) ||
    (sem8c > 0 && sem8g == 0) ||
    (sem9c > 0 && sem9g == 0) ||
    (sem10c > 0 && sem10g == 0)
  ) {
    let gpaTextHolder = document.querySelector(".gpa-text-holder");
    gpaTextHolder.classList.add("active");
    let gpaText = document.querySelector(".gpa-text");
    gpaText.classList.add("active");

    gpaText.innerHTML =
      "GPA entries in the respective semesters aren't entered; where your credits are greater than zero (>0).";
  } else if (
    (sem1c == 0 && sem1g > 0) ||
    (sem2c == 0 && sem2g > 0) ||
    (sem3c == 0 && sem3g > 0) ||
    (sem4c == 0 && sem4g > 0) ||
    (sem5c == 0 && sem5g > 0) ||
    (sem6c == 0 && sem6g > 0) ||
    (sem7c == 0 && sem7g > 0) ||
    (sem8c == 0 && sem8g > 0) ||
    (sem9c == 0 && sem9g > 0) ||
    (sem10c == 0 && sem10g > 0)
  ) {
    let gpaTextHolder = document.querySelector(".gpa-text-holder");
    gpaTextHolder.classList.add("active");
    let gpaText = document.querySelector(".gpa-text");
    gpaText.classList.add("active");

    gpaText.innerHTML =
      "Credit entries in the respective semesters aren't entered; where your GPA is greater than zero (>0).";
  } else {
    /*
    (totalCredits1.length != 0 && gpa1.length == 0) ||
    (totalCredits2.length != 0 && gpa2.length == 0) ||
    (totalCredits3.length != 0 && gpa3.length == 0) ||
    (totalCredits4.length != 0 && gpa4.length == 0) ||
    (totalCredits5.length != 0 && gpa5.length == 0) ||
    (totalCredits6.length != 0 && gpa6.length == 0) ||
    (totalCredits7.length != 0 && gpa7.length == 0) ||
    (totalCredits8.length != 0 && gpa8.length == 0) ||
    (totalCredits9.length != 0 && gpa9.length == 0) ||
    (totalCredits10.length != 0 && gpa10.length == 0)
  ) {
    let gpaTextHolder = document.querySelector(".gpa-text-holder");
    gpaTextHolder.classList.add("active");
    let gpaText = document.querySelector(".gpa-text");
    gpaText.classList.add("active");
    gpaText.innerHTML =
      "Please select the respective GPA(s) for the Semester(s) of which Total Credits(s) are already opted";
  } 
  */
    /*()
    if (totalCredits1 == "") totalCredits1 = 0;
    if (totalCredits2 == "") totalCredits2 = 0;
    if (totalCredits3 == "") totalCredits3 = 0;
    if (totalCredits4 == "") totalCredits4 = 0;
    if (totalCredits5 == "") totalCredits5 = 0;
    if (totalCredits6 == "") totalCredits6 = 0;
    if (totalCredits7 == "") totalCredits7 = 0;
    if (totalCredits8 == "") totalCredits8 = 0;
    if (totalCredits9 == "") totalCredits9 = 0;
    if (totalCredits10 == "") totalCredits10 = 0;

    var finalCGPA =
      (gpa1 * totalCredits1 +
        gpa2 * totalCredits2 +
        gpa3 * totalCredits3 +
        gpa4 * totalCredits4 +
        gpa5 * totalCredits5 +
        gpa6 * totalCredits6 +
        gpa7 * totalCredits7 +
        gpa8 * totalCredits8 +
        gpa9 * totalCredits9 +
        gpa10 * totalCredits10) /
      (totalCredits1 +
        totalCredits2 +
        totalCredits3 +
        totalCredits4 +
        totalCredits5 +
        totalCredits6 +
        totalCredits7 +
        totalCredits8 +
        totalCredits9 +
        totalCredits10);
*/
    var finalCGPA =
      (sem1c * sem1g +
        sem2c * sem2g +
        sem3c * sem3g +
        sem4c * sem4g +
        sem5c * sem5g +
        sem6c * sem6g +
        sem7c * sem7g +
        sem8c * sem8g +
        sem9c * sem9g +
        sem10c * sem10g) /
      (sem1c +
        sem2c +
        sem3c +
        sem4c +
        sem5c +
        sem6c +
        sem7c +
        sem8c +
        sem9c +
        sem10c);

    finalCGPA = finalCGPA || 0;

    if (finalCGPA > 0) {
      let gpaTextHolder = document.querySelector(".gpa-text-holder");
      gpaTextHolder.classList.add("active");
      let gpaText = document.querySelector(".gpa-text");
      gpaText.classList.add("active");
      gpaText.innerHTML = "CGPA : " + finalCGPA.toFixed(2);

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
        scaleGpaText.innerHTML = ((finalCGPA.toFixed(2) / 10) * 4).toFixed(2);
      });
      /*
      if (finalCGPA > 9) {
        let imgChange = document.querySelector(".changing-img");

        imgChange.setAttribute("src", "Comp1.gif");

        imgChange.classList.add("active");
      }
      if (finalCGPA > 8.5 && finalCGPA <= 9) {
        let imgChange = document.querySelector(".changing-img");

        imgChange.setAttribute("src", "Comp2.gif");

        imgChange.classList.add("active");
      }

      if (finalCGPA > 8 && finalCGPA <= 8.5) {
        let imgChange = document.querySelector(".changing-img");

        imgChange.setAttribute("src", "Comp3.gif");

        imgChange.classList.add("active");
      }
      if (finalCGPA >= 0 && finalCGPA <= 8) {
        let imgChange = document.querySelector(".changing-img");

        imgChange.setAttribute("src", "Comp4.gif");
        imgChange.classList.add("active");
      }*/
    } else {
      let gpaTextHolder = document.querySelector(".gpa-text-holder");
      gpaTextHolder.classList.add("active");
      let gpaText = document.querySelector(".gpa-text");
      gpaText.classList.add("active");

      gpaText.innerHTML = "Enter the values to get gpa";
    }
  }
});
