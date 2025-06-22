'use client'
import React from "react";
import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaChart = () => {
    const options = {
        chart: {
            height: "100%",
            maxWidth: "100%",
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#1C64F2",
                gradientToColors: ["#1C64F2"],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 6,
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: 0,
            },
        },
        xaxis: {
            categories: ['03 มิถุนายน', '08 มิถุนายน', '10 มิถุนายน', '14 มิถุนายน', '19 มิถุนายน', '24 มิถุนายน', '29 มิถุนายน'],
            labels: {
                show: false,
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
        },
    };

    const series = [
        {
            name: "รายได้",
            data: [1000, 500, 600, 400, 800, 1000, 600],
            color: "#1A56DB",
        },
    ];

    return (
        <div className="w-full">
            <div className="bg-zinc-400 rounded-2xl p-4 mx-2">
                    <div className="text-4xl text-white">4600฿</div>
                <div className="pl-4">รายได้เดือนนี้</div>
                <ApexChart options={options} series={series} type="area" height="40%" />
                
                <div className="place-items-end">
                    <div className="bg-white rounded-2xl w-20 p-2 mt-2 text-black text-center">เพิ่มเติม</div>
                </div>

            </div>
        </div>
    );
};

export default AreaChart;
