import { BasePropsScene } from "@/src/types"
import { XIVButton } from "../../interface"

type GameProps = BasePropsScene & {

}

const classButton = "font-michroma text-shadow-lg/15 text-xl px-8 py-2"

export default function Game(props: GameProps) {

  return (
    <div className="flex w-full items-center justify-center">
      <XIVButton
        twcss={classButton}
        onClick={() => props.setScene("Main Menu")}
      >
        Go Back
      </XIVButton>
    </div>
  )
}