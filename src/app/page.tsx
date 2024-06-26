import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { experience, projects } from "@/data/project";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-24 lg:pt-24 backdrop-blur-3xl">
        <section>
          <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-between items-center">
            <div></div>
            <div className="flex flex-col-reverse justify-center lg:items-center lg:flex-row gap-8">
              <div className="text-center">
                <h1>Introduction:</h1>
                <p className="max-w-96">
                  I'm a Full-Stack developer, with over 4
                  years of experience, writing web
                  applications for the future. (real)
                </p>
                <p className="max-w-96">
                  Specialize in 3D web technologies.
                </p>
                <p className="max-w-96">
                  I mostly work on a freelance basis but
                  every once in a while, I fancy a good ol'
                  9-5.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  width={200}
                  height={200}
                  src="/images/Black & White 1.png"
                  alt="ashir"
                  className="w-full"
                />
              </div>
            </div>
            <div></div>
          </div>
        </section>

        <section>
          <div id="projects" className="max-w-screen-xl flex-col flex gap-8 text-center items-center mx-auto p-4">
            <h1>Projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-lg:justify-center items-center lg:place-items-center">
              {
                projects.map((project, index) => (
                  <Card key={index} className="max-w-96 w-full h-full">
                    <CardHeader>
                      <CardTitle className="font-black">{project.name}</CardTitle>
                      <CardDescription className="text-primary">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={project.link}>
                        <Button className="w-full">Visit</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))
              }
            </div>
            <Link href="https://github.com/ashirasif">Check out my <span className="link">Github</span> for more</Link>
          </div>
        </section>

        <section>
          <div className="max-w-screen-xl flex-col flex gap-8 items-center mx-auto p-4">
            <h1>Experience</h1>
            <div className="space-y-4 max-w-screen-md">
              {
                experience.map((exp, index) => (
                  <div key={index} className="border-l-2 relative border-primary pl-8">
                    <div className="h-4 w-4 bg-primary rounded-full absolute top-0 -left-2"></div>
                    <div className="h-4 w-4 bg-primary rounded-full absolute bottom-0 -left-2"></div>
                    <h2>{exp.company}</h2>
                    <h4>{exp.title}</h4>
                    <p>{exp.description}</p>
                    <div className="muted">{exp.duration}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-screen-xl flex-col flex gap-8 text-center items-center mx-auto p-4">
            <h1>Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-screen-md justify-center">
              <div>React.js</div>
              <div>NEXT.js</div>
              <div>Node.js</div>
              <div>Python, Django</div>
              <div>Three.js & react-three-fiber</div>
              <div>Jquery</div>
              <div>HTML5</div>
              <div>CSS</div>
              <div>Tailwind Css</div>
              <div>Bootstrap</div>
              <div>Shadcn UI</div>
              <div>React Native</div>
              <div>Blender (portfolio)</div>
              <div>PHP, Wordpress</div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="max-w-screen-xl flex justify-center mx-auto p-4">
            <Card className="max-w-96 w-full">
              <CardHeader>
                <CardTitle className="font-black">Contact</CardTitle>
                <CardDescription>Feel free to reach out for literally anything!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 lg:grid-cols-2 gap-2 max-lg:place-items-start lg:place-items-center">
                  <div className="font-semibold">Email</div>
                  <div className="max-lg:col-span-2"><a className="link" href="mailto:mashir670@gmail.com">mashir670@gmail.com</a></div>
                  <div className="font-semibold">Phone</div>
                  <div className="max-lg:col-span-2">+92 327 4296941</div>
                  <div className="font-semibold">Location</div>
                  <div className="max-lg:col-span-2">Lahore, Pakistan</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
