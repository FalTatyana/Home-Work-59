interface Props {
    onClick: () => void
}
const ChuckNorrisButton = ({ onClick }: Props) => {
    return (
        <button
            type="button"
            className="btn btn-primary btn-lg mb-3 mt-3 border-info"
            onClick={onClick}
        >Get new jock
        </button>
    )
}

export default ChuckNorrisButton