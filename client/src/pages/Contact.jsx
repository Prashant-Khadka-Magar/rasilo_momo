import React from "react";
import ContactUsForm from "../components/ContactUsForm.jsx";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

function Contact() {
  return (
    <div>
      <header>
        <div
          id="contactMain"
          className="text-baseColor flex justify-center items-center flex-col"
        >
          <h1 className="text-6xl font-bold">CONTACT US</h1>
          <h2 className="text-2xl ">We are here to help</h2>
        </div>
      </header>
      <div>
        <ContactUsForm />
      </div>
      <div className="w-full max-w-lg mx-auto p-4">
        <h2 className="text-xl font-semibold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-xl mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Rasilo Momo?</AccordionTrigger>
              <AccordionContent>
                Rasilo Momo is a restaurant specializing in authentic and
                delicious momos, serving customers with the best flavors in
                town.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Where are you located?</AccordionTrigger>
              <AccordionContent>
                We are located at Warden Ave at Lawrence Ave E, Scarborough, ON.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer delivery?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer delivery services through our website and
                partnered platforms.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Contact;
