/* eslint-disable react/prop-types */
import Cousin from "../Dad/Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div className="  ">
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={"Rana"} asset={asset}></Cousin>
                <Cousin name={"Rima"}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;