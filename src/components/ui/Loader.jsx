import "./ui.css"
const Loader = () => {
    return (
        <div className="w-full h-[70vh] flex items-center justify-center">
            <div className="loader">
                <span className="loader-text">loading</span>
                <span className="load"></span>
            </div>
        </div>
    )
}

export default Loader