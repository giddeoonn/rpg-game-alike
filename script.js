const login_Form = document.getElementById("login_Form");
const error_message = document.getElementById("error_message");
const show_userName = document.getElementById("show_userName");
const userName = document.getElementById("userName");
const enterBtn = document.getElementById("enterBtn");

const game_container = document.getElementById("game_container");
const greetings_player = document.getElementById("greetings_player");
const expPoints = document.getElementById("expPoints");

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const randomBtn = document.getElementById("randomBtn");

let charLength;
let playerName;
let playerEXP;

userName.addEventListener("input", () => {
  charLength = userName.value.length;
  playerName = userName.value;
  show_userName.textContent = `Welcome ${userName.value}!`;
  game();
});
enterBtn.addEventListener("click", () => {
  if (userName.value) {
    login_Form.style.display = "none";
    game_container.style.display = "block";
  } else {
    alert("Please Enter a Username to Proceed");
  }
});

function game() {
  greetings_player.textContent = `Welcome Player ${charLength} - ${playerName}`;
  playerEXP = Number(charLength) + 5;
  expPoints.textContent = `Your EXP POINTS: ${playerEXP}`;

  const savedEXP = playerEXP;

  increaseBtn.addEventListener("click", () => {
    playerEXP++;
    expPoints.textContent = `Your EXP POINTS: ${playerEXP}`;
  });
  decreaseBtn.addEventListener("click", () => {
    playerEXP--;
    expPoints.textContent = `Your EXP POINTS: ${playerEXP}`;

    if (playerEXP <= 0) {
      playerEXP = 0;
      expPoints.textContent = `Your EXP POINTS: ${playerEXP}`;
    }
  });
  resetBtn.addEventListener("click", () => {
    expPoints.textContent = `Your EXP POINTS: ${savedEXP}`;
    playerEXP = savedEXP;
  });

  //CHARACTER SECTION
  document.getElementById("showPlayerName").textContent = `${playerName}`;
  updateHP();
}

//CHARACTER SECTION
const maxHP = 12;
let playerCurrentHP = maxHP;
let enemyCurrentHP = maxHP;

function updateHP() {
  const playerHPBAR = document.getElementById("inner-playerHP");
  const enemyHPBAR = document.getElementById("inner-enemyHP");

  const playerHP_calculation = (playerCurrentHP / maxHP) * 100;
  const enemyHP_calculation = (enemyCurrentHP / maxHP) * 100;

  playerHPBAR.style.width = playerHP_calculation + "%";
  enemyHPBAR.style.width = enemyHP_calculation + "%";

  if (playerHP_calculation > 60) {
    playerHPBAR.style.backgroundColor = "green";
  } else if (playerHP_calculation > 30) {
    playerHPBAR.style.backgroundColor = "orange";
  } else {
    playerHPBAR.style.backgroundColor = "red";
  }
  if (enemyHP_calculation > 60) {
    enemyHPBAR.style.backgroundColor = "green";
  } else if (enemyHP_calculation > 30) {
    enemyHPBAR.style.backgroundColor = "orange";
  } else {
    enemyHPBAR.style.backgroundColor = "red";
  }

  const playerHP = (document.getElementById(
    "show_playerHP"
  ).textContent = `${playerCurrentHP} / ${maxHP}`);

  const enemyHP = (document.getElementById(
    "show_enemyHP"
  ).textContent = `${enemyCurrentHP} / ${maxHP}`);
}

const powerupBtn = document.getElementById("powerupBtn");
const healBtn = document.getElementById("healBtn");
const attackBtn = document.getElementById("attackBtn");

const max = 5;
const min = 2;
let heal;
let damage;

powerupBtn.addEventListener("click", () => {
  let powerUp = Math.pow(playerEXP, 2);
  expPoints.textContent = `Your EXP POINTS: ${powerUp}`;
  playerEXP = powerUp;
});
healBtn.addEventListener("click", () => {
  heal = Math.floor(Math.random() * (max - min)) + min;

  if (playerCurrentHP == maxHP) {
  } else {
    playerCurrentHP = playerCurrentHP + heal;
  }

  enemyheal();
  updateHP();
});
attackBtn.addEventListener("click", () => {
  damage = Math.floor(Math.random() * (max - min)) + min;
  enemyCurrentHP = enemyCurrentHP - damage;
  updateHP();
  enemyAttack();
});

function enemyAttack() {
  damage = Math.floor(Math.random() * (max - min)) + min;
  playerCurrentHP = playerCurrentHP - damage;
  updateHP();
}
function enemyheal() {
  heal = Math.floor(Math.random() * (max - min)) + min;
  if (playerCurrentHP == maxHP) {
  } else {
    enemyCurrentHP = enemyCurrentHP + heal;
  }
  updateHP();
}
