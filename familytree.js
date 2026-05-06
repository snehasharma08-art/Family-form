let families = [];
let currentFamily = null;

function showAddFamily() {
  document.getElementById("modal").style.display = "flex";
}

function createFamily() {
  let name = document.getElementById("familyName").value;
  let desc = document.getElementById("familyDesc").value;

  let family = {
    name,
    desc,
    members: [],
  };

  families.push(family);
  document.getElementById("modal").style.display = "none";
  renderFamilies();
}

function renderFamilies() {
  let list = document.getElementById("familyList");
  list.innerHTML = "";

  families.forEach((f, i) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${f.name}</h3>
      <p>${f.desc}</p>
      <small>${f.members.length} Members</small>
    `;

    div.onclick = () => openFamily(i);
    list.appendChild(div);
  });
}

function openFamily(index) {
  currentFamily = families[index];

  document.getElementById("dashboard").classList.remove("active");
  document.getElementById("familyView").classList.add("active");

  renderMembers();
}

function goBack() {
  document.getElementById("familyView").classList.remove("active");
  document.getElementById("dashboard").classList.add("active");
}

function addMember() {
  let name = prompt("Enter member name:");
  let relation = prompt("Enter relation:");

  if (!name) return;

  currentFamily.members.push({ name, relation });
  renderMembers();
}

function renderMembers() {
  let tree = document.getElementById("tree");
  tree.innerHTML = "";

  currentFamily.members.forEach((m) => {
    let div = document.createElement("div");
    div.className = "member";
    div.innerHTML = `
      <h4>${m.name}</h4>
      <p>${m.relation}</p>
    `;
    tree.appendChild(div);
  });
}
