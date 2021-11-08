class ResumeBiography {
    constructor(public myName: string, public myField: string, public myBio: string) {
    }

    logBio() {
        console.log(`Name: ${this.myName}`);
        console.log(`Field: ${this.myField}`);
        console.log(`Description: ${this.myBio}`);
    };
};

class ResumeInterests {
    constructor(public myInterests: string[]) {
    }

    displayInterests() {
        console.log(`My Interests: `)
        for (let i = 0; i < this.myInterests.length; i++) {
            console.log(`${this.myInterests[i]}`);
        }
    };
};

class ResumeExperience {
    constructor(public companyName: string, public jobTitle: string, public jobDescription: string,) {
    }

    displayPosition() {
        console.log(`* ${this.companyName} - ${this.jobTitle} - ${this.jobDescription}`);
    };
};

class ResumeSkills {
    constructor(public skillName: string, public isCool: boolean) {
    }

    displaySkills() {
        if (this.isCool === true) {
            console.log(`* BAM: ${this.skillName}`);
        } else {
            console.log(`* ${this.skillName}`);
        };
    };
};

const myBiography = new ResumeBiography("Elliott Parker", "Web Development", "I am an artist and a future web dev who enjoys creative pursuits in my free time.");
myBiography.logBio();

const myResInterests = new ResumeInterests(["sculpting", "music", "reading", "cooking", "playing video games"]);
myResInterests.displayInterests();

console.log("My Experience: ");
const myFirstResExperience = new ResumeExperience("Starbucks", "Barista", "making coffee, running the drive-thru, cleaning the store");
myFirstResExperience.displayPosition();

const mySecondResExperience = new ResumeExperience("Massage Envy", "Sales Associate", "registration, basic secretary work, selling memberships");
mySecondResExperience.displayPosition();

const myThirdResExperience = new ResumeExperience("Bruster's Ice Cream", "Ice Cream Cake Maker", "making ice cream cakes, filling the cake case, general cleaning");
myThirdResExperience.displayPosition();

console.log("My Skills: ");
const skillOne = new ResumeSkills("barista skills", true);
skillOne.displaySkills();

const skillTwo = new ResumeSkills("customer service", false);
skillTwo.displaySkills();

const skillThree = new ResumeSkills("ice cream cake decorating", true);
skillThree.displaySkills();

const skillFour = new ResumeSkills("basic design", false);
skillFour.displaySkills();