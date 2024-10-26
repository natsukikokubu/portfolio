import React from "react";
import Image from "next/image";
import { Header, WorkCard } from "@/components";

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
        <div className="flex flex-col m-4 sm:ml-4">
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
              大学病院の看護師2年(ICU)
              <br />
              大学病院の看護師2年(ICU、救急、透析、内視鏡)
            </dd>
          </div>
          <div className="ml-4 mt-2">
            <dt className="inline whitespace-nowrap">ITスキル :</dt>
            <dd className="inline ml-3 break-all">
              HTML,CSS,JavaScript,TypeScript,React,Next.js,Github
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
              img="/BookApp.png"
              link="https://book-app-jade-iota.vercel.app/"
            />
          </li>
          <li>
            <WorkCard
              title="Supabase/Next.js/Prismaで簡単な日記アプリケーションを作って公開してみた"
              description="日記アプリの記事"
              img="usagi.png"
              link="https://qiita.com/t_natsuki/items/3a15a545e4e837797e8e"
            />
          </li>
          <li>
            <WorkCard
              title="Qiita記事"
              description="このポートフォリオの記事"
              img="hiyoko.png"
              link="https://qiita.com/t_natsuki/items/38b5facb410f0d5c5d10"
            />
          </li>
        </ul>
      </section>
      <section className="relative flex flex-col items-center h-80  bg-gray-900 text-blue-100">
        <h1 className="text-lg font-bold my-16  mb-12" id="contact">
          Contact
        </h1>
        <div className="flex flex-right items-center justify-between gap-16 z-30">
          <a
            href="https://x.com/na_u0801"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="object-contain w-8" src="/logo-white.png" />
          </a>
          <a
            href="https://github.com/natsukikokubu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="object-contain w-8" src="/github-mark-white.png" />
          </a>
          <a
            href="https://www.wantedly.com/id/kokubu_natsuki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="object-contain w-12" src="/Wantedly_Mark_Wht.png" />
          </a>
          <a
            href="https://qiita.com/t_natsuki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="object-contain w-9" src="/qiita-white.png" />
          </a>
        </div>
      </section>
    </main>
  );
}
