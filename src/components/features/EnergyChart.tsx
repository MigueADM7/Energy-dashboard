"use client"; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { EnergyData } from '@/types/energy';
import { Card } from '@/components/ui/Card'; // Usamos tu nuevo componente UI

interface Props {
  data: EnergyData[];
  color: string;
}

// Ahora recibe datos por 'props', no los busca él mismo
export default function EnergyChart({ data, color }: Props) {
  return (
    <Card className="h-[400px] w-full">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Tendencia de Consumo</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
          <Tooltip 
            contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          {/* El color ahora es dinámico */}
          <Line 
            type="monotone" 
            dataKey="usage" 
            stroke={color} 
            strokeWidth={3} 
            dot={{ r: 4, fill: color }} 
            activeDot={{ r: 6 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}