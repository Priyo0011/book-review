
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'Shadows',
    uv: 400,
    pv: 240,
    amt: 240,
  },
  {
    name: 'Night Circus',
    uv: 300,
    pv: 139,
    amt: 221,
  },
  {
    name: 'Educated',
    uv: 200,
    pv: 980,
    amt: 229,
  },
  {
    name: 'The Martian',
    uv: 278,
    pv: 390,
    amt: 200,
  },
  {
    name: 'Becoming',
    uv: 189,
    pv: 480,
    amt: 218,
  },
  {
    name: 'Gone Girl',
    uv: 239,
    pv: 380,
    amt: 250,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PageToRead() {
  return (
    <BarChart
      width={1220}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}
