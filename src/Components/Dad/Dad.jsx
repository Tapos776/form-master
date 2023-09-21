/* eslint-disable react/prop-types */
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = ({asset}) => {
    return (
        <div className=" text-xl font-medium p-5 rounded-2xl ">
            <h1>Dad</h1>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;