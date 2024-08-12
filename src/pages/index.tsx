import React from "react";
import Image from "next/image";
import { Header } from "@/components";
import { WorkCard } from "@/components";

export default function Home() {
  return (
    <main className="font-body bg-gray-900 z-50">
      <Header />
      <section className="flex flex-col items-center  py-16 h-140 bg-gray-900 text-blue-100">
        <h1 className="text-lg font-bold my-4" id="top">
          About me
        </h1>
        <Image
          src="/me.png"
          alt="me"
          width="160"
          height="160"
          className="z-30"
        />
        <p className="pt-2 pb-4">Tachibana Natsuki</p>
        <div className="flex flex-col m-4  sm:ml-4">
          <div className="ml-4 mt-2">
            <dt className="inline whitespace-nowrap">生年月日 :</dt>
            <dd className="inline ml-3 break-all">1998年11月13日(25歳)</dd>
          </div>
          <div className="ml-4 mt-2">
            <dt className="inline whitespace-nowrap">趣味 :</dt>
            <dd className="inline ml-3 break-all">読書、ヨガ、勉強</dd>
          </div>
          <div className="ml-4 mt-2">
            <dt className="inline whitespace-nowrap">好きな動物 :</dt>
            <dd className="inline ml-3 break-all">うさぎ</dd>
          </div>
          <div className="ml-4 mt-2">
            <dt className="inline whitespace-nowrap">経歴 :</dt>
            <dd className="inline ml-3 break-all">
              東京医科大学八王子医療センター: 看護師2年(ICU)、
              <br />
              国際医療福祉大学三田病院: 看護師2年(ICU、救急、透析、内視鏡)
            </dd>
          </div>
          <div className="ml-4 mt-2">
            <dt className="inline whitespace-nowrap">ITスキル :</dt>
            <dd className="inline ml-3 break-all">
              HTML,CSS,Javascript,Typescript,React,Next.js,Github
            </dd>
          </div>
          <div className="ml-4 mt-2">
            <dt className="inline whitespace-nowrap">ひとこと :</dt>
            <dd className="inline ml-3 break-all">
              新しいことを学ぶのが好きで、働きながらプログラミングをしてました。
              <br />
              ITと医療で世の中に貢献していきたいです。
            </dd>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center bg-gray-900 text-blue-100">
        <h1 className=" text-lg font-bold my-8 mb-8" id="works">
          Works
        </h1>
        <ul className=" grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8 z-30">
          <li>
            <WorkCard
              title="日記アプリ"
              description="日記を書いて保存できるアプリです。"
              img="/diaryApp.png"
              link="https://new-diary-app-sc1j.vercel.app/"
            />
          </li>
          <li>
            <WorkCard
              title="読書記録アプリ"
              description="読書記録を保存できるアプリです。"
              img="/bookApp.png"
              link="https://book-app-jade-iota.vercel.app/"
            />
          </li>
          <li>
            <WorkCard
              title="日記アプリ"
              description="日記を書いて保存できるアプリです。"
              img="/diaryApp.png"
              link="https://new-diary-app-sc1j.vercel.app/"
            />
          </li>
          <li>
            <WorkCard
              title="日記アプリ"
              description="日記を書いて保存できるアプリです。"
              img="/diaryApp.png"
              link="https://new-diary-app-sc1j.vercel.app/"
            />
          </li>
        </ul>
      </section>
      <section className="relative flex flex-col items-center h-80  bg-gray-900 text-blue-100">
        <h1 className="text-lg font-bold my-16  mb-12" id="contact">
          Contact
        </h1>
        <div className="flex flex-col items-center z-30">
          <a
            href="https://x.com/na_u0801"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="object-contain w-8" src="/logo-white.png" />
          </a>
        </div>
      </section>
    </main>
  );
}
