import translateStatusToWord from "./translateProjectStatus";

export default function CharitiesPitch({ project }) {
    // Return the line item for the charities pitches that ae not yet projects
    return (
      <li className="lg:grid lg:grid-cols-6 lg:border-b lg:border-slate-400 lg:mr-20 border-b border-slate-700 pb-4">
        <h1 className="col-span-2">{project.title}</h1>
        <p className="col-span-3 flex flex-wrap">{project.short_desc}</p>
        <p status="col-span-3 flex flex-wrap">{translateStatusToWord(project.status)}</p>
        <button className="col-span-1 border-4 border-emerald-500 w-20 lg:w-10/12 text-center text-emerald-500 font-bold justify-self-end">
          Details
        </button>
      </li>
    );
  }