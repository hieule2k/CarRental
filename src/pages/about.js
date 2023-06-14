import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const About = () => {
  return (
    <div className="px-3.5 mt-24 xl:px-24">
      <div>
        <h1 className="text-2xl font-bold relative mb-24 after:absolute after:h-[1px] after:w-full after:bg-borderBarelyVisible after:bottom-[-20px] after:left-0  ">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h1>
        <div className="gap-4 xl:flex">
          <div className="xl:basis-[47%]">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/303/610/410/porsche-porsche-taycan-4s-blue-car-car-porsche-taycan-hd-wallpaper-preview.jpg"
              alt="Error"
            />
          </div>
          <div className="flex flex-col gap-10 mt-12 xl:mt-0 xl:basis-1/2">
            <h2 className="text-xl font-medium text-textBlue">Quick Facts</h2>
            <div className="text-sm leading-relaxed opacity-70">
              For nearly a century, We has made it our mission to move the
              world. Through our employees and their achievements, we’ve created
              a company we can all be proud of.
            </div>
            <div className="text-sm leading-relaxed opacity-70">
              We was founded in 1926 by Karl Le, Gottlieb Le, Wilhelm Le and
              Emil Le, whose daughter Le is our original namesake. With offices
              in 93 locations worldwide and a corporate headquarters in
              Stuttgart, VietNam, our global presence continues to grow.
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#eee] flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:bg-red">
                <a
                  href="https://www.facebook.com/profile.php?id=100005223543956"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
              <div className="w-12 h-12 bg-[#eee] flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:bg-red">
                <a
                  href="https://github.com/hieule2k"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <div className="w-12 h-12 bg-[#eee] flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:bg-red">
                <a
                  href="https://portfolio-obgdm4nmx-hieulequang455-gmailcom.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-24 mb-24">
        <h1 className="text-2xl font-bold relative mb-12 after:absolute after:h-[1px] after:w-full after:bg-borderBarelyVisible after:bottom-[-20px] after:left-0  ">
          Our Impact: Driving Your Future
        </h1>
        <div>
          <h2 className="text-xl font-bold">
            Read our 2022 Social Responsibility Impact Report to learn how
            Driving Your Future is making positive change.
          </h2>
          <div className="text-sm leading-relaxed opacity-70">
            “As a high school student, Junior Achievement introduced me to some
            great mentors in my local business community who taught us important
            business lessons. These basic lessons in business have been applied
            hundreds of times throughout my 39 years in automotive. At
            Mercedes-Benz of Manhattan, we are now working with some local
            Junior Achievement USA high schools and have led mentoring sessions
            with our management team to show students how they can apply their
            education into an automotive retail setting. We set up short classes
            with managers from different backgrounds and disciplines to speak
            directly with the students.  It makes me feel good to know that I
            could make a positive impact and open up opportunities for someone
            who may have been unsure that opportunities even exist for them. It
            is important to give back knowledge and hope to the younger
            generation.”
          </div>
        </div>
        <div className="text-sm leading-relaxed opacity-70">
          “Having grown up Boston, MA, and considered an inner-city youth with
          limited access to resources in my area, I appreciate Mercedes-Benz
          USA’s commitment to the Driving Your Future mission. From the moment I
          joined the MBUSA family, I knew that my work would not be complete
          without getting involved in the company efforts to give back. Being a
          part of Driving Your Future provides me numerous opportunities to
          contribute to the communities we serve. Reading to Hollis Elementary
          students, sorting food and clothing at the Community Assistance Center
          of Sandy Springs, GA, delivering backpacks and handing out school
          supplies at the Atlanta Public Schools Back-to-School Bash, and
          spending time with the Warren Boys & Girls Club teens — these moments
          have been fulfilling. MBUSA is more than just cars, we are focused on
          supporting the next generation as they drive into their future with
          endless possibilities before them. I live for the moments of reminding
          others to KEEP GOING and not give up. I often say, ‘don’t focus on the
          flat tire, be reminded that life gives you spares so you can focus on
          the road ahead.’”
        </div>
        <div className="text-sm leading-relaxed opacity-70">
          Nationally, we’ve partnered with Safe Kids Worldwide® and Junior
          Achievement USA®, two non-profit organizations that support education
          around technology and sustainability, career readiness, and injury
          prevention. On a local level, we are pleased to partner with several
          mission-relevant non-profit organizations including Atlanta Public
          Schools and Communities In Schools of Atlanta. Learn more about our
          non-profit partners and how you can get involved too.
        </div>
      </div>
    </div>
  );
};

export default About;
