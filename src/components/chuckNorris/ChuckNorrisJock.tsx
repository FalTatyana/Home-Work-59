interface Props {
    jock: string
}

const ChuckNorrisJock = ({jock}: Props) => {
  return (
    <div className="card border-info">
    <div className="card-body">
    {jock}
    </div>
  </div>
  )
}

export default ChuckNorrisJock