export default function About() {
  return (
    <div className="py-12 max-w-4xl space-y-16">
      <h1 className="text-6xl font-space font-extrabold uppercase bg-dark text-beige inline-block px-6 py-2 shadow-brutal">
        About & Experience
      </h1>
      
      <section className="space-y-8">
        <h2 className="text-3xl font-space font-bold border-b-4 border-dark pb-2 uppercase">{">"} Experience</h2>
        <div className="space-y-6">
          <div className="border-2 border-dark p-6 bg-offWhite shadow-brutal-sm">
            <h3 className="font-space font-bold text-2xl">Digital Egyptian Pioneer Initiative</h3>
            <p className="text-sm font-bold bg-beige border-2 border-dark px-2 py-1 inline-block my-3">Freelance Trainee | Oct 2024 - Jun 2026</p>
            <p className="leading-relaxed font-medium">Delivered 4+ independent freelance projects including UI/UX, academic diagrams, translation, and data annotation tasks.</p>
          </div>
          <div className="border-2 border-dark p-6 bg-beige shadow-brutal-sm">
            <h3 className="font-space font-bold text-2xl">National Media Authority</h3>
            <p className="text-sm font-bold bg-offWhite border-2 border-dark px-2 py-1 inline-block my-3">Infrastructure Security Fellow | Jun 2024 - Jul 2024</p>
            <p className="leading-relaxed font-medium">Evaluated physical and logical security of national-scale server environments and broadcast systems.</p>
          </div>
          <div className="border-2 border-dark p-6 bg-offWhite shadow-brutal-sm">
            <h3 className="font-space font-bold text-2xl">Arabic African International Bank</h3>
            <p className="text-sm font-bold bg-beige border-2 border-dark px-2 py-1 inline-block my-3">Operations/Data Intern | Aug 2024 - Sep 2024</p>
            <p className="leading-relaxed font-medium">Engineered data pipelines and PowerBI dashboards for operational insights.</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-space font-bold border-b-4 border-dark pb-2 uppercase">{">"} Education & Community</h2>
        <div className="border-2 border-dark p-8 bg-beige shadow-brutal space-y-6 font-medium">
          <div className="border-l-4 border-dark pl-4">
            <strong className="text-xl font-space">Benha National University</strong><br/>
            Bachelor of Computer Science (2022 - 2026). GDG ML Core Technical Advisor, Cybersecurity Learner.
          </div>
          <div className="border-l-4 border-dark pl-4">
            <strong className="text-xl font-space">English School / El-Nasr School</strong><br/>
            Graduated 75% (2008 - 2022). 2nd Place District Coding Competition, RoboCup Participant.
          </div>
        </div>
      </section>
    </div>
  );
}