declare module "elevator.js" {
  class Elevator {
    constructor({
      mainAudio,
      endAudio,
    }: {
      mainAudio: string
      endAudio: string
    }) {}
    elevate: () => void
  }
  export default Elevator
}
