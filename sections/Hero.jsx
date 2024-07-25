'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for the date picker

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestCallback = () => {
    const whatsappNumber = "+91 9835345179"; // Replace with your WhatsApp number
    const whatsappMessage = `Hi, I would like to book a consultation on ${startDate.toLocaleDateString()}. Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Reset fields
    setStartDate(new Date());
    setMessage('');
    setIsModalOpen(false);
  };

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Consept
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>con</h1>
            <div className={styles.heroNText} />
            <h1 className={styles.heroHeading}>Nect</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <img
            src="/cover.png"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div>

        {/* Small Heading and Paragraph */}
        <div className="mt-6 text-center">
          <h2 className="text-xl text-gray-600 font-bold">Your Journey Starts Here</h2>
          <p className="mt-2 text-gray-600">
            Book a consultation with us today and take the <br />
            first step towards achieving your goals.
          </p>
        </div>

        {/* Book a Consultation button */}
        <div className="mt-[50px] flex justify-center">
          <button
            className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-[#8b5cf6]/50 hover:shadow-[#7c3aed]/50 transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            <i className="fas fa-calendar-alt mr-2"></i> {/* Calendar icon */}
            Book a Consultation
          </button>
        </div>

        {/* Modal for date and message input */}
        {isModalOpen && (
          <div className="modal" onClick={() => setIsModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={() => setIsModalOpen(false)}>✖</button>
              <h2>Book a Consultation</h2>
              <div className="flex flex-col mb-4">
                <label>Select Date:</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="border rounded-md p-2"
                  dateFormat="MMMM d, yyyy"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label>Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border rounded-md p-2"
                  rows="4"
                  required
                />
              </div>
              <div className="button-group">
                <button
                  type="button"
                  className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold py-2 px-4 rounded"
                  onClick={handleRequestCallback}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          position: relative;
          background: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          color: black;
          width: 90%; /* Responsive width */
          max-width: 400px; /* Max width for modal */
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }
        .button-group {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
        }
        .button-group button {
          margin-left: 10px;
        }
        .cancel-button {
          color: black;
        }
        .modal-content h2 {
          margin: 0 0 10px;
        }
        .modal-content label {
          margin-bottom: 5px;
        }
        .modal-content textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
