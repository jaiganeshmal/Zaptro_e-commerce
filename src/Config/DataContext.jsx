import axios from "axios";
import { useContext } from "react";
import { createContext, useState } from "react";

let DataContext = createContext();

let DataContextProvider = ({ children }) => {
    let [data, setData] = useState([])
    // console.log("DataContext", data);


    let fetchProducts = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.in/api/products?limit=150')
            // console.log(res);
            const productsData = res.data.products
            setData(productsData)

        } catch (error) {
            console.log(error);

        }
    }

     let uniqueCategories =(data, property)=>{
            let newVal = data.map((curElem)=>{
                return curElem[property]
            })
            newVal = ['ALL',...new Set(newVal)]
            return newVal
        }
        
        let allDataCategories = uniqueCategories(data, "category")
        let allDataBrand = uniqueCategories(data, "brand")

    let value = { fetchProducts, data, allDataCategories, allDataBrand };
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

let getData = ()=> useContext(DataContext);

export { DataContext, DataContextProvider, getData };