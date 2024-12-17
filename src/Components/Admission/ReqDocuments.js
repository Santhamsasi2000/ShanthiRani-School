import ReqDocCard from "./ReqDocCard"
const ReqDocuments = () => {
  return (
    <section className="m-5">
        <p className='fw-bold'>Required Documents For AdmissionProcess :</p>
        <div className="d-flex justify-content-center mt-3">
         <table className="table">
              <thead>
                <tr>
                  <th className="fw-bold text-uppercase px-0 py-2 p-sm-3">S.NO</th>
                  <th className="fw-bold text-uppercase px-0 py-2 p-sm-3">DOCUMENT</th>
                  <th className="fw-bold text-uppercase px-0 py-2 p-sm-3">HOLDER</th>
                  <th className="fw-bold text-uppercase px-0 py-2 p-sm-3">ORIGINAL</th>
                  <th className="fw-bold text-uppercase px-0 py-2 p-sm-3">XEROX</th>
                </tr>
              </thead>
              <tbody>
                <ReqDocCard/>
              </tbody>
            </table>
       </div>
    </section>
  )
}

export default ReqDocuments
