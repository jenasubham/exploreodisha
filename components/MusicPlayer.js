"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState("");

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      setError("");
      await audio.play();
      setPlaying(true);
    } catch (err) {
      setError("Cannot play: " + err.name);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/nature.mp3"
        loop
        preload="auto"
        onError={() => setError("File not found: public/music/nature.mp3")}
      />

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        style={{
          position: "fixed",
          left: "20px",
          bottom: "20px",
          zIndex: 99999,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "2px solid #d9b05c",
          background: "#111915",
          color: "#d9b05c",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        {playing ? "⏸" : "♪"}
      </button>

      {error && (
        <div
          style={{
            position: "fixed",
            left: "20px",
            bottom: "86px",
            zIndex: 99999,
            background: "#7a1f1f",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          {error}
        </div>
      )}
    </>
  );
}