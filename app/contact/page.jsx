"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "03427565103",
    action: () => (window.location.href = "tel:+03427565103"),
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shahabhussain098123@gmail.com",
    action: () => (window.location.href = "mailto:shahabhussain098123@gmail.com"),
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Peshawar City",
    action: () =>
      window.open("https://maps.app.goo.gl/zhsKEvBH1xfbzxDq8", "_blank"),
  },
];

const Contact = () => {


  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12"
    >
      <div className="container mx-auto">
        <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-[30px]">
          {/* text */}
          <div className="w-full h-[524px] max-w-[500px] flex flex-col justify-between gap-6">
            {/* message */}
            <div className="flex flex-col justify-center items-center gap-2 rounded-xl p-[30px] bg-black/10 text-white">
              <h3 className="h3 text-center w-full">Let's connect!</h3>
              <p className="p max-w-[336px] mx-auto text-center">
                Reach out to discuss opportunities, projects, or simply to start
                a conversation.
              </p>
            </div>
            {/* info */}
            <div className="h-full flex flex-col items-center justify-center rounded-xl p-8 bg-black/10 text-white">
              <ul className="flex flex-col gap-[30px]">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div
                        className="w-12 h-12 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500"
                        onClick={item.action}
                      >
                        <div className="text-xl">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="uppercase text-accent">{item.title}</p>
                        <h3 className="text-base tracking-tight text-white/60">
                          {item.description}
                        </h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
       
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
