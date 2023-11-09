const names = [
    "Tendre-Coeur",
    "Arc-en-Ciel",
    "Bisou-Magique",
    "Douce-Étoile",
    "Bisouille",
    "Joyeux-Lutin",
    "Tendre-Peluche",
    "Petit-Coeur",
    "Champi-Mignon",
    "Câlinou"
];

const descriptions = {
    "Tendre-Coeur": "Tendre-Coeur est le leader des Bisounours. Il est gentil, attentionné et aime aider les autres.",
    "Arc-en-Ciel": "Arc-en-Ciel répand la joie et la bonne humeur partout où il va. Ses couleurs vives égayent tous les cœurs.",
    "Bisou-Magique": "Bisou-Magique a le pouvoir de guérir les peines avec un simple baiser. Il est aimé de tous.",
    "Douce-Étoile": "Douce-Étoile est douce, gentille et rêveuse. Elle passe son temps à contempler les étoiles et à rêver.",
    "Bisouille": "Bisouille adore les câlins et les bisous. Il est toujours prêt à réconforter ses amis en leur faisant des bisous.",
    "Joyeux-Lutin": "Joyeux-Lutin est plein d'énergie et adore jouer. Il est le farceur de la bande.",
    "Tendre-Peluche": "Tendre-Peluche est doux comme une peluche et aime être câliné. Il est très attachant.",
    "Petit-Coeur": "Petit-Coeur est le plus jeune des Bisounours. Il est curieux et plein de vie.",
    "Champi-Mignon": "Champi-Mignon vit dans la forêt des Bisounours et s'occupe de la nature. Il est très écologique.",
    "Câlinou": "Câlinou adore les câlins et les étreintes chaleureuses. Il est toujours là pour réconforter ses amis."
};

document.getElementById("generateButton").addEventListener("click", generateNames);

function generateNames() {
    const nameCount = parseInt(document.getElementById("nameCount").value, 10);
    const nameList = document.getElementById("nameList");
    nameList.innerHTML = "";


    for (let i = 0; i < nameCount; i++) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const name = names[randomIndex];
        const listItem = document.createElement("li");
        listItem.textContent = name;
        nameList.appendChild(listItem);
    }

    // Afficher la description du premier personnage généré
    showCharacterDescription(nameList.firstChild.textContent);
}

nameList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        showCharacterDescription(event.target.textContent);
    }
});

function showCharacterDescription(name) {
    const characterDescription = document.getElementById("characterDescription");
    characterDescription.textContent = descriptions[name];
}
