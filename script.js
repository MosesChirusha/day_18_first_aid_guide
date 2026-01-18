const data = [
  {
    title: "Bleeding",
    icon: "🩸",
    steps: [
      "Stay calm and ensure the area is safe",
      "Apply firm pressure with a clean cloth",
      "Raise the injured area if possible",
      "Do not remove deeply embedded objects",
      "Seek medical help if bleeding continues"
    ]
  },
  {
    title: "Burns",
    icon: "🔥",
    steps: [
      "Move away from the heat source",
      "Cool the burn with clean running water for 10 minutes",
      "Do not apply oils or creams",
      "Cover loosely with a clean cloth",
      "Seek medical care for severe burns"
    ]
  },
  {
    title: "Choking",
    icon: "😮",
    steps: [
      "Ask if the person can speak or cough",
      "Encourage coughing if possible",
      "Perform abdominal thrusts if necessary",
      "Call emergency services",
      "Continue until the airway clears"
    ]
  },
  {
    title: "Fainting",
    icon: "💫",
    steps: [
      "Lay the person flat",
      "Raise their legs slightly",
      "Loosen tight clothing",
      "Check breathing",
      "Seek help if they do not regain consciousness"
    ]
  },
  {
    title: "Fracture",
    icon: "🦴",
    steps: [
      "Keep the injured area still",
      "Support with a splint if available",
      "Apply cold pack to reduce swelling",
      "Do not try to realign the bone",
      "Get medical help immediately"
    ]
  },
  {
    title: "Poisoning",
    icon: "☠️",
    steps: [
      "Do not induce vomiting",
      "Check the person's breathing",
      "Call emergency services or poison control",
      "Keep the substance container nearby",
      "Follow professional instructions"
    ]
  }
];

const cardsContainer = document.getElementById("cards");
const guide = document.getElementById("guide");
const guideTitle = document.getElementById("guideTitle");
const stepsDiv = document.getElementById("steps");
const searchInput = document.getElementById("search");

function renderCards(list) {
  cardsContainer.innerHTML = "";
  list.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="icon">${item.icon}</div>
      <strong>${item.title}</strong>
    `;
    card.onclick = () => openGuide(index);
    cardsContainer.appendChild(card);
  });
}

function openGuide(index) {
  const item = data[index];
  guideTitle.textContent = item.title;
  stepsDiv.innerHTML = "";
  item.steps.forEach(step => {
    const div = document.createElement("div");
    div.className = "step";
    div.textContent = step;
    stepsDiv.appendChild(div);
  });
  cardsContainer.style.display = "none";
  guide.style.display = "block";
}

function showGrid() {
  guide.style.display = "none";
  cardsContainer.style.display = "grid";
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(value)
  );
  renderCards(filtered);
});

renderCards(data);