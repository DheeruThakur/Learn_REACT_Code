import './shimmer.css'

const Shimmer = () => {
    return (
    <>
        <div className='search-div'></div>
        <div className='button-div'></div>
        <div className="body">
            { 
                Array.from({length:10}).map((el , idx) => {
                    return (
                        <div key={idx} className="card">
                            <div className="img-container"></div>
                            <div className="card-content">
                                <div className="div-1"></div>
                                <div className="div-2"></div>
                                <div className="div-3"></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
    )
}

export default Shimmer