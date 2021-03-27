import background from '../../assets/images/errors/404.jpg'

const NotFound = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="error-page">
                    <div className="bg-image" style={{ backgroundImage: `url(${background})` }}></div>
                    <div className="error-meta">
						<h1>whoops!</h1>
						<span>halaman yang kamu cari tidak ada.</span>
						<a href="/" title="Go Back" data-ripple="">Go Back</a>
					</div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
