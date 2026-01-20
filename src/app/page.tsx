"use client"; // Necesario porque usaremos interactividad (useState)

import { useState } from "react";
import { Zap, DollarSign, TrendingUp } from "lucide-react"; // Iconos
import EnergyChart from "@/components/features/EnergyChart";
import { getEnergyStats, calculateMetrics } from "@/services/energyService";
import { Card } from "@/components/ui/Card";

export default function Home() {
  // Estado para controlar el filtro: 'today' o 'yesterday'
  const [period, setPeriod] = useState<'today' | 'yesterday'>('today');

  // Obtenemos los datos según el estado actual
  const data = getEnergyStats(period);
  const metrics = calculateMetrics(data);

  // Lógica visual: Si es 'today' azul, si es 'yesterday' naranja
  const activeColor = period === 'today' ? '#2563eb' : '#f97316';

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header con Filtros */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Análisis de Energía</h1>
            <p className="text-gray-500">Monitorización de consumo en tiempo real</p>
          </div>
          
          {/* Botones de Filtro (Wow Factor #2) */}
          <div className="bg-white p-1 rounded-lg border border-gray-200 shadow-sm flex">
            <button
              onClick={() => setPeriod('today')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                period === 'today' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Hoy
            </button>
            <button
              onClick={() => setPeriod('yesterday')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                period === 'yesterday' ? 'bg-orange-100 text-orange-700' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Ayer
            </button>
          </div>
        </header>

        {/* Tarjetas de Resumen (Wow Factor #1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-900">Consumo Total</p>
              <p className="text-2xl font-bold text-gray-500">{metrics.totalUsage} kWh</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-full text-green-600">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-900">Costo Estimado</p>
              <p className="text-2xl font-bold text-gray-500">${metrics.totalCost}</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-full text-purple-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-900">Pico Máximo</p>
              <p className="text-2xl font-bold text-gray-500">{metrics.peak} kWh</p>
            </div>
          </Card>
        </div>
        
        {/* Gráfico Principal */}
        <main>
          <EnergyChart data={data} color={activeColor} />
        </main>
      </div>
    </div>
  );
}