"use client";

import H1 from "@/components/H1";
import H4 from "@/components/H4";
import { useState } from "react";
import { API_URL } from "@/lib/config";

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

    const response = await fetch(`${API_URL}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-4">
          <H1 text="Gelişmelerden Anında Bilgi Alın" />
          <H4 text="Haftalık yazılarımızı kaçırmamak için abone olun ve her yeni içerik yayınlandığında ilk sizin haberiniz olsun." />
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
              className="bg-red absolute right-0 text-white px-8 py-4 rounded-3xl font-semibold text-2xl hover:bg-red hover:text-white transition-colors"
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
