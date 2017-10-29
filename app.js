class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(newNumberOfStudents) {
        if (!isNaN(newNumberOfStudents)) {
            this._numberOfStudents = newNumberOfStudents;
        } else {
            return `Invalid input: ${this._numberOfStudents} must be set to a Number.`;
        }
    }
    get level() {
        return this._level;
    }
    get name() {
        return this._name;
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students, typically between the ages of ${this._level}.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        let randomTeacherIndex= Math.floor((substituteTeachers.length -1) * Math.random());
        return substituteTeachers[randomTeacherIndex];
    }
}

class Primary extends School {
    constructor(name,numberOfStudents,pickupPolicy) {
        super(name);
        super('primary');
        super(numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class Middle extends School {
    constructor(name) {
        super(name);
        super('middle');
        super(numberOfStudents);
    }
}

class High extends School {
    constructor(name,numberOfStudents,sportsTeams) {
        super(name);
        super('high');
        super(numberOfStudents);
        this._sportsTeams = [];
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

const lorraineHansbury = new Primary('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new High('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);

