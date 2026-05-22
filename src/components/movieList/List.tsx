import React from "react"

interface Props {
    content: string
    onRemove: (id: number) => void
    onChange: (id: number, value: string) => void
    id: number
}

const List = ({ content, onRemove, onChange, id }: Props) => {
    return (
        <div className="input-group mb-3 w-60">
            <input
                onChange={(e) => onChange(id, e.target.value)}
                name="movie name"
                type="text"
                className="form-control"
                aria-describedby="button-addon2"
                value={content}
            />
            <button
                onClick={() => onRemove(id)}
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2">
                <i className="bi bi-x-lg"></i> Delete
            </button>
        </div>
    )
}

export default React.memo(List)