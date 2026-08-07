import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../sections/Projects.jsx';
import { events } from '../sections/Events.jsx';
import Aurora from '../components/Aurora.jsx';
import ErrorPage from './ErrorPage.jsx';

const panel =
  "backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6";

const Section = ({ heading, items }) => (
  <div className={`${panel} my-6 lg:mr-3`}>
    <h3 className="text-xl font-bold text-white">{heading}</h3>
    <ul className="mt-2 list-disc pl-5">
      {items.map((value) => (
        <li key={value} className="text-[#b6b7bb]">{value}</li>
      ))}
    </ul>
  </div>
);

const DetailsPage = () => {
  const { slug } = useParams();

  const detail =
    projects.find((p) => p.route === slug) ??
    events.find((e) => e.route === slug);

  // Unknown slug: show the 404 instead of throwing on `detail.heading`.
  if (!detail) return <ErrorPage />;

  return (
    <div className="flex flex-col items-center justify-center">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      <div className={`w-11/12 lg:w-8/10 mb-20 ${panel}`}>
        <div className={panel}>
          <h1 className="text-2xl font-bold text-white">{detail.heading}</h1>
          <p className="mt-2 text-lg text-[#b6b7bb]">{detail.long_description}</p>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3">
            <Section heading={detail.sub_heading_1} items={detail.description_1} />
            <Section heading={detail.sub_heading_2} items={detail.description_2} />
            <Section heading={detail.sub_heading_3} items={detail.description_3} />
          </div>

          <div className={`flex w-full flex-col gap-4 lg:w-2/3 ${panel} my-6 lg:ml-3`}>
            {/* Mapped, so a project with fewer than 3 images doesn't render
                broken <img> tags. */}
            {detail.media.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${detail.heading} — screenshot ${i + 1}`}
                loading="lazy"
                className="w-full max-w-3xl rounded-lg object-contain"
              />
            ))}
          </div>
        </div>

        <Link
          to="/"
          className="inline-flex min-h-11 items-center rounded-lg border border-white/20 px-5 text-white transition-colors hover:bg-white/10"
        >
          &larr; Back to portfolio
        </Link>
      </div>
    </div>
  );
};

export default DetailsPage;
