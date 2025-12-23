"use client";
import "./globals.css"
import { useEffect, useState } from "react";
import { SceneName } from "../types";
import { MainMenu } from "../components/scenes";
import { disableContextMenuByDefault } from "../utils/functions";

/**
 * Runs startup functions before rendering Main
 * - `disableContextMenuByDefault()`
 */
export default function StartUp() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        disableContextMenuByDefault()
        setReady(true)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  return !ready ? null : <Main />;
}

/**
 * Main display where scene is set
 */
function Main() {
  const [scene, setScene] = useState<SceneName>("Main Menu")

  return (
    <div className="flex h-screen w-screen bg-zinc-50 font-sans dark:bg-slate-900">
      {scene === "Main Menu" && <MainMenu setScene={setScene} />}
    </div>
  );
}