import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri = "https://github.com/mfzaguiar.png";

  return (
    <Image source={{ uri: uri }} style={styles.image} resizeMode="cover" />
  );
}
