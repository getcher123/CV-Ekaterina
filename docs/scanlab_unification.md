# Правила унификации (CV-лендинг)

## 1. Single Source of Truth
- Каноническая страница: `index.html`.
- Алиас старого прототипа: `code.html` (redirect).
- Стили и токены: `assets/site.css`.
- Интерактив: `assets/site.js`.

## 2. UI-kit классы
- Навигация: `.ui-nav-link`, активное состояние `.is-active`.
- Ссылки: `.ui-link`, `.ui-inline-link`, `.ui-action-link`.
- Кнопки: `.ui-btn`, `.ui-icon-btn`.
- Формы: `.ui-field`, `.ui-select`, `.ui-textarea`.
- Служебные контейнеры: `.table-wrapper`, `.stat-cards`.

## 3. Контракты разметки
- `body` содержит `data-page="home"`.
- Кнопка меню: `[data-menu-button]` с `aria-expanded`.
- Контейнер мобильного меню: `[data-menu]`.
- Ссылки меню: `.ui-nav-link` и `href="#section-id"`.
- Интерактивные контакты используют реальные `href`:
  - `tel:+79260093674`
  - `mailto:ekaterinaorlihina@gmail.com`
  - внешний URL для LinkedIn
