import {useState} from "react";

function SearchHeader({search}) {
    const [valueInput, setValue] = useState('');
    const handleFormSubmit =(event) =>{
        event.preventDefault();
        search(valueInput);
    };
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return ( 
    <div className="searchDiv">
        <form name="search" onSubmit={handleFormSubmit}>
            <input value={valueInput} className="input" name="txt" onmouseout="this.value = ''; this.blur();" onChange= {handleChange} />
        </form>
        <i class="fas fa-search"></i>
    </div> );
}

export default SearchHeader;
