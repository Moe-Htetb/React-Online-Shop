import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <Container>
        <footer className="bg-black text-center py-3 sm:mt-24 md:mt-16 text-white">
          @ {date}
          <a href="https://mms-it.com" className="text-slate-300 underline">
            MMSIT
          </a>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
