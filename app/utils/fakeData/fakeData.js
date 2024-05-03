export const petData = [
  {
    id: '1',
    name: 'Charlie cat',
    slugs: ['bunny', 'plush', 'toy'],
    imageUri:
      'https://img.freepik.com/free-photo/portrait-beautiful-purebred-pussycat-with-shorthair-orange-collar-neck-sitting-floor-reacting-camera-flash-scared-looking-light-indoor_8353-12551.jpg?t=st=1714713428~exp=1714717028~hmac=8e0ae3970226b90c46266ca31d8e6cd96c8c1d4b536bc4ce3e319ff82c1cf598&w=740',
    price: '20',
    rating: 4.5,
    stock: 100,
  },
  {
    id: '2',
    name: 'Golden Labrador Puppy',
    slugs: ['labrador', 'puppy', 'dog'],
    imageUri:
      'https://img.freepik.com/free-photo/shallow-focus-vertical-shot-cute-golden-retriever-puppy-sitting-grass-ground_181624-27259.jpg?t=st=1714713534~exp=1714717134~hmac=831206688fa96a69726fad56ff653b24879223ccdb7901fdeaf829d1c8c7462b&w=360',
    price: '$1200',
    rating: 4.8,
    stock: 10,
  },
  {
    id: '3',
    name: 'Siamese Cat Figurine',
    slugs: ['siamese', 'cat', 'figurine'],
    imageUri:
      'data:image/jpeg;base64,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',
    price: '30',
    rating: 4.2,
    stock: 50,
  },

  {
    id: '5',
    name: 'Hamster Cage',
    slugs: ['hamster', 'cage', 'pet'],
    imageUri:
      'https://i.natgeofe.com/n/bc0b53c1-e57e-4708-b592-f11e6ef855c0/european-hamsters-1_3x2.jpg?w=718&h=479',
    price: '40',
    rating: 4.3,
    stock: 30,
  },
  {
    id: '6',
    name: 'Pony Ride',
    slugs: ['pony', 'ride', 'experience'],
    imageUri:
      'https://as2.ftcdn.net/v2/jpg/00/59/11/01/1000_F_59110129_vowdNkCNMGEmQUqvp5kbNogQ6zWLukfg.jpg',
    price: '50',
    rating: 4.7,
    stock: 15,
  },
  {
    id: '7',
    name: 'Exotic Bird Feathers',
    slugs: ['exotic', 'bird', 'feathers'],
    imageUri:
      'https://media.istockphoto.com/id/1404010492/photo/two-red-and-yellow-parrots-perched-on-a-branch-facing-each-other-looking-happy-colorful-pets.jpg?s=1024x1024&w=is&k=20&c=3f32GhcRe8prNBd2FlMt9ZCnPV8GrNYGgEvXVkn3CT0=',
    price: '$15',
    rating: 4.0,
    stock: 200,
  },
  {
    id: '8',
    name: 'Turtle Terrarium',
    slugs: ['turtle', 'terrarium', 'reptile'],
    imageUri:
      'data:image/webp;base64,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',

    price: '100',
    rating: 4.4,
    stock: 25,
  },
  {
    id: '9',
    name: 'Rabbit Hutch',
    slugs: ['rabbit', 'hutch', 'pet'],
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/5/5b/Oryctolagus_cuniculus_Tasmania_2_%28cropped%29.jpg',
    price: '80',
    rating: 4.6,
    stock: 40,
  },
  {
    id: '10',
    name: 'Guinea Pig Food',
    slugs: ['guinea', 'pig', 'food'],
    imageUri:
      'https://upload.wikimedia.org/wikipedia/commons/3/30/George_the_amazing_guinea_pig.jpg',
    price: '10',
    rating: 4.1,
    stock: 100,
  },
]