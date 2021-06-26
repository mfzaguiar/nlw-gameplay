import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { SmallInput } from "../../components/SmallInput";
import { Background } from "../../components/Background";
import { GuildIcon } from "../../components/GuildIcon";
import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { Button } from "../../components/Button";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: number) {
    categoryId === Number(category)
      ? setCategory("")
      : setCategory(String(categoryId));
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
        <Header title="Agendar partida" />
        <Text
          style={[
            styles.label,
            {
              marginLeft: 24,
              marginTop: 36,
              marginBottom: 18,
            },
          ]}
        >
          Categoria
        </Text>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
          hasCheckBox
        />

        <View style={styles.form}>
          <RectButton>
            <View style={styles.select}>
              {
                /* <View style={styles.image} /> */
                <GuildIcon />
              }

              <View style={styles.selectBody}>
                <Text style={styles.label}>Selecione um servidor</Text>
              </View>

              <Feather
                name="chevron-right"
                size={18}
                color={theme.colors.heading}
              />
            </View>
          </RectButton>

          <View style={styles.field}>
            <View>
              <Text style={styles.label}>Dia e mês</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>/</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Hora e minuto</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>:</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>
          </View>

          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
          </View>
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />
          <View style={styles.footer}>
            <Button title="Agendar" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
