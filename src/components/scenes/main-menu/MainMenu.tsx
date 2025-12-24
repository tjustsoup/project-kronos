import { BasePropsScene } from "@/src/types"
import { XIVButton } from "../../interface"
import { playSound } from "@/src/utils/functions"
import WindowWrapper from "../../interface/window-wrapper/WindowWrapper"
import { useState } from "react"
import WindowLoad from "./WindowLoad"
import WindowNewGame from "./WindowNewGame"
import WindowSettings from "./WindowSettings"

type MainMenuWindowName = "New Game" | "Load" | "Settings"

type MainMenuProps = BasePropsScene & {

}

const classButton = "font-michroma text-shadow-lg/15 text-xl px-8 py-2 !rounded-full"

export default function MainMenu(props: MainMenuProps) {
  const [wdw, setWdw] = useState<MainMenuWindowName | null>(null)

  function handleSetWdw(name: MainMenuWindowName | null) {
    playSound("FFXIV_Confirm", 0.25)
    setWdw(name)
  }

  function handleClose() {
    playSound("FFXIV_Close_Window", 0.2)
    setWdw(null)
  }

  return (
    <div className="flex w-full justify-center">
      {/* Main Buttons */}
      <div className="flex flex-col gap-6 justify-end mb-40">
        <XIVButton
          twcss={classButton}
          onClick={() => handleSetWdw("New Game")}
        >
          New Game
        </XIVButton>
        <XIVButton
          twcss={classButton}
          onClick={() => playSound("click_2")}
        >
          Load
        </XIVButton>
        <XIVButton
          twcss={classButton}
          onClick={() => playSound("sink_1")}
        >
          Settings
        </XIVButton>
      </div>

      <WindowWrapper
        active={Boolean(wdw === "New Game")}
        children={<WindowNewGame />}
        title={"New Game"}
        subtitle={<div className="font-cinzel">TYPE SHIT</div>}
        onClose={handleClose}
      />
    </div>
  )
}
