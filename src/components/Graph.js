import React from 'react'
import {
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend,
} from 'recharts';


function Graph({ firstLabel, secondLabel, data }) {
    return (
        <div className="content-wrap">
            <LineChart
                width={800}
                height={500}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line 
                    dataKey={firstLabel} 
                    stroke="#8884d8" 
                    activeDot={{ r: 8 }} 
                />
                <Line 
                    dataKey={secondLabel} 
                    stroke="#87d110" 
                    activeDot={{ r: 8 }} 
                />
            </LineChart>
        </div>
    )
}


export default Graph;