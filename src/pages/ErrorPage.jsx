import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <section className="flex w-full h-screen justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Page Not Found</h1>
          <p className="text-2xl">404 Error</p>

          <Link
            to="/"
            className="text-xl border border-black px-5 py-2 mt-2 inline-block"
          >
            Go Home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ErrorPage;
