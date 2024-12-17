import { ReqDocData } from "../../Data/ReqDocData"

const ReqDocCard = () => {
  return (
    <>
      {
         ReqDocData.map(({id,nameOfDoc,whose,original,xerox})=>(
            <>
            <tr>
              <td className='text-uppercase px-0 py-2 p-sm-3'>{id}</td>
              <td className='text-uppercase px-0 py-2 p-sm-3'>{nameOfDoc}</td>
              <td className='text-uppercase px-0 py-2 p-sm-3'>{whose}</td>
              <td className='px-0 py-2 p-sm-3'>{original}</td>
              <td className='px-0 py-2 p-sm-3'>{xerox}</td>
            </tr>
            </>
          ))
     }
    </>
  )
}

export default ReqDocCard
