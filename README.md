# [⚡ Energy Insight Dashboard](https://energy-dashboard-migueadm7.vercel.app)

> Un dashboard interactivo y moderno para la monitorización de consumo energético en tiempo real.

[![Vercel Deployment](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://energy-dashboard-migueadm7.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)

Esta aplicación permite visualizar patrones de consumo, costos estimados y picos de demanda mediante gráficos dinámicos y métricas clave, ayudando a los usuarios a tomar decisiones informadas sobre su gasto energético.

---

## 🚀 Características Principales

* **Visualización de Datos:** Gráficos de líneas interactivos utilizando `Recharts`.
* **Métricas en Tiempo Real:** Cálculo automático de consumo total, costo y picos máximos.
* **Filtros Dinámicos:** Selector de periodos (Hoy vs Ayer) con actualización de UI instantánea.
* **Diseño Responsive:** Adaptado para dispositivos móviles, tablets y escritorio con `Tailwind CSS`.
* **Arquitectura Limpia:** Separación de componentes de UI, lógica de negocio y servicios.

## 🛠️ Tech Stack

| Tecnología | Uso |
| :--- | :--- |
| **Next.js 14** | Framework de React para el frontend y routing. |
| **TypeScript** | Tipado estático para un código más robusto y mantenible. |
| **Tailwind CSS** | Estilizado moderno y utilitario. |
| **Recharts** | Librería de gráficos de alto rendimiento. |
| **Lucide React** | Set de iconos vectoriales consistentes. |

## 📸 Vista Previa
> <img width="1168" height="658" alt="image" src="https://github.com/user-attachments/assets/21b23726-ac05-42a0-9471-baf9e20697b2" />

## 📂 Estructura del Proyecto

```text
src/
 ├── app/             # Rutas y páginas principales
 ├── components/      
 │    ├── ui/         # Componentes atómicos (Cards, Buttons)
 │    ├── features/   # Componentes con lógica de negocio (Charts)
 │    └── layout/     # Componentes de estructura (Navbar)
 ├── services/        # Lógica de procesamiento de datos
 └── types/           # Definiciones de TypeScript
