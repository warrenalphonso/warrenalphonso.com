declare module "elevator.js" {
  class Elevator {
    constructor({
      mainAudio,
      endAudio,
      duration,
    }: {
      mainAudio: string
      endAudio: string
      duration: number
    }) {}
    elevate: () => void
  }
  export default Elevator
}
