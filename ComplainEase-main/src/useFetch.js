import { useState , useEffect } from "react";

const useFetch = (url) => {
    const [data,setdata] = useState(
        // [
        // {title: 'Complain-1' , body: 'Washing machine not working' , student:'HMC', id: 1},
        // {title: 'Complain-2' , body: 'No Dustbin' , student:'M.tech', id: 2},
        // {title: 'Complain-3' , body: 'Clean my room' , student:'HMC', id: 3}]
        );
        const [ispending,setIspending]=useState(true);
        const [err,setErr]=useState(null);
        // const handledelete = (id) => {
    //     const newcomplains = complains.filter( (complains) => (complains.id!=id) );
    //     setComplains(newcomplains);
    // }

    
    useEffect(()=>{
        const fatch_controller = new AbortController();

        const {signal} = fatch_controller;

        setTimeout(()=>{
        fetch(url, {signal})
            .then(res  => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resources');
                }
                return res.json();
            })
            .then(data => {
                setdata(data);
                setIspending(false);
                setErr(null);
            })
            .catch(err => {
                if(err.name==='AbortError'){
                    console.log('fatch aborted');
                }else{
                    setIspending(false);
                    setErr(err.message);
                }
            })
        },500);
        return () => fatch_controller.abort();
    },[url]);

    return {data,ispending,err};
}

export default useFetch;