import { useEffect } from "react";

export default function App() {
  const navItems = ["home", "about", "services", "gallery", "contact"];

  useEffect(() => {
    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
        const target = document.querySelector(href!);
        target?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <div className="bg-[#fefaf5] text-[#5c4433] font-sans tracking-wide pb-32">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md px-6 py-4">
        <ul className="flex gap-6 justify-center font-semibold text-lg">
          {navItems.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:underline capitalize">
                {id}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="space-y-40 pt-0">
        <section
          id="home"
          className="relative text-center bg-[#fff2e1] min-h-[90vh] flex flex-col items-center justify-center px-6 shadow-md overflow-hidden"
        >
          <img
            src="https://picsum.photos/1600/800?random=10"
            alt="Welcome to WHIM Therapy"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 max-w-3xl text-[#3b2e24] space-y-6">
            <h1 className="text-6xl font-extrabold drop-shadow-md">
              Welcome to WHIM Therapy
            </h1>
            <p className="text-2xl leading-relaxed">
              Personalized physical therapy to help you move, heal, and thrive.
            </p>
            <button className="bg-[#a58c6f] text-white px-6 py-3 rounded-full text-lg hover:brightness-110 transition">
              Book a Session
            </button>
          </div>
        </section>

        <section id="about" className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About</h2>
          <img
            src="https://picsum.photos/400/400?random=2"
            alt="Therapist portrait"
            className="w-44 h-44 object-cover rounded-full mx-auto mb-6 shadow-lg"
          />
          <p className="text-xl leading-relaxed bg-[#e6d8cb]/40 p-6 rounded-xl shadow">
            With over 20 years of experience, [Your Mom's Name] offers one-on-one care tailored to your body, your
            goals, and your recovery. She specializes in holistic healing and evidence-based therapy in a warm, inviting
            space.
          </p>
        </section>

        <section id="services" className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Services</h2>
          <p className="mb-6 text-xl">
            We provide a variety of therapies designed to restore movement, reduce pain, and build long-term strength.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              "Orthopedic & Post-Surgical Rehab",
              "Manual Therapy & Myofascial Release",
              "Balance & Fall Prevention",
              "Chronic Pain Management",
              "One-on-One Movement Coaching",
              "Mobility & Flexibility Training",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-[#fff2e1] p-6 rounded-xl shadow hover:shadow-lg transition text-left"
              >
                <h3 className="text-lg font-semibold mb-1">{text}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }, (_, idx) => (
              <img
                key={idx}
                src={`https://picsum.photos/600/400?random=${idx + 3}`}
                alt={`Gallery ${idx + 1}`}
                className="rounded-2xl shadow-lg w-full h-52 object-cover hover:scale-105 transition"
              />
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <div className="bg-[#fff2e1] p-6 rounded-xl shadow inline-block">
            <p className="text-xl">123 Wellness Ave, Pleasantville, CA</p>
            <p className="my-2 text-xl">Email: mom@ptclinic.com</p>
            <p className="text-xl">Phone: (555) 123-4567</p>
          </div>
        </section>
      </main>
    </div>
  );
}
