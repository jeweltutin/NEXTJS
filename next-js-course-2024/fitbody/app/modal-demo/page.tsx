"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../../components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedModalDemo() {
  const singleImage = "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          Book your flight
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-md md:text-[18px] text-neutral-600 dark:text-neutral-100 font-bold text-center mb-3">
              Title goes here
            </h4>
            <div className="flex justify-center items-center">
              <motion.div
                style={{
                  rotate: Math.random() * 20 - 10,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  zIndex: 100,
                }}
                whileTap={{
                  scale: 1.2,
                  rotate: 0,
                  zIndex: 100,
                }}
                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
              >
                <Image
                  src={singleImage}
                  alt="bali images"
                  width="500"
                  height="500"
                  className="rounded-lg h-[250px] w-[250px] md:w-[450px] md:h-[450px] object-cover flex-shrink-0"
                />
              </motion.div>
            </div>
            <div className="py-6 flex flex-wrap gap-x-2 gap-y-2 items-start justify-start mx-auto">
              <div className="font-semibold text-[18px]">
                Price: 20000 tk
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam atque veniam eaque,
                odio voluptatibus repudiandae nostrum vero totam perspiciatis modi, qui ab veritatis
                voluptates sint maxime, eligendi numquam libero quia.
              </p>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}