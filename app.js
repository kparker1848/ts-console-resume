var ResumeBiography = /** @class */ (function () {
    function ResumeBiography(myName, myField, myBio) {
        this.myName = myName;
        this.myField = myField;
        this.myBio = myBio;
    }
    ResumeBiography.prototype.logBio = function () {
        console.log("Name: " + this.myName);
        console.log("Field: " + this.myField);
        console.log("Description: " + this.myBio);
    };
    ;
    return ResumeBiography;
}());
;
var ResumeInterests = /** @class */ (function () {
    function ResumeInterests(myInterests) {
        this.myInterests = myInterests;
    }
    ResumeInterests.prototype.displayInterests = function () {
        console.log("My Interests: ");
        for (var i = 0; i < this.myInterests.length; i++) {
            console.log("" + this.myInterests[i]);
        }
    };
    ;
    return ResumeInterests;
}());
;
var ResumeExperience = /** @class */ (function () {
    function ResumeExperience(companyName, jobTitle, jobDescription) {
        this.companyName = companyName;
        this.jobTitle = jobTitle;
        this.jobDescription = jobDescription;
    }
    ResumeExperience.prototype.displayPosition = function () {
        console.log("* " + this.companyName + " - " + this.jobTitle + " - " + this.jobDescription);
    };
    ;
    return ResumeExperience;
}());
;
var ResumeSkills = /** @class */ (function () {
    function ResumeSkills(skillName, isCool) {
        this.skillName = skillName;
        this.isCool = isCool;
    }
    ResumeSkills.prototype.displaySkills = function () {
        if (this.isCool === true) {
            console.log("* BAM: " + this.skillName);
        }
        else {
            console.log("* " + this.skillName);
        }
        ;
    };
    ;
    return ResumeSkills;
}());
;
var myBiography = new ResumeBiography("Elliott Parker", "Web Development", "I am an artist and a future web dev who enjoys creative pursuits in my free time.");
myBiography.logBio();
var myResInterests = new ResumeInterests(["sculpting", "music", "reading", "cooking", "playing video games"]);
myResInterests.displayInterests();
console.log("My Experience: ");
var myFirstResExperience = new ResumeExperience("Starbucks", "Barista", "making coffee, running the drive-thru, cleaning the store");
myFirstResExperience.displayPosition();
var mySecondResExperience = new ResumeExperience("Massage Envy", "Sales Associate", "registration, basic secretary work, selling memberships");
mySecondResExperience.displayPosition();
var myThirdResExperience = new ResumeExperience("Bruster's Ice Cream", "Ice Cream Cake Maker", "making ice cream cakes, filling the cake case, general cleaning");
myThirdResExperience.displayPosition();
console.log("My Skills: ");
var skillOne = new ResumeSkills("barista skills", true);
skillOne.displaySkills();
var skillTwo = new ResumeSkills("customer service", false);
skillTwo.displaySkills();
var skillThree = new ResumeSkills("ice cream cake decorating", true);
skillThree.displaySkills();
var skillFour = new ResumeSkills("basic design", false);
skillFour.displaySkills();
