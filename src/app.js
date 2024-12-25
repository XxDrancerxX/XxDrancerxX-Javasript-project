// Arrays for excuse generation
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

// Function to generate a random excuse
function generateExcuse() {
  // Get a random index for each array
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];

  // Concatenate into a full excuse
  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
}

// Set the excuse when the page loads
window.onload = () => {
  const excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = generateExcuse();
};
