const App = () => {
    return (
        <main className="w-full h-screen bg-[#ecf2f8] flex items-center justify-center">
            <div className="w-[90%] flex flex-col bg-white rounded-xl lg:w-3/5 md:flex md:flex-row sm:w-9/12">
                <img className="w-full h-48 rounded-tl-xl rounded-tr-xl object-cover md:w-2/5 md:h-auto md:rounded-tr-none md:rounded-bl-xl md:rounded-tl-xl" src="./images/drawers.jpg" alt="Drawer image" />
                <div className="py-7 px-9 flex flex-col gap-4 lg:py-11 lg:px-12">
                    <h2 className="text-base font-bold text-[#48556a] lg:text-2xl sm:text-xl">
                        Shift the overall look and feel by adding these wonderful touches to furniture in your home
                    </h2>
                    <p className="text-[13px] font-medium text-[#9eafc2] sm:text-sm">
                        Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img className="w-12 h-auto rounded-full" src="./images/avatar-michelle.jpg" alt="Avatar image" />
                            <div>
                                <h3 className="text-[13px] font-bold text-[#48556a] sm:text-sm">
                                    Michelle Appleton
                                </h3>
                                <p className="text-[#9eafc2] font-medium text-sm">
                                    28 Jun 2020
                                </p>
                            </div>
                        </div>
                        <div className="p-3 bg-[#E9F0F6] rounded-full cursor-pointer">
                            <img src="./images/icon-share.svg" alt="share image" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App;