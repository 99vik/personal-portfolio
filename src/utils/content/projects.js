import {
  BattleshipImg1,
  BattleshipImg2,
  BattleshipImg3,
  ChessImg1,
  ChessImg2,
  MessageAppImg1,
  MessageAppImg2,
  MessageAppImg3,
  MessageAppImg4,
  MessageAppImg5,
  MessageAppImg6,
  OdinbookImg1,
  OdinbookImg2,
  OdinbookImg3,
  ShoppingAppImg1,
  ShoppingAppImg2,
  ShoppingAppImg3,
  ShoppingAppImg4,
  TodoImg1,
  TodoImg2,
  TodoImg3,
  WaldoImg1,
  WaldoImg2,
  WaldoImg3,
  WeatherApp1,
  WeatherApp2,
  WeatherApp3,
} from '../ImagesExports';

const projects = [
  {
    name: 'Messaging App',
    images: [
      MessageAppImg1,
      MessageAppImg2,
      MessageAppImg3,
      MessageAppImg4,
      MessageAppImg5,
      MessageAppImg6,
    ],
    description: 'Chatting application built with React and Rails API',
  },
  {
    name: "Where's Waldo?",
    images: [WaldoImg1, WaldoImg2, WaldoImg3],
    description:
      "Where's Waldo browser game built with React frontend and Rails API",
  },
  {
    name: 'Odinbook',
    images: [OdinbookImg1, OdinbookImg2, OdinbookImg3],
    description: 'Simple social media app built with Ruby on Rails',
  },
  {
    name: 'Shopping Cart',
    images: [
      ShoppingAppImg1,
      ShoppingAppImg2,
      ShoppingAppImg3,
      ShoppingAppImg4,
    ],
    description:
      'Simple React e-commerce app, fetching items from fakeapistore.com',
  },
  {
    name: 'To-Do',
    images: [TodoImg1, TodoImg2, TodoImg3],
    description: 'To-do list application with vanilla JavaScript',
  },
  {
    name: 'Battleship',
    images: [BattleshipImg1, BattleshipImg2, BattleshipImg3],
    description: 'Battleship game built with vanilla JavaScript',
  },
  {
    name: 'Weather app',
    images: [WeatherApp1, WeatherApp2, WeatherApp3],
    description: 'Weather forecast application based on WeatherAPI',
  },
  {
    name: 'Chess',
    images: [ChessImg1, ChessImg2],
    description: 'CLI chess game built with Ruby',
  },
];

export default projects;
