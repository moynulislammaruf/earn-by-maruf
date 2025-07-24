
let points = 0;

function saveUser() {
  const username = document.getElementById("username").value.trim();
  if (!username) return alert("Please enter your name.");
  localStorage.setItem("username", username);
  document.getElementById("display-name").textContent = username;
  document.getElementById("user-section").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  loadData();
}

function loadData() {
  const savedPoints = localStorage.getItem("points");
  if (savedPoints) {
    points = parseInt(savedPoints);
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("balance").textContent = points;
  localStorage.setItem("points", points);
}

function watchAd() {
  points += 2;
  alert("You earned 2 points for watching an ad!");
  updateDisplay();
}

function clickAndEarn() {
  points += 1;
  alert("You earned 1 point for clicking!");
  updateDisplay();
}

function spinAndWin() {
  const reward = Math.floor(Math.random() * 5) + 1;
  points += reward;
  alert(`You won ${reward} points from spin!`);
  updateDisplay();
}

function dailyBonus() {
  const today = new Date().toDateString();
  const lastClaim = localStorage.getItem("dailyBonus");
  if (lastClaim === today) {
    alert("You already claimed today's bonus!");
  } else {
    points += 3;
    localStorage.setItem("dailyBonus", today);
    alert("You claimed 3 points as daily bonus!");
    updateDisplay();
  }
}

function copyReferral() {
  const user = localStorage.getItem("username") || "user";
  const refLink = `https://yourdomain.com/?ref=${user}`;
  navigator.clipboard.writeText(refLink);
  alert("Referral link copied: " + refLink);
}

function withdraw() {
  const username = localStorage.getItem("username") || "user";
  const msg = `Hello, I want to withdraw my earnings.\nName: ${username}\nPoints: ${points}\nPlease send your Binance UID:`;
  const telegramLink = `https://t.me/share/url?url=https://t.me/your_bot_username&text=${encodeURIComponent(msg)}`;
  window.open(telegramLink, '_blank');
}
