import '../../Styles/Banner.css'; 

const Banner = () => {
  return (
    <div className="banner-container d-flex align-items-center justify-content-center">
      <div className="banner-overlay w-100 h-100 position-absolute top-0 start-0 z-index-1"></div>
      <div className="text-start text-white p-3 z-2">
        <h1 className="fs-1 fw-bold fs-md-2 fs-sm-3">Best School in Sivaganga</h1>
        <div className="mt-3">
          <button className="btn mx-2 mx-sm-3 btn1 p-2 text-size-5 btn-sm mb-sm-2 mb-2">Admission Open 2023-24</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
