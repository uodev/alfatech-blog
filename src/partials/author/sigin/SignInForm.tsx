"use client";

import { Fragment, useState } from "react";
import request from "@/lib/request";
import { useRouter } from "next/navigation";
import userStore from "@/stores/userStore";

const SignInForm = () => {
  const router = useRouter();
  const setUser = userStore((state) => state.setUser);
  const setToken = userStore((state) => state.setToken);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    message: "",
    isSuccess: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await request("/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    const result = await response.json();

    if (result.statusCode !== 200) {
      setResponse({
        message: result.message || "Giriş yapılamadı.",
        isSuccess: false,
      });
      setLoading(false);
      return;
    }

    setResponse({
      message: "Giriş başarılı.",
      isSuccess: true,
    });

    localStorage.setItem("token", result.data.token);
    localStorage.setItem("user", JSON.stringify(result.data.user));
    setUser(result.data.user);
    setToken(result.data.token);
    setLoading(false);

    router.push("/");
  };

  return (
    <Fragment>
      {response && response.message !== "" ? (
        <div
          className={`${
            response.isSuccess ? "bg-green-500" : "bg-red-500"
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
              <label className="text-white font-semibold" htmlFor="email">
                Mail Adresiniz
              </label>
              <input
                required
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="johndoe@mail.com"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label
                className="dark:text-white text-black font-semibold"
                htmlFor="password"
              >
                Şifreniz
              </label>
              <input
                required
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="*********"
                name="password"
                id="password"
              />
            </div>
          </div>

          <div
            className={`my-2  rounded-lg  ${
              loading ? "bg-gray-500" : "bg-accent"
            }`}
          >
            <button
              disabled={loading}
              className="uppercase text-sm font-bold tracking-wide text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            >
              {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default SignInForm;
