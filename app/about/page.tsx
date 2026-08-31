export default function About() {
  return (
    <div className="space-y-12 py-10 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">About & Experience</h1>
      
      <section>
        <h2 className="text-2xl font-semibold border-b pb-2 mb-6">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg">Digital Egyptian Pioneer Initiative | Freelance Trainee</h3>
            <p className="text-sm text-gray-500 mb-2">Oct 2024 - Jun 2026</p>
            <p className="text-gray-700">Delivered 4+ independent freelance projects including UI/UX, academic diagrams, translation, and data annotation tasks.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">National Media Authority | Infrastructure Security Fellow</h3>
            <p className="text-sm text-gray-500 mb-2">Jun 2024 - Jul 2024 | Maspero</p>
            <p className="text-gray-700">Evaluated physical and logical security of national-scale server environments and broadcast systems.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Arabic African International Bank | Operations/Data Intern</h3>
            <p className="text-sm text-gray-500 mb-2">Aug 2024 - Sep 2024 | Digital Factory, New Cairo</p>
            <p className="text-gray-700">Engineered data pipelines and PowerBI dashboards for operational insights.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-2 mb-6">Education & Volunteering</h2>
        <div className="space-y-4">
          <p><strong>Benha National University</strong> — Bachelor of Computer Science (2022 - 2026). GDG Cybersecurity Learner, ML Core Technical Advisor.</p>
          <p><strong>GDG on BNU Campus</strong> — Machine Learning Technical teaching freshmen (Jan-Apr 2024) and Cyber Security Member (Sep-Dec 2023).</p>
          <p><strong>English School / El-Nasr School</strong> — Graduated 75%. RoboCup Participant and 2nd Place District Coding Competition (2008 - 2022).</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-2 mb-6">Courses & Certifications</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>DevOps (DEPI):</strong> Automated infrastructure provisioning and containerized migration using AWS, Docker, Kubernetes, Jenkins, and Terraform.</li>
          <li><strong>Software Testing (DEPI):</strong> Applied ISTQB methodologies, engineered testing suites using Selenium and Java's TestNG.</li>
          <li><strong>Data Engineering (Coursera/IBM):</strong> Built predictive models, performed EDA, and feature engineering.</li>
          <li><strong>CCNA Routing and Switching:</strong> Mastered IP addressing, subnetting, and switching concepts.</li>
        </ul>
      </section>
    </div>
  );
}