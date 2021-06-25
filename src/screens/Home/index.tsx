import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Background } from "../../components/Background";

import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Apointment } from "../../components/Apointment";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        ircon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40",
      desciption:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10!",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        ircon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40",
      desciption:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10!",
    },
  ];

  function handleCategorySelect(categoryId: number) {
    categoryId === Number(category)
      ? setCategory("")
      : setCategory(String(categoryId));
  }

  return (
    <Background>
      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="total 6" />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Apointment data={item} />}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Background>
  );
}
