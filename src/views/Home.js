import Sidebar from '../components/Sidebar'

const Home = () => {
    return (
        <section>
            <div className="gap2 gray-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row merged20" id="page-contents">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
