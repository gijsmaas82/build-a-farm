
class Farm {
    constructor(name) {
        this.name = name
        this.crops = []
        this.animals = []
    }

    addCrop(crop) {
        this.crops.push(crop)
      }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    calculateIncome() {
        const yieldCrops = this.crops.map(crop => crop.getYieldInEuros()).reduce((a, b) => a + b, 0) 
        const valueAnimals = this.animals.map(animal => animal.getValueInEuros()).reduce((a, b) => a + b, 0) 
        return yieldCrops + valueAnimals
    }      
  }
  module.exports.Farm = Farm