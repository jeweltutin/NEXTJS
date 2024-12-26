"use client";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList,
    ResponsiveContainer,
} from 'recharts';
import { chartData } from '../../data';

function Chart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey='name' />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar yAxisId="left" dataKey='total' fill='#8884d8' />
                <Bar yAxisId="right" dataKey="total1" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Chart;
