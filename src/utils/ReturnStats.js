export const getStats = (stat) =>{
    switch (stat) {
        case "hp":
          return "HP";
        case "attack":
          return "Attack";
        case "defense":
          return "Defense";
        case "special-attack":
          return "Sp. Atk";
        case "special-defense":
          return "Sp. Def";
        case "speed":
          return "Speed";
        default:
          return "Stat"
      }
}