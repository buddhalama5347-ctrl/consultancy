import { Contact } from "@/components/contact";
import { MapPin } from "lucide-react";

export default function ContactPage() {
    return(
        <>
           <Contact />

      <main className="min-h-screen bg-white mb-20">
        {/* Header */}
        <div className="bg-white container mx-auto">
          <div className="mx-auto  px-6 py-8">
            <div className="flex items-center gap-3">
              <MapPin className="h-8 w-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-slate-900">
                Our Location
              </h1>
            </div>
            <p className="mt-2 text-slate-600">Visit us at our office</p>
          </div>
        </div>

        <div className="w-full h-[80vh] container mx-auto">
          {" "}
          {/* 80% of viewport height */}
          
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.093647291169!2d85.33895364041445!3d27.716563414575944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb872f387194d235%3A0xe89bfd182ab91816!2sExact%20Education%20%26%20Visa%20Services!5e0!3m2!1sen!2snp!4v1776265478502!5m2!1sen!2snp"
  className="w-full h-full"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        </div>
      </main>
        </>
    )
}