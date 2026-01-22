import { EnergyData } from "@/types/energy";

// Datos simulados
const DATA_STORE = {
  today: [
    { time: '00:00', usage: 30, cost: 4.5 },
    { time: '04:00', usage: 20, cost: 3.0 },
    { time: '08:00', usage: 60, cost: 9.2 },
    { time: '12:00', usage: 45, cost: 7.1 },
    { time: '16:00', usage: 85, cost: 12.8 },
    { time: '20:00', usage: 95, cost: 14.5 },
    { time: '23:59', usage: 40, cost: 6.0 },
  ],
  yesterday: [
    { time: '00:00', usage: 45, cost: 5.5 },
    { time: '04:00', usage: 35, cost: 4.2 },
    { time: '08:00', usage: 75, cost: 11.0 },
    { time: '12:00', usage: 60, cost: 8.5 },
    { time: '16:00', usage: 70, cost: 10.2 },
    { time: '20:00', usage: 80, cost: 12.0 },
    { time: '23:59', usage: 55, cost: 7.5 },
  ]
};

// Función que acepta un filtro
export const getEnergyStats = (period: 'today' | 'yesterday' = 'today'): EnergyData[] => {
  return DATA_STORE[period];
};

// Función auxiliar para calcular totales
export const calculateMetrics = (data: EnergyData[]) => {
  const totalUsage = data.reduce((acc, curr) => acc + curr.usage, 0);
  const totalCost = data.reduce((acc, curr) => acc + curr.cost, 0);
  const peak = Math.max(...data.map(d => d.usage));
  
  return {
    totalUsage,
    totalCost: totalCost.toFixed(2),
    peak
  };
};