import './shimmer.css'

const Shimmer = () => {
    return (
    <>
        <div className="flex flex-wrap justify-between">
            { 
                Array.from({length:10}).map((el , idx) => {
                    return (
                        <div key={idx} className="h-[300] w-[225] border-solid border-2 border-gray-500 rounded-md m-3 bg-pink-50">
                            <div className="h-[180] w-[225]"></div>
                            <div className="pl-2 mt-1">
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