import { ApexOptions } from 'apexcharts';

type ApexGeneric = ApexOptions & any;

export const barChartOptionsInvestmentsPercentDark: ApexGeneric = {
  chart: {
    height: '600px',
    background: 'transparent',
    toolbar: {
      show: false,
    },
  },
  theme: {
    mode: 'dark',
  },
  tooltip: {
    style: {
      fontSize: '13px',
    },
    onDatasetHover: {
      style: {
        fontSize: '13px',
      },
    },
  },
  xaxis: {
    categories: ['Mês 6', 'Mês 12', 'Mês 24', 'Mês 36'],
    show: false,
    labels: {
      show: true,
      style: {
        colors: '#9ca3af', // mês em baixo
        fontSize: '12px',
        fontWeight: '500',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    seriesName: 'Mês',
    labels: {
      show: false,
      style: {
        colors: '#71717a', // porcentagem ao lado
        fontSize: '14px',
      },
      formatter: (value: number) => {
        return `${Number(value).toFixed(0)}%`;
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 0,
    borderColor: 'rgba(0, 175, 239, 0.05)', // linha horizontal
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  // Cor da linha vertical
  fill: {
    type: 'solid',
    colors: ['#1d4ed8'],
    opacity: 1,
  },
  // Porcentagem na linha vertical
  dataLabels: {
    enabled: true,
    textAnchor: 'middle',
    offsetY: -25,
    formatter: function (val: any, opts: any) {
      return `${Number(val).toFixed(2)}%`;
    },
    style: {
      background: 'red',
      fontSize: '15px',
      fontWeight: 'bold',
      colors: ['#fff'],
    },
  },
  // Formato da linha
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: '30px',
      // Linha até 120%
      colors: {
        backgroundBarColors: ['rgba(0, 175, 239, 0.3)'],
        backgroundBarRadius: 5,
      },
      //Porcentagem ao topo
      dataLabels: {
        position: 'top',
      },
    },
  },
};

export const barChartOptionsInvestmentsPercentLight: ApexGeneric = {
  ...barChartOptionsInvestmentsPercentDark,
  xaxis: {
    ...barChartOptionsInvestmentsPercentDark.xaxis,
    labels: {
      ...barChartOptionsInvestmentsPercentDark.xaxis.labels,
      style: {
        colors: '#6b7280',
        fontSize: '12px',
        fontWeight: '400',
      },
    },
  },
  yaxis: {
    ...barChartOptionsInvestmentsPercentDark.yaxis,
    labels: {
      ...barChartOptionsInvestmentsPercentDark.yaxis.labels,
      style: {
        colors: '#6b7280',
        fontSize: '11px',
      },
    },
  },
  grid: {
    ...barChartOptionsInvestmentsPercentDark.grid,
    borderColor: '#f3f4f6',
  },
  dataLabels: {
    ...barChartOptionsInvestmentsPercentDark.dataLabels,
    style: {
      fontSize: '15px',
      fontWeight: 'bold',
      colors: ['var(--color-secondary'],
    },
  },
};

export const barChartOptionsInvestmentsMonthlyDark: ApexGeneric = {
  chart: {
    height: '600px',
    background: 'transparent',
    toolbar: {
      show: true,
    },
  },
  theme: {
    mode: 'dark',
  },
  tooltip: {
    style: {
      fontSize: '28px',
    },
    onDatasetHover: {
      style: {
        fontSize: '12px',
        fontFamily: undefined,
      },
    },
  },
  xaxis: {
    categories: ['Mês 6', 'Mês 12', 'Mês 24', 'Mês 36'],
    show: false,
    color: 'rgba(0, 175, 239, 0.5)',
    labels: {
      show: true,
      style: {
        colors: '#fff',
        fontSize: '15px',
        fontWeight: '400',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: 'rgba(0, 175, 239, 0.2)',
    seriesName: 'Mês',
    labels: {
      show: true,
      style: {
        colors: 'rgba(0, 175, 239, 0.2)',
        fontSize: '14px',
      },
      formatter: (value: number) => {
        return `${Number(value).toFixed(0)}%`;
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 0,
    borderColor: 'rgba(0, 175, 239, 0.2)',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: 'solid',
    colors: ['var(--color-primary)'],
  },
  dataLabels: {
    enabled: true,
    textAnchor: 'middle',
    offsetY: -60,
    formatter: function (val: any, opts: any) {
      return `${Number(val).toFixed(2)}%`;
    },
    style: {
      fontSize: '15px',
      fontWeight: 'bold',
      colors: ['#fff'],
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: '20px',
      colors: {
        backgroundBarColors: ['rgba(0, 175, 239, 0.3)'],
        backgroundBarRadius: 5,
      },
      dataLabels: {
        position: 'top',
      },
    },
  },
};

export const barChartOptionsInvestmentsMonthlyLight: ApexGeneric = {
  ...barChartOptionsInvestmentsMonthlyDark,
  xaxis: {
    ...barChartOptionsInvestmentsMonthlyDark.xaxis,
    labels: {
      ...barChartOptionsInvestmentsMonthlyDark.xaxis.labels,
      style: {
        colors: 'var(--color-secondary)',
        fontSize: '15px',
        fontWeight: '400',
      },
    },
  },
  yaxis: {
    ...barChartOptionsInvestmentsMonthlyDark.yaxis,
    labels: {
      ...barChartOptionsInvestmentsMonthlyDark.yaxis.labels,
      style: {
        colors: 'black',
        fontSize: '14px',
      },
    },
  },
  grid: {
    ...barChartOptionsInvestmentsMonthlyDark.grid,
    borderColor: 'rgba(255, 51, 31, 0.3)',
  },
  dataLabels: {
    ...barChartOptionsInvestmentsMonthlyDark.dataLabels,
    style: {
      fontSize: '15px',
      fontWeight: 'bold',
      colors: ['var(--color-secondary'],
    },
  },
};

export const barChartOptionsInvestmentsMiniDark: ApexGeneric = {
  chart: {
    background: 'transparent',
    toolbar: {
      show: true,
    },
  },
  theme: {
    mode: 'dark',
  },
  tooltip: {
    style: {
      fontSize: '18px',
    },
    onDatasetHover: {
      style: {
        fontSize: '15px',
      },
    },
  },
  xaxis: {
    categories: ['Mês 12', 'Mês 24', 'Mês 36'],
    show: false,
    color: 'rgba(0, 175, 239, 0.2)',
    labels: {
      show: true,
      style: {
        colors: '#fff',
        fontSize: '13px',
        fontWeight: '400',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: 'rgba(0, 175, 239, 0.2)',
    seriesName: 'Mês',
    labels: {
      show: true,
      style: {
        colors: 'rgba(0, 175, 239, 0.2)',
        fontSize: '14px',
      },
      formatter: (value: number) => {
        return `${Number(value).toFixed(0)}%`;
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 0,
    borderColor: 'rgba(0, 175, 239, 0.2)',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: 'solid',
    colors: ['var(--color-primary)'],
  },
  dataLabels: {
    enabled: true,
    textAnchor: 'middle',
    offsetY: -32,
    formatter: function (val: any, opts: any) {
      return `${Number(val).toFixed(2)}%`;
    },
    style: {
      fontSize: '13px',

      fontWeight: 'bold',
      colors: ['#fff'],
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: '20px',
      colors: {
        backgroundBarColors: ['rgba(0, 175, 239, 0.3)'],
        backgroundBarRadius: 12,
      },
      dataLabels: {
        position: 'top',
      },
    },
  },
};

export const barChartOptionsInvestmentsMiniLight: ApexGeneric = {
  ...barChartOptionsInvestmentsMiniDark,
  xaxis: {
    ...barChartOptionsInvestmentsMiniDark.xaxis,
    labels: {
      ...barChartOptionsInvestmentsMiniDark.xaxis.labels,
      style: {
        colors: 'var(--color-secondary)',
        fontSize: '13px',
        fontWeight: '400',
      },
    },
  },
  yaxis: {
    ...barChartOptionsInvestmentsMiniDark.yaxis,
    labels: {
      ...barChartOptionsInvestmentsMiniDark.yaxis.labels,
      style: {
        colors: 'black',
        fontSize: '13px',
      },
    },
  },
  grid: {
    ...barChartOptionsInvestmentsMiniDark.grid,
    borderColor: 'rgba(255, 51, 31, 0.3)',
  },
  dataLabels: {
    ...barChartOptionsInvestmentsMiniDark.dataLabels,
    style: {
      fontSize: '13px',
      fontWeight: 'bold',
      colors: ['var(--color-secondary'],
    },
  },
};
