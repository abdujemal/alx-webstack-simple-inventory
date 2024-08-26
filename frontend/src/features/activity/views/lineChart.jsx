import React, { useEffect, useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { aggregateDataBy6Months, aggregateDataByDayForMonth, aggregateDataByDayForWeek, aggregateDataByMonthAndYear } from '../services/chartService';
import { BsArrowDown, BsArrowUp } from "react-icons/bs";


const LineChart = ({activities}) => {
    const [timeRange, setTimeRange] = useState('Year');

    // const data = {
    //     year: [
    //         {
    //             id: 'Running Year',
    //             color: '#56448a',
    //             data: [
    //                 { x: 'Jan', y: 500123.456 },
    //                 { x: 'Feb', y: 800789.012 },
    //                 { x: 'Mar', y: 70345.678 },
    //                 { x: 'Apr', y: 90456.789 },
    //                 { x: 'May', y: 85234.567 },
    //                 { x: 'Jun', y: 70567.890 },
    //                 { x: 'Jul', y: 1006789.012 },
    //                 { x: 'Aug', y: 80345.678 },
    //                 { x: 'Sep', y: 70456.789 },
    //                 { x: 'Oct', y: 85123.456 },
    //                 { x: 'Nov', y: 95234.567 },
    //                 { x: 'Dec', y: 75456.789 },
    //             ],
    //         },
    //         {
    //             id: 'Last Year',
    //             color: '#0a9b21',
    //             data: [
    //                 { x: 'Jan', y: 40234.567 },
    //                 { x: 'Feb', y: 60345.678 },
    //                 { x: 'Mar', y: 50456.789 },
    //                 { x: 'Apr', y: 70567.890 },
    //                 { x: 'May', y: 65678.901 },
    //                 { x: 'Jun', y: 60789.012 },
    //                 { x: 'Jul', y: 80890.123 },
    //                 { x: 'Aug', y: 75234.567 },
    //                 { x: 'Sep', y: 60345.678 },
    //                 { x: 'Oct', y: 65456.789 },
    //                 { x: 'Nov', y: 75567.890 },
    //                 { x: 'Dec', y: 65678.901 },
    //             ],
    //         },
    //     ],
    //     sixMonths: [
    //         {
    //             id: 'Running Semester',
    //             color: '#56448a',
    //             data: [
    //                 { x: 'Jul', y: 140 },
    //                 { x: 'Aug', y: 130 },
    //                 { x: 'Sep', y: 150 },
    //                 { x: 'Oct', y: 160 },
    //                 { x: 'Nov', y: 170 },
    //                 { x: 'Dec', y: 180 },
    //             ],
    //         },
    //         {
    //             id: 'Last Semester',
    //             color: '#0a9b21',
    //             data: [
    //                 { x: 'Jan', y: 60 },
    //                 { x: 'Feb', y: 70 },
    //                 { x: 'Mar', y: 90 },
    //                 { x: 'Apr', y: 110 },
    //                 { x: 'May', y: 130 },
    //                 { x: 'Jun', y: 120 },
    //             ],
    //         },
    //     ],
    //     oneMonth: [
    //         {
    //             id: 'Running Month',
    //             color: '#56448a',
    //             data: [
    //                 { x: 'Week 1', y: 140 },
    //                 { x: 'Week 2', y: 160 },
    //                 { x: 'Week 3', y: 150 },
    //                 { x: 'Week 4', y: 170 },
    //             ],
    //         },
    //         {
    //             id: 'Last Month',
    //             color: '#0a9b21',
    //             data: [
    //                 { x: 'Week 1', y: 130 },
    //                 { x: 'Week 2', y: 140 },
    //                 { x: 'Week 3', y: 120 },
    //                 { x: 'Week 4', y: 150 },
    //             ],
    //         },
    //     ],
    //     week: [
    //         {
    //             id: 'Running Week',
    //             color: '#56448a',
    //             data: [
    //                 { x: 'Mon', y: 140 },
    //                 { x: 'Tue', y: 150 },
    //                 { x: 'Wed', y: 130 },
    //                 { x: 'Thu', y: 160 },
    //                 { x: 'Fri', y: 170 },
    //                 { x: 'Sat', y: 160 },
    //                 { x: 'Sun', y: 180 },
    //             ],
    //         },
    //         {
    //             id: 'Last Week',
    //             color: '#0a9b21',
    //             data: [
    //                 { x: 'Mon', y: 130 },
    //                 { x: 'Tue', y: 120 },
    //                 { x: 'Wed', y: 140 },
    //                 { x: 'Thu', y: 150 },
    //                 { x: 'Fri', y: 130 },
    //                 { x: 'Sat', y: 140 },
    //                 { x: 'Sun', y: 150 },
    //             ],
    //         },
    //     ],
    // };
    const [data, setData] = useState({});
    const [percent, setPercent] = useState(0)

    useEffect(() => {
       
        const formattedData = formatData(activities);
        setData(formattedData);
          
    }, [activities]);   

    useEffect(()=>{
        const thisYearAgg = aggregateDataByMonthAndYear(activities).currentYearData;
        const lastYearAgg = aggregateDataByMonthAndYear(activities).lastYearData;
        const thisMonthAgg = aggregateDataByDayForMonth(activities).currentMonthData;
        const lastMonthAgg = aggregateDataByDayForMonth(activities).lastMonthData;
        const thisWeekAgg = aggregateDataByDayForWeek(activities).currentWeekData;
        const lastWeekAgg = aggregateDataByDayForWeek(activities).lastWeekData;

        if(timeRange == 'Year'){
            let thisTotal = 0;
            let lastTotal = 0;
            thisYearAgg.map((item)=>{
                thisTotal += item.totalValue;
            })
            lastYearAgg.map((item)=>{
                lastTotal += item.totalValue;
            })
            setPercent(Math.round((parseInt(thisTotal) / parseInt(lastTotal)) * 100))
        }else if(timeRange == "Month"){
            let thisTotal = 0;
            let lastTotal = 0;
            thisMonthAgg.map((item)=>{
                thisTotal += item.totalValue;
            })
            lastMonthAgg.map((item)=>{
                lastTotal += item.totalValue;
            })
            setPercent(Math.round((parseInt(thisTotal) / parseInt(lastTotal)) * 100))
        }else{
            let thisTotal = 0;
            let lastTotal = 0;
            thisWeekAgg.map((item)=>{
                thisTotal += item.totalValue;
            })
            lastWeekAgg.map((item)=>{
                lastTotal += item.totalValue;
            })
            setPercent(Math.round((parseInt(thisTotal) / parseInt(lastTotal)) * 100))
        }

    },[timeRange, activities])

    const formatData = (rawData) => {
       
        const thisYearAgg = aggregateDataByMonthAndYear(rawData).currentYearData;
        const lastYearAgg = aggregateDataByMonthAndYear(rawData).lastYearData;
        const this6MonthAgg = aggregateDataBy6Months(rawData).current6MonthsData;
        const last6MonthAgg = aggregateDataBy6Months(rawData).last6MonthsData;
        const thisMonthAgg = aggregateDataByDayForMonth(rawData).currentMonthData;
        const lastMonthAgg = aggregateDataByDayForMonth(rawData).lastMonthData;
        const thisWeekAgg = aggregateDataByDayForWeek(rawData).currentWeekData;
        const lastWeekAgg = aggregateDataByDayForWeek(rawData).lastWeekData;

        // console.log({thisWeekAgg,lastWeekAgg})

        // Format the data for the Nivo line chart
        const thisYearchartData = 
            {
                id: "Running Year",
                color: '#56448a',
                data: thisYearAgg.map((item) => ({
                    key: item.key,
                    x: item.month,
                    y: item.totalValue,
                })),
            };
        const lastYearchartData = 
            {
                id: "Last Year",
                color: '#0a9b21',
                data: lastYearAgg.map((item) => ({
                    key: item.key,
                    x: item.month,
                    y: item.totalValue,
                })),
            };
        const this6MonthchartData = 
            {
                id: "This 6 Month",
                color: '#56448a',
                data: this6MonthAgg.map((item) => ({
                    key: item.key,
                    x: item.month,
                    y: item.totalValue,
                })),
            };
        const last6MonthchartData = 
            {
                id: "Last 6 Month",
                color: '#0a9b21',
                data: last6MonthAgg.map((item) => ({
                    key: item.key,
                    x: item.month,
                    y: item.totalValue,
                })),
            };
        const thisMonthchartData = 
            {
                id: "Running Month",
                color: '#56448a',
                data: thisMonthAgg.map((item) => ({
                    key: item.key,
                    x: item.day,
                    y: item.totalValue,
                })),
            };
        const lastMonthchartData = 
            {
                id: "Last Month",
                color: '#0a9b21',
                data: lastMonthAgg.map((item) => ({
                    key: item.key,
                    x: item.day,
                    y: item.totalValue,
                })),
            };
        const thisWeekchartData = 
            {
                id: "Running Week",
                color: '#56448a',
                data: thisWeekAgg.map((item) => ({
                    key: item.key,
                    x: item.day,
                    y: item.totalValue,
                })),
            };
        const lastWeekchartData = 
            {
                id: "Last Week",
                color: '#0a9b21',
                data: lastWeekAgg.map((item) => ({
                    key: item.key,
                    x: item.day,
                    y: item.totalValue,
                })),
            };
        
        
            
        return {
            Year: [
                thisYearchartData,
                lastYearchartData,
            ],
            sixMonths:[
                this6MonthchartData,
                last6MonthchartData,
            ],
            Month:[
                thisMonthchartData,
                lastMonthchartData,
            ],
            Week:[
                thisWeekchartData,
                lastWeekchartData,
            ]
        };
    };


    const selectedData = data[timeRange];
    console.log(selectedData)
    
    // Determine y-axis min and max values
    const yMin = 0; // Set the minimum value to 0
    const yMax = selectedData && Math.max(...selectedData.flatMap(d => d.data.map(point => point.y)));

    // Define number of ticks
    const numTicks = 4;
    
    // Calculate y-axis tick values
    const yTickValues = Array.from({ length: numTicks }, (_, i) => 
        yMin + i * (yMax - yMin) / (numTicks - 1)
    );

    const shortenVal = (value) => {
        if(value == 0){
            return ""
        }
        if (value >= 1_000_000_000) {
            return `ETB ${(value / 1_000_000_000).toFixed(1) + 'B'}`;
        }
        if (value >= 1_000_000) {
            return `ETB ${(value / 1_000_000).toFixed(1) + 'M'}`;
        }
        if (value >= 1_000) {
            return `ETB ${(value / 1_000).toFixed(1) + 'k'}`; 
        }
        return `${value.toFixed(0)} $`;
    }

    const formatTick = (value) => {
        if(timeRange == "Month"){
            return value % 2 == 0 ? shortenVal(value) : ""
        }
        return shortenVal(value)       
    };

    const formatY = (value) => {
        if(timeRange == "Month"){
            return value % 4 == 0 ? value : ""
        }
        return value
    }

    return ( selectedData ?
        <div className='flex flex-col px-4 relative z-40' >
            <div className='flex mb-14'>
                <div className="flex-1 flex gap-2">
                    <h1 className='text-2xl'>Overall Sales</h1>
                    {
                        percent > 0 ?
                            <BsArrowUp color='green'/>:
                            percent < 0 ?
                                <BsArrowDown color='red'/>:<div/>
                    }
                    {
                        percent != 0 ?
                            <p className='text-2xl text-green-500'>{percent}%</p>: 
                            <p/>
                    }
                    <p className="text-2xl">vs last {timeRange}</p>
                </div>
                <div className="flex absolute top-0 right-0 self-end justify-center mb-4">
                    <button
                        className={` py-2 px-4 bg-primary rounded-l-full ${timeRange === 'Year' ? ' text-white underline' : 'text-gray-300'}`}
                        onClick={() => setTimeRange('Year')}
                    >
                        Year
                    </button>
                
                    <button
                        className={` py-2 px-4 bg-primary ${timeRange === 'Month' ? ' text-white underline' : 'text-gray-300'}`}
                        onClick={() => setTimeRange('Month')}
                    >
                        1 Month
                    </button>
                    <button
                        className={` py-2 px-4 bg-primary ${timeRange === 'Week' ? ' text-white underline' : 'text-gray-300'}`}
                        onClick={() => setTimeRange('Week')}
                    >
                        Week
                    </button>
                </div>
            </div>

            <div className='h-[300px]'>
                <ResponsiveLine
                    data={selectedData}
                    margin={{ top: 70, right: 20, bottom: 50, left: 110 }}
                    xScale={{ 
                        type: 'point',
                    }}
                    yScale={{
                        type: 'linear',
                        min: yMin,
                        max: 'auto',
                        stacked: false,
                        reverse: false,
                    
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        tickValues: selectedData[0].data.map(d => d.x),
                        format: formatY
                    }}
                    yFormat={formatTick}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 10,
                        
                        // tickPadding: 5,
                        tickRotation: 1,
                        tickValues: yTickValues,
                        
                        format: formatTick,
                        

                    }}
                    pointSize={0}
                    pointBorderWidth={2}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    enableSlices="x"
                    lineWidth={3}
                    pointHoverRadius={10}
                    curve="monotoneX"
                    colors={selectedData.map(d => d.color)}
                    legends={[
                        {
                            anchor: 'top-left',
                            direction: 'column',
                            justify: false,
                            translateX: 30,
                            translateY: -70,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 30,
                            itemOpacity: 0.75,
                            
                            symbolSize: 12,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    theme={{
                        legends:{
                            text: {
                                fontSize: 18,
                            },
                            ticks: {
                                text: {
                                    fontSize: 18,
                                }
                            },
                            title: {
                                text: {
                                    fontSize: 18,
                                }
                            }
                        },
                        grid: {
                            line: {
                                stroke: 'none',
                            },
                        },
                        axis: {
                            ticks: {
                                line: {
                                    stroke: 'none', // Disable axis lines
                                },
                                text: {
                                    fontSize: 15,
                                    fill: '#333', // Axis tick text color
                                },
                            },
                        },
                    }}
                    defs={[
                        {
                            id: 'gradient1',
                            type: 'linearGradient',
                            colors: [
                                { offset: 0, color: '#0a9b21', opacity: 1 },
                                { offset: 100, color: '#0a9b21', opacity: 0 },
                            ],
                        },
                        {
                            id: 'gradient2',
                            type: 'linearGradient',
                            colors: [
                                { offset: 0, color: '#457b9d', opacity: 1 },
                                { offset: 100, color: '#457b9d', opacity: 0 },
                            ],
                        },
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'Last Year',
                            },
                            id: 'gradient1',
                        },
                        {
                            match: {
                                id: 'Running Year',
                            },
                            id: 'gradient2',
                        },
                    ]}
                    tooltipFormat={formatTick}            
                />
        </div>
        </div>:<div/>
    );
};

export default LineChart;
