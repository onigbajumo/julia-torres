import Image from "next/image";
import React from "react";
import Experience from "./experience";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";

export const metadata = {
  title: "Who is Julia Torres?",
};

const headShots = [
  {
    credit: "MEGAN ALVAREZ",
    path: "/images/portrait-2.png",
  },
  {
    credit: "LELA KIELER",
    path: "/images/headshot-2.png",
  },
  {
    credit: "MARCELO ARGOLO",
    path: "/images/headshot-3.png",
  },
  {
    credit: "MEGAN ALVAREZ",
    path: "/images/headshot-4.png",
  },
];

const Page = () => {
  return (
    <div className="mb-10 space-y-10">
      <section className="container">
        <div className="bg-white rounded-2xl px-5 py-14 grid md:grid-cols-2 items-center gap-16 bg-[url('/images/about-bg.svg')] bg-cover bg-center bg-no-repeat">
          <div>
            <Image
              src="/images/about-image.png"
              width={1000}
              height={1000}
              alt="portrait"
              className="w-full"
            />
          </div>

          <div className="space-y-5">
            <h2>Who is Julia Torres?</h2>

            <p className="text-[#6C6969]">
              JULIA E. TORRES is a nationally recognized veteran language arts
              teacher, librarian, and teen programs administrator in Denver,
              Colorado. Julia facilitates teacher development workshops rooted
              in the areas of anti-racist education, equity and access in
              literacy and librarianship, and education as a practice of
              liberation. Julia&lsquo;s work has been featured on NPR,
              AlJazeera’s The Stream, PBS Education, KQED’s MindShift,
              Rethinking Schools, Learning for Justice Magazine, School Library
              Journal, American Libraries Magazine, and many more. Her
              co-authored title Liven Up Your Library: Design Engaging and
              Inclusive Programs for Teens and Tweens is just the first of many
              forthcoming publications for librarians and educators.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="bg-primary rounded-2xl p-5 grid gap-5">
          <div className="grid md:grid-cols-5 gap-5">
            <div className="md:col-span-3 space-y-3">
              <h2 className="text-white">A Lifetime of Dedication</h2>

              <p className="text-white text-base">
                JULIA E. TORRES is a TheEdCollab Book Ambassador, focusing on
                6-12 readers (meet our K-5 Ambassador, JoEllen, here). Julia is
                an expert in secondary writing and reading instruction,
                including accelerated reading and writing instruction for
                multilingual students and those learning in urban environments.{" "}
                <br />
                <br />
                Julia facilitates workshops and professional conversations
                around the country pertaining to best practices in reading and
                writing instruction, culturally sustaining pedagogies in
                language arts, as well as digital literacy and librarianship.{" "}
                <br />
                <br />
                Currently, Julia is a teacher librarian for five schools on the
                Montbello Campus within the Far Northeast region of Denver
                Public schools. Across over sixteen years in education, Julia
                has taught in small, medium, and large districts, across the
                Western United States. Her high school teaching career has
                included teaching freshman English up through advanced courses
                including World Literature and AP English Literacy and
                Composition. In 2014, Julia began teaching in the largest (and
                only urban district in Colorado)—Denver Public Schools. As a
                teacher at Denver Center for International Studies at Montbello,
                Julia taught Concurrent Enrollment English classes partnering
                with Aurora Community College. Julia has also taught Creative
                Writing and African-American Literature through University of
                Colorado Denver’s Upward Bound pre-collegiate summer academic
                institute.
              </p>
            </div>

            <div className="md:col-span-2">
              <Image
                src="/images/portrait-5.jpg"
                width={1000}
                height={1000}
                alt="portrait"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-white text-base">
              Within Denver Public Schools, Julia was chosen to be a member of
              the steering committee for the Superintendent’s African-American
              Equity Task Force ongoing work that continues to seek improved
              schooling and work conditions for African-American students and
              teachers within Denver Public Schools.  Julia has also cooperated
              with the DPS Imaginarium and the Culture Equity Leadership Team as
              a school leader working to spread the adoption of culturally
              responsive teaching practices throughout the district. Julia leads
              several community book clubs and projects focused on engaging
              literature written predominantly by authors of color for children
              of color.
              <br />
              <br />
              In May 2018, Julia was selected as a 2018-20 Heinemann Fellow. Her
              action research focused on the changing role of school libraries,
              and the intersection between traditional and digital literacy as
              pertaining to the formation of reading identities among secondary
              education students in urban school districts.
              <br />
              <br />
              As a teacher/activist committed to education as a practice of
              freedom, her practice is grounded in the work of empowering
              teachers and students to use language arts education to fuel
              resistance and positive social transformation.  Julia has also
              served Colorado language arts teachers as the Vice-President and
              President of the regional NCTE affiliate–The Colorado Language
              Arts Society, and on the national executive board as the NCTE
              Secondary Representative-at-Large.  In her work as a member of
              Educolor’s Steering Committee, Julia frequently collaborates with
              the collective by participating in online chats as well as local
              community organizing and the creation of school and classroom
              resources that promote educational equity, student agency, and the
              advancement of teacher pedagogy with respect to
              anti-bias/anti-racist educational curriculum development, and
              practices, as well as educational progressivism.
              <br />
              <br />A record of some of Julia’s time in the classroom is kept on
              her blog at juliaetorres.blog Julia was awarded the 2020 NCTE
              Colorado Affiliate Teacher of Excellence award, chosen as a 2020
              Library Journal Mover and Shaker, and serves as a member of the
              ALAN (Assembly on Literature for Adolescents of NCTE) Board of
              Directors. Julia is a co-founder of DisruptTexts.org and a current
              Amelia Elizabeth Walden Award Committee Member a Book Love
              Foundation Board Member and Podcast Creative Director. Her work
              has been featured in several publications including NCTE’s Council
              Chronicle, NPR, AlJazeera’s The Stream, PBS Education, KQED’s
              MindShift, NY Times Learning Network, The Chicago Tribune, ASCD’s
              Education Update, Rethinking Schools, School Library Journal, and
              many more.  Her forthcoming title, Liven Up Your Library will be
              published by ISTE publications in 2022.
            </p>
          </div>
        </div>
      </section>

      <section className="container grid md:grid-cols-2">
        <div>
          <Image
            src="/images/portrait-6.png"
            width={1000}
            height={1000}
            alt="portrait"
            className="object-cover w-full h-full rounded-tl-2xl md:rounded-bl-2xl rounded-tr-2xl md:rounded-tr-none"
          />
        </div>

        <div className="bg-white md:rounded-tr-2xl rounded-br-2xl md:rounded-bl-none rounded-bl-2xl p-10 flex flex-col gap-9 justify-center">
          <h2>My Journey in Education</h2>

          <p>
            JULIA E. TORRES is a nationally recognized veteran language arts
            teacher, librarian, and teen programs administrator in Denver,
            Colorado.  She is a teacher/activist committed to education as a
            practice of freedom. Her practice is grounded in the work of
            empowering students to use Language Arts to fuel transformative
            resistance and social progress. Julia has been awarded the 2020 NCTE
            Colorado Affiliate Teacher of Excellence award chosen as a 2020
            Library Journal Mover and Shaker, and serves educators as a member
            of the Educolor Collective, Book Love Foundation, and as a
            Co-founder of #DisruptTexts. Through her work with The Educator
            Collaborative, and other organizations, Julia facilitates workshops
            and professional conversations about anti-bias/anti-racist
            education, social justice, and culturally sustaining pedagogies in
            Language Arts, as well as digital literacy and librarianship. Her
            work has been featured in several publications including NCTE’s
            Council Chronicle, NPR, AlJazeera’s The Stream, PBS Education,
            KQED’s MindShift, NY Times Learning Network, The Chicago Tribune,
            ASCD’s Education Update, Rethinking Schools, School Library Journal,
            and many more. Her co-authored title Liven Up Your Library: Design
            Engaging and Inclusive Programs for Teens and Tweens is just the
            first of many forthcoming publications for librarians and educators.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="bg-white rounded-2xl p-5 md:p-0 space-y-5">
          <div className="md:p-5">
            <h2>Professional Accomplishments & Accolades</h2>
          </div>
          <Experience />
        </div>
      </div>

      <section className="container">
        <div className="p-5 bg-white rounded-2xl">
          <div>
            <h2 className="w-full md:w-2/3 lg:w-1/3">
              Download Julia’s Official Headshots
            </h2>

            <p className="mt-3 w-full md:w-2/3">
              Need a professional image of Julia for press, events, or
              promotional materials? Download high-resolution headshots below
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-8">
            {headShots.map((headShot, index) => (
              <div key={index} className="">
                <div className="relative">
                  <Image
                    src={headShot.path}
                    width={1000}
                    height={1000}
                    alt="portrait"
                    className="w-full object-cover rounded-lg aspect-[4/5]"
                  />

                  <div className="absolute top-2 right-2 ">
                    <Link
                      href={headShot.path}
                      target="_blank"
                      download
                      className="text-white bg-black bg-opacity-30 rounded-full p-2 w-10 h-10 grid place-content-center"
                    >
                      <FaDownload />
                    </Link>
                  </div>
                </div>

                <p className="text-center capitalize mt-2 text-sm">
                  Credit: {headShot.credit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
