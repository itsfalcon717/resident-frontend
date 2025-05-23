import React from "react";
import { Link } from "react-router-dom";

const TutorialCard = ({ link, title, imgSrc, altText, idx }: { link: string; title: string; imgSrc: string; altText: string, idx: number }) => {
    return (
        <div className={`border rounded-md py-4 px-5 text-slate-700 subpixel-antialiased shadow-none hover:border-primary ${idx == 0 && "border-primary"}`}>
            <Link to={link} className="flex flex-col gap-2 sm:flex-row flex-1 items-center justify-between">
                <div className="flex flex-col space-y-1.5 h-full p-0">
                    <h3 className="tracking-tight tex-sm lg:text-lg font-normal text-slate-700">
                        {title}
                    </h3>
                    <div className="hidden lg:block pt-5">
                        <div className="text-md text-center font-semibold text-slate-500 border border-slate-300 p-2 w-50 rounded-lg">Watch the tutorial</div>
                    </div>
                </div>
                <div className="p-0">
                    <img
                        src={imgSrc}
                        alt={altText}
                        className="w-auto xsm:max-w-[100px] sm:w-full sm:max-w-[156px]"
                    />
                </div>
            </Link>
        </div>
    );
};

export default TutorialCard;