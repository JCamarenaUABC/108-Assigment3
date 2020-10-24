import React, { Component } from 'react';
import ProductServices from '../../services/productServices';
import Product from '../product/product';

class Catalog extends Component {
    state = { 
        products: []
     };

    /*constructor(){
       super();
       console.log("I'm the constructor"); 
       //getdata
    }*/

    //REACT USE A VIRTUAL DOM INVESTIGATION HW(REACT LIFE CYCLE)

    render() { 
        return (
        <div className="catalog-page">
            <div>
                {this.state.products.map((p) => <Product data={p} key={p.id}></Product>)}
            </div>
        </div>  
        );
    }

    componentDidMount(){
        //console.log("Load data here");
        let service = new ProductServices();
        const data = service.getProducts();

        this.setState({products: data});
        //console.log(service.getProducts());




    }

}
 
export default Catalog;