// const faveIceCreams = ["pistachio", "oreo", "thin mint", "superman", "durian", "cinnamon basil", "americone dream"];

// const newFaves = [...faveIceCreams.slice(0,2), "garlic", ...faveIceCreams.slice(2)];

// console.log(newFaves);
// const [first, ...others] = faveIceCreams;

// console.log(first);
// console.log(others);

// let sundae = {
//     "name": "Basic",
//     "flavor": "Vanilla",
//     "topping": "pecans",
//     "sauce": "hot fudge",
//     "cherry": true
// }

// let {sauce, ...plainSundae} = sundae;
// sundae = plainSundae;
// plainSundae = {
//     ...plainSundae,
//     "oil": "olive oil"
// }

// console.log(plainSundae);

const printMe = (str) => {
    console.log(str);
}

printMe("hello from outside the function");

const runMe = (anotherFunction) => {
    console.log("will this run first or last");
    anotherFunction();
}

runMe(()=>printMe("ok now try THIS!!"));