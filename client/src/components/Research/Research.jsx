import React from "react";
import "./Research.css";

function Research() {

  return (
    <div className="research">
      <h1 id='header'><b>Our Doctors Specialize in you</b></h1>
      <div className="flex_card">
        <div className="card">
          <img className='card_img' src="https://s3-alpha-sig.figma.com/img/cb5a/d921/ec09ac87f2400b2f444b1de63d5c660a?Expires=1689552000&Signature=dkTMi~7uDLiTySQd5mYkpn1KyLXzPhKUvgL15xQqUBWLR6sqby8Vngn8pXy2voTRxw2ZlLbgx7MtWwHJh~QnrQ3Lgh2Kx30rjBdnZJz5tfdVsRuDeFud2QeW-ZpYv1RKSD6Exq1OnprcvPzeQtrwhiwl762k~-2EQk06GjWM8iIycG1n8dJFfIcP7Y3-ze62cmnQp89O79-u89-3YMVYFovtTw8luRQ1J~EAi2cmh~AIqzFpkGSbuGP678jC2ba1nCwo~FGprps5vS0nCUTiHvwCROqDTNtth7cI0jAvRkoeMGHL3MYy~mZm7SbC5JaYamb8ErubWZkHOTYT4LXQ~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="placeholder" />
          <h2 className="practices">Painless Procedure</h2>
          <h2>Cancer Screening</h2>
          <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
          <p><b>Free</b></p>
          <p><img src="clock.png" />1hr 30min</p>
          <button id="btn">Learn More</button>
        </div>
        <div className="card">
          <img className='card_img' src="https://s3-alpha-sig.figma.com/img/1e51/5216/cb0937d4df363e84ae4b55281ee7a751?Expires=1689552000&Signature=Est97HFjBOGln1qLjxmy0OmNIpUPkxp9Xndo4Io57K9CuFAnPsjdOy3zgUL4C~viHU-NhyeRG~HA6-0Z1Eb8gJpxAoyb5oxECBBiubfEJng0WIu0K7w1lQGodQ4KOoG3D8m-fi408ARHtnBByGNrvL7NlNd1ECx7LyA1Ir7-2WpMRM7oX1RYKvP2GMUtfwrW5urDrovAO9~DYRna96ufFWqvDD5-qjBwMIhw1RU0NaOlwZ4aTV2CLXJTTdo3BUgekjnXt0MpKBOSuVmfcNU1DGFrDRYRwUM2TFWPY8tvThvsD3miEtczYWdaXa5iQPionZOfo78XgVqZBGRqxodysA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="placeholder" />
          <h2 className="practices">Best Oncologists</h2>
          <h2>Cancer Treatment Options</h2>
          <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
          <p><b>Free</b></p>
        <p><img src="clock.png" />1hr</p> 
          <button id="btn">Learn More</button>
        </div>
        <div className="card"> 
          <img className='card_img' src="https://www.beaumont.org/images/default-source/cancer/beaumont-cancer-program-header.jpg" alt="placeholder" />
          <h2 className="practices">Careful Diagnosis</h2>
          <h2>Cancer Types</h2>
          <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
          <p><b>Free</b></p>
        <p><img src="clock.png" />30min</p>
          <button id="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Research;