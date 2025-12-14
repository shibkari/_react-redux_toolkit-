# Інтернет-магазин - Redux Toolkit Refactoring

> Рефакторинг навчального проекту з React Context API на Redux Toolkit

## 📝 Опис проекту

Цей проект демонструє **міграцію з Context API на Redux Toolkit** для управління глобальним станом React додатку. Оригінальний проект - інтернет-магазин електроніки з можливістю перегляду каталогу, додавання товарів та перемикання тем.

### 🔄 Що було зроблено:

- ✅ **Context API → Redux Toolkit** - повна заміна управління станом
- ✅ **createSlice** замість useState + useContext
- ✅ **TypeScript** - додана типізація для безпеки
- ✅ **Оптимізація** - збережено React.memo для продуктивності
- ✅ **Структура** - організовано за Redux best practices

## 🆚 Порівняння: До і Після

### ❌ Було (Context API):

```jsx
// AppContext.jsx
const [users, setUsers] = useState([...]);
const [theme, setTheme] = useState('light');

// Використання
const { users, theme, toggleTheme } = useAppContext();
```

### ✅ Стало (Redux Toolkit):

```typescript
// productSlice.ts
const productSlice = createSlice({
  name: 'product',
  initialState: { products: [...] },
  reducers: { addProduct: ... }
});

// Використання
const products = useAppSelector((state) => state.product.products);
const dispatch = useAppDispatch();
```

## 🚀 Технології

- **React 19** - бібліотека для побудови інтерфейсів
- **TypeScript** - типізація для безпечного коду
- **Redux Toolkit** - сучасний підхід до Redux
- **React Redux** - офіційні React bindings
- **Vite** - швидкий інструмент збірки

### Чому Redux Toolkit замість Context API?

| Аспект             | Context API                  | Redux Toolkit                     |
| ------------------ | ---------------------------- | --------------------------------- |
| **Складність**     | Простий для малих проектів   | Структурований для великих        |
| **DevTools**       | Немає вбудованих             | Redux DevTools з time-travel      |
| **Middleware**     | Потребує додаткового коду    | Вбудована підтримка (thunk)       |
| **Продуктивність** | Може викликати зайві рендери | Оптимізовано селекторами          |
| **Структура**      | Вільна                       | Чітка (slices, actions, reducers) |

## 📂 Структура проекту

```
my-redux-app/
├── src/
│   ├── redux/
│   │   ├── store.ts                # Конфігурація Redux store
│   │   ├── hooks.ts                # Типізовані хуки
│   │   └── slices/
│   │       ├── counterSlice.ts     # Продукти (замість Context)
│   │       └── todoSlice.ts        # Тема (замість Context)
│   ├── components/
│   │   ├── AddUserForm.tsx         # Форма додавання товару
│   │   ├── UserList.tsx            # Список товарів
│   │   ├── UserProfile.tsx         # Картка товару
│   │   ├── UserDetails.tsx         # Деталі товару
│   │   └── Counter.tsx             # ThemeToggle
│   ├── App.tsx                     # Головний компонент
│   ├── App.css                     # Стилі (збережені з оригіналу)
│   ├── main.tsx                    # Provider підключення
│   └── index.css                   # Глобальні стилі
├── package.json
├── vite.config.ts
└── README.md
```

## 📦 Встановлення та запуск

### Передумови

- Node.js >= 18.0.0
- npm >= 9.0.0

### Крок 1: Клонування репозиторію

```bash
git clone https://github.com/shibkari/my-redux-app.git
cd my-redux-app
```

### Крок 2: Встановлення залежностей

```bash
npm install
```

### Крок 3: Запуск у режимі розробки

```bash
npm run dev
```

Додаток буде доступний: `http://localhost:5174`

### Крок 4: Збірка для production

```bash
npm run build
```

### Крок 5: Попередній перегляд збірки

```bash
npm run preview
```

## 🎯 Функціональні можливості

### Каталог товарів

- Відображення списку електроніки
- Ціни та статуси наявності
- Адаптивна сітка (1-4 колонки)

### Додавання товарів

- Форма з валідацією
- Автоматичне додавання до Redux store
- Очищення після додавання

### Перемикання теми

- Світла/темна тема
- Збереження в Redux
- Глобальна зміна через CSS класи

## 💡 Ключові зміни при міграції

### 1️⃣ Context → Redux Store

**Було:**

```jsx
// AppContext.jsx
export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([...]);
  return <AppContext.Provider value={{users, ...}}>{children}</AppContext.Provider>;
};
```

**Стало:**

```typescript
// store.ts
export const store = configureStore({
  reducer: {
    product: productReducer,
    theme: themeReducer,
  },
});
```

### 2️⃣ useState → createSlice

**Було:**

```jsx
const [theme, setTheme] = useState("light");
const toggleTheme = () =>
  setTheme((prev) => (prev === "light" ? "dark" : "light"));
```

**Стало:**

```typescript
const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: "light" },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});
```

### 3️⃣ useContext → useSelector + useDispatch

**Було:**

```jsx
const { theme, toggleTheme } = useAppContext();
<button onClick={toggleTheme}>...</button>;
```

**Стало:**

```typescript
const theme = useAppSelector((state) => state.theme.theme);
const dispatch = useAppDispatch();
<button onClick={() => dispatch(toggleTheme())}>...</button>;
```

## 🔧 Основні переваги рефакторингу

- ✅ **Redux DevTools** - дебагінг з time-travel
- ✅ **Типізація** - TypeScript для безпеки
- ✅ **Структура** - чітке розділення логіки
- ✅ **Масштабованість** - легко додавати нові slices
- ✅ **Middleware** - готовність до async operations
- ✅ **Тестування** - простіше тестувати reducers

## 🛠️ Деплоймент

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Завантажте папку dist на Netlify
```

### GitHub Pages

```bash
# Додайте в vite.config.ts: base: '/repository-name/'
npm run build
```

## 📚 Посилання

- **Оригінальний проект (Context API)**: https://github.com/shibkari/_20251208
- **Демо оригіналу**: https://shibkari.github.io/_20251208/
- **Redux Toolkit Docs**: https://redux-toolkit.js.org/
- **React Redux Docs**: https://react-redux.js.org/
- **Vite Documentation**: https://vitejs.dev/

## 📖 Навчальні цілі

Цей рефакторинг допомагає зрозуміти:

1. ✅ Різницю між Context API та Redux
2. ✅ Коли використовувати Redux замість Context
3. ✅ Як працює Redux Toolkit
4. ✅ Створення slices з createSlice
5. ✅ Типізація Redux з TypeScript
6. ✅ Використання селекторів та dispatch
7. ✅ Організація структури Redux проекту

## 👨‍💻 Автор

**shibkari**

- GitHub: [shibkari]

## 📄 Ліцензія

MIT License - використовуйте вільно 💙

---

**Зроблено як частину навчального завдання з міграції Context API → Redux Toolkit**
