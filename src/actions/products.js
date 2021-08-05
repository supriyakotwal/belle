import {getProductList} from '../api'
export function productList(){
    const output = getProductList()
    .then((data) => data.json())

    return{
        type:'PRODUCT_LIST',
        payload:output
    }
}