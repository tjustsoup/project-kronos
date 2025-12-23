import { BasePropsScene } from "@/src/types"
import { XIVButton } from "../../interface"

type MainMenuProps = BasePropsScene & {

}

const classButton = "font-michroma text-shadow-lg/15 text-xl px-8 py-2"

export default function MainMenu(props: MainMenuProps) {

  function handleNewGame() {

  }

  function handleLoad() {

  }

  function handleSettings() {

  }

  return (
    <div className="flex w-full justify-center">
      {/* Main Buttons */}
      <div className="flex flex-col gap-6 justify-end mb-40">
        <XIVButton
          twcss={classButton}
          onClick={handleNewGame}
        >
          New Game
        </XIVButton>
        <XIVButton twcss={classButton}>
          Load
        </XIVButton>
        <XIVButton twcss={classButton}>
          Settings
        </XIVButton>
      </div>

      {/* Load Game Window */}

      {/* Settings Window */}

    </div>
  )
}