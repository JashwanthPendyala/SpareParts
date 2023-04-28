import React from 'react'
import { Bar } from 'react-chartjs-2'

function ChartBar() {
  return (
    <div>
      <div className="App">
        <h1>Stock Inventory</h1>
        <div style={{ maxWidth: "1000px" }}>
          <Bar  
            data={{
              // Name of the variables on x-axies for each bar
              labels: ["1st bar", "2nd bar", "3rd bar", "4th bar", "5th bar", "6th bar"],
              datasets: [
                {
                  // Label for bars
                  label: "total count/value",
                  // Data or value of your each variable
                  data: [1552, 1319, 613, 1400, 2000, 1800],
                  // Color of each bar
                  backgroundColor: ["aqua", "green", "red", "yellow", "blue", "orange"],
                  // Border color of each bar
                  borderColor: ["aqua", "green", "red", "yellow", "blue", "orange"],
                  borderWidth: 0.5,
                },
              ],
            }}
            // Height of graph
            height={400}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      // The y-axis value will start from zero
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 15,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ChartBar 
