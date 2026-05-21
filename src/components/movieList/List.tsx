interface Props {
    content: string
}

const List = ({ content }: Props) => {
    return (
        <div className="input-group mb-3 w-60">
            <input
                name="movie name"
                type="text"
                className="form-control"
                aria-describedby="button-addon2"
                value={content}
            />
            <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2">
                <i className="bi bi-x-lg"></i> Delete
            </button>
        </div>
    )
}

export default List