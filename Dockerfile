# Dockerfile
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Открываем порт для сервера
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]

