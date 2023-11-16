import React, { useState, useEffect } from 'react';
import { database } from './firebase'; // Import the exported `getFirestore` function as `database`
import {addDoc,updateDoc,collection,getDocs,deleteDoc,doc} from 'firebase/firestore';

export default function Myfirstdata() {
    const [fname,setfname]=useState('');
    const [lname,setlname]=useState('');
    const [val,setval]=useState([]);
    const [show,setshow]=useState(true);
    const [id,setid]=useState('');

    const value = collection(database,"mydatabase");

    useEffect(()=>{
        const getdata=async()=>{
            const dbval=await getDocs(value);
            console.log(dbval,"ki");
            setval(dbval.docs.map(doc=>({...doc.data(),id:doc.id})))
        }
        getdata();
        console.log(val);
    },[value])

    const handleedit=async(id,n1,n2)=>{
        setfname(n1);
        setlname(n2);
        setid(id);
        setshow(false);
    }

    const handleupdate=async()=>{
        const updateData=doc(database,"mydatabase",id)
        await updateDoc(updateData,{name1:fname,name2:lname});
        setshow(true);
        setfname("");
        setlname("");
    }
 
    const handledelete=async(id)=>{
        const deleteval=doc(database,"mydatabase",id)
        await deleteDoc(deleteval);
    }


    const handlecreate=async()=>{
        await addDoc(value,{name1:fname,name2:lname})
    }
  return (
    <div className='container'>
        <input value={fname} onChange={(e)=>setfname(e.target.value)}/>
        <input value={lname} onChange={(e)=>setlname(e.target.value)}/>
        {show ?  (<button onClick={handlecreate}> create</button>):(<button onClick={handleupdate}> update</button>)}
        
        

        {
            val.map(value=>{
                return(<div>
                    <h1>{value.name1}</h1>
                    <h1>{value.name2}</h1>
                    <button onClick={()=>handledelete(value.id)}>delete</button>
                    <button onClick={()=>handleedit(value.id,value.name1,value.name2)}>update</button>

                </div>)
            })
        }
    </div>
  )
}
