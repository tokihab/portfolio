export default function Contact() {
  return (
    <div className="py-10 max-w-3xl space-y-10">
      <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-gray-700">Roxy, Heliopolis<br />Cairo, Egypt</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Direct Contact</h3>
            <p className="text-gray-700">Email: tony0100512@cs.bnu.edu.eg</p>
            <p className="text-gray-700">Phone: 01224477633</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Profiles</h3>
            <div className="flex flex-col space-y-2 mt-2">
              <a href="https://github.com/tokihab" className="text-blue-600 hover:underline">GitHub Overview</a>
              <a href="https://www.linkedin.com/in/toni-ihab/" className="text-blue-600 hover:underline">LinkedIn Network</a>
              <a href="https://huggingface.co/TOKII" className="text-blue-600 hover:underline">Hugging Face Spaces</a>
            </div>
          </div>
        </div>

        <div className="border p-6 rounded-lg bg-white shadow-sm">
          <h3 className="font-bold text-xl mb-4">Schedule a Meeting</h3>
          <p className="text-gray-600 mb-6">Use the calendar to book a quick introductory call or technical discussion.</p>
          <a href="https://calendly.com/tony0100512-cs" target="_blank" className="w-full block text-center bg-black text-white px-5 py-3 rounded-md font-medium hover:bg-gray-800 transition">
            Open Calendly Booking
          </a>
        </div>
      </div>
    </div>
  );
}