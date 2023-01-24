export default function Tags({ tags }) {
  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell small-12">
        <p>
          Created with: &nbsp;
          {tags.edges.map((tag, index) => (
            <span key={index}>
              {tag.node.name}
            </span>
          ))}
        </p>
      </div>
    </div>
    </div>
  )
}
