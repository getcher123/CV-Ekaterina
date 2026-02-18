# Быстрые проверки и рендер

В проекте выполнены быстрые статические проверки:
- отсутствие inline-стилей и inline-скриптов;
- отсутствие `button` без атрибута `type`;
- наличие redirect для legacy-страницы `code.html`.

Команды:
```bash
rg -n '(<style\\b|style=\"|tailwind\\.config\\s*=)' -S *.html assets
rg -n -P '<button(?![^>]*\\btype=)' *.html
rg -n '<meta http-equiv=\"refresh\"' -S .
```

Для визуальной проверки рекомендуется открыть:
- `index.html` на ширинах 320/768/1024/1440.
