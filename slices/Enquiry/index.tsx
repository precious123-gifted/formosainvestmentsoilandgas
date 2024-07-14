"use server"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from '../../app/components/Bounded';
import { sendMail } from "@/lib/mail";
import Image from "next/image";
import oilrig from "../../public/oilrig.png"

/**
 * Props for `Enquiry`.
 */
export type EnquiryProps = SliceComponentProps<Content.EnquirySlice>;

/**
 * Component for "Enquiry" Slices.
 */
const Enquiry = ({ slice }: EnquiryProps): JSX.Element => {





  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();



    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name');
    const companyName = formData.get('company_name');
    const phoneNumber = formData.get('phone_number');
    const email = formData.get('email');
    const enquire = formData.get('enquiry');
   

  let mail = {
    name,
    companyName,
    phoneNumber,
    email,
    enquire

  }



    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': "application/x-www-form-urlencoded", },
        body: JSON.stringify(mail),
      });

      if (response.status === 201) {

       await response.json()
        .then(data => {
          console.log('mail sent successfully:', data);
          return alert('Enquiry Successfully Sent'); 
        })
     
       
      }  else {
        alert('error sending email')
        console.error('Server responded with error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };



  const send = async () => {
    "use server"
    await sendMail({
      to: "formosa6js@gmail.com",
      name: "precious",
      subject: "Test Mail",
      body: '<h1>hello SIR this is precious testing the email auto send function</h1>',
    });
  };








  return (
    <Bounded
    // data-slice-type={slice.slice_type}
    // data-slice-variation={slice.variation}
   className="  text-[#333D3E] bg-[#EDF4F6]" 
    >
<div className="content w-full flex landscape:justify-between portrait:flex-col portrait:items-center pb-[6vw] pt-10 space-y-[4vw] portrait:space-y-[12vw]"> 

  <div className="form w-[50%] portrait:w-full">

  <div className="clients_writeup_lead  mb-4 portrait:mt-10  portrait:mb-10 mt-4 text-[2vw]  portrait:text-[6vw] portrait:sm:text-[3vw]">{slice.primary.writeup}</div>

<form   className="flex flex-col items-center">

<div className="inputs w-full grid  portrait:grid-cols-1 landscape:grid-cols-2  gap-5 portrait:gap-[6vw] portrait:sm:gap-y-[6vw]   gap-y-6">
<input required type="text"  className='brandname outline-none h-[3vw] portrait:h-[14vw] px-3 text-[#EDF4F6] bg-[#2F3D47] rounded-md' name="name" placeholder='Name'  />
<input required type="text" className='title outline-none h-[3vw] portrait:h-[14vw] px-3 text-[#EDF4F6] bg-[#2F3D47] rounded-md' name="company_name" placeholder='Company Name' />
<input required type="text" className='shortdescription outline-none h-[3vw] portrait:h-[14vw] px-3 text-[#EDF4F6] bg-[#2F3D47] rounded-md' name="email" placeholder='Email' />
<input required type="text" className='shortdescription outline-none h-[3vw] portrait:h-[14vw] px-3 text-[#EDF4F6] bg-[#2F3D47] rounded-md' name="phone_number" placeholder='Phone Number' />
<textarea required  className='fulldescription w-[48.5vw] portrait:w-full outline-none h-[12vw] resize-none portrait:h-[28vw] px-3 py-1 text-[#EDF4F6] bg-[#2F3D47] rounded-md'  name="enquiry" placeholder='Write down Your Enquiry' />
</div>

<button  formAction={send} className="btn mt-10  portrait:w-full bg-[#423B17] text-[#EDF4F6] cursor-pointer portrait:px-[22vw] px-[6vw] py-3 rounded-[0.280rem] text-[1.8vw] portrait:text-[8vw] hover:bg-[#252d2e] duration-[0.2s]  ease-in-out ">Submit</button>








</form>


  </div>

  <div className="svg w-[30%] portrait:w-full">
    <Image src={oilrig} alt="oilrig_svg" className="object-fit "/>
  </div>

      </div>
      </Bounded>
  );
};

export default Enquiry;
