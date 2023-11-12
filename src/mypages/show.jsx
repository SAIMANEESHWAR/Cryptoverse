import React from 'react'
import showstore from '../store/showstrore';
import Navbar from '../components/navbar';
import Aboutcrypto from '../components/aboutcrypto';
import { AppContext } from '../parentofparents.js';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
export default function Show() {
    const { themecolor, setthemecolor } = useContext(
        AppContext
      );
    const store = showstore();
    const params = useParams();
    console.log(params.id);
    const recallgraph = (days) => {
        store.redatafordays(days, params.id);
    }
    React.useEffect(() => {
        console.log("ki")
        console.log(params);
        store.fetchData(params.id);
    }, []);

    return (
        <div className={` ${themecolor ? "bg-dark-subtle" : ""}`}>
            <Navbar themecolor={themecolor}  setthemecolor={setthemecolor} />
            <br /><br /><br />

            <header >

                {store.datares && store.datares.data && (
                    <>
                        <div className='container-fluid mt-2'>
                            <div className='row'>
                                <div className='col-lg-3 col-md-4 col-sm-5    border-end border-dark'>
                                    <Aboutcrypto store={store} />
                                </div>
                                <div className='col-lg-9 col-md-8 mt-4 col-sm-5 '>
                                    <div>
                                        <div className='w-100'>
                                            
                                        <ResponsiveContainer width="100%" height={460}>
                                            <AreaChart
                                                data={store.graphData}
                                                margin={{
                                                    top: 10,
                                                    right: 30,
                                                    left: 0,
                                                    bottom: 0,
                                                }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="Date" />
                                                <YAxis />
                                                <Tooltip />
                                                <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                        </div>
                                        <div className='  row  w-100'>
                                            <div className='col-lg-3  col-md-6 col-sm-6 p-3 '><button className='btn btn-secondary w-100' onClick={() => recallgraph(1)} >Present-day</button></div>
                                            <div className='col-lg-3 col-md-6 col-sm-6 p-3 '><button className='btn btn-secondary w-100' onClick={() => recallgraph(7)} > 7 days</button></div>
                                            <div className='col-lg-3 col-md-6 col-sm-6 p-3 '><button className='btn btn-secondary w-100' onClick={() => recallgraph(30)} > 1 month</button></div>
                                            <div className='col-lg-3 col-md-6 col-sm-6 p-3 '><button className='btn btn-secondary w-100' onClick={() => recallgraph(90)}> 3 months</button></div>
                                        </div>
                                        <div className={`card mt-2 border-0  ${themecolor ? "bg-body-secondary" : "bg-body-tertiary"}`} >
                    <div className='card-body '>
                        <p className='h6'>{store.datares.data.description.en.split(".")[0]}</p>
                    </div>
                </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        {/* <img src={store.datares.data.image.large} alt="Coin Image" />
                        {store.datares.data.name} ({store.datares.data.symbol}) */}
                    </>
                )}
            </header>
                        <br/><br/>
                </div>

    )
}
