let activities = [];

fetch("activities.json")
  .then((response) => response.json())
  .then((data) => {
    activities = data;
    generate();
  })
  .catch((error) => {
    titleEl.textContent = "Couldn't load activities";
    descEl.textContent = "Make sure activitiies.json is in the same directory";
  });

// === State ===
let currentLocation = "any";
let currentBudget = "any";
let lastIndex = -1;

// === DOM References ===
const titleEl = document.getElementById("activity-title");
const descEl = document.getElementById("activity-description");
const tagsEl = document.getElementById("activity-tags");
const generateBtn = document.getElementById("generate-btn");
const budgetSelect = document.getElementById("budget");
const toggleBtns = document.querySelectorAll(".toggle");

// === Filter Logic ===
function getFiltered() {
  return activities.filter((a) => {
    const locationMatch =
      currentLocation === "any" || a.location === currentLocation;
    const budgetMatch = currentBudget === "any" || a.budget === currentBudget;
    return locationMatch && budgetMatch;
  });
}

// === Generate Activity ===
function generate() {
  const filtered = getFiltered();

  if (filtered.length === 0) {
    titleEl.textContent = "No activities found";
    descEl.textContent = "Try adjusting your filters.";
    tagsEl.textContent = "";
    return;
  }

  // Avoid repeating the last one if possible
  let index;
  do {
    index = Math.floor(Math.random() * filtered.length);
  } while (filtered.length > 1 && index === lastIndex);

  lastIndex = index;
  const activity = filtered[index];

  titleEl.textContent = activity.title;
  descEl.textContent = activity.description;
  tagsEl.textContent = `${activity.location} · ${activity.budget} cost`;
}

// === Event Listeners ===
toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentLocation = btn.dataset.value;
  });
});

budgetSelect.addEventListener("change", () => {
  currentBudget = budgetSelect.value;
});

generateBtn.addEventListener("click", generate);
