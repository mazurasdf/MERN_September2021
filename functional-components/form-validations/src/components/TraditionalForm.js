import React, {useState} from 'react';

const TraditionalForm = (props) => {
    const [name, setName] = useState("");
    const [flavor, setFlavor] = useState("");
    const [topping, setTopping] = useState("");
    const [numScoops, setNumScoops] = useState(0);
    const [sauce, setSauce] = useState("");
    const [whipped, setWhipped] = useState(false);

    const [nameErrors, setNameErrors] = useState("");
    const [flavorErrors, setFlavorErrors] = useState("");
    const [toppingErrors, setToppingErrors] = useState("");
    const [numScoopsErrors, setNumScoopsErrors] = useState("");
    const [sauceErrors, setSauceErrors] = useState("");


    const onNameChange = (event) => {
        setName(event.target.value);

        if(event.target.value.length < 3){
            setNameErrors("name must be at least 3 characters!");
        }
        else{
            setNameErrors("");
        }
    }

    const onFlavorChange = (event) => {
        setFlavor(event.target.value);

        if(event.target.value.length < 5){
            setFlavorErrors("Flavor must be at least 5 characters!");
        }
        else{
            setFlavorErrors("");
        }
    }

    return(
        <div className="form">
            <h1>Build a sundae!</h1>
            <form>
                {/* name, flavor, topping, num scoops, sauce, whipped cream and cherry */}
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" onChange={onNameChange}/>
                    <span className="alert-danger">{nameErrors}</span>
                </div>

                <div className="form-group">
                    <label>Flavor</label>
                    <input type="text" className="form-control" onChange={onFlavorChange}/>
                    <span className="alert-danger">{flavorErrors}</span>
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