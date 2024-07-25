'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestCallback = () => {
    const whatsappNumber = "+91 9835345179"; // Replace with your WhatsApp number
    const whatsappMessage = `Hi, I'm ${name}. My phone number is ${phone}. Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    // Close the modal and reset fields
    setIsModalOpen(false);
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Services we Offer" textStyles="text-center" />
        <TitleText
          title={<>Almost everything you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>

        {/* Request a Call Back button */}
        <div className="mt-[50px] flex justify-center">
          <button
            className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-[#8b5cf6]/50 hover:shadow-[#7c3aed]/50 transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Request a Call Back!
          </button>
        </div>
      </motion.div>

      {/* Modal for Request a Call Back */}
      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsModalOpen(false)}>✖</button>
            <h2>Request a Call Back</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleRequestCallback(); }}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Phone:</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="button-group">
                <button type="submit" className='button-primary'>Submit</button>
                <button type="button" className="cancel-button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
        .modal-content div {
          margin-bottom: 10px;
        }
        .modal-content label {
          display: block;
          margin-bottom: 5px;
        }
        .modal-content input,
        .modal-content textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          color: black;
        }
        .modal-content textarea {
          height: 60px;
        }
      `}</style>
    </section>
  );
};

export default Explore;
