import "./styles.css"

const QueryDisplayer: React.FC<QueryDisplayerProps> = ({ content }) => {
    return (
        <pre className="query--wrapper">
            <code className="query--code">
                {content}
            </code>
        </pre>
    )
}

export default QueryDisplayer