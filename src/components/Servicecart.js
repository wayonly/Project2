import { MyCartContext } from "../management/context";

function Servicecart (){
    const {amount} = MyCartContext()
    return(
     <button className="button">
        <span>ตะกร้าสินค้า</span>
        <span className="badge">{amount}</span>
     </button>
    )
}

export default Servicecart;