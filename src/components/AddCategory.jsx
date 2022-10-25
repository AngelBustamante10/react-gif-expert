import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onsubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        //setCategories(categories =>  [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={ onsubmit }>

                <input type="text"
                    placeholder="agregar gifs"
                    value={ inputValue }
                    onChange= { onInputChange }
                />

            </form>
        </>
    )
}
