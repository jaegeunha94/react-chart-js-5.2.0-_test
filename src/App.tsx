import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import {
  barChartOptionsInvestmentsPercentDark,
  barChartOptionsInvestmentsPercentLight,
} from './charts';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {},
      },
      series: [
        {
          name: 'Rendimento',
          data: [31.2, 67.2, 108, 345],
        },
      ],
    };
  }

  render() {
    return (
      <div className="mixed-chart max-w-sm h-auto border border-gray-800 rounded text-gray-200 text-center">
        <div className="grid">
          <h2>Objetivo do investimento: renda fixa anual</h2>
          <span>Rentabilidade Prefixada</span>

          <strong className="text-lg">108,00%</strong>
        </div>
        <Chart
          options={barChartOptionsInvestmentsPercentDark}
          series={this.state.series}
          type="bar"
          width="100%"
        />
      </div>
    );
  }
}

export default App;
