import axios from 'axios'
import { useEffect, useState } from 'react'

const getData = async () => {
  try {
    const {data} = await axios.get("https://dummyjson.com/products")
    const products = data.products
    const dateAndTime = new Date().toISOString()
    const productsWithTime = {dateAndTime, products}
    localStorage.setItem("products", JSON.stringify(productsWithTime))
    return products 
  } catch (error) {
    console.log(error)
  }
}

const expiredTime = 5 * 60 * 1000 // 5 min converted into miliseconds

const Test = () => {
  const [isCashedData, setIsCashedData] = useState(false)
  const [cashedData, setCashedData] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const storedData = localStorage.getItem("products")

      if(storedData) {
        const {dateAndTime, products} = JSON.parse(storedData)
        const currentTime = new Date().getTime()
        const storedTime = new Date(dateAndTime).getTime()
        const timeDifference = currentTime - storedTime

        if(timeDifference > expiredTime){
          localStorage.removeItem("products")
          const newData = await getData()
          setIsCashedData(false)
          setCashedData(newData)
          console.log("data from api")
          console.log("newData: ",newData)
        }else{
          setIsCashedData(true)
          setCashedData(products)
          console.log("Data from local")
          console.log("products: ", products)
        }

      }else{
        const newData = await getData()
        setCashedData(newData)
        console.log("Fresh new Data: ", newData)
      }
    }

    getProducts()
    
  }, [])
  return (
    <>
    {cashedData.map((product) => <div key={product.id}>{product.title}</div>)}
    </>
  )
}

export default Test