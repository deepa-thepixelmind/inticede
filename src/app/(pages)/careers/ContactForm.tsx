"use client";

// This is a client component because a form typically requires state management and event handlers for submission.

export default function ContactForm() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col lg:flex-row items-start justify-between px-4 md:px-8 lg:px-24 py-12 md:py-16 lg:py-20 gap-6 md:gap-10">
      <div className="w-full lg:w-1/2">
        <h2 className="text-[40px] md:text-5xl lg:text-6xl xl:text-5xl lg:mt-[-35] text-[#1F3A93] font-Grown leading-tight mb-4 md:mb-6">
          GET IN TOUCH <br /> WITH US
        </h2>
        <p className="text-[#484948] text-sm md:text-base lg:mt-35 lg:text-lg font-Montserrat max-w-md">
          Fill out the form and our Team <br />will contact you as soon as<br /> possible
        </p>
      </div>

      <form className="w-full max-w-5xl bg-[#E0E0E0] rounded-xl lg:rounded-3xl mt-4 lg:mt-10 mx-auto p-4 md:p-6 lg:p-8 xl:p-12 space-y-6 md:space-y-8 lg:space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <div className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-[#1F3A93] font-Montserrat text-sm md:text-base mb-1">Name</label>
              <input
                type="text"
                placeholder="Type your name"
                className="w-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base font-Montserrat rounded-full bg-[#A8A8A8] text-white placeholder-white"
              />
            </div>

            <div>
              <label className="block text-[#1F3A93] font-Montserrat text-sm md:text-base mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base font-Montserrat rounded-full bg-[#A8A8A8] text-white placeholder-white"
              />
            </div>

            <div>
              <label className="block text-[#1F3A93] font-Montserrat text-sm md:text-base mb-1">
                Why should we hire you?
              </label>
              <textarea
                rows={4}
                placeholder="In 500 words"
                className="w-full p-3 md:p-4 text-sm md:text-base font-Montserrat rounded-lg md:rounded-xl bg-[#A8A8A8] text-white placeholder-white resize-none"
              ></textarea>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-[#1F3A93] font-Montserrat text-sm md:text-base mb-1">Phone no.</label>
              <input
                type="text"
                placeholder="Your phone number"
                className="w-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base font-Montserrat rounded-full bg-[#A8A8A8] text-white placeholder-white"
              />
            </div>

            <div>
              <label className="block text-[#1F3A93] font-Montserrat text-sm md:text-base mb-1">Expertise</label>
              <input
                type="text"
                placeholder="Your area of expertise"
                className="w-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base font-Montserrat rounded-full bg-[#A8A8A8] text-white placeholder-white"
              />
            </div>

            <div>
              <label className="block text-[#1F3A93] font-Montserrat text-sm md:text-base mb-1">Resume</label>
              <div className="relative">
                <input
                  type="file"
                  id="resume-upload"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".pdf,.doc,.docx"
                />
                <div className="w-full p-3 md:p-4 text-sm md:text-base font-Montserrat rounded-lg md:rounded-xl bg-[#A8A8A8] text-white min-h-[120px] md:min-h-[150px] flex items-center justify-center border border-white/30">
                  <label htmlFor="resume-upload" className="text-center cursor-pointer">
                    <div className="flex flex-col items-center">
                      <svg className="w-6 h-6 md:w-8 md:h-8 mb-1 md:mb-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                      <span className="text-xs md:text-sm">Attach your resume</span>
                      <span className="text-[10px] md:text-xs mt-1">PDF, DOC, DOCX (Max 15MB)</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-4 md:mt-6 lg:mt-8">
          <button
            type="submit"
            className="relative overflow-hidden bg-black text-white font-Montserrat font-semibold text-sm md:text-base px-6 md:px-8 py-1.5 md:py-2 rounded-full transition-all duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5"
          >
            <span className="relative z-10">Submit</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#8C8C8B] to-[#8C8C8B] opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          </button>
        </div>
      </form>
    </section>
  );
}