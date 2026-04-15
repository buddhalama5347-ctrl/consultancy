"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { sendApplicationEmail } from "@/app/actions";

export function OnlineApplication() {
  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    mobile: "",
    email: "",
    nationality: "",
    dateOfBirth: "",
    proficiencyType: "",
    proficiencyScore: "",
    currentEducation: "",
    desiredEducation: "",
    instituteName: "",
    maritalStatus: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullname.trim()) {
      alert("Full Name is required.");
      return;
    }
    if (!formData.address.trim()) {
      alert("Address is required.");
      return;
    }
    if (!formData.mobile.trim() || !/^\+?[\d\s\-\(\)]{10,15}$/.test(formData.mobile)) {
      alert("Please enter a valid mobile number (10-15 digits).");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!formData.nationality.trim()) {
      alert("Nationality is required.");
      return;
    }
    if (!formData.dateOfBirth) {
      alert("Date of Birth is required.");
      return;
    }
    if (!formData.currentEducation.trim()) {
      alert("Current Education is required.");
      return;
    }

    console.log("Application submitted with data:", formData);
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      console.log("Calling sendApplicationEmail...");
      const result = await sendApplicationEmail(formData);
      console.log("Server response:", result);
      
      if (result.success) {
        console.log("Application submitted successfully!");
        setSubmitStatus("success");
        setFormData({
          fullname: "",
          address: "",
          mobile: "",
          email: "",
          nationality: "",
          dateOfBirth: "",
          proficiencyType: "",
          proficiencyScore: "",
          currentEducation: "",
          desiredEducation: "",
          instituteName: "",
          maritalStatus: "",
          notes: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        console.log("Application failed:", result.message);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Caught error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Online Application Section */}
      <section id="online-application" className="py-10 bg-white mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header - Left aligned */}
          <div className="max-w-3xl mb-20">
            <p className="text-primary/60 text-sm font-medium uppercase tracking-widest mb-4">
              Apply Online
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Submit Your Application
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Fill out the form below to start your educational journey with us.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl bg-white">
            {/* Application Form - Larger on left */}
            <div className="lg:col-span-2 animate-slideInLeft">
              <div className="bg-white border border-border rounded-lg p-10  [@media(max-width:500px)]:bg-white [@media(max-width:500px)]:border-0 [@media(max-width:500px)]:p-0">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Application Form
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Your address"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Your mobile number"
                      pattern="\+?[\d\s\-\(\)]{10,15}"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nationality <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      placeholder="Your nationality"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      min="1900-01-01"
                      max={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Proficiency Type
                    </label>
                    <Input
                      type="text"
                      name="proficiencyType"
                      value={formData.proficiencyType}
                      onChange={handleChange}
                      placeholder="e.g., IELTS, TOEFL"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Proficiency Score
                    </label>
                    <Input
                      type="text"
                      name="proficiencyScore"
                      value={formData.proficiencyScore}
                      onChange={handleChange}
                      placeholder="Your score"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Current Education <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="currentEducation"
                      value={formData.currentEducation}
                      onChange={handleChange}
                      placeholder="Your current education level"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Desired Education
                    </label>
                    <Input
                      type="text"
                      name="desiredEducation"
                      value={formData.desiredEducation}
                      onChange={handleChange}
                      placeholder="Desired education level"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Institute Name
                    </label>
                    <Input
                      type="text"
                      name="instituteName"
                      value={formData.instituteName}
                      onChange={handleChange}
                      placeholder="Preferred institute"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Marital Status
                    </label>
                    <select
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Notes
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any additional notes..."
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    {isSubmitting ? "Submitting..." : "Send Application"}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                      Thank you! Your application has been submitted successfully.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      Failed to submit application. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info - Same as contact */}
            <div className="space-y-8 animate-slideInRight">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Contact Information
                </h3>
                <p className="text-foreground/70">
                  Available Monday to Friday, 9 AM - 6 PM
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3  bg-blue-500/10  rounded-lg">
                  <Phone className="w-6 h-6 text-[#0F0F0F]" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Phone</h4>
                  <p className="text-foreground/70">+977 (01)15928086</p>
                </div>
              </div>

               <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10  rounded-lg">
                 <img src = "whatsapp.png" className="w-6 h-6 text-[#0F0F0F]"  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">WhatsApp</h4>
                  <p className="text-foreground/70">
                   +61 433 675 841
                    <br />
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3   bg-blue-500/10 rounded-lg">
                  <Mail className="w-6 h-6 text-[#0F0F0F]" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email</h4>
                  <p className="text-foreground/70">chabahil@exactedunp.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10  rounded-lg">
                  <MapPin className="w-6 h-6 text-[#0F0F0F]" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Address</h4>
                  <p className="text-foreground/70">
                    Saraswatinagar, Chabahil
                    <br />
                  </p>
                </div>
              </div>

             

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    aria-label="Facebook"
                  >
                    <img src = "facebook.png" className="w-5 h-5 text-primary" />
                      {/* <FaFacebookF className="w-5 h-5 text-primary" /> */}
                    {/* <Facebook className="w-5 h-5 text-primary" /> */}
                  </a>
                 
                  <a
                    href="#"
                    className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                    aria-label="Instagram"
                  >
                    <img src = "insta.png" className="w-5 h-5 text-primary" />
                    {/* <Instagram className="w-5 h-5 text-primary" /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}