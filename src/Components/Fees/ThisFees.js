import "../../Styles/Fees.css";
import FeesRules from "./FeesRules";
import ThisFeesCard from "./ThisFeesCard";

const ThisFees = () => {
  return (
    <section className="p-3 p-sm-5">
      <p className="title text-center text-decoration-underline fw-bold fs-4 mb-2 ">
        FEE STRUCTURE
      </p>
      <p className="mb-0 fw-semibold fs-5 text-center"> YEAR 2024 - 2025</p>
      <div className="d-flex justify-content-center mt-3">
        <table className="table">
          <thead>
            <tr>
              <th className="fees-font text-uppercase p-3">Class</th>
              <th className="fees-font text-uppercase p-3">I Term</th>
              <th className="fees-font text-uppercase p-3">II Term</th>
              <th className="fees-font text-uppercase p-3">III Term</th>
              <th className="fees-font text-uppercase p-3">Annual Fees</th>
            </tr>
          </thead>
          <tbody>
            <ThisFeesCard />
          </tbody>
        </table>
      </div>
      <FeesRules />
    </section>
  );
};

export default ThisFees;
