/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "./components/card";
import Hiringlist from "./components/hiringlist";
import NumberedCard from "./components/cardNumber";
import Image from "next/image";
import bannerImage from "/public/images/banner.png";

import HandImage from "/public/images/hand_7074888 1.png";
import HandshakImage from "/public/images/handshake_1006657 1.png";
import SearchImage from "/public/images/search_3645343 1.png";
function page(params) {
  const cardData = [
    {
      title: "Talent Matchmaker",
      description:
        "STACKKAROO is a platform for identifying Indian talent for global companies seeking remote workers. It considers skills, experience, preferences, availability to find the best match.",
      image: "/hand_7074888 1.png",
    },
    {
      title: "Easy Hiring",
      description:
        "We help with hiring, including interviews, negotiations, contracts, and onboarding. Indian talent and the company receive support during recruitment.",
      image: { HandImage },
    },
    {
      title: "Affordability",
      description:
        "The company pays a fee for talent hire based on salary and role difficulty. The talent is not charged a fee.",
      image: { HandshakImage },
    },
    {
      title: "Long-Term Relationship",
      description:
        "STACKKAROO maintains good talent-org relationships by providing feedback, performance appraisal, career development, and settling disputes.",
      image: { SearchImage },
    },
  ];

  const listData = [
    {
      title: "Profile Screeningand Shortlisting",
      description:
        "We evaluate applications based on minimum criteria, professional experience, and background checks of candidates.",
      image: "/public/banner.png",
    },
    {
      title: "Language Proficiency",
      description:
        "We use communication assessment test to assess candidates' reading, writing, pronunciation, clarity, fluency, and speech speed.",
      image: "/public/banner.png",
    },
    {
      title: "Aptitude Evaluation",
      description:
        "We administer scientifically designed aptitude test to assess candidates' reasoning & problem-solving abilities",
      image: "/public/banner.png",
    },
    {
      title: "Technical Assessment",
      description:
        "We have developed challenging and advanced technical assessments tailored to specific roles, ensuring that only the most skilled candidates make it.",
      image: "/public/banner.png",
    },
    {
      title: "Panel Interview",
      description:
        "Our talent acquisition experts conduct a final video interview in the presence of a representative from the hiring company. ",
      image: "/public/banner.png",
    },
  ];

  const NumbercardData = [
    {
      number: 1,
      title: "Share the Job Description with us",
      description:
        "Talent Specialists will contact you within 2 working hours after you share the job description with us including roles, responsibilities, skills, experience, and budget.",
    },
    {
      number: 2,
      title: "Review and Shortlist the Matches",
      description:
        "From there, review and shortlist the best fit profiles shared by STACKKAROO. Company will search if suitable people are not found.",
    },
    {
      number: 3,
      title: "Interview and Hire the Best",
      description:
        "You can interview and hire in 48 hours. Additionally, you can hire top talent from India with 40% cost saving.",
    },
    {
      number: 4,
      title: "Post Hiring Support",
      description:
        "We'll also ensure smooth onboarding and support, such as contracts, replacement, retention, cancellation and work in your time zone.",
    },
  ];
  return (
    <>
      <div class="min-h-screen bg-gradient-to-b from-rgba-blue-600 via-transparent to-transparent flex items-center mb-7 justify-center">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <Image
            src={bannerImage}
            alt="Description of the image"
            className="max-w-full h-auto"
          />
          <h1
            className="text-blue-500 text-4xl mt-4 font-bold"
            style={{
              fontSize: "40px",
              fontFamily: "YourFontFamily, sans-serif",
            }}
          >
            Experience Seamless Hiring
          </h1>
          <p className="text-lg mt-2 m-10 text-center">
            STACKKAROO is a hiring platform that picks the best of IT & Non-IT
            fields as well as web development, digital marketing, data science,
            business development, human resource, content writing, advertising
            and much more in India. Their communication skills, fit for culture,
            and ability to be ethical for global work will be assessed.
          </p>
          <button
            className="bg-orange-500 text-white w-44 h-12 mt-4 rounded-3xl"
            style={{ backgroundColor: "#E68F50" }}
          >
            Job Opening
          </button>
        </div>
      </div>
      <section className="py-10 text-center bg-gradient-to-b from-blue-400  to-purple-500  via-transparent">
        <h2
          className="text-3xl font-bold  mb-4 text-orange-500"
          style={{ fontSize: "35px" }}
        >
          We are Best Because
        </h2>
        <p
          className="text-lg text-gray-600 font-bold"
          style={{ fontSize: "25px" }}
        >
          Affordable Web Development Company in India
        </p>

        <div className="min-h-screen  flex flex-col items-center justify-center  mt-0">
          <div className="flex flex-wrap justify-center">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </section>
      {/* this is remote hiring process tab */}
      <div className="  bg-gradient-to-b from-blue-700 to-purple-500 h-25 w-full ">
        <h3 className="p-6 text-center">
          STACKKAROO aims to simplify the remote hiring process and allows
          global companies to tap into top tech talent from India. Also, it
          assists Indian talent to find the dream jobs on the global level
        </h3>
      </div>

      <section className="bg-gradient-to-b from-orange-700 to-blue-500 ">
        <h1 className="text-orange-500 font-bold text-xl text-center pt-10">
          Our Rigorous Hiring Process
        </h1>
        <h3 className="font-bold text-gray-700 text-center">
          To make sure, our Talent get the Best Opportunities
        </h3>
        <div className="min-h-screen  flex  items-center justify-center  mt-0">
          <div className="flex-col justify-center">
            {listData.map((list, index) => (
              <Hiringlist
                key={index}
                title={list.title}
                description={list.description}
                image={list.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <h1 className="font-bold text-orange-500 text-xl text-center">
          Hire Best Talents from Stackkaroo
        </h1>
        <h3 className="font-bold text-x text-gray-700 text-center">
          4 Easy Steps for Simple and Fast Hiring
        </h3>

        <div className="flex flex-wrap mt-8  justify-center">
          {NumbercardData.map((nlist, index) => (
            <NumberedCard
              key={index}
              number={nlist.number}
              title={nlist.title}
              description={nlist.description}
            />
          ))}
        </div>
      </section>

      <section>
        <h1 className="font-bold text-orange-500 text-xl pt-10 text-center">
          Benefits of Choosing Stackkaroo for Hiring Talents
        </h1>
        <h4 className="font-bold text-x text-gray-700 text-center">
          Range of Benefits for all firms, Financial and Non-Financial
        </h4>
      </section>
    </>
  );
}
export default page;
