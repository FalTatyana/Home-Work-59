interface Props {
    content: string
    onRemove: () => void
}

const List = ({ content, onRemove }: Props) => {
    return (
        <div className="input-group mb-3 w-60">
            <input
                readOnly
                name="movie name"
                type="text"
                className="form-control"
                aria-describedby="button-addon2"
                value={content}
            />
            <button
                onClick={onRemove}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2">
                <i className="bi bi-x-lg"></i> Delete
            </button>
        </div>
    )
}

export default List