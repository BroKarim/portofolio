import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Chart from './chart';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ChartData {
  month: string;
  value: number;
}

interface CardProps {
  title: string;
  logo: StaticImageData;
  description: string;
  profit: number;
  chartData?: ChartData[];
}
const CardProject: React.FC<CardProps> = ({ title, description, logo, chartData, profit }) => {
  return (
    <>
      <Card className={` rounded-2xl ${chartData ? 'card-content  px-4 ' : 'card-content   h-24'}`}>
        <CardHeader className=" hover:bg-slate-400 hover:rounded-2xl items-start justify-center space-y-0 py-6">
          <div className="text-sm  flex justify-between items-center w-full">
            <div className="flex gap-1 items-center justify-start">
              <Image src={logo} alt={`${title} logo`} style={{ width: '30px', height: '30px' }} />
              <CardTitle className="font-medium">{title}</CardTitle>
            </div>
            <div className=" font-bold">${profit}</div>
          </div>
          <p>{description}</p>
        </CardHeader>
        {chartData && (
          <CardContent className="card-content px-4">
            <Chart data={chartData} />
          </CardContent>
        )}
      </Card>
    </>
  );
};

export default CardProject;
