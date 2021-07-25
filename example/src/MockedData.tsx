import { Animal } from './Models'

export const Cats: Animal[] = [
  {
    name: 'Bella',
    age: 3,
    image: '/aux-router/cat1.png',
    owner: {
      name: 'John',
      age: 34
    },
    food: [{ name: 'fish' }]
  },
  {
    name: 'Kitty',
    age: 2,
    image: '/aux-router/cat2.png',
    owner: {
      name: 'Joanna',
      age: 19
    },
    food: [{ name: 'meat' }]
  },
  {
    name: 'Charlie',
    age: 5,
    image: '/aux-router/cat3.png',
    owner: {
      name: 'Adam',
      age: 58
    },
    food: [{ name: 'milk' }, { name: 'white cheese' }]
  },
  {
    name: 'Leo',
    age: 3,
    image: '/aux-router/cat4.png',
    owner: {
      name: 'Albert',
      age: 24
    },
    food: [{ name: 'meat' }]
  },
  {
    name: 'Milo',
    age: 1,
    image: '/aux-router/cat5.png',
    owner: {
      name: 'Grace',
      age: 62
    },
    food: [{ name: 'milk' }]
  }
]

export const Dogs: Animal[] = [
  {
    name: 'Bean',
    age: 5,
    image: '/aux-router/dog1.png',
    owner: {
      name: 'Kamil',
      age: 26
    },
    food: [{ name: 'meat' }]
  },
  {
    name: 'Bella',
    age: 2,
    image: '/aux-router/dog2.png',
    owner: {
      name: 'Selin',
      age: 32
    },
    food: [{ name: 'meat' }]
  },
  {
    name: 'Axel',
    age: 5,
    image: '/aux-router/dog3.png',
    owner: {
      name: 'Victor',
      age: 16
    },
    food: [{ name: 'meat' }]
  },
  {
    name: 'Odie',
    age: 3,
    image: '/aux-router/dog4.png',
    owner: {
      name: 'Liza',
      age: 52
    },
    food: [{ name: 'meat' }]
  },
  {
    name: 'Sheba',
    age: 1,
    image: '/aux-router/dog5.png',
    owner: {
      name: 'Leonardo',
      age: 34
    },
    food: [{ name: 'meat' }]
  }
]

export const Parrots: Animal[] = [
  {
    name: 'Dakota',
    age: 1,
    image: '/aux-router/parrot1.png'
  },
  {
    name: 'Jasper',
    age: 3,
    image: '/aux-router/parrot2.png'
  },
  {
    name: 'Ollie',
    age: 2,
    image: '/aux-router/parrot3.png'
  }
]

export const Owls: Animal[] = [
  {
    name: 'Max',
    age: 3,
    image: '/aux-router/owl1.png'
  },
  {
    name: 'Leo',
    age: 2,
    image: '/aux-router/owl2.png'
  },
  {
    name: 'Luck',
    age: 3,
    image: '/aux-router/owl3.png'
  }
]
