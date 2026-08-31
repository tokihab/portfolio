export default function Contact() {
  return (
    <div className="py-12 max-w-5xl space-y-16">
      <h1 className="text-6xl font-space font-extrabold uppercase bg-dark text-beige inline-block px-6 py-2 shadow-brutal">
        Initialize Connection
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Audit Required Details */}
        <div className="space-y-8 bg-beige border-2 border-dark p-8 shadow-brutal">
          <div>
            <h3 className="font-space font-bold text-2xl uppercase border-b-2 border-dark pb-2 mb-4">{">"} Location Data</h3>
            <p className="font-bold text-lg">Roxy, Heliopolis<br />Cairo, Egypt</p>
          </div>
          <div>
            <h3 className="font-space font-bold text-2xl uppercase border-b-2 border-dark pb-2 mb-4">{">"} Direct Comms</h3>
            <p className="font-bold text-lg">Email: tony0100512@cs.bnu.edu.eg</p>
            <p className="font-bold text-lg mt-2">Phone: 01224477633</p>
          </div>
          <div>
            <h3 className="font-space font-bold text-2xl uppercase border-b-2 border-dark pb-2 mb-4">{">"} External Nodes</h3>
            <div className="flex flex-col space-y-4 mt-4 font-bold">
              <a href="https://github.com/tokihab" className="hover:bg-dark hover:text-offWhite px-2 py-1 w-fit transition-colors">↳ GitHub Repository</a>
              <a href="https://www.linkedin.com/in/toni-ihab/" className="hover:bg-dark hover:text-offWhite px-2 py-1 w-fit transition-colors">↳ LinkedIn Network</a>
              <a href="https://huggingface.co/TOKII" className="hover:bg-dark hover:text-offWhite px-2 py-1 w-fit transition-colors">↳ Hugging Face Spaces</a>
            </div>
          </div>
        </div>

        {/* Booking CTA */}
        <div className="border-2 border-dark p-8 bg-offWhite shadow-brutal flex flex-col justify-center items-center text-center">
          <h3 className="font-space font-bold text-4xl mb-6 uppercase">Schedule a Meeting</h3>
          <p className="text-dark font-medium mb-10 text-lg max-w-sm">Use the calendar interface to book a quick introductory call or technical discussion.</p>
          <a href="https://calendly.com/tony0100512-cs" target="_blank" className="w-full bg-dark text-beige px-6 py-6 font-space text-xl font-bold border-2 border-dark shadow-brutal-sm hover:translate-y-1 hover:shadow-none transition-all">
            OPEN_CALENDLY()
          </a>
        </div>
      </div>
    </div>
  );
}