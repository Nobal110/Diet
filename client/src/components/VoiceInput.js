import { useEffect, useState } from "react";

export default function VoiceInput({ onResult }) {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Voice recognition not supported!");

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
      setListening(false);
    };

    recognition.onerror = () => {
      alert("Voice recognition failed. Try again.");
      setListening(false);
    };
  };

  return (
    <button
      onClick={startListening}
      className="bg-blue-500 text-white px-3 py-2 rounded ml-2"
    >
      🎤 {listening ? "Listening..." : "Start Voice"}
    </button>
  );
}
