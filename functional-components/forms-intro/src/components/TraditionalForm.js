import React, {useState} from 'react';

const TraditionalForm = (props) => {
    const [name, setName] = useState("");
    const [flavor, setFlavor] = useState("");
    const [topping, setTopping] = useState("");
    const [numScoops, setNumScoops] = useState(0);
    const [sauce, setSauce] = useState("");
    const [whipped, setWhipped] = useState(false);

    return(
        <div className="form">
            <h1>Build a sundae!</h1>
            <form>
                {/* name, flavor, topping, num scoops, sauce, whipped cream and cherry */}
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={(event)=>setName(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Flavor</label>
                    <input type="text" className="form-control" onChange={(event)=>setFlavor(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Topping</label>
                    <input type="text" className="form-control" onChange={(event)=>setTopping(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Number of Scoops</label>
                    <input type="number" className="form-control" onChange={(event)=>setNumScoops(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Sauce</label>
                    <input type="text" className="form-control" onChange={(event)=>setSauce(event.target.value)}/>
                </div>

                <div>
                    <label>Whipped cream and cherry?</label>
                    <input type="checkbox" onChange={(event)=>setWhipped(event.target.checked)}/>
                </div>

                <input type="submit" className="btn btn-primary btn-lg"/>
            </form>

            <div>
                <h1>Name: {name}</h1>
            </div>
        </div>
    )
}

export default TraditionalForm;