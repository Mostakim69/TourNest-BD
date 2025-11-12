import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText({
  words,
  loop = true,
  cursor = true,
  delay = 1000,
  speed = 100,
}) {
  return (
    <span style={{ whiteSpace: "pre" }}>
      <Typewriter
        words={words}
        loop={loop}
        cursor={cursor}
        cursorStyle="✍️ "
        typeSpeed={speed}
        deleteSpeed={50}
        delaySpeed={delay}
      />
    </span>
  );
}
