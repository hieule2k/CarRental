import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
  return (
    <div className="mt-12 px-3.5 xl:px-32 xl:flex xl:items-center ">
      <img
        src="https://i.pinimg.com/474x/23/b6/0a/23b60a00202edbc1ca154634b41e51e8.jpg"
        alt="none"
        className="w-full h-[300px] rounded  xl:basis-[47%] xl:h-[350px]"
      />
      <div className="flex flex-col gap-4 mt-16 xl:mt-0 xl:items-center xl:flex-1 xl:gap-12 ">
        <h1 className="text-2xl font-bold text-center text-textBlue xl:text-3xl">
          Lê Quang Hiếu
        </h1>
        <div className="text-lg font-semibold text-center text-textBlue">
          <a
            href="https://portfolio-obgdm4nmx-hieulequang455-gmailcom.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            My Portfolio
          </a>
        </div>
        <div className="flex flex-col items-center ">
          <div className="text-lg font-semibold">0828382000</div>
          <div className="text-lg font-semibold">hieulqwork@gmail.com</div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <a
            href="https://www.facebook.com/profile.php?id=100005223543956"
            target="_blank"
            rel="noreferrer"
            className="text-3xl transition-all duration-300 ease-in-out cursor-pointer hover:text-red"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://github.com/hieule2k"
            rel="noreferrer"
            target="_blank"
            className="text-3xl transition-all duration-300 ease-in-out cursor-pointer hover:text-red"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
