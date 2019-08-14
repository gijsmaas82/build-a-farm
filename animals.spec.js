const {Pig, Horse, Cow} = require('./animals')

test('Pig of 0 days calculates proper weight', () => {
  const pig = new Pig(0)
  expect(pig.getWeightInKg()).toBe(0)
})

test('Pig of 10 days calculates proper weight', () => {
  const pig = new Pig(10)
  expect(pig.getWeightInKg()).toBe(23)
})

test('Cow of 0 days calculates proper weight', () => {
  const cow = new Cow(0)
  expect(cow.getWeightInKg()).toBe(0)
})

test('Cow of 13 days calculates proper weight', () => {
  const cow = new Cow(13)
  expect(cow.getWeightInKg()).toBe(19.5)
})

test('Horse of 0 days calculates proper weight', () => {
  const horse = new Horse(0)
  expect(horse.getWeightInKg()).toBe(0)
})

test('Horse of 33 days calculates proper weight', () => {
  const horse = new Horse(33)
  expect(horse.getWeightInKg()).toBe(56.1)
})

test('Pig of 0 days calculates proper weight', () => {
    const pig = new Pig(0)
    expect(pig.getValueInEuros()).toBe(0)
})

test('Cow of 0 days calculates proper weight', () => {
    const cow = new Cow(0)
    expect(cow.getValueInEuros()).toBe(0)
})

test('Horse of 0 days calculates proper weight', () => {
    const horse = new Pig(0)
    expect(horse.getValueInEuros()).toBe(0)
})

test('Pig of 10 days calculates proper weight', () => {
    const pig = new Pig(10)
    expect(pig.getValueInEuros()).toBe(92)
})

test('Cow of 10 days calculates proper weight', () => {
    const cow = new Cow(10)
    expect(cow.getValueInEuros()).toBe(75)
})

test('Horse of 10 days calculates proper weight', () => {
    const horse = new Horse(10)
    expect(horse.getValueInEuros()).toBe(170)
})

test('Pig of 1000 days calculates proper weight', () => {
    const pig = new Pig(1000)
    expect(pig.getValueInEuros()).toBe(2800)
})

test('Cow of 1000 days calculates proper weight', () => {
    const cow = new Cow(1000)
    expect(cow.getValueInEuros()).toBe(6000)
})

test('Horse of 1000 days calculates proper weight', () => {
    const horse = new Horse(1000)
    expect(horse.getValueInEuros()).toBe(10000)
})