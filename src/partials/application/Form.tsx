"use client";

import { Fragment, useState } from "react";
import request from "@/lib/request";

const Form = () => {
  const [loading, setLoading] = useState(false);

  const [response, setResponse] = useState({
    message: "",
    isSuccess: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);

    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await request("/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      // @ts-ignore
      const result = await response.json();

      if (result.statusCode === 201) {
        setResponse({
          message:
            "Başvurunuz başarıyla alınmıştır. En kısa sürede dönüş yapılacaktır.",
          isSuccess: true,
        });
      } else {
        setResponse({
          message: result.message || "Başvurunuz alınamadı.",
          isSuccess: false,
        });
      }
      setLoading(false);
    } catch (error) {
      setResponse({
        message:
          "Başvurunuz sistemsel nedenlerden dolayı alınamadı. Lütfen tekrar deneyiniz.",
        isSuccess: false,
      });
      setLoading(false);
    }
  };

  return (
    <Fragment>
      {response && response.message !== "" ? (
        <div
          className={`${response.isSuccess ? "bg-green" : "bg-accent"
            } p-3 rounded-xl mt-2 text-white`}
        >
          <p>{response.message}</p>
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col space-y-4 h-[79.8vh]"
      >
        <div className="flex flex-col space-y-2 bg-gray-800/40 p-10 mx-auto mt-5 rounded-lg w-1/2">
          <div className="grid grid-cols-1 gap-5 mt-5">
            <div>
              <label className="text-white font-semibold" htmlFor="fullName">
                Full Name
              </label>
              <input
                required
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Full Name"
                name="fullName"
                id="fullName"
              />
            </div>
            <div>
              <label
                className="dark:text-white text-black font-semibold"
                htmlFor="title"
              >
                Title
              </label>
              <input
                required
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Title"
                name="title"
                id="title"
              />
            </div>
            <div>
              <label
                className="dark:text-white text-black font-semibold"
                htmlFor="email"
              >
                E-Mail
              </label>
              <input
                required
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                name="email"
                id="email"
              />
            </div>
          </div>

          <div
            className={`my-2  rounded-lg ${loading ? "bg-accent/70" : "bg-accent"
              }`}
          >
            <button
              disabled={loading}
              className="uppercase text-sm font-bold tracking-wide text-gray-100 p-3 rounded-lg w-full
                  focus:outline-none focus:shadow-outline"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
