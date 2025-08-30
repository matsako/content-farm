# 🎬 Content Farm - Автоматизация RealSolve

Автоматическое создание коротких видео (RealSolve) из подкастов с помощью Remotion и AI.

## 🚀 Возможности

- ✅ **Автоматическое создание RealSolve** из длинных подкастов
- ✅ **AI-анализ контента** для поиска лучших моментов  
- ✅ **Настраиваемый стиль** под ваш бренд
- ✅ **Облачный рендер** через GitHub Actions
- ✅ **Анимированные субтитры** с таймингами
- ✅ **Формат 9:16** для TikTok/Instagram/YouTube Shorts

## 🎯 Что на входе → что на выходе

**Вход:**
- Подкаст (60 минут аудио/видео)
- JSON с данными (заголовок, транскрипт, крючок)

**Выход:**
- 5-7 готовых RealSolve (30-60 секунд каждый)
- MP4 формат, оптимизированный для соцсетей
- Автоматические субтитры и анимации

## 🔧 Быстрый старт

### 1. Клонируйте репозиторий
```bash
git clone https://github.com/USERNAME/content-farm.git
cd content-farm
```

### 2. Установите зависимости
```bash
npm install
```

### 3. Запустите тест композиции
```bash
node preview-test.js
```

### 4. Облачный рендер через GitHub Actions
- Перейдите в **Actions** → **"Render Content Farm RealSolve"**
- Нажмите **"Run workflow"**
- Введите данные для рендера
- Получите готовое видео из **Artifacts**

## 📁 Структура проекта

```
content-farm/
├── src/
│   ├── Root.tsx              # Главная композиция
│   └── zyra-remotion-template.jsx  # Шаблон RealSolve
├── .github/workflows/
│   └── render-remotion.yml   # GitHub Actions для рендера
├── cloud-render.js           # Google Cloud рендер
├── web-render.html          # Веб-интерфейс
├── CLOUD-SETUP.md           # Подробная инструкция
└── README.md                # Этот файл
```

## 🎨 Настройка стиля

Отредактируйте `ZyraBrandKit` в `src/zyra-remotion-template.jsx`:

```javascript
export const ZyraBrandKit = {
  colors: {
    primary: '#YOUR_COLOR',
    accent: '#YOUR_ACCENT',
    textPrimary: '#YOUR_TEXT'
  },
  typography: {
    main: 'Your Font',
    size: 52,
    weight: '900'
  }
};
```

## ☁️ Облачный рендер

### GitHub Actions (Бесплатно)
- 2000 минут в месяц бесплатно
- Автоматический рендер при изменении кода
- Простая настройка

### Google Cloud (Быстро)
- ~$0.10 за видео
- Рендер за 30-60 секунд
- API для автоматизации

## 🔗 Интеграция с AI

Проект готов к интеграции с:
- **AI-скорингом** для отбора лучших моментов
- **Автоматической транскрипцией** 
- **Системами управления контентом**

## 📊 Пример данных для рендера

```json
{
  "title": "Главная ошибка при изучении AI",
  "first_line": "Все думают, что нужно изучать код...",
  "pattern": "myth_bust",
  "transcript": {
    "words": [
      {"text": "Все", "start": 0, "end": 0.3},
      {"text": "думают", "start": 0.3, "end": 0.8}
    ]
  }
}
```

## 🛠️ Разработка

```bash
# Тест композиции (без рендера)
node preview-test.js

# Локальный рендер (только на новых macOS)
node render-test.js

# Облачный рендер
node cloud-render.js
```

## 📝 Лицензия

MIT License - используйте свободно для коммерческих проектов.

---

**🎬 Создавайте контент автоматически!**
