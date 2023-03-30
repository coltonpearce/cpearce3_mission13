import React from 'react';

function Home() {
  return (
    <>
      <div className="m-3">
        <div className="col-3">
          <img
            src="JoelHiltonHeadShot (1).jpg"
            width="400"
            height="200"
            alt="Joel  Hilton"
          />
        </div>

        <div className="col align-self-center text">
          <h1>Joel Hilton's Movie Journal</h1>
        </div>
        <div className="col">
          <p>
            Welcome to my movie/podcast journal! Have fun browsing through and
            finding new things!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
