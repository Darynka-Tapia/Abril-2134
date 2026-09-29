import { PieChart } from '@mui/x-charts/PieChart';

const BasicPie = () => {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 60, label: 'Apuestas Ganadas', color: "#47f3bb",},
            { id: 1, value: 40, label: 'Apuestas Perdidas', color: "#f98400", },
          ]
        }
      ]}
      width={200}
      height={200}
      hideLegend
    />
  );
}
export default BasicPie;
