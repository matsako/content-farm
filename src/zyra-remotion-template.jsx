// ZyraRealSolve - базовый Remotion шаблон для контент-фермы
import React from 'react';
import {
  Composition,
  Video,
  Audio,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  AbsoluteFill,
  Sequence
} from 'remotion';

// Бренд-кит на основе анализа ваших видео matsako
export const ZyraBrandKit = {
  colors: {
    primary: 'transparent',     // прозрачный фон
    accent: '#FFFFFF',          // белый для основного текста
    background: 'transparent',  // без фона для субтитров
    textPrimary: '#FFFFFF',     // чисто белый текст
    textSecondary: '#FFFFFF'    // все белое
  },
  typography: {
    main: 'Impact, "Arial Black", sans-serif', // жирный рубленый шрифт
    size: 58,                   // крупный размер как в ваших видео
    weight: '900',              // максимальная жирность
    lineHeight: 1.1,            // плотный межстрочный интервал
    textTransform: 'uppercase', // заглавные буквы
    letterSpacing: '0.5px'      // небольшой кернинг
  },
  layout: {
    safeZone: { top: 120, bottom: 200 }, // безопасные зоны
    speakerArea: { x: '50%', y: '30%', width: '90%', height: '60%' },
    subtitleArea: { 
      centerX: '50%', 
      centerY: '50%',  // центр экрана как в ваших видео
      maxWidth: '85%',
      left: 30, 
      right: 30 
    }
  },
  effects: {
    textShadow: 'none',         // без тени - чистый белый
    background: 'none',         // без подложки
    animation: 'subtle'         // мягкие анимации
  }
};

// Компонент анимированных субтитров
export const AnimatedSubtitles = ({ 
  words, 
  currentTime, 
  brandKit = ZyraBrandKit 
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  // Находим текущие слова на основе времени
  const getCurrentWords = () => {
    if (!words) return [];
    return words.filter(word => 
      word.start <= currentTime && word.end >= currentTime
    );
  };

  const currentWords = getCurrentWords();
  const text = currentWords.map(w => w.text).join(' ');

  // Анимация появления текста
  const scale = spring({
    frame: frame % 30, // обновляем каждые 30 кадров
    fps,
    config: {
      damping: 200,
      stiffness: 100,
      mass: 0.5
    }
  });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: brandKit.layout.subtitleArea.bottom,
        left: brandKit.layout.subtitleArea.left,
        right: brandKit.layout.subtitleArea.right,
        textAlign: 'center',
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          fontSize: brandKit.typography.size,
          fontFamily: brandKit.typography.main,
          fontWeight: brandKit.typography.weight,
          color: brandKit.colors.textPrimary,
          textTransform: brandKit.typography.textTransform,
          letterSpacing: brandKit.typography.letterSpacing,
          lineHeight: brandKit.typography.lineHeight,
          textAlign: 'center',
          textShadow: brandKit.effects.textShadow,
          background: brandKit.effects.background,
          padding: '10px 20px',
          wordBreak: 'break-word',
          maxWidth: brandKit.layout.subtitleArea.maxWidth,
          margin: '0 auto'
        }}
      >
        {text}
      </div>
    </div>
  );
};

// Компонент крючка/заголовка
export const HookOverlay = ({ 
  hookText, 
  pattern, 
  frame, 
  brandKit = ZyraBrandKit 
}) => {
  const { fps } = useVideoConfig();
  
  // Показываем крючок только первые 3 секунды
  const showHook = frame < fps * 3;
  
  if (!showHook || !hookText) return null;

  // Анимация заголовка
  const hookScale = spring({
    frame,
    fps,
    config: {
      damping: 100,
      stiffness: 200
    }
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: brandKit.layout.safeZone.top,
        left: 20,
        right: 20,
        textAlign: 'center',
        transform: `scale(${hookScale})`,
        zIndex: 10
      }}
    >
      <div
        style={{
          fontSize: brandKit.typography.size + 8,
          fontFamily: brandKit.typography.main,
          fontWeight: brandKit.typography.weight,
          color: brandKit.colors.accent,
          textShadow: `4px 4px 0px ${brandKit.colors.textSecondary}`,
          backgroundColor: 'rgba(0,0,0,0.8)',
          padding: '20px',
          borderRadius: '20px',
          border: `3px solid ${brandKit.colors.accent}`
        }}
      >
        {hookText}
      </div>
    </div>
  );
};

// Основной компонент RealSolve
export const ZyraRealSolve = ({ 
  clipData,
  brandKit = ZyraBrandKit 
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const currentTime = frame / fps;

  const {
    videoSrc,
    audioSrc,
    transcript,
    hook,
    title,
    first_line,
    pattern,
    duration = 30
  } = clipData;

  return (
    <AbsoluteFill>
      {/* Фоновое видео */}
      {videoSrc && (
        <Video
          src={videoSrc}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      )}

      {/* Аудио */}
      {audioSrc && (
        <Audio src={audioSrc} />
      )}

      {/* Крючок (первые 3 секунды) */}
      <HookOverlay
        hookText={first_line || title}
        pattern={pattern}
        frame={frame}
        brandKit={brandKit}
      />

      {/* Анимированные субтитры */}
      <AnimatedSubtitles
        words={transcript?.words}
        currentTime={currentTime}
        brandKit={brandKit}
      />

      {/* Брендинг в углу */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          fontSize: 24,
          fontFamily: brandKit.typography.main,
          color: brandKit.colors.accent,
          textShadow: `2px 2px 0px ${brandKit.colors.textSecondary}`,
          zIndex: 5
        }}
      >
        @zyra
      </div>
    </AbsoluteFill>
  );
};

// Экспорт компонентов для использования в Root.tsx
