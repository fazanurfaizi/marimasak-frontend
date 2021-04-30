import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductTypes, getProducts, setSelectedProductType } from '../../actions/product'
import Post from '../../components/Product'

const Product = () => {    
    const dispatch = useDispatch()
    const productTypes = useSelector(state => state.product.productTypes)
    const selectedProductType = useSelector(state => state.product.selectedProductType)    
    const products = useSelector(state => state.product.products)

    useEffect(() => {
        dispatch(getProductTypes())                
    }, [dispatch])    

    const handleChangeProductType = (e) => {
        dispatch(setSelectedProductType(e.target.value))
    }

    return (
        <>
            <div className="col-lg-8">
                <div className="product-bar">
                    <div className="user-basket">
                        <Link to="products" className="aktif">
                            Products
                        </Link>                                        
                    </div>                    
                    <div className="filter">                       
                        <p>Category &nbsp;</p>
                        <select value={selectedProductType} onChange={(e) => handleChangeProductType(e)} > 
                            {productTypes.length > 0 && productTypes.map((item, index) => (
                                <option value={item?.id} key={index}>
                                    {item?.name}
                                </option>
                            ))}                            
                        </select>
                    </div>
                    <div className="filter">
                        <p>Sort By &nbsp;</p>
                        <select>
                            <option value="1">Price</option>
                            <option value="2">Newest</option>
                        </select>
                    </div>
                </div>
                <div className="product-container">
                    {products.map((item, index) => (
                        <Post 
                            key={index}
                            item={item}
                        />
                    ))}        
                </div>
            </div>
        </>
    )
}

export default Product
