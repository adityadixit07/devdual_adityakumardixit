import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div className="flex justify-center flex-col flex-wrap mt-10 max-w-[1300px] m-auto">
      <div className="flex items-start pb-4 mx-4">
        <h1 className="text-3xl">About The - </h1>
        <div className="text-center text-3xl text-orange-500">
          <Typewriter
            options={{
              strings: [
                "Legacy of Chattarpati Shahu Ji Maharaj University, Kanpur",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div>
        <p className="text-gray-800 text-xl mx-4">
          {`" `}
          Chhatrapati Shahu Ji Maharaj University Kanpur, a premier landmark of
          higher education in Uttar Pradesh is named after the great social
          reformer Chhatrapati Shahu Maharaj also known as Rajarshi Shahu. It is
          a well-established and respected educational community where students
          of all backgrounds study and work together in a congenial and
          encouraging academic atmosphere. The university is geared to provide
          maximum scholastic benefit to each individual student and nurture them
          to achieve their full potential and evolve as a responsible global
          citizen Shahuji Maharaj was the first Maharaja of the princely state
          of Kolhapur. Greatly influenced by the contributions of social
          reformer Jyotiba Phule and the Satya Sodhak Samaj movement, Shahu
          Maharaj was an ideal leader and able ruler who was associated with
          many progressive and path breaking activities during his rule. He was
          born Yeshwantrao in the Ghatge family in Kagal village of the Kolhapur
          district as Yeshwantrao Ghatge to Jaisingrao and Radhabai in June 26,
          1874. From his coronation in 1894 till his demise in 1922, he worked
          tirelessly for the cause of the lower caste subjects in his state.
          Primary education was made free to all regardless of caste and creed.
          He introduced a number of educational programs to promote education
          among his subjects. He established hostels separately for different
          ethnicities and religions and introduced several scholarships for
          meritorious students. He established Vedic Schools that enabled
          students from all castes and classes to learn the scriptures and
          propagate Sanskrit education among all. He also started special
          schools for the village heads or ‘Patils’ to make them into better
          administrators. Shahu Maharaj issued orders to open schools and
          hostels for backward castes, which was a unique initiative to educate
          those who were traditionally neglected for centuries. He exhorted that
          “It is necessary to end casteism. It is a crime to support caste.
          Caste is the biggest obstacle in the progress of our society.
          Caste-based organizations have vested interests. Certainly such
          organizations should use their power to end caste system, instead of
          strengthening them”. He established schools to educate the women, and
          introduced a law banning the Devadsi Pratha, the practice of offering
          girls to God, which essentially led to exploitation of the girls. He
          legalised widow remarriages in 1917 and made efforts towards stopping
          child marriages.
          {` "`}
        </p>
      </div>
    </div>
  );
};

export default About;
