// 1:00 AM on 29 December 2026, India Standard Time (UTC+05:30).
// The explicit offset makes the target identical for visitors anywhere in the world.
const target = new Date("2026-12-29T01:00:00+05:30").getTime();

const fields = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};

const countdown = document.getElementById("countdown");
const celebration = document.getElementById("celebration");

function updateCountdown() {
  const remaining = target - Date.now();

  if (remaining <= 0) {
    Object.values(fields).forEach((field) => field.textContent = "00");
    countdown.setAttribute("aria-label", "The reunion moment has arrived");
    celebration.hidden = false;
    clearInterval(timer);
    return;
  }

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  fields.days.textContent = String(days).padStart(2, "0");
  fields.hours.textContent = String(hours).padStart(2, "0");
  fields.minutes.textContent = String(minutes).padStart(2, "0");
  fields.seconds.textContent = String(seconds).padStart(2, "0");
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

const letterButton = document.getElementById("letterButton");
const letter = document.getElementById("letter");

letterButton.addEventListener("click", () => {
  const opening = letter.hidden;
  letter.hidden = !opening;
  letterButton.setAttribute("aria-expanded", String(opening));
  letterButton.innerHTML = opening
    ? 'Close love note <span>↗</span>'
    : 'Open a little love note <span>↗</span>';
});
