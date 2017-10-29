class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(value) {
        this._numberOfStudents = value;
    }
    get level() {
        return this._level;
    }
    get name() {
        return this._name;
    }

    quickFacts() {
    }

    static pickSubstituteTeacher() {

    }
}

class Primary extends School {
    constructor(name,pickupPolicy) {
        super(name);
        super(level);
        super(numberofStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class Middle extends School {
    constructor(name) {
        super(name);
        super(level);
        super(numberofStudents);
    }
}

class High extends School {
    constructor(name) {
        super(name);
        super(level);
        super(numberofStudents);
        this._sportsTeams = [];
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}
