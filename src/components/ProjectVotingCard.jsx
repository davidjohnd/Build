"use client";
import Image from "next/image";
import yellowlike from "../../public/yellow-like.png";
import React, { useState } from "react";
//import DeveloperDashboard from '../developers/dashboard/page';
//import Developers from '../developers/page';

import Link from "next/link";

// Return the project voting card
export default function ProjectVotingCard(params) {
  // const [isVotedFor, setIsVotedFor] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  console.log(params);

  const project = params.project;
  const functionToVoteOne = params.functionToVoteOne;
  const functionToVoteTwo = params.functionToVoteTwo;

  //Function that is invoked when the upvote 1 button is clicked. This inserts a votes intersection table,
  //and adds one to the total_score for the project using a database trigger function.
  function handleClickOne() {
    () => setSubmitted(!submitted);
    return functionToVoteOne(project.project_id);
  }

  //Function that is invoked when the upvote 2 button is clicked. This inserts a votes intersection table,
  //and adds two to the total_score for the project using a database trigger function.
  function handleClickTwo() {
    return functionToVoteTwo(project.project_id);
  }

  return (
    <div>
      <Link
        key={project.project_id}
        href={`../dashboard/voting/${project.project_id}`}
      ></Link>
      <li className="lg:grid lg:grid-cols-4 lg:border-b lg:border-slate-400 lg:w-full border-b border-slate-700 pb-4">
        <h1 className="col-span-1">{project.title}</h1>
        <p className="col-span-2">{project.short_desc}</p>
        <span className="col-span-1 lg:flex lg:flex-row lg:gap-4 flex justify-evenly">
          <button
            onClick={handleClickOne}
            className={submitted === false ? "bg-red-900" : "bg-green-900"}
          >
            <Image
              src={yellowlike}
              width={48}
              height={48}
              alt="Picture of the author"
            />
            Vote Up
          </button>
          <button onClick={handleClickTwo} className="flex flex-col">
            <span className="flex flex-row">
              <Image
                src={yellowlike}
                width={48}
                height={48}
                alt="Picture of the author"
              />
              <Image
                src={yellowlike}
                width={48}
                height={48}
                alt="Picture of the author"
              />
            </span>
            Vote Up More
          </button>
        </span>
      </li>
    </div>
  );
}

/*

*/

/*
<li className="lg:grid lg:grid-cols-6 lg:border-b lg:border-slate-400 lg:mr-20 border-b border-slate-700 pb-4">
       <Link
        key={project.project_id}
        href={`../dashboard/voting/${project.project_id}`}
      >
        <h1 className="col-span-2">{project.title}</h1>
        <p className="col-span-3 flex flex-wrap">{project.short_desc}</p>
        </Link>
        <button onClick={handleClickOne} className="button bg-red-400 font-bold rounded w-44 h-16 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-10>Vote Up</button>
        <button onClick={handleClickTwo} className="button bg-red-400 font-bold rounded w-44 h-16 text-xl lg:w-56 lg:text-2xl lg:mt-4 mt-10>Vote Up More</button>
        </li>
*/
