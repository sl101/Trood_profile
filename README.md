# Trood Profile Page

## [Open Project](https://sl101.github.io/Trood_profile)

## Project Description
Trood Profile Page is a single-page application (SPA) built with React. It provides a user profile management interface, allowing users to edit their details, manage interests, links, projects, and tasks.

## Features
- **Profile Editing**: Update user information such as name, surname, contact details, visibility settings, and avatar.
- **Avatar Upload**: Supports image upload in Base64 format, stored in **LocalStorage**.
- **Data Persistence**: User profile data, including the avatar in Base64, is saved in **LocalStorage**.
- **Validation**: Form fields are validated using a separate validation module.
- **Enhanced UI**: 
  - Additional buttons "Save" and "Cancel" were added to the design.
  - Implemented requirements for field validation.
- **LocalStorage Management**: Separate utility functions handle saving and retrieving data from LocalStorage, making it easy to replace with backend integration if needed.
- **React Context**: A custom `NotificationContext` was created for managing notifications across the app.
- **Implemented Figma Design**: The project was developed according to the provided Figma mockup.

## Technologies Used
- **React**: Library for building user interfaces.
- **React Hooks**:
  - `useState` for state management.
  - `useEffect` for handling side effects like data loading.
  - `useContext` for managing notifications via `NotificationContext`.
- **CSS Modules**: Component-level styling.
- **Vite**: Fast build tool for development and production.
- **gh-pages**: Deployment utility for GitHub Pages.
- **LocalStorage**: For persisting user data, including Base64-encoded avatars.

## Dependencies
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-icons`: ^5.3.0
- `react-uuid`: ^2.0.0

### Development Dependencies
- `@vitejs/plugin-react`: ^4.3.3
- `gh-pages`: ^6.2.0
- `vite`: ^5.4.10

---

## Installation and Setup

### 1. Clone the Repository

	- git clone https://github.com/sl101/Trood_profile.git
	- cd Trood_profile

### 2. Установка зависимостей
  - npm install

### 3. Запуск проекта в режиме разработки
Для локального запуска используйте команду:

  - npm run dev

Откройте браузер и перейдите по адресу: http://localhost:5173.

### 4.Сборка проекта для продакшена и деплой на GitHub Pages
Чтобы собрать проект, выполните:

  - npm run build
  - npm run deploy
Приложение будет опубликовано на https://sl101.github.io/Trood_profile

### Структура проекта

trood_accout_page/
├── public/              # Статические файлы
├── src/
│   ├── components/      # React-компоненты
│   ├── context/         # Контексты (NotificationContext)
│   ├── services/        # Валидация и работа с LocalStorage
│   ├── App.jsx          # Корневой компонент приложения
│   ├── main.jsx         # Точка входа приложения
│   └── index.css        # Общие стили
├── dist/                # Сборка проекта
├── .gitignore           # Исключения для Git
├── package.json         # Настройки проекта и зависимости
├── vite.config.js       # Конфигурация Vite
└── README.md            # Документация проекта

### Реализация требований
- **Макет из Figma:** проект разработан на основании предоставленного макета.
- **Загрузка аватара:** реализована с использованием Base64, данные хранятся в LocalStorage.
- **Дополнительные кнопки:** добавлены кнопки "Сохранить" и "Отменить" для удобства пользователя.
- **Валидация полей:** выделена в отдельный модуль для упрощения поддержки.
- **Работа с LocalStorage:** все функции загрузки и сохранения данных выделены в отдельный файл, что позволяет в дальнейшем заменить LocalStorage на взаимодействие с бэкендом.
- **Base64:** изображения аватара конвертируются в формат Base64 и сохраняются вместе с другими данными пользователя.
- **Дополнительная работа** с состояниями:
   - Использован useState для управления состояниями.
   - Использован useEffect для отработки логики загрузки данных.
   - Использован NotificationContext для централизованной обработки уведомлений.

### Дополнительные команды
- Линтинг кода: npm run lint
- Предпросмотр сборки: npm run preview 

### Контактная информация
Если у вас есть вопросы, свяжитесь со мной через GitHub или telegramm (https://t.me/Viacheslav_Zhevaha) 



