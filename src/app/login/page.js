
export default function Login()
{
    return(
        <>
            <div className=" h-80 flex justify-center items-center">
                <h1 className="text-bold text-white text-5xl">Login</h1>
            </div>
            <div className="flex h-auto justify-center">
                <div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5 flex"> 
                    <form>
                        <div>
                            <label className="block mb-2 text-black" for="username">Username</label>
                            <input></input>
                        </div>
                    </form>
                </div>
            </div>
           
        </>
    )
}   