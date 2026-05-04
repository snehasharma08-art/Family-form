const families = {
  "Mansotra Family": [
    {
      name: "Sneha Sharma",
      father: "Jyoti Parkash",
      mother: "Santosh Devi",
      relations: {
        sister: "Himani Sharma",
        brother: "Sandeep Sharma",
      },
    },
    {
      name: "Jyoti Parkash",
      relations: {
        spouse: "Santosh Devi",
        children: ["Sneha Sharma", "Himani Sharma", "Sandeep Sharma"],
        mother: "Lt.smt.Dwarku Devi",
        father: "Lt.sh.Tara Chand",
      },
    },
    {
      name: "Santosh Devi",
      relations: {
        spouse: "Jyoti Parkash",
        children: ["Sneha Sharma", "Himani Sharma", "Sandeep Sharma"],
        mother: "Lt.smt.Rja Devi",
        father: "Lt.sh.Jaganath Magotra",
      },
    },
    {
      name: "Himani Sharma",
      father: "Jyoti Parkash",
      mother: "Santosh Devi",
      relations: {
        spouse: "Harish",
        sister: "Sneha Sharma",
        brother: "Sandeep Sharma",
        child: "Gourik",
      },
    },
    {
      name: "Harish",
      relations: {
        spouse: "Himani Sharma",
        child: "Gourik",
        mother: "Santosh Devi",
        father: "Jyoti Parkash",
      },
    },
    {
      name: "Gourik",
      relations: {
        mother: "Himani Sharma",
        father: "Harish",
        maternalGrandparents: ["Jyoti Parkash", "Santosh Devi"],
      },
    },
    {
      name: "Sandeep Sharma",
      father: "Jyoti Parkash",
      mother: "Santosh Devi",
      relations: {
        spouse: "Simi Sharma",
        sister: ["Sneha Sharma", "Himani Sharma"],
      },
    },
    {
      name: "Simi Sharma",
      relations: {
        spouse: "Sandeep Sharma",
        mother: "Santosh Devi",
        father: "Jyoti Parkash",
      },
    },
  ],
};

function addFamily() {
  const input = document.getElementById("newFamily");
  const name = input.value.trim();

  if (!name) {
    alert("Mansotra Family");
    return;
  }

  families[name] = [];
  input.value = "";

  alert(`"${name}"`);
  displayAll();
}

function displayAll() {
  const container = document.getElementById("members");
  container.innerHTML = "";

  for (let familyName in families) {
    container.innerHTML += `<div class="family"><h3>${familyName}</h3>`;

    families[familyName].forEach((m) => {
      container.innerHTML += `
        <div class="member">
          <b>${m.name}</b>
        </div>
      `;
    });

    container.innerHTML += `</div>`;
  }
}

function searchMember() {
  const name = document.getElementById("search").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  let member = null;

  for (let familyName in families) {
    member = families[familyName].find((m) =>
      m.name.toLowerCase().includes(name),
    );
    if (member) break;
  }

  if (!member) {
    resultDiv.innerHTML = "Member not found";
    return;
  }

  let relationsHTML = "";
  if (member.relations) {
    for (let key in member.relations) {
      relationsHTML += `<b>${key}:</b> ${member.relations[key]}<br>`;
    }
  }

  resultDiv.innerHTML = `
    <div class="result-card">
      <h3>${member.name}</h3>
      ${member.father ? `<b>Father:</b> ${member.father}<br>` : ""}
      ${member.mother ? `<b>Mother:</b> ${member.mother}<br>` : ""}
      ${relationsHTML}
    </div>
  `;
}

displayAll();
