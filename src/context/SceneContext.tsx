"use client";
import { createContext, useContext, useMemo, useState } from "react";
const SceneContext = createContext({});

const SceneContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [zoom, setZoom] = useState<boolean>(false);
  const [isShowUI, setShowUI] = useState<boolean>(false);

  const contextValue = useMemo(
    () => ({
      zoom,
      setZoom,
      isShowUI,
      setShowUI
    }),
    [zoom,
      setZoom,
      isShowUI,
      setShowUI
    ]
  );

  return (
    <SceneContext.Provider value={contextValue}>{children}</SceneContext.Provider>
  );
};

const useSceneContext = () => {
  const ctx = useContext(SceneContext);
  if (!ctx)
    throw new Error(
      "Cannot find SceneContext. It should be wrapped within SceneContextProvider."
    );
  return ctx;
};

export { useSceneContext, SceneContextProvider };