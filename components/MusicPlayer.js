"use client";

import { useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  async function playSong() {
    const audio = audioRef.current;

    if (playing) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch (error) {
      console.error("Audio error:", error);
      alert("Audio failed: " + error.message);
    }
  }

  return (
    <main>
      <audio
        ref={audioRef}
        src="/music/nature.mp3"
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
        onClick={playSong}
        style={{
          position: "fixed",
          right: 25,
          bottom: 25,
          padding: "15px 25px",
          borderRadius: "50px",
          background: "#064e3b",
          color: "white",
          border: "none",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        {playing ? "⏸ Pause Music" : "♫ Play Music"}
      </button>
    </main>
  );
}