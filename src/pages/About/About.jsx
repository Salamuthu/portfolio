import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";
import SocialCards from "@/components/SocialCards.jsx";
import HoverPhoto from "@/components/HoverPhoto.jsx";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <HoverPhoto />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-semibold">Praveen Jayathilake</span>, a Computer Science undergraduate with a strong interest in software engineering
                and modern application development. I enjoy building user-friendly, practical solutions and continuously
                improving my skills through hands-on projects and continuous learning.
              </p>

              <p className="text-white">
                My primary focus is on{" "}
                <span className="font-bold text-white">core software development principles</span>
                , including backend development, frontend development, and problem-solving through code. Alongside my academic studies,
                I actively explore new technologies, tools, and best practices to grow as a well-rounded and adaptable developer.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm also a{" "}
                    <span className="font-semibold">national-level athlete</span>, which has
                    shaped my discipline, consistency, and goal-oriented mindset—qualities
                    I bring into my development journey. As a lifelong learner, I’m driven
                    to improve every day and aim to build reliable, impactful software
                    solutions in the future.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Praveen Salamuthu Jayathilake
                    </cite>
                    <div className="flex items-center gap-2">

                      <span className="text-white">Computer Science Undergraduate & Aspiring Software Engineer</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-24">
          <SocialCards />
        </div>
      </section>
    </>
  );
}
