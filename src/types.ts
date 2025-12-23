import { Dispatch, SetStateAction } from "react"

/* Scenes */
export type SceneName = "Main Menu" | "Loading" | "Game"
export type BasePropsScene = {
  setScene: Dispatch<SetStateAction<SceneName>>
}