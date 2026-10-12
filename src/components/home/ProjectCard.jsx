import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
export default function ProjectCard({ image, title, description, last = false }) {
  return (
    <div className={`card flex flex-col w-full max-w-[421px] z-10 rounded-3xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] overflow-hidden ${last ? "md:col-span-2 lg:col-span-1" : ""}`}>
      <img className="w-full h-[210px] object-cover" src={image} alt={title} />
      <div className="h-fit px-[10px] py-5 m-2">
        <h3 className="font-bold text-2xl lg:text-[32px] text-[#192A4A]">{title}</h3>
        <p className="font-normal text-xl lg:text-[24px] text-[#4F5666]">{description}</p>
      </div>
      <Link to="/projects" className="mt-auto text-[#A68539] font-bold text-xl lg:text-[24px] py-3 px-4 w-fit h-fit gap-1 mb-2 inline-flex items-center">
        اكتشف التفاصيل <ArrowLeft size={20} aria-hidden="true" />
      </Link>
    </div>
  );
}
