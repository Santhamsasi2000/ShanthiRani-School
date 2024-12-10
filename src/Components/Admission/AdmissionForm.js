import React from 'react';
import Swal from 'sweetalert2';

const AdmissionForm = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9afd317d-caf1-43f7-82ed-c9719737eff7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
          title: "Message Send!",
          text: "We will get back to you as soon as possible",
          icon: "success"
        });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='p-5'>
       <p className='title text-center fw-bold fs-3 mb-5'>ADMISSION ENQUIRY FORM</p>
       <section className='d-flex justify-content-center'>
         <form onSubmit={onSubmit} className='w-100'>
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Student's Name</label>
                <input type='text' name="Name of the Student" className='field mt-2 rounded border border-1 ps-3' placeholder='Your Name *' required />
            </div>
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Parent's Name</label>
                <input type='text' name="Name of the Parent" className='field mt-2 rounded border border-1 ps-3' placeholder='Your Name *' required />
            </div>
            <div className='input-box mb-4'>
                <label className='mb-2 label-color fw-bold'>Standard</label>
                <select class="form-select" aria-label="Default select example" style={{height:"50px"}} name="Student Standard">
                    <option selected>Select Student Standard</option>
                    <option value="Pre Kg">Pre Kg</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="I STD">I STD</option>
                    <option value="II STD">II STD</option>
                    <option value="III STD">III STD</option>
                    <option value="IV STD">IV STD</option>
                    <option value="V STD">V STD</option>
                    <option value="VI STD">VI STD</option>
                    <option value="VII STD">VII STD</option>
                    <option value="VIII STD">VIII STD</option>
                    <option value="IX STD">IX STD</option>
                    <option value="X STD">X STD</option>
                    <option value="XI STD">XI STD</option>
                    <option value="XII STD">XII STD</option>
                </select>
            </div>
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Email Address</label>
                <input type='email' name='EMAIL ID' className='field mt-2 rounded border border-1 ps-3' placeholder='Your Email *' required />
            </div>
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Father's Mobile Number</label>
                <input type='text' name="Father's Mobile Number" className='field mt-2 rounded border border-1 ps-3' placeholder='Your Mobile Number *' required />
            </div>
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Mother's Mobile Number</label>
                <input type='text' name="Mother's Mobile Number" className='field mt-2 rounded border border-1 ps-3' placeholder='Your Mobile Number *' required />
            </div>
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Address</label>
                <input type='text' name="Address" className='field mt-2 rounded border border-1 ps-3' placeholder='Your Name *' required />
            </div>
            <div className='input-box mb-4'>
                <label className='label-color fw-bold'>Your Message</label>
                <textarea name="Message" className='field mess mt-2 rounded border border-1 ps-3 pt-3' placeholder='Your Message *' required />
            </div>
            <button type='submit' className='btn-common border-0 px-5 py-2 fw-bold rounded-2'>SEND</button>
          </form>
     </section>
    </div>
  )
}

export default AdmissionForm
