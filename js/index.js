class Person {
    firstName = "";
    lastName = "";
    imgSrc = "";
    gitHubUName = "";

    constructor (firstName, lastName, imgSrc, gitHubUName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.imgSrc = imgSrc;
        this.gitHubUName = gitHubUName;
    }

    addCard(){
        document.getElementById("cards").innerHTML += `
        <div class="cardBox">
            <img class="cardImg" src="${this.imgSrc}" alt="">
                    
            <p class="cardName">${this.firstName} ${this.lastName}</p>

            <a class="cardGitHub" href="https://github.com/${this.gitHubUName}">${this.gitHubUName}</a>

            <p class="cardReadMore">...</p>
        </div>` 

        console.log(`${this.firstName} card added`);
    }
}

let teamMembers = [
    new Person("Goran", "Ivkic", "../img/goranpic.jpg", "gogifswd10"),
    new Person("Kieran", "Mortimer", "../img/kieranpic.jpg", "SkavenNoises"),
    new Person("Rebecca", "Schedler", "../img/rebecca.jpg", "BeccaSche"),
    new Person("Onur", "Umar", "../img/onurpic.JPG", "onurumar")
];

for (let member of teamMembers){
    member.addCard();
}