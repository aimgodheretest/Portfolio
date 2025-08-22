import { Code, Palette, Layers } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Frontend Developer | React & Tailwind Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m a dedicated and detail-oriented Frontend Developer skilled in
              HTML, CSS, JavaScript, React, and Tailwind CSS. I love
              transforming ideas into clean, responsive, and interactive web
              experiences. My focus is on writing maintainable code, crafting
              beautiful UIs, and ensuring every project is optimized for
              performance and user satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1S_JZOQ-JqnFLq3-DwpWlV-3e1czFlMbb/view?usp=sharing"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Skills Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and high-performing websites using HTML,
                    CSS, JavaScript, and React.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI Styling</h4>
                  <p className="text-muted-foreground">
                    Crafting modern, responsive designs with Tailwind CSS for
                    seamless user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Component-Based Design
                  </h4>
                  <p className="text-muted-foreground">
                    Creating reusable, scalable components in React to speed up
                    development and maintain consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
