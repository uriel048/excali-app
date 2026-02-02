import { useState, useEffect } from "react";
import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("excali-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("excali-theme", theme);
    }
  }, [theme]);

  const handleControl = (action) => {
    if (window.electronAPI) {
      window.electronAPI.controlWindow(action);
    }
  };

  const handleGitHubClick = () => {
    if (window.electronAPI) {
      window.electronAPI.openExternal('https://github.com/uriel048/excali-app');
    } else {
      window.open('https://github.com/uriel048/excali-app', '_blank');
    }
  };

  const GitHubIcon = () => (
    <svg 
      viewBox="0 0 24 24" 
      width="18" 
      height="18" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );

  return (
    <div className="app-container" data-theme={theme}>
      <div className="title-bar">
        <div className="traffic-lights">
          <div className="light close" onClick={() => handleControl("close")} />
          <div className="light minimize" onClick={() => handleControl("minimize")} />
          <div className="light maximize" onClick={() => handleControl("maximize")} />
        </div>
        <div className="title-text">Excalidraw</div>
      </div>

      <div className="canvas-wrapper">
        <Excalidraw 
          langCode="pt-BR"
          initialData={{ appState: { theme } }}
          onChange={(elements, state) => {
            if (state.theme !== theme) {
              setTheme(state.theme);
            }
          }}
        >
          <MainMenu>
            <MainMenu.DefaultItems.LoadScene />
            <MainMenu.DefaultItems.SaveToActiveFile />
            <MainMenu.DefaultItems.Export />
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.Separator />
            <MainMenu.DefaultItems.SearchMenu />
            <MainMenu.DefaultItems.Help />
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.Separator />
            <MainMenu.Item icon={<GitHubIcon />} onSelect={handleGitHubClick}>
              GitHub
            </MainMenu.Item>
            <MainMenu.Separator />
            <MainMenu.DefaultItems.ToggleTheme />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu>
        </Excalidraw>
      </div>
    </div>
  );
}

export default App;
