const cats = [
  { name: "Fluffy", hunger: "Hungry" },
  { name: "Whiskers", hunger: "Hungry" },
  { name: "Mittens", hunger: "Hungry" },
];


function feedCat(cat) {
  if(cat.hunger === "Hungry") {
    cat.hunger = "Full";
    document.getElementById(cat.name).textContent = `Status: ${cat.hunger}`;
    alert(`${cat.name} has been fed!`);
  } else {
    alert(`${cat.name} is already full!`);
  }
}

function feedAllCats() {
  cats.forEach(cat => feedCat(cat));
}


cats.forEach(cat => console.log(`${cat.name} is ${cat.hunger}`));
