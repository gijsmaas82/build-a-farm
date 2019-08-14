const {Farm} = require('./index')
const {Wheat, Sugarcane} = require('./crops')
const {Animal, Pig, Cow, Horse} = require('./animals')


    const farm = new Farm('Boerderij Amstelveenseweg')
    farm.addCrop(new Wheat(50))
    farm.addCrop(new Sugarcane(50))
    farm.addAnimal(new Pig(100))
    farm.addAnimal(new Cow(100))
    farm.addAnimal(new Horse(100))
    
    const borderWidth = farm.name.length + 2 
    const border = '-'
    console.log(border.repeat(borderWidth) + '\n' 
    + border + farm.name + border + '\n'
    + 'No. of crops: ' + farm.crops.length + '\n'
    + 'No. of animals: ' + farm.animals.length + '\n'
    + 'Total income: ' + farm.calculateIncome() + '\n'
    + border.repeat(borderWidth))
    