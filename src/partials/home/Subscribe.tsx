"use client";

import H1 from "@/components/H1";
import H4 from "@/components/H4";
import { useState } from "react";
import request from "@/lib/request";

const Subscribe = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const email = new FormData(e.target as HTMLFormElement).get("email");

    if (email === null) {
      setError("Email alanı boş bırakılamaz");
      return;
    }
    if (typeof email !== "string") {
      setError("Email alanı boş bırakılamaz");
      return;
    }
    //nokta ve @ işaretlerinin arasında en az bir karakter olmalı
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      setError("Lütfen geçerli bir mail adresi giriniz");
      return;
    }

    const response = await request("/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    // @ts-ignore
    const result = await response.json();
    if (result.isSuccess) {
      setError(null);
      setSuccess(result.message);

      //5 saniye sonra success mesajını kaldır
    } else {
      setError(result.message);
    }
    setTimeout(() => {
      setError(null);
      setSuccess(null);
    }, 2000);
    setLoading(false);
  };

  return (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
          <H1 text="Gelişmelerden Anında Bilgi Alın" />
          <H4 className="!text-primary-color text-sm w-8/12 text-center" text="Haftalık yazılarımızı kaçırmamak için abone olun ve her yeni içerik yayınlandığında ilk sizin haberiniz olsun." />
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-4 relative"
          >
            <input
              type="email"
              name={"email"}
              required
              className="border border-gray-300 px-8 py-4 rounded-3xl w-[500px] outline-none placeholder:text-passive"
              placeholder="Your email address"
            />
            <button
              disabled={loading}
              type="submit"
              className="bg-accent absolute right-0 text-white px-8 py-4 rounded-3xl font-semibold text-2xl hover:bg-accent hover:text-white transition-colors"
            >
              {loading ? "Loading..." : "Subscribe"}
            </button>
          </form>
        </div>
        {error && (
          <div className="bg-error text-white px-8 py-4 rounded-xl">
            <p>{error}</p>
          </div>
        )}
        {success && (
          <div className="bg-sucess text-white px-8 py-4 rounded-xl">
            <p>{success}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
