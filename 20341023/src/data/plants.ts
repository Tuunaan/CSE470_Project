export const plants = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800',
    careLevel: 'Moderate',
    wateringFrequency: 'Every 7-10 days',
    sunlight: 'Bright indirect light',
    temperature: '65-85°F',
    description: 'The Swiss Cheese Plant is famous for its quirky natural leaf holes and is a popular choice for indoor spaces.',
    problems: [
      {
        id: 'p1',
        issue: 'Yellow Leaves',
        solution: 'Reduce watering frequency and ensure proper drainage'
      },
      {
        id: 'p2',
        issue: 'No Leaf Holes',
        solution: 'Increase light exposure and ensure mature growth'
      }
    ],
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'Plant Lover',
        rating: 5,
        comment: 'Beautiful plant, grows really well!',
        date: '2024-03-15'
      }
    ]
  },
  {
    id: '2',
    name: 'Peace Lily',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=800',
    careLevel: 'Easy',
    wateringFrequency: 'When top soil is dry',
    sunlight: 'Low to bright indirect light',
    temperature: '65-80°F',
    description: 'Peace Lilies are beautiful indoor plants that filter air pollutants and are relatively easy to care for.',
    problems: [
      {
        id: 'p3',
        issue: 'Drooping Leaves',
        solution: 'Water immediately, peace lilies are dramatic when thirsty'
      }
    ],
    reviews: []
  }
];