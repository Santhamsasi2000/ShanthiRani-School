import React from "react";
import "../../Styles/Students.css";
import { EleventhStud, tenthStud, TwelthStud } from "../../Data/StudentsList";
import TopperCard from "./TopperCard";

const Students = () => {
  return (
    <section className="my-5">
      <p className="title text-center text-uppercase fw-bold fs-3 ">
        Toppers of 2023-2024
      </p>
      <ToppersSection title="School 10th Toppers" data={tenthStud} />
      <ToppersSection title="School 11th Toppers" data={EleventhStud} />
      <ToppersSection title="School 12th Toppers" data={TwelthStud} />
    </section>
  );
};

export default Students;

const ToppersSection = ({ title, data }) => {
  return (
    <>
      <p className="topper text-center mt-5 fw-bold fs-5 text-decoration-underline">{title}</p>
      <div className="d-flex flex-wrap gap-5 justify-content-center">
        {data.map((stud) => (
          <TopperCard key={stud.id} {...stud} />
        ))}
      </div>
    </>
  );
};
