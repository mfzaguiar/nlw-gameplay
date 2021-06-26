import React from "react";
import { View, FlatList } from "react-native";

import { ListDivider } from "../../components/ListDivider";
import { Guild, GuildProps } from "../../components/Guild";

import { styles } from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "image.png",
      owner: true,
    },
    {
      id: "2",
      name: "Lendários2",
      icon: "image.png",
      owner: false,
    },
    {
      id: "3",
      name: "Lendários2",
      icon: "image.png",
      owner: false,
    },
    {
      id: "4",
      name: "Lendários2",
      icon: "image.png",
      owner: false,
    },
    {
      id: "5",
      name: "Lendários2",
      icon: "image.png",
      owner: false,
    },
    {
      id: "6",
      name: "Lendários2",
      icon: "image.png",
      owner: false,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
      />
    </View>
  );
}
