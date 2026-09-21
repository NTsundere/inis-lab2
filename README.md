Agrodnevnik Landing — Лабораторная работа №2

React-приложение (Vite) с компонентной архитектурой, JSX, props и локальным состоянием (`useState`).

Запуск

npm install
npm run dev

Откройте http://localhost:5173
Компоненты

    Button — props: children, variant, type, onClick, disabled.

    StatusBadge — props: status.

    FieldCard — props: title, crop, moisture, status, onDetails.

    InputField — props: label, placeholder, type, hasError, onChange. Локальное состояние: value.

    Accordion — props: title, children, defaultOpen. Локальное состояние: isOpen.

Требования

    Только функциональные компоненты + хуки.

    Валидация props через PropTypes.

    CSS Modules для стилей.

    Состояние — только useState.