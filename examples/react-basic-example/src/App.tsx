// import { useState } from 'react';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Gallery,
  Button,
  List,
  TeaSet,
  Toolbar,
  Signup,
  PackingList,
  GalleryState,
  TodoList,
  AdvancedCounter,
  MediaControlApp,
  Counter,
  Accordion,
  TaskApp,
  UserForm,
  ChatRoomManager,
  StopWatch,
  ThemeProvider,
  ThemedComponent,
  SelectableList,
  PersonList,
  MultipleInput,
  Product,
  Increment,
  FilterList,
  EditorForm,
  MovingBox,
  LoginForm,
  ModalExample,
  CartProviderApp,
  MarkdownEditor,
  Switch,
  ToggleVisibility,
} from "./components/index";
import "./App.css";

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ToggleVisibility />
      <Switch />
      <CartProviderApp />
      <MarkdownEditor />
      <ModalExample />
      <EditorForm />
      <LoginForm />
      <h1>Vite + React</h1>
      <FilterList />
      <MovingBox />
      <ThemeProvider>
        <ThemedComponent />
      </ThemeProvider>
      <Increment />
      <div>
        <h3>Selectable List</h3>
        <SelectableList />
      </div>
      <MultipleInput />
      <Product referrer="wizard_of_oz" productId="123" />
      <PersonList />
      <StopWatch />
      <TaskApp />
      <Button label="Click me" />
      <Accordion />
      <Toolbar />
      <ChatRoomManager />
      <TeaSet />
      <Counter />
      <Signup />
      <TodoList />
      <AdvancedCounter />
      <MediaControlApp />
      <UserForm />
      <GalleryState />
      <PackingList />
      <Gallery />
      <div>
        <h2>Scientists List</h2>
        <List />
      </div>
    </>
  );
};

export default App;
