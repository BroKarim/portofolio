import Dumbbel from '../../public/assets/dumbble.png';
import Gumroad from '../../public/assets/Gumroad.png';
import Instagram from '../../public/assets/intagram.png';
import Nephtune from '../../public/assets/neph.png';
import NusaGuide from '../../public/assets/nusaGuide.png';
import TCC from '../../public/assets/tcc.png';
import Brokariim from '../../public/assets/kariim.png';
import FitBuddy from '../../public/assets/fit.png';
import { StaticImageData } from 'next/image';
import { getPostNames } from '@/lib/mdx';

interface ChartData {
  month: string;
  value: number;
}

interface CardData {
  title: string;
  description: string;
  profit?: number;
  logo: StaticImageData;
  link: string;
  chartData?: ChartData[];
}
export const cardData: CardData[] = [
  {
    title: 'Weekly project',
    logo: Instagram,
    description: 'Free weekly project you can copy',
    link: 'https://www.instagram.com/brokariim/',
    chartData: [
      { month: 'Sep', value: 0 },
      { month: 'Nov', value: 0 },
      { month: 'Jan', value: 0 },
      { month: 'Mar', value: 0 },
      { month: 'May', value: 0 },
      { month: 'Jul', value: 0 }
      // add more data as needed
    ]
  },
  {
    title: 'Digital Product',
    logo: Gumroad,
    description: 'All my product digital, its free',
    profit: 300,
    link: 'https://www.notion.so/brokarim/Note-c0447220f8eb4ba4a8807620d76e4662',
    chartData: [
      { month: 'Sep', value: 0 },
      { month: 'Nov', value: 0 },
      { month: 'Jan', value: 0 },
      { month: 'Mar', value: 0 },
      { month: 'May', value: 0 },
      { month: 'Jul', value: 0 }
      // add more data as needed
    ]
  },

  {
    title: 'Nephtune',
    logo: Nephtune,
    description:
      'System that connects donors who have excess items with recipients',
    link: '/projects/nephtune.mdx'
    // link: 'https://github.com/alfnsnff/Nepthune/tree/master',
  },

  {
    title: 'Training Code Center',
    logo: TCC,
    description: 'Competitive Programming Hub for Syiah Kuala Univ. ',

    link: '/projects/second_blog.mdx'
  },
  {
    title: 'Nusa Guide',
    logo: NusaGuide,
    description:
      'a web application developed by I GUSTI NGURAH RAI team for IL massive project',

    link: '/projects/nusa_guide.mdx'
  },
  {
    title: 'BroKarim-Project',
    logo: Brokariim,
    description: 'All my individual project, build in public every week ',

    link: 'https://github.com/orgs/BroKarim-Project/repositories'
  },
  {
    title: 'Fit Buddy',
    logo: FitBuddy,
    description:
      'a website designed to help users find suitable workout routines based on BMI calculations. ',

    link: '/projects/fit_buddy.mdx'
  }
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
