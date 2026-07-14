
import React from "react";
import VideoCard from "./VideoCard";

export const videoList = [
  { id: 17, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/videoplayback%20(2).mp4" },
  { id: 2, src:  "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/3.mp4" },
  { id: 35, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/signature%20global.mp4" },
  { id: 36, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/smart%20world%20noida.mp4" },
  { id: 3, src:  "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/4.mp4" },
  { id: 4, src:  "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/6.mp4" },
  { id: 33, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/UTSAVA%202.mp4" },
  { id: 34, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/film%203%20dadi%20day%20care%20OPT%201%202.mp4" },
  { id: 5, src:  "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/BACHPAN%202.mp4" },
  { id: 6, src:  "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/BPTP%20FINAL.mp4" },
  { id: 7, src:  "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/FAN%20TVC%2033SEC%20English.mp4" },
  { id: 8, src:  "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/FILM%201%20H%26W%20FAN%20REGULATOR%2020SEC%20English%201.mp4" },
  { id: 9, src:  "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/FILM%201%20H%26W%20POP%20OUT%20LAMP%2020SEC%20ENGLISH%201.mp4" },
  { id: 10, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/FILM%201%20H%26W%20WAVE%20SWITCH%2020SEC%20ENGLISH%201.mp4" },
  // { id: 11, src: "" },
  { id: 12, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/FILM%201%20LUCKY%20HOUSE%20%20OPT%202.mp4" },
  { id: 13, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/FILM%202%20MOTION%20SENSOR%2020SEC%20English%201.mp4" },
  { id: 14, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/FILM%206%20PONGAL%20TAMIL%2020SEC%20%20%20Option%201.mp4" },
  { id: 15, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/FILM%207%20DIWALI%2030SEC%20%20%20Option%201.mp4" },
  { id: 16, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/GANGA%20NANDAKA%20ENGR%20ST%20MIX%20B.mp4" },
  { id: 18, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/OORJA%202.mp4" },
  { id: 19, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/PANASONIC%2015%20SEC%20BOMB%20(1).mp4" },
  { id: 20, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/PANASONIC%2015%20SEC%20CRICKET.mp4" },
  { id: 21, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/PANASONIC%2015%20SEC%20OFFICE.mp4" },
  { id: 22, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/PANASONIC%20DIWALI.mp4" },
  { id: 23, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/PANASONIC%20STRESS%20TEST.mp4" },
  { id: 24, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/PARAMPARA.mp4" },
  { id: 25, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/POETRY.mp4" },
  { id: 26, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/RAASA%202.mp4" },
  { id: 27, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/Ricardo%20low%202.mp4" },
  { id: 28, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/The%20Future%20Works%20Here%20%EF%BD%9C%20A%20Perfect%20Work%20life%20Balance%20Isn%E2%80%99t%20Just%20a%20Wish%20at%20DLF%20Cybercity%20Gurugram.mp4" },
  { id: 29, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/The%20Future%20Works%20Here%20%EF%BD%9C%20Reaching%20the%20Office%20is%20Faster%20and%20Traffic%20free%20at%20DLF%20Cybercity%20Gurugram.mp4" },  // Optional (if file exists)
  { id: 30, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/The%20Future%20Works%20Here%20%EF%BD%9C%20The%20Destination%20for%20Every%20Celebration%20is%20Right%20at%20DLF%20Cybercity%20Gurugram.mp4" },
  { id: 31, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/The%20Future%20Works%20Here%20%EF%BD%9C%20The%20Metro%20Drops%20You%20Right%20at%20Your%20Workplace%20at%20DLF%20Cybercity%20Gurugram.mp4" },
  { id: 32, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/ULLASA%202.mp4" },
  { id: 37, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/smart%20world%20sky%20arc.mp4" },
  { id: 38, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/smart%20world%20trump%20tower.mp4" },
  { id: 39, src: "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/work%20sec%201.mp4" },
  { id: 1, src:  "https://pub-9cfa6415ad044bcc8f009cfb63bc9ff9.r2.dev/Swastixa%20-%20WORK/All%20-%20Video's%20-%20of%20%20--%20Website/%23HYDAirport%20Tyohaar%20Yahin%20Shuru%20Hote%20Hain.mp4" },
];


const WorkData = () => {
  
  return (
    <div className="w-full min-h-screen bg-black flex flex-col sm:flex-col justify-center lg:flex-col items-center p-4 gap-20">
      {videoList.map((item) => (
        <VideoCard key={item.id} src={item.src} />
      ))}
    </div>
  );
};

export default WorkData;