import React, { useEffect, useState,useMemo } from "react";
import Product from "./Product";
import Title from "./Title";
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from '../redux/actions'
import axios from 'axios';
import Pagination from './Pagination';

let PageSize = 10;

 const ProductList=()=>{
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);

  const currentProductsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      dispatch(setProducts(response.data));
    });
  }, [dispatch]);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="products" />

            <div className="row">
                   {currentProductsData.map(product => {
                    return <Product key={product.id} product={product} />;
                  })}
            </div>
            <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={products.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
          </div>
        </div>
      </React.Fragment>
    );
}
export default ProductList
