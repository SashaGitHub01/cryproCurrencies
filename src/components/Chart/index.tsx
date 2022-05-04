import React from 'react'
import './Chart.scss'
import { Line } from 'react-chartjs-2'
import { IHistory } from '../../API/types/coinranking'
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Filler,
   Legend,
} from 'chart.js';
import { formatTimestamp } from '../../utils/formatTimestamp';

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Filler,
   Title,
   Tooltip,
   Legend
);

ChartJS.defaults.color = '#d6d6d6'

interface ChartProps {
   history: IHistory[],
}

const Chart: React.FC<ChartProps> = ({ history }) => {
   const options = {
      plugins: {
         title: {
            display: true,
            text: "Cryptocurrency prices"
         },
         legend: {
            display: false
         },
      },
   }
   const data = {
      labels: history.map(h => formatTimestamp(h?.timestamp)),
      datasets: [
         {
            label: 'Price in USD',
            data: history.map(h => h.price),
            borderColor: '#f5f5f5',
            backgroundColor: '#00ffea6f',
            fill: true,
            borderWidth: 2,
         }
      ]
   }

   return (
      <div className="chart">
         <Line
            style={{ color: '#fff' }}
            options={options}
            data={data}
         />
      </div>
   )
}

export default Chart