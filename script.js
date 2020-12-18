class Animal {
    constructor(name) {
        this.name = name;
    }
    action() {
        document.getElementById(this.actionSoundName).play();
    }
    openImage() {
        var image = document.querySelector("img");
        image.setAttribute("src", this.src);
    }
    putInTheDocument() {
        var petsTable = document.getElementById("petsTable");
        var petTR = document.createElement("tr");

        var petNameTD = document.createElement("td");
        petNameTD.textContent = this.name;
        petTR.appendChild(petNameTD);

        var petLegsTD = document.createElement("td");
        petLegsTD.textContent = this.legs;
        petTR.appendChild(petLegsTD);

        var petActionTD = document.createElement("td");
        var petActionTDButton = document.createElement("button");
        petActionTDButton.textContent = this.actionText;
        petActionTD.appendChild(petActionTDButton);
        petTR.appendChild(petActionTD);

        petActionTDButton.onclick = this.action.bind(this);
        petNameTD.onclick = this.openImage.bind(this);
        petLegsTD.onclick = this.openImage.bind(this);
        petsTable.querySelector("tbody").appendChild(petTR);
    }

}

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.legs = 4;
        this.actionText = "Meoow";
        this.actionSoundName = "meow";
        this.src = "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png";
    }
}

class Monkey extends Animal {
    constructor(name) {
        super(name);
        this.legs = 2;
        this.actionText = "Scream";
        this.actionSoundName = "scream";
        this.src ="https://1.bp.blogspot.com/-DRJN3698wfQ/XHNZwScqLwI/AAAAAAAADO0/OIIDOOw9f5worGZ4CpUq5W1owi_oLOMrACLcBGAs/s640/1.jpg";
    }
}

var Mila = new Cat("Gin");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();