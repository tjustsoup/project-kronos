export type SoundName = "Aggro" | "Cancel" | "Change_Hotbar" | "Close_Window" | "Confirm" | "Enter_Chat" | "Error" | "Open_Window" | "Switch_Target" | "Untarget"

export function playXIVSound(name: SoundName, volume?: number) {
  const sound = new Audio();
  sound.src = `audio/FFXIV_${name}.mp3`
  sound.volume = volume ?? 0.5;

  sound.play()
}