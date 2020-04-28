export default function(props) {
    return (
        <div>
            {decodeURIComponent(props.match.params.id)}
        </div>
    )
}