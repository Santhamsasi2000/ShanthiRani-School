import Entrance from "../Components/Admission/Entrance"
import ProcessDetails from "../Components/Admission/ProcessDetails"
import ReqDocuments from "../Components/Admission/ReqDocuments"

const AdmissionProcess = () => {
  return (
    <section className="m-3 m-sm-5">
      <ProcessDetails/>
      <Entrance/>
      <ReqDocuments/>
    </section>
  )
}

export default AdmissionProcess
