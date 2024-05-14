export function Tweet (props: { text: string}) {
    return (
        <div>
                <h1>Tweet</h1>
                <p>{props.text}</p>
                <button>Curtir</button>
        </div>
    )

}