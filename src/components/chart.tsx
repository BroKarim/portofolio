import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

interface ChartData {
  month: string;
  value: number;
}

interface ChartProps {
  data: ChartData[];
}

const Chart: React.FC<ChartProps> = ({ data }) => (
  <ResponsiveContainer className="  p-0" width="100%" height={100}>
    <AreaChart
      width={100}
      height={80}
      data={data}
      margin={{ top: 10, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis
        dataKey="month"
        axisLine={false}
        tickLine={false}
        style={{ fontSize: ' 10px' }}
        minTickGap={0}
      />
      <YAxis
        type="number"
        axisLine={false}
        tickLine={false}
        width={30}
        padding={{ top: 50, bottom: 50 }}
        style={{ fontSize: ' 10px' }}
        domain={[200, 400]}
        ticks={[200, 400]}
      />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default Chart;

/*
 <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>



*/
