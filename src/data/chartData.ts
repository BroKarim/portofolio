import Dumbbel from '../../public/assets/dumbble.png';
import Gumroad from '../../public/assets/Gumroad.png';
import Instagram from '../../public/assets/intagram.png';
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
    title: 'Weekly project',
    logo: Instagram,
    description: 'Free weekly project you can copy',
    profit: 0,
    chartData: [
      { month: 'Sep', value: 0 },
      { month: 'Nov', value: 0 },
      { month: 'Jan', value: 0 },
      { month: 'Mar', value: 0 },
      { month: 'May', value: 0 },
      { month: 'Jul', value: 0 },
      // add more data as needed
    ],
  },
  {
    title: 'Digital Product',
    logo: Gumroad,
    description: 'All my product digital, its free',
    profit: 300,
    chartData: [
      { month: 'Sep', value: 0 },
      { month: 'Nov', value: 0 },
      { month: 'Jan', value: 0 },
      { month: 'Mar', value: 0 },
      { month: 'May', value: 0 },
      { month: 'Jul', value: 0 },
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
  {
    title: 'Card 2',
    logo: Dumbbel,
    description: 'This is the description for card 2',
    profit: 300,
  },
  // add more card objects as needed
];

/*
PROJEK WITH CHART EXMAPLE : 
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

*/
