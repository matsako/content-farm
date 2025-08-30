import React from 'react';
import { Composition, registerRoot } from 'remotion';
import { ZyraRealSolve } from './zyra-remotion-template';

// Тестовые данные
const testClipData = {
  title: "Главная ошибка при изучении AI",
  first_line: "Все думают, что нужно изучать код...",
  pattern: "myth_bust",
  hook: {
    score: 8,
    why: "Разрушение популярного мифа + четкое решение"
  },
  transcript: {
    words: [
      { text: "Все", start: 0, end: 0.3 },
      { text: "думают,", start: 0.3, end: 0.8 },
      { text: "что", start: 0.8, end: 1.0 },
      { text: "нужно", start: 1.0, end: 1.3 },
      { text: "изучать", start: 1.3, end: 1.8 },
      { text: "код", start: 1.8, end: 2.1 },
      { text: "Но", start: 3.5, end: 3.7 },
      { text: "правда", start: 3.7, end: 4.1 },
      { text: "в", start: 4.1, end: 4.2 },
      { text: "том,", start: 4.2, end: 4.5 },
      { text: "что", start: 4.5, end: 4.7 },
      { text: "AI", start: 4.7, end: 5.0 },
      { text: "сам", start: 5.0, end: 5.3 },
      { text: "пишет", start: 5.3, end: 5.7 },
      { text: "код!", start: 5.7, end: 6.2 }
    ]
  },
  duration: 10
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ZyraRealSolve"
        component={ZyraRealSolve}
        durationInFrames={300} // 10 секунд при 30fps
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ clipData: testClipData }}
      />
    </>
  );
};

registerRoot(RemotionRoot);
