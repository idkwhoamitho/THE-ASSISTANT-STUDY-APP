

export default function Home() {
  return (
    <>
      <div className='flex justify-center items-center h-screen flex-col'>
        <h1 className='text-center font-bold text-3xl'>WELCOME TO THE ASSISTANT</h1>
        <br />
        <h1 className='text-white text-center text-opacity-75  text-2xl'>YOUR STUDY TOOLBOX</h1>
        <br />
        <button className="bg-transparent text-white font-semibold py-2 px-4 border border-white rounded hover:bg-white hover:text-black">
          GET STARTED
        </button>
      </div>  
    </>
  );
}