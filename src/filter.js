import React from "react";

function App(){
    // const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
    const values = ['10', '20', '30', '40', '50','5'];
    // const filtered = names.filter(name => name.includes('J'))
    const filtered = values.filter(item => item>30)
    return (
    <div>
        {
            filtered.map(item => <li>{item}</li>)
        }
    </div>
);

}

export default App;
