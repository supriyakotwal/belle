import React from 'react';
import {connect} from 'react-redux';
import {productList} from './actions/products';
class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products : null
        }
    }
    componentDidMount(){
        this.props.dispatch(productList());
    }
    
    render() {
        let productList = this.props.productList, productData;
        if(productList) {
        productList.map((data) => {
            productData = data.product;
        });
    }
        return(
            <React.Fragment>

                <div className="row" style={{marginLeft: '15px'}}>
                    {
                    productData && productData.map((data) =>
                        <div key={data.id} className="col-sm-6" style={{marginBottom: '15px'}}>
                            <div className="card" style={{width: '10rem'}}>
                                <img src={data.imgUrl} className="card-img-top" alt="..." style={{height: '5rem'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <p className="card-text">{data.category}</p>
                                    <a href="/" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    )
                    }                    
                </div>
            </React.Fragment>
        );
    }
}


function mapStateToProps(state){
    return{
        productList:state.product
    }
}
export default connect(mapStateToProps)(Products);