"use client";

import { useEffect, useState } from "react";
import { MapPin, X } from "lucide-react";
import { sendContactEmail } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  qualification: string;
  gpaPercentage: string;
  interestedCountry: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  qualification: "",
  gpaPercentage: "",
  interestedCountry: "",
  message: "",
};

export default function FloatingCounselling() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAttentionActive, setIsAttentionActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [formData, setFormData] = useState<FormState>(initialState);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsAttentionActive(true);
      window.setTimeout(() => setIsAttentionActive(false), 1400);
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setIsOpen(false);
    setSubmitStatus("idle");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const detailedMessage = [
      `Highest Qualification: ${formData.qualification}`,
      `GPA / Percentage: ${formData.gpaPercentage}`,
      `Interested Country: ${formData.interestedCountry || "Not provided"}`,
      "",
      "Message:",
      formData.message || "No message provided.",
    ].join("\n");

    try {
      const result = await sendContactEmail({
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        message: detailedMessage,
      });

      if (result.success) {
        setSubmitStatus("success");
        setFormData(initialState);
        setTimeout(() => {
          handleClose();
        }, 1500);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full px-6 py-3 text-white shadow-xl transition-all duration-300 hover:scale-[1.03] ${
          isAttentionActive ? "attention-shake" : ""
        }`}
        style={{ backgroundColor: "#194A83" }}
      >
        <MapPin className="h-4 w-4 fill-white" />
        <span className="text-base font-semibold cursor-pointer">Get Free Counselling</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Free counselling form"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-blue-100"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-gradient-to-r from-[#194A83] via-[#20589b] to-[#3b6eb0] p-6 text-white border-b border-white/20">
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-5 top-5 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-100">
                Free Counselling
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-tight">
                Plan your study abroad journey
              </h2>
              <p className="mt-2 text-blue-100">
                Fill this short form and our counsellor will reach out with the
                right guidance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 bg-gradient-to-b from-[#f9fbff] to-white p-6 md:p-8">
              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-900">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="h-12"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-blue-900">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+977 98XXXXXXXX"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-blue-900">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-blue-900">
                    Highest Qualification <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select qualification</option>
                    <option value="+2 / High School">+2 / High School</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Masters">Masters</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-blue-900">
                    GPA / Percentage <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="gpaPercentage"
                    value={formData.gpaPercentage}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 3.2 GPA or 72%"
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-900">
                  Interested Country <span className="text-slate-400">(optional)</span>
                </label>
                <Input
                  name="interestedCountry"
                  value={formData.interestedCountry}
                  onChange={handleChange}
                  placeholder="e.g. Australia, UK, Canada"
                  className="h-12"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-blue-900">
                  Message <span className="text-slate-400">(optional)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your goals or timeline..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>

              {submitStatus === "success" && (
                <p className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  Submitted successfully. Our team will contact you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  Submission failed. Please try again.
                </p>
              )}

              <Button
                type="submit"
                className="h-12 w-full text-white hover:opacity-95"
                style={{ backgroundColor: "#194A83" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .attention-shake {
          animation: attentionShake 1.4s ease-in-out;
        }

        @keyframes attentionShake {
          0%,
          100% {
            transform: translateX(0) translateY(0);
          }
          20% {
            transform: translateX(-3px) translateY(-1px);
          }
          40% {
            transform: translateX(3px) translateY(1px);
          }
          60% {
            transform: translateX(-2px) translateY(0);
          }
          80% {
            transform: translateX(2px) translateY(-1px);
          }
        }
      `}</style>
    </>
  );
}
