import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
        <p
          aria-hidden="true"
          className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-7xl font-bold text-transparent sm:text-8xl"
        >
          404
        </p>

        <h1 className="mt-4 text-2xl font-semibold text-white">
          Looks like you're lost
        </h1>
        <p className="mt-2 text-[#b6b7bb]">
          The page you are looking for is not available.
        </p>

        {/* Client-side nav so we don't trigger a full page reload. */}
        <Link
          to="/"
          className="mt-8 inline-flex min-h-11 items-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 px-6 font-medium text-white transition-opacity hover:opacity-90"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
