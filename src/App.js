import Header from './components/Header'

function App() {
    const items = [
        {id: 1, title : "Kesatu"},
        {id: 2, title : "Kedua"},
        {id: 3, title : "Ketiga"}
    ]
    const loading = false;
    const showSubHeader = true;
    if (loading) return (<h1>Loading...</h1>)

    return (
        <>
            <Header  bgColor="gray" textColor="red"/>
            {
                (showSubHeader) && (
                    <h2>List of items {items.length}</h2>
                    
                )
            }
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}

export default App