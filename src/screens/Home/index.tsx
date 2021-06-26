import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Background } from "../../components/Background";

import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Apointment } from "../../components/Apointment";

import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
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
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40",
      desciption:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10!",
    },
    {
      id: "3",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40",
      desciption:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10!",
    },
    {
      id: "4",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40",
      desciption:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10!",
    },
    {
      id: "5",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40",
      desciption:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10!",
    },
    {
      id: "6",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40",
      desciption:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10!",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  return (
    <Background>
      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <ListHeader title="Partidas agendadas" subtitle="total 6" />
      </View>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Apointment data={item} onPress={handleAppointmentDetails} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.matches}
        contentContainerStyle={{ paddingBottom: 69 }}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
}
