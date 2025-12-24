export type SoundName = "sink_1" | "click_1" | "click_2" | "click_3" | "FFXIV_Aggro" | "FFXIV_Cancel" | "FFXIV_Change_Hotbar" | "FFXIV_Close_Window" | "FFXIV_Confirm" | "FFXIV_Enter_Chat" | "FFXIV_Error" | "FFXIV_Open_Window" | "FFXIV_Switch_Target" | "FFXIV_Untarget"

export function playSound(name: SoundName, volume?: number) {
  const sound = new Audio();
  sound.src = `audio/${name}.mp3`
  sound.volume = volume ?? 0.5;

  sound.play()
}