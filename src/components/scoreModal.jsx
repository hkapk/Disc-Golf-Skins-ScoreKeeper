const ScoreModal = ({ setModalOn, setChoice }) => {

    const handleOKClick = () => {
        setChoice(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (

        <div className="bg-grey-200 fixed inset-0 z-10   ">

            <div className="flex justify-center  h-screen items-center ">

                <div className="flex-col justify-center  bg-white py-12 px-24 rounded-xl ">

                    <div className="flex  text-lg  text-zinc-600   mb-10" >Score Table Here
                    </div>



                    <div className="flex">
                        <button onClick={handleCancelClick} className=" rounded px-4 py-2 text-white  bg-red-400 ">Cancel</button>
                        <button onClick={handleOKClick} className="rounded px-4 py-2 ml-4 text-white bg-green-500 ">New Game</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ScoreModal
