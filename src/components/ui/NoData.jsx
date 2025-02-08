const NoData = () => {
    return (
        <div className="w-full h-[70vh] flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
            </div>
            <p className="text-blue-700 font-bold">No Data</p>
        </div>
    )
}

export default NoData