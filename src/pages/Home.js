import{Link} from "react-router-dom"
function Home() {
    return (
        <section className="bg-info" style={{ height: "100vh"}}>

            <div className="container d-flex-colum justify-content-center align-items-center"style={{height:"100vh"}}>
            <h1 className="mb-5 text-warning">Home page</h1>
            <h2 style={{color:"black"}}>This site allows you to access<br></br>to all the countries around the world</h2>
            <Link to="/countries" className="btn btn-primary">SEE MORE</Link>
        </div>
        </section>
    )
}
export default Home;