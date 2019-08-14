class Animal {
    constructor(ageInDays) {
        this.age = ageInDays
    }

    getValueInEuros() {
        return this.getWeightInKg() * this.price
    }
}

class Pig extends Animal {
    constructor(ageInDays) {
        super(ageInDays)
        this.weightMultiplier = 2.3
        this.price = 4 
    }

    getWeightInKg() {
        return Math.min(700, this.age * this.weightMultiplier) 
    }
}

class Cow extends Animal {
    constructor(ageInDays) {
        super(ageInDays)
        this.weightMultiplier = 1.5
        this.price = 5  
    }
    getWeightInKg() {
        return Math.min(1200, this.age * this.weightMultiplier) 
    }
}

class Horse extends Animal {
    constructor(ageInDays) {
        super(ageInDays)
        this.weightMultiplier = 1.7 
        this.price = 10
    }
    getWeightInKg() {
        return Math.min(1000, this.age * this.weightMultiplier) 
    }
}

module.exports = {Animal, Pig, Cow, Horse}