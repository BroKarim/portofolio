import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Chart from "./chart";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ChartData {
  month: string;
  value: number;
}

interface CardProps {
  title: string;
  logo: StaticImageData;
  description: string;
  profit?: number;
  link: string;
  chartData?: ChartData[];
}
const CardProject: React.FC<CardProps> = ({
  title,
  description,
  logo,
  chartData,
  profit,
  link,
}) => {
  return (
    <>
      <Card
        className={` rounded-2xl border border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-none ${chartData ? "card-content   " : "card-content  flex flex-1"}`}
      >
        <Link href={link}>
          <CardHeader className=" hover:bg-slate-400  hover:rounded-2xl w-full flex flex-1 items-start justify-center  ">
            <div className="text-sm  flex justify-between items-center w-full">
              <div className="flex gap-1 items-center justify-start">
                <Image
                  src={logo}
                  alt={`${title} logo`}
                  style={{ width: "30px", height: "30px" }}
                />
                <CardTitle className="font-medium">{title}</CardTitle>
              </div>
              {profit && <div className=" font-bold">${profit}</div>}
            </div>
            <p className="pb-2">{description}</p>
          </CardHeader>
        </Link>
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
