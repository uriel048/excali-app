import { useState, useEffect, useRef } from "react";
import { supabase } from "./supabase";
import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [isSaving, setIsSaving] = useState(false);
  const [pendingSave, setPendingSave] = useState(false);

  const [roomId, setRoomId] = useState(
    window.location.hash.replace("#/", "") || "default"
  );

  const excalidrawRef = useRef(null);

  useEffect(() => {
    const onHashChange = () => {
      setRoomId(
        window.location.hash.replace("#/", "") || "default"
      );
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  useEffect(() => {
    const loadScene = async () => {
      const { data, error } = await supabase
        .from("drawings")
        .select("data")
        .eq("id", roomId)
        .maybeSingle();

      if (error) {
        console.error(error);
        return;
      }

      if (excalidrawRef.current) {
        excalidrawRef.current.updateScene({
          elements: data?.data?.elements || [],
          appState: {
            theme,
            ...(data?.data?.appState || {}),
          },
        });
      }

      setPendingSave(false);
    };

    loadScene();
  }, [roomId]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("excali-theme");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("excali-theme", theme);
    }
  }, [theme]);

  const saveToSupabase = async () => {
    if (!excalidrawRef.current) return;

    try {
      setIsSaving(true);

      const scene = excalidrawRef.current.getSceneElements();
      const appState = excalidrawRef.current.getAppState();

      const { error } = await supabase
        .from("drawings")
        .upsert({
          id: roomId,
          data: {
            elements: scene,
            appState: {
              theme: appState.theme,
            },
          },
          updated_at: new Date().toISOString(),
        });

      if (error) {
        console.error(error);
        return;
      }

      setPendingSave(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleControl = (action) => {
    if (window.electronAPI) {
      window.electronAPI.controlWindow(action);
    }
  };

  const handleGitHubClick = () => {
    if (window.electronAPI) {
      window.electronAPI.openExternal(
        "https://github.com/uriel048/excali-app"
      );
    } else {
      window.open(
        "https://github.com/uriel048/excali-app",
        "_blank"
      );
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
          <div
            className="light close"
            onClick={() => handleControl("close")}
          />
          <div
            className="light minimize"
            onClick={() => handleControl("minimize")}
          />
          <div
            className="light maximize"
            onClick={() => handleControl("maximize")}
          />
        </div>

        <div className="title-text">
          Excalidraw - {roomId}
        </div>
      </div>

      <div className="canvas-wrapper">
        <Excalidraw
          key={roomId}
          langCode="pt-BR"
          initialData={{
            appState: {
              theme,
            },
          }}
          excalidrawAPI={(api) => {
            excalidrawRef.current = api;
          }}
          onChange={(elements, state) => {
            if (state.theme !== theme) {
              setTheme(state.theme);
            }

            setPendingSave(true);
          }}
        >
          <MainMenu>
            <MainMenu.DefaultItems.LoadScene />
            <MainMenu.DefaultItems.SaveToActiveFile />
            <MainMenu.Item onSelect={saveToSupabase}>
              {isSaving
                ? "Salvando..."
                : pendingSave
                ? "Salvar alterações"
                : "Salvo"}
            </MainMenu.Item>
            <MainMenu.DefaultItems.Export />
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.Separator />
            <MainMenu.DefaultItems.SearchMenu />
            <MainMenu.DefaultItems.Help />
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.Separator />

            <MainMenu.Item
              icon={<GitHubIcon />}
              onSelect={handleGitHubClick}
            >
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