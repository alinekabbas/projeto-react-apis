export const getColors = (type) => {
    switch(type) {
      case "bug":
        return "#76A866";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#7038f8";
      case "electric":
        return "#e8c02e";
      case "fairy":
        return "#ee99ac";
      case "fighting":
        return "#d67873";
      case "fire":
        return "#EAAB7D";
      case "flying":
        return "#6892B0";
      case "ghost":
        return "#705898";
      case "grass":
        return "#729F92";
      case "ground":
        return "#e4c26a";
      case "ice":
        return "#98d8d8";
      case "normal":
        return "#BF9762";
      case "poison":
        return "#c183c1";
      case "psychic":
        return "#a13959";
      case "rock":
        return "#d1c17d";
      case "steel":
        return "#BBBBBB";
      case "water":
        return "#71C3FF";
      default:
        return "#8A8A8A";
    }
  };