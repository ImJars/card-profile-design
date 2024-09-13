import React from "react";

function App() {
  return (
    <>
      <section className="h-screen w-screen bg-gradient-to-r from-bg_primary to-bg_secondary font-sans">
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-bg_card w-[40%] h-[40%] rounded-2xl flex justify-center items-center">
            <div className="flex space-x-8 justify-between">
              <div>
                <img
                  src="profile.jpg"
                  className="rounded-xl w-40 h-60 object-cover"
                  alt=""
                />
              </div>
              <div className="w-2/4">
                <h1 className="text-text_primary text-3xl">Angel Ramirez</h1>
                <h2 className="text-text_secondary text-lg">
                  Software engineering
                </h2>
                <p className="text-text_tertiary text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  quod quae, voluptate, quos, quas quia quibusdam voluptatibus
                  sit et dolores iusto. Eaque, quod. Quisquam, quidem.
                </p>
                <div>
                  <div className="w-full flex space-x-6">
                    <button className="border-text_primary border rounded-xl text-text_primary px-8 py-2">Profile</button>
                    <button className="border-text_primary border rounded-xl bg-text_primary text-bg_card px-8 py-2">Follow</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
