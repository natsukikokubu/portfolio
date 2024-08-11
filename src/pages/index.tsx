import React from "react";
import Image from "next/image";
import { Header } from "@/components";
import { WorkCard } from "@/components";

export default function Home() {
  return (
    <main className="font-body">
      <Header />
      <section className="flex flex-col items-center  py-16 h-140 bg-slate-50">
        <h1 className="text-lg font-medium my-4" id="top">
          About me
        </h1>
        <Image src="/me.png" alt="me" width="160" height="160" />
        <p className="py-2">Tachibana Natsuki</p>
        <div className="w-auto flex flex-col m-4 sm:m-4">
          <div className="mt-2">
            <dt className="inline whitespace-nowrap">生年月日 :</dt>
            <dd className="inline ml-3 break-all">1998年11月13日(25歳)</dd>
          </div>
          <div className="mt-2">
            <dt className="inline whitespace-nowrap">趣味 :</dt>
            <dd className="inline ml-3 break-all">読書</dd>
          </div>
          <div className="mt-2">
            <dt className="inline whitespace-nowrap">好きな動物 :</dt>
            <dd className="inline ml-3 break-all">うさぎ</dd>
          </div>
          <div className="mt-2">
            <dt className="inline whitespace-nowrap">経歴 :</dt>
            <dd className="inline ml-3 break-all">
              東京医科大学八王子医療センター:看護師2年、
              国際医療福祉大学三田病院:看護師2年
            </dd>
          </div>
          <div className="mt-2">
            <dt className="inline whitespace-nowrap">スキル :</dt>
            <dd className="inline ml-3 break-all">
              HTML,CSS,Javascript,Typescript,React,Next.js,Github
            </dd>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center bg-gray-100">
        <h1 className=" text-lg font-medium my-4 mb-4" id="works">
          Works
        </h1>
        <ul className=" grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
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
      <section className="relative flex flex-col items-center h-80 bg-gray-200">
        <h1 className="text-lg font-medium my-4" id="contact">
          Contact
        </h1>
      </section>
    </main>
  );
}
