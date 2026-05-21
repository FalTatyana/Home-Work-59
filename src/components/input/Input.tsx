import "./input.css"

const Input = () => {
    return (
        <div className="input-group mb-3 w-50">
            <input
                name="movie name"
                type="text"
                className="form-control"
                placeholder="What else do you want to see?"
                aria-label="What else do you want to see?"
                aria-describedby="button-addon2"
            />
            <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2">
                Add
            </button>
        </div>
    )
}

export default Input