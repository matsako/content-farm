#!/bin/bash

echo "🚀 Настройка GitHub Actions для Content Farm"
echo "============================================="

# Проверяем git
if ! command -v git &> /dev/null; then
    echo "❌ Git не установлен. Установите git и повторите."
    exit 1
fi

# Инициализируем git если нужно
if [ ! -d ".git" ]; then
    echo "📦 Инициализируем git репозиторий..."
    git init
    git add .
    git commit -m "Initial Zyra RealSolve setup"
fi

echo "📋 Следующие шаги:"
echo "1. Создайте репозиторий на GitHub: https://github.com/new"
echo "2. Назовите его: content-farm"
echo "3. Выполните команды:"
echo ""
echo "   git remote add origin https://github.com/USERNAME/content-farm.git"
echo "   git push -u origin main"
echo ""
echo "4. Перейдите в GitHub → Actions → включите workflows"
echo "5. Запустите 'Render Zyra RealSolve' workflow"
echo ""
echo "🎬 После этого вы сможете рендерить видео в облаке!"

# Показываем структуру проекта
echo ""
echo "📁 Структура проекта:"
find . -name "*.js" -o -name "*.jsx" -o -name "*.tsx" -o -name "*.yml" -o -name "*.md" | head -10

echo ""
echo "✅ Настройка завершена!"
echo "💡 Откройте CLOUD-SETUP.md для подробных инструкций"
