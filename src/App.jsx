import React from 'react'

function App() {
  return (
    <>
      <section className='h-screen w-screen bg-gradient-to-r from-bg_primary to-bg_secondary'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='bg-bg_card w-[40%] h-[40%] rounded-2xl flex justify-center items-center'>
            <div className='flex space-x-8'>
              <div>
                <img src="profile.jpg" className='rounded-xl w-40 h-60 object-cover' alt="" />
              </div>
              <p className='text-center text-text_secondary'>
                This is a React Tailwind CSS Starter Template
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
