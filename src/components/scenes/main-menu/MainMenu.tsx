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
    playSound("click_1")
    setWdw(name)
  }

  return (
    <div className="flex w-full justify-center">
      {/* Main Buttons */}
      <div className="flex flex-col gap-6 justify-end mb-40">
        <XIVButton
          twcss={classButton}
          onClick={() => playSound("click_1")}
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

      {/* Selected Window */}
      <WindowWrapper active={Boolean(wdw)}>
        {wdw ? <MainMenuWindow name={wdw} /> : null}
      </WindowWrapper>

    </div>
  )
}

function MainMenuWindow({ name }: { name: MainMenuWindowName }) {
  switch (name) {
    case "Load":
      return <WindowLoad />;

    case "New Game":
      return <WindowNewGame />;

    case "Settings":
      return <WindowSettings />;
  }
}