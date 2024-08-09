import React from "react";
import { Header } from "@/components";

export default function Home() {
  return (
    <main className="font-body">
      <Header />
      <div className="h-80 bg-slate-400">
        <h1 id="top">About me</h1>
        <img src="" />
      </div>
      <div className="h-80 bg-slate-500">
        <h1 id="works">Works</h1>
      </div>
      <div className="h-80 bg-slate-600">
        <h1 id="contact">Contact</h1>
      </div>
    </main>
  );
}
