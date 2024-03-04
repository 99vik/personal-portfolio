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
  MusicApp1,
  MusicApp2,
  MusicApp3,
  OdinbookImg1,
  OdinbookImg2,
  OdinbookImg3,
  PdfChatter1,
  PdfChatter2,
  PdfChatter3,
  ShoppingAppImg1,
  ShoppingAppImg2,
  ShoppingAppImg3,
  ShoppingAppImg4,
  WaldoImg1,
  WaldoImg2,
  WaldoImg3,
} from '../ImagesExports';

const projects = [
  {
    name: 'PDF chatter',
    images: [PdfChatter1, PdfChatter2, PdfChatter3],
    description:
      'Next.js application where you upload PDF and chat about it with AI.',
    code: 'https://github.com/99vik/pdf-chatter',
    live: 'https://pdf-chatter-ivory.vercel.app/',
  },
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
    code: 'https://github.com/99vik/messaging-app',
    live: 'https://cheery-peony-2b91b4.netlify.app/',
  },
  {
    name: "Where's Waldo?",
    images: [WaldoImg1, WaldoImg2, WaldoImg3],
    description:
      "Where's Waldo browser game built with React frontend and Rails API",
    code: 'https://github.com/99vik/wheres-waldo',
  },
  {
    name: 'Odinbook',
    images: [OdinbookImg1, OdinbookImg2, OdinbookImg3],
    description: 'Simple social media app built with Ruby on Rails',
    code: 'https://github.com/99vik/odinbook',
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
    code: 'https://github.com/99vik/shopping-cart-app',
    live: 'https://gleeful-torte-b850af.netlify.app/',
  },
  {
    name: 'Chess',
    images: [ChessImg1, ChessImg2],
    description: 'CLI chess game built with Ruby',
    code: 'https://github.com/99vik/Chess',
    live: 'https://replit.com/@99vik/Chess',
  },
  {
    name: 'Battleship',
    images: [BattleshipImg1, BattleshipImg2, BattleshipImg3],
    description: 'Battleship game built with vanilla JavaScript',
    code: 'https://github.com/99vik/battleship',
    live: 'https://99vik.github.io/battleship/',
  },
  {
    name: 'Music App',
    images: [MusicApp1, MusicApp2, MusicApp3],
    description:
      'Application for discovering and searching music, built with React and Redux.',
    code: 'https://github.com/99vik/music-app',
    live: 'https://cheery-otter-4391cd.netlify.app/',
  },
];

export default projects;
