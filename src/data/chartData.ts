import Dumbbel from '../../public/assets/dumbble.png';
import { StaticImageData } from 'next/image';

interface ChartData {
  month: string;
  value: number;
}

interface CardData {
  title: string;
  description: string;
  profit: number;
  logo: StaticImageData;
  chartData?: ChartData[];
}
export const cardData: CardData[] = [
  {
    title: 'Shipfast',
    logo: Dumbbel,
    description: 'This is the description for card 1',
    profit: 300,
    chartData: [
      { month: 'Sep', value: 2400 },
      { month: 'Nov', value: 2400 },
      { month: 'Jan', value: 2400 },
      { month: 'Mar', value: 2400 },
      { month: 'May', value: 3800 },
      { month: 'Jul', value: 3800 },
      // add more data as needed
    ],
  },
  {
    title: 'Card 2',
    logo: Dumbbel,
    description: 'This is the description for card 2',
    profit: 300,
    chartData: [
      { month: 'Sep', value: 2400 },
      { month: 'Nov', value: 1398 },
      { month: 'Jan', value: 9800 },
      { month: 'Mar', value: 3908 },
      { month: 'May', value: 4800 },
      { month: 'Jul', value: 3800 },
      // add more data as needed
    ],
  },
  {
    title: 'Card 2',
    logo: Dumbbel,
    description: 'This is the description for card 2',
    profit: 300,
    chartData: [
      { month: 'Sep', value: 2400 },
      { month: 'Nov', value: 1398 },
      { month: 'Jan', value: 9800 },
      { month: 'Mar', value: 3908 },
      { month: 'May', value: 4800 },
      { month: 'Jul', value: 3800 },
      // add more data as needed
    ],
  },
  {
    title: 'Card 2',
    logo: Dumbbel,
    description: 'This is the description for card 2',
    profit: 300,
    chartData: [
      { month: 'Sep', value: 2400 },
      { month: 'Nov', value: 1398 },
      { month: 'Jan', value: 9800 },
      { month: 'Mar', value: 3908 },
      { month: 'May', value: 4800 },
      { month: 'Jul', value: 3800 },
      // add more data as needed
    ],
  },
  {
    title: 'Card 2',
    logo: Dumbbel,
    description: 'This is the description for card 2',
    profit: 300,
  },
  {
    title: 'Card 2',
    logo: Dumbbel,
    description: 'This is the description for card 2',
    profit: 300,
  },

  {
    title: 'Card 2',
    logo: Dumbbel,
    description: 'This is the description for card 2',
    profit: 300,
  },
  // add more card objects as needed
];
