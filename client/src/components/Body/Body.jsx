import React from "react";

function Body() {
  return (
    <div id="container-fluid h-100">
      <div style={{minHeight: '190px'}}></div>
      <div className="row m-0">
        <div className="col-md-6 col-12 mx-auto">
          <div className="vstack gap-4 h-100 w-100 justify-content-center align-items-center">
            <h1 className="fw-bold">Hope cancer management</h1>
            <p>
              We are always fully focused on helping you through your cancer
              journey
            </p>
            <button style={{ backgroundColor: "orange" }} className="btn p-3">
              Learn More
            </button>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="vstack h-100 w-100 justify-content-center align-items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/ca58/379e/b4a7629d240fc6d7f2372c0412cbf539?Expires=1689552000&Signature=UqVJa8k0UTShSf6I1XO2Og8rIb3nPdvLE-xT0Zn1T2QxwwcqVdGeJkOPRDoTEmI2-UNd0ASI6LW8~SULBEGbWm4AenjvCdQaVaIG7ICq5NcKo2igubgqPJ04xQ0kFsEQhthKxGQ2nDYAxYuK-CkGCuSvk280a6RtKqgFYKDEDXQzx2Sih2EXw9Kgg3Tjjr1YLPiPz3LUzyrPsbymX3kcrAkpVVj8TA6W4r~jAh3c7ryiD02VdycmWl6nUDwCTXBHd-b8aa9tUrYjfI2jiQvpsG~nHi6Ro-0wyNKjrBWabFQpkylNnpjov7vu2pScYUrrokY1k3gvDoN53sbzcNS-oA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="nurse"
            />
          </div>
        </div>
      </div>
      <div style={{minHeight: '200px'}}></div>
    </div>
  );
}

export default Body;
