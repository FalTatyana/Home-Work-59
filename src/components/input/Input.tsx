import "./input.css"

interface Props {
    onClick: () => void
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({onClick, value, onChange}: Props) => {
    return (
        <div className="input-group mb-3 w-50">
            <input
                onChange={onChange}
                name="movie name"
                type="text"
                className="form-control"
                placeholder="What else do you want to see?"
                aria-label="What else do you want to see?"
                aria-describedby="button-addon2"
                value={value}
            />
            <button
                onClick={onClick}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2">
                Add
            </button>
        </div>
    )
}

export default Input