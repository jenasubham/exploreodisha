"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error("Music error:", error);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/nature.mp3"
        loop
        onEnded={() => setPlaying(false)}
      />

      <button
        onClick={toggleMusic}
        aria-label="Toggle background music"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 99999,
          background: "rgba(20, 60, 40, 0.95)",
          color: "white",
          padding: "14px 22px",
          borderRadius: "50px",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 5px 20px rgba(0,0,0,0.25)",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: "600",
        }}
      >
        {playing ? "🔊 Pause Nature Music" : "🎵 Play Nature Music"}
      </button>
    </>
  );
}