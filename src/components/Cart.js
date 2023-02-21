
import { MyCartContext } from '../management/context'
import Cartitem from "./Cartitem"
import './Cart.css'

const Cart=()=>{
    const {cart,total,formatNumber} = MyCartContext()
    if(cart.length === 0){
        //ไม่มีสินค้าในตะกร้า
        return(
            <div className="shopping-cart">
                <div className="empty">ไม่มีสินค้าในตะกร้า</div>
            </div>
        )
    }else{
        return(
            <div className="shopping-cart">
                <div className="title">สินค้าในตะกร้า</div>
                {cart.map((data)=>{
                    return <Cartitem key={data.id} {...data}/>
                })}
                <div className="footer">ยอดชำระเงินรวม {formatNumber(total)} บาท</div>
            </div>
        )
    }
}

export default Cart