import React from "react";
import Image from "next/image";
import { Header } from "@/components";
import { WorkCard } from "@/components";

export default function Home() {
  return (
    <main className="font-body">
      <Header />
      <div className="h-140 bg-slate-400">
        <h1 id="top">About me</h1>
        <Image src="/me.png" alt="me" width="160" height="160" />
        <div>
          <div>
            <dt>生年月日</dt>
            <dd>1998年11月13日(25歳)</dd>
          </div>
          <div>
            <dt>趣味</dt>
            <dd>読書</dd>
          </div>
          <div>
            <dt>好きな動物</dt>
            <dd>うさぎ</dd>
          </div>
          <div>
            <dt>経歴</dt>
            <dd>
              東京医科大学八王子医療センター:看護師2年、
              国際医療福祉大学三田病院:看護師2年
            </dd>
          </div>
          <div>
            <dt>スキル</dt>
            <dd>HTML,CSS,Javascript,Typescript,React,Next.js,Github</dd>
          </div>
        </div>
      </div>
      <div className="h-140 bg-slate-500">
        <h1 id="works">Works</h1>
        <WorkCard
          title="日記アプリ"
          description="日記を書いて保存できるアプリです。"
          img="/diaryApp.png"
          link="https://new-diary-app-sc1j.vercel.app/"
          comment="DiaryApp"
        />
      </div>
      <div className="h-80 bg-slate-600">
        <h1 id="contact">Contact</h1>
      </div>
    </main>
  );
}
