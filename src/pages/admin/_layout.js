export default function(props) {
    return (
        <>
            <header>header</header>
            <aside>aside</aside>
                <div>{ props.children }</div>
            <footer>footer</footer>
        </>
    )
}