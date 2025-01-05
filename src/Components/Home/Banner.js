import '../../Styles/Banner.css'; 

const Banner = () => {
  return (
    <div className="banner-container d-flex align-items-center justify-content-center">
      <div className="banner-overlay w-100 h-100 position-absolute z-index-1"></div>
      <div className="p-3 z-2">
        <p className="fw-bold text-white">Best School in Karaikudi and Kalayarkoil.</p>
        <button className="btn btn-primary">Admission Open 2025-26</button>
      </div>
    </div>
  );
};

export default Banner;
