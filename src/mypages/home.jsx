import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../parentofparents.js';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import homestore from '../store/homestore.js';
import Navbar from '../components/navbar.jsx';
import DataTable from 'react-data-table-component';
import Firstpic from '../components/firstpic.jsx';
import Trending from '../components/trending.jsx';
import Footer from '../components/footer.jsx';
import {db,auth} from '../firebase/firebase.js';
import { doc, collection, getDoc } from 'firebase/firestore';



export default function Home() {
    const { themecolor, setthemecolor } = useContext(
        AppContext
      );
      const navigate = useNavigate();

    // Custom styles for DataTable
    const customStyles = {
        
        headRow: {
            style: {
                backgroundColor: 'grey',
                color:'#fff',
            },
        },
        headCells: {
            style: {
                fontWeight: 'normal',
                fontSize: '18px', // Increase font size for header cells
            },
        },
        rows: {
            style: {
                backgroundColor: ` ${themecolor ? " rgba(0,0,0,0.01)" : "white"}`,
                fontSize: '17px', // Increase font size for body cells
                marginBottom: '10px',
                 // Add more padding between rows
            },
        },
        table: {
            style: {
              backgroundColor: `${themecolor ? "rgba(0,0,0,0.05)" : "white"}`,
            },
          },
    };
    //for data tables
    const columns = [
        {
            name: "Image",
            selector: row => <Link className='link-underline link-dark link-underline-opacity-0' to={`/${row.id}`}><img className='rounded img-fluid w-25' src={`${row.image}`}></img></Link>,
            sortable: true
        },
        {
            name: "Name",
            selector: row => <Link className='link-underline link-dark link-underline-opacity-0' to={`/${row.id}`}>{row.name}</Link>,
            sortable: true
        },
        {
            name: "Symbol",
            selector: row =><Link className='link-underline link-dark link-underline-opacity-0' to={`/${row.id}`}> <span class="badge text-bg-warning">{row.symbol}</span></Link>,
            sortable: true
        },
        {
            name: "Market_cap_rank",
            selector: row => <hp className='ms-3'>{row.market_cap_rank }</hp>,
            sortable: true
        },
        {
            name: "",
            selector: row => <Link className='link-underline link-dark link-underline-opacity-0' to={`/${row.id}`}><span class="badge text-bg-success">view</span></Link>,
            sortable: true
        }
    ];

    var myhomestrore = homestore();
    useEffect(()=>{
        console.log(sessionStorage.getItem('verifieduser')==='false');
        if(
            sessionStorage.getItem('verifieduser')==='false'
        ){
            console.log("po");
            navigate('/');
        }

    },[])
    useEffect(() => {
        console.log(myhomestrore.fetchCoins());
        
    }, []);

    return (
        <div className={` ${themecolor ? "bg-dark-subtle" : ""}`}>

            {  myhomestrore && myhomestrore.coins && myhomestrore.coins.length > 0 && (
                <>
                    <Navbar themecolor={themecolor}  setthemecolor={setthemecolor}   />

                    <Firstpic themecolor={themecolor}/>
                    <Trending themecolor={themecolor} trendingdata={myhomestrore.coins} />
                    
                    <div>
                    <div class="p-5 text-center  rounded-3">
                    <h1 class="text-body-emphasis">CURRENCY BY MARKET CAP</h1>

                </div>
                        <div className='container mt-2'>
                            <div class="input-group input-group-lg mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-lg"><i class="fa-solid fa-magnifying-glass"></i></span>
                                <input type="text" value={myhomestrore.query} onChange={myhomestrore.setsearchquery} className={` ${themecolor ? "bg-body-tertiary" : ""} form-control`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                            </div>
                            
                            <DataTable  data={myhomestrore.defcoins} columns={columns} fixedHeader pagination
                                customStyles={customStyles} // Apply custom styles
                                
                                highlightOnHover>

                            </DataTable>
                        </div>

                <br/><br/><br/>
                    </div>
                    
                    <Footer/>
                    </>

                    
            )

            }


        </div>

    )
}
