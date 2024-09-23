export default function TripTable (props){

    return (
            <table>
                <tbody>
                    <tr><th>Matka</th></tr>
                    {props.matkat.map((matka, index) => (
                        <tr key={index}>
                            <td>{matka.kohdemaa}</td>
                            <td>{matka.kesto}</td>
                            <td><button onClick={() => props.poista(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
    )
}