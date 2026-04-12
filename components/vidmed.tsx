import { Header } from "./header-3";

export default function VidMed() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-red-500 mt-15">
      


     
     
<video className="w-full h-full object-cover object-[50%_40%]" src="vdeo.mp4" autoPlay muted loop playsInline controls />

      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content */}
      {/* <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Unlock Your Global Future
          </h1>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">
            Expert consultancy to guide you towards international education and
            career success.
          </p>
        </div>
      </div> */}
    </div>
  );
}
