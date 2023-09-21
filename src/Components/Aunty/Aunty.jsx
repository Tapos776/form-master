import { useContext } from "react";
import Cousin from "../Dad/Cousin/Cousin";
import { AssetContext, MoneyContext } from "../GrandPa/GrandPa";

const Aunty = () => {
    const gift=useContext(AssetContext)
    const [money,setMoney]=useContext(MoneyContext)
    return (
        <div >
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={"Mina"}></Cousin>
                <Cousin name={"Tina"} gift={gift}></Cousin>

            </section>
            <p>Money:{money} </p>
            <button className="bg-pink-300 p-4 rounded-lg" onClick={()=>setMoney(money + 100)}>Add 1000 TK</button>
        </div>
    );
};

export default Aunty;