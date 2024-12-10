const HouseSystem = () => {
  return (
    <section className="m-3 m-sm-5">
       <p className='title text-center fw-bold fs-3 text-decoration-underline mb-3'>HOUSE SYSTEM</p>
       <p>In order to build up team-spirit and leadership quality, to foster unity and to stimulate a sense of responsibility among all pupils, all school activities are organized on the basis of House system. All the students are divided into 4 Houses. Each House will be guided by the teachers. The Houses are named after the Vincentian saints.</p>
       <table className="mx-auto">
          <tr>
            <th>No of the House</th>
            <th>Name of the House</th>
            <th>Colour</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Vincent's House</td>
            <td>Red</td>
          </tr>
          <tr>
            <td>2</td>
            <td> Louise's House</td>
            <td>Blue</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Catherine's House</td>
            <td>Green</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Rosalie's House</td>
            <td>Orange</td>
          </tr>
       </table>
    </section>
  )
}

export default HouseSystem
