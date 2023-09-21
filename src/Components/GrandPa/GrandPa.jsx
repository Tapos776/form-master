import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css'

export const AssetContext = createContext('Gold')
export const MoneyContext = createContext(1000);

const GrandPa = () => {
    const[money ,setMoney] =useState(100)
    const asset = 'diamond';
    return (
        <div>
            <div className="grandpa">
                <h2 className="text-2xl font-bold">GrandPa</h2>
                <p>Net Money :{money}</p>
                <MoneyContext.Provider value={[money ,setMoney]}>
                    <AssetContext.Provider value="Gold">
                        <section className=" flex gap-3 items-center justify-center mt-10  text-xl font-medium   p-5 rounded-2xl">
                            <Dad asset={asset}></Dad>
                            <Uncle asset={asset}></Uncle>
                            <Aunty></Aunty>
                        </section>
                    </AssetContext.Provider>
                </MoneyContext.Provider>
            </div>
        </div>
    );
};

export default GrandPa;