import React, { useState, useEffect  } from 'react'
import styles from "./index.module.scss"
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants'
import axios from "axios"
const Details = () => {
    const [product, setProducts] = useState(null)
    const {id} = useParams()
    console.log(id);
    const getProduct = async () =>{
        const res = await axios(`${BASE_URL}products/${id}`)
        setProducts(res.data)
    }

    useEffect(() => {
      
        getProduct()
    
      
    }, [id])
    
  return (
    <>
    <div className={styles["box"]}>
     {product && <div className={styles["product-detail"]}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>}
    
        
    </div>
    </>
  )
}

export default Details