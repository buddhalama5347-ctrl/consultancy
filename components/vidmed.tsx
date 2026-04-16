import { Header } from "./header-3";

export default function VidMed() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-red-500 mt-15">
      


     
     
<video className="w-full h-full object-cover object-[50%_40%]" src="/vdeo.mp4" autoPlay muted loop playsInline controls />

      
    </div>
  );
}
