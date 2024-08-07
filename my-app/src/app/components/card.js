export default function Card({title, text, children}){
    return (
        <card>
            <h1>{title}</h1>
            <p>{text}</p>
            {children}
        </card>
    )
}