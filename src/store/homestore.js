import { create } from 'zustand'
import axios from 'axios';
import debounce from '../components/helper.js';

const homestore = create((set) => ({
    coins:[],
    trending:[],
    query:'',
    defcoins:[],
    defcoins2:[],
    setsearchquery:(e)=>{
        set({query:e.target.value})
        //every time we are searching searchcoins method is running
        homestore.getState().searchcoins()
    },
    searchcoins:debounce(async()=>{
        const {query,defcoins2}=homestore.getState()
        if(query.length>1){
        const res=await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
        // console.log(res.data);
        const defcoins=res.data.coins.map(coin=>{
            return {
                name:coin.name,
                image:coin.large,
                id:coin.id,
                market_cap_rank:coin.market_cap_rank,
                symbol:coin.symbol,
            }
        })

        set({defcoins});
        console.log(res);
    }
    else{
        set({defcoins:defcoins2});
    }
    },500),
  fetchCoins:async()=>{
    const [res,btcRes,defaultdata]=await Promise.all([
      await  axios.get('https://api.coingecko.com/api/v3/search/trending'),
      await  axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`),
      await  axios.get(`https://api.coingecko.com/api/v3/search?query=b`),

    ]);
    const btcPrice=btcRes.data.bitcoin.usd
     
    console.log(res,btcRes,defaultdata);
    const coins=res.data.coins.map(coin=>{
        return {
            name:coin.item.name,
            image:coin.item.large,
            id:coin.item.id,
            market_cap_rank:coin.item.market_cap_rank,
            symbol:coin.item.symbol,
            score:coin.item.score,
            pricebtc:(coin.item.price_btc).toFixed(10),
            //converting bitcoin to usd dollar by using current value
            priceusd:(coin.item.price_btc*btcPrice).toFixed(10),
        }
        
    })
    const defcoins=defaultdata.data.coins.map(coin=>{
        return {
            name:coin.name,
            image:coin.large,
            id:coin.id,
            market_cap_rank:coin.market_cap_rank,
            symbol:coin.symbol,
        }
        
    })
    // Sort the array based on market_cap_rank
    defcoins.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
    console.log(coins,defcoins);
    set({coins,trending:coins,defcoins,defcoins2:defcoins});
    // console.log(coins);
  }
}))

export default homestore;