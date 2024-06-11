window.addEventListener("load", sidenVises);
// Opretter global variables
let points;
let liv;
let myRand;
let speed;

// Opretter global konstanter
const red1 = document.querySelector("#red_container1");
const red2 = document.querySelector("#red_container2");
const red3 = document.querySelector("#red_container3");
const blue1 = document.querySelector("#blue_container1");
const blue2 = document.querySelector("#blue_container2");
const blue3 = document.querySelector("#blue_container3");

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#game_over").classList.add("skjul");
  document.querySelector("#level_complete").classList.add("skjul");
  document.querySelector("#game_background").classList.add("skjul");
  document.querySelector("#box1").classList.add("skjul");
  document.querySelector("#box2").classList.add("skjul");
  document.querySelector("#box3").classList.add("skjul");
  document.querySelector("#box4").classList.add("skjul");
  document.querySelector("#box5").classList.add("skjul");
  document.querySelector("#box6").classList.add("skjul");
  //vis startskærm
  document.querySelector("#start").classList.remove("skjul");
  document.querySelector("#start_knap").addEventListener("click", startGame);
}

function startGame() {
  console.log("startGame");
  document.querySelector("#start").classList.add("skjul");
  document.querySelector("#game_background").classList.remove("skjul");
  document.querySelector("#box1").classList.remove("skjul");
  document.querySelector("#box2").classList.remove("skjul");
  document.querySelector("#box3").classList.remove("skjul");
  document.querySelector("#box4").classList.remove("skjul");
  document.querySelector("#box5").classList.remove("skjul");
  document.querySelector("#box6").classList.remove("skjul");
  //Nulstil point og udskriv
  points = 0;
  document.querySelector("#score_board").innerHTML = points;
  //reset liv til 3
  liv = 3;
  document.querySelector("#liv").innerHTML = liv;
  //reset speed
  speed = 1;
  //Start timer
  document.querySelector("#time_sprite").classList.add("time");
  document.querySelector("#time_container").addEventListener("animationend", stopSpillet);

  //red1
  //Giv en random position, random delay til container og speed, start op_ned-animationer
  red1.classList.add("pos" + newRandNum(6), "delay" + newRandNum(4), "speed" + speed, "op_ned");
  //Lyt efter op_ned-animationer er kørt en gang
  red1.addEventListener("animationiteration", genstartRed);
  //Lyt efter klik
  red1.addEventListener("mousedown", clickRed);

  //red2
  //Giv en random position, random delay til container og speed, start op_ned-animationer
  red2.classList.add("pos" + newRandNum(6), "delay" + newRandNum(4), "speed" + speed, "op_ned");
  //Lyt efter op_ned-animationer er kørt en gang
  red2.addEventListener("animationiteration", genstartRed);
  //Lyt efter klik
  red2.addEventListener("mousedown", clickRed);

  //red3
  //Giv en random position, random delay til container og speed, start op_ned-animationer
  red3.classList.add("pos" + newRandNum(6), "delay" + newRandNum(4), "speed" + speed, "op_ned");
  //Lyt efter op_ned-animationer er kørt en gang
  red3.addEventListener("animationiteration", genstartRed);
  //Lyt efter klik
  red3.addEventListener("mousedown", clickRed);

  //Giv en random position, random delay til container og speed, start op_ned-animationer
  blue1.classList.add("pos" + newRandNum(6), "delay" + newRandNum(4), "speed" + speed, "op_ned");
  //Lyt efter op_ned-animationer er er kørt en gang
  blue1.addEventListener("animationiteration", genstartBlue);
  //Lyt efter klik
  blue1.addEventListener("mousedown", clickBlue);

  //blue2
  //Giv en random position, random delay til container og speed, start op_ned-animationer
  blue2.classList.add("pos" + newRandNum(6), "delay" + newRandNum(4), "speed" + speed, "op_ned");
  //Lyt efter op_ned-animationer er er kørt en gang
  blue2.addEventListener("animationiteration", genstartBlue);
  //Lyt efter klik
  blue2.addEventListener("mousedown", clickBlue);

  //blue3
  //Giv en random position, random delay til container og speed, start op_ned-animationer
  blue3.classList.add("pos" + newRandNum(6), "delay" + newRandNum(4), "speed" + speed, "op_ned");
  //Lyt efter op_ned-animationer er er kørt en gang
  blue3.addEventListener("animationiteration", genstartBlue);
  //Lyt efter klik
  blue3.addEventListener("mousedown", clickBlue);
}

function clickRed() {
  console.log("clickRed");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickRed);

  //frys (pause), op_ned-animationen
  this.classList.add("frys");

  //Tæl en op på points og udskriv
  points++;
  document.querySelector("#score_board").innerHTML = points;

  if (points >= 5) {
    levelComplete();
  }
  if (points >= 4) {
    speed = 3;
  } else if (points >= 2) {
    speed = 2;
  }

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  this.firstElementChild.classList.add("forsvind");

  //Lyt efter forsvind-animationer er færdig
  this.addEventListener("animationend", genstartRed);
}

function genstartRed() {
  console.log("genstartRed");
  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte op_ned animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //Giv en random position til container, speed og op_ned-animationer på element
  this.classList.add("pos" + newRandNum(6), "speed" + speed, "op_ned");

  //Lyt efter klik på element
  this.addEventListener("mousedown", clickRed);
}

function clickBlue() {
  console.log("clickBlue");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickBlue);

  //frys (pause), op_ned-animationen
  this.classList.add("frys");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  this.firstElementChild.classList.add("forsvind");

  //Lyt efter forsvind-animationer er færdig
  this.addEventListener("animationend", genstartBlue);

  //Tæl en ned på liv og udskriv
  liv--;
  document.querySelector("#liv").innerHTML = liv;
  if (liv <= 0) {
    stopSpillet();
  }
}

function genstartBlue() {
  console.log("genstartBlue");
  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte op_ned animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //Giv en random position til container, speed og op_ned-animationer på element
  this.classList.add("pos" + newRandNum(6), "speed" + speed, "op_ned");

  //Lyt efter klik på element
  this.addEventListener("mousedown", clickBlue);
}

function stopSpillet() {
  console.log("stopSpillet");
  //*fjern alle animationer og fjern alle eventlistnere
  red1.classList = "";
  red1.firstElementChild.classList = "";
  red1.removeEventListener("animationiteration", genstartRed);
  red1.removeEventListener("animationend", genstartRed);
  red1.removeEventListener("mousedown", clickRed);

  //red2
  red2.classList = "";
  red2.firstElementChild.classList = "";
  red2.removeEventListener("animationiteration", genstartRed);
  red2.removeEventListener("animationend", genstartRed);
  red2.removeEventListener("mousedown", clickRed);
  //red3
  red3.classList = "";
  red3.firstElementChild.classList = "";
  red3.removeEventListener("animationiteration", genstartRed);
  red3.removeEventListener("animationend", genstartRed);
  red3.removeEventListener("mousedown", clickRed);

  blue1.classList = "";
  blue1.firstElementChild.classList = "";
  blue1.removeEventListener("animationiteration", genstartBlue);
  blue1.removeEventListener("mousedown", clickBlue);
  blue1.removeEventListener("animationend", genstartBlue);

  //blue2
  blue2.classList = "";
  blue2.firstElementChild.classList = "";
  blue2.removeEventListener("animationiteration", genstartBlue);
  blue2.removeEventListener("mousedown", clickBlue);
  blue2.removeEventListener("animationend", genstartBlue);

  //blue3
  blue3.classList = "";
  blue3.firstElementChild.classList = "";
  blue3.removeEventListener("animationiteration", genstartBlue);
  blue3.removeEventListener("mousedown", clickBlue);
  blue3.removeEventListener("animationend", genstartBlue);
  //Reset timer
  document.querySelector("#time_sprite").classList.remove("time");
  document.querySelector("#time_container").removeEventListener("animationend", stopSpillet);
  if (liv <= 0) {
    gameOver();
  } else if (points >= 5) {
    levelComplete();
  } else {
    gameOver();
  }
}

function newRandNum(max) {
  return Math.floor(Math.random() * max) + 1;
}

function gameOver() {
  console.log("gameOver");
  document.querySelector("#game_over").classList.remove("skjul");
  document.querySelector("#box1").classList.add("skjul");
  document.querySelector("#box2").classList.add("skjul");
  document.querySelector("#box3").classList.add("skjul");
  document.querySelector("#box4").classList.add("skjul");
  document.querySelector("#box5").classList.add("skjul");
  document.querySelector("#box6").classList.add("skjul");

  //Vis gameoverskærm
  //Klik på genstart
  //*fjern alle animationer og fjern alle eventlistnere
  red1.classList = "";
  red1.firstElementChild.classList = "";
  red1.removeEventListener("animationiteration", genstartRed);
  red1.removeEventListener("animationend", genstartRed);
  red1.removeEventListener("mousedown", clickRed);

  //red2
  red2.classList = "";
  red2.firstElementChild.classList = "";
  red2.removeEventListener("animationiteration", genstartRed);
  red2.removeEventListener("animationend", genstartRed);
  red2.removeEventListener("mousedown", clickRed);
  //red3
  red3.classList = "";
  red3.firstElementChild.classList = "";
  red3.removeEventListener("animationiteration", genstartRed);
  red3.removeEventListener("animationend", genstartRed);
  red3.removeEventListener("mousedown", clickRed);

  blue1.classList = "";
  blue1.firstElementChild.classList = "";
  blue1.removeEventListener("animationiteration", genstartBlue);
  blue1.removeEventListener("mousedown", clickBlue);
  blue1.removeEventListener("animationend", genstartBlue);

  //blue2
  blue2.classList = "";
  blue2.firstElementChild.classList = "";
  blue2.removeEventListener("animationiteration", genstartBlue);
  blue2.removeEventListener("mousedown", clickBlue);
  blue2.removeEventListener("animationend", genstartBlue);

  //blue3
  blue3.classList = "";
  blue3.firstElementChild.classList = "";
  blue3.removeEventListener("animationiteration", genstartBlue);
  blue3.removeEventListener("mousedown", clickBlue);
  blue3.removeEventListener("animationend", genstartBlue);
}
function levelComplete() {
  console.log("levelComplete");
  document.querySelector("#level_complete").classList.remove("skjul");
  document.querySelector("#box1").classList.add("skjul");
  document.querySelector("#box2").classList.add("skjul");
  document.querySelector("#box3").classList.add("skjul");
  document.querySelector("#box4").classList.add("skjul");
  document.querySelector("#box5").classList.add("skjul");
  document.querySelector("#box6").classList.add("skjul");
  //Vis levelcomplete skærm
  //Klik på genstart 2
  //*fjern alle animationer og fjern alle eventlistnere
  red1.classList = "";
  red1.firstElementChild.classList = "";
  red1.removeEventListener("animationiteration", genstartRed);
  red1.removeEventListener("animationend", genstartRed);
  red1.removeEventListener("mousedown", clickRed);

  //red2
  red2.classList = "";
  red2.firstElementChild.classList = "";
  red2.removeEventListener("animationiteration", genstartRed);
  red2.removeEventListener("animationend", genstartRed);
  red2.removeEventListener("mousedown", clickRed);

  //red3
  red3.classList = "";
  red3.firstElementChild.classList = "";
  red3.removeEventListener("animationiteration", genstartRed);
  red3.removeEventListener("animationend", genstartRed);
  red3.removeEventListener("mousedown", clickRed);

  blue1.classList = "";
  blue1.firstElementChild.classList = "";
  blue1.removeEventListener("animationiteration", genstartBlue);
  blue1.removeEventListener("mousedown", clickBlue);
  blue1.removeEventListener("animationend", genstartBlue);

  //blue2
  blue2.classList = "";
  blue2.firstElementChild.classList = "";
  blue2.removeEventListener("animationiteration", genstartBlue);
  blue2.removeEventListener("mousedown", clickBlue);
  blue2.removeEventListener("animationend", genstartBlue);

  //blue3
  blue3.classList = "";
  blue3.firstElementChild.classList = "";
  blue3.removeEventListener("animationiteration", genstartBlue);
  blue3.removeEventListener("mousedown", clickBlue);
  blue3.removeEventListener("animationend", genstartBlue);
  //Reset timer
}
