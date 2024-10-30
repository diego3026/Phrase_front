import { CircularProgress } from '@mui/material';
import { useApi } from '../../context/ApiContext';
import './Content.css'
import { useEffect } from 'react';

const Content = () => {
    const { data, loading, obtenerFrase } = useApi();

    useEffect(() => {
        obtenerFrase();
    },[])

    return (
        <div className="content">
            {loading ? (
                <CircularProgress size={"40px"} sx={{color:"var(--rosa_oscuro)"}}/>
            ):(
            <div className="content__frase">
                <div className="frase">{data.phrase}</div>
                <div className="autor">~{data.author}</div>
            </div >
            )}
            
        </div >
    )
}

export default Content;