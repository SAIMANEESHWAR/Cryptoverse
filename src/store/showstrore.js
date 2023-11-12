import { create } from 'zustand'
import axios from 'axios';

const showstore = create((set) => ({
    graphData:[],
    redatafordays:async(days,id)=>{
        const res=await axios.get(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
        )
        const graphData=res.data.prices.map((price)=>{
            const [timestamp,p]=price;
            const date=new Date(timestamp).toLocaleDateString("en-us");
            return {
                Date:date,
                Price:p,
            }
        });
      set({graphData})  
    },
 fetchData:async(id)=>{
    console.log(id)
    const [graphRes,datares]=await Promise.all([
       await axios.get(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`
        ),
       await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`)
    ]);
    // console.log("hey",id);
    
    const graphData=graphRes.data.prices.map((price)=>{
        const [timestamp,p]=price;
        const date=new Date(timestamp).toLocaleDateString("en-us");
        return {
            Date:date,
            Price:p,
        }
    });
    set({graphData,datares});
    console.log(datares); 
 },
}))

export default showstore;