/* eslint-disable react/prop-types */
import Special from "../../Special/Special";

const Cousin = ({name,asset,gift}) => {

    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
           <section>
            {
                asset && <Special asset={asset}></Special>
            }
            {
                gift && <Special gift={gift}></Special>
            }
           </section>
        </div>
    );
};

export default Cousin;