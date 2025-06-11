'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieChart = () => {
  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['รายรับ', 'รายจ่าย', 'กำไร'],
    legend: {
      position: 'bottom',
    },
    colors: ['#34D399', '#F87171', '#60A5FA'], // เขียว แดง น้ำเงิน
    dataLabels: {
      enabled: false,
      formatter: function (val: number) {
        return val.toFixed(1) + '%';
      },
    },
  };

  const series = [4600, 2000, 1600]; // ตัวอย่างข้อมูล: รายรับ 6000, รายจ่าย 3000, กำไร 1500

  return (
    <div>
      <ApexChart options={options} series={series} type="pie" width="100%" />
    </div>
  );
};

export default PieChart;
