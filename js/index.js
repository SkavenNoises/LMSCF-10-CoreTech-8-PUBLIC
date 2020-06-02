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
        <div>
            <img class="cardImg" src="${this.imgSrc}" alt="">
                    
            <p class="cardName">${this.firstName} ${this.lastName}</p>

            <a class="cardGitHub" href="https://github.com/${this.gitHubUName}">${this.gitHubUName}</a>

            <p class="cardReadMore">...</p>
        </div>` 

        console.log(`${this.firstName} card added`);
    }
}

let teamMembers = [
    new Person("Goran", "Ivkic", "#", "gogifswd10"),
    new Person("Kieran", "Mortimer", "#", "SkavenNoises"),
    new Person("Rebecca", "Schedler", "#", "BeccaSche"),
    new Person("Onur", "Umar", "#", "onurumar")
];

for (let member of teamMembers){
    member.addCard();
}