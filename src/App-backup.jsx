import { useState, useEffect } from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("excali-theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("excali-theme", theme);
  }, [theme]);

  const handleControl = (action) => {
    if (window.electronAPI) window.electronAPI.controlWindow(action);
  };

  return (
    <div className="app-container" data-theme={theme}>
      <div className="title-bar">
        <div className="traffic-lights">
          <div className="light close" onClick={() => handleControl("close")}></div>
          <div className="light minimize" onClick={() => handleControl("minimize")}></div>
          <div className="light maximize" onClick={() => handleControl("maximize")}></div>
        </div>
        <div className="title-text">Excalidraw</div>
      </div>

      <div className="canvas-wrapper">
        <Excalidraw 
          langCode="pt-BR"
          theme={theme}
          initialData={{ appState: { theme: theme } }}
          onChange={(elements, state) => {
            if (state.theme !== theme) setTheme(state.theme);
          }}
        >
          {/* Tela de Boas-Vindas (Desenhos de fundo e dicas) */}
          <WelcomeScreen>
            <WelcomeScreen.Hints />
            <WelcomeScreen.Center>
              <WelcomeScreen.Center.Logo />
              <WelcomeScreen.Center.Heading>
                Seus desenhos são salvos localmente!
              </WelcomeScreen.Center.Heading>
              <WelcomeScreen.Center.Menu>
                <WelcomeScreen.Center.MenuItemLoadScene />
                <WelcomeScreen.Center.MenuItemHelp />
              </WelcomeScreen.Center.Menu>
            </WelcomeScreen.Center>
          </WelcomeScreen>

          {/* Menu Principal */}
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
            
            <MainMenu.DefaultItems.ToggleTheme />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu>
        </Excalidraw>
      </div>
    </div>
  );
}

export default App;
