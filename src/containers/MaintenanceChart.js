import React from "react";
import {Line} from "react-chartjs-2";

const MaintenanceChart = ({chartLabels, chartData}) => {

    const maintenanceData = {
        labels: chartLabels,
        datasets: [{
            label: "Maintenance Collection",
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: chartData,
        }]
    };

    const chartOptions = {
        legend: {
            display: true,
            position: 'top',
            labels: {
                boxWidth: 80,
                fontColor: 'black'
            }
        }
    };

    return (
        <div>
            <Line
                data={maintenanceData}
                options={chartOptions}
            />
        </div>
    )
};

export default MaintenanceChart;