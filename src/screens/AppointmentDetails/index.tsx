import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  Text,
  View,
  FlatList,
  Alert,
  Share,
  Platform,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { AppointmentProps } from '../../components/Apointment';
import { Member, MemberProps } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Loading } from '../../components/Loading';
import { Header } from '../../components/Header';

import BannerImg from '../../assets/banner.png';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { api } from '../../services/api';

type Params = {
  guildSelected: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export function AppointmentDetails() {
  const route = useRoute();
  const { guildSelected } = route.params as Params;

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.id}/widget.json`);
      setWidget(response.data);
    } catch {
      Alert.alert('Verifique as configurações do servidor.');
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvite() {
    const message =
      Platform.OS === 'ios'
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite,
    });
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShareInvite}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Loading />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members ? widget.members.length : 0}`}
          />

          <FlatList
            keyExtractor={(item) => item.id}
            data={widget.members}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
          />
        </>
      )}
      {guildSelected.guild.owner && (
        <View style={styles.footer}>
          <ButtonIcon title={'Entrar na partida'} onPress={handleOpenGuild} />
        </View>
      )}
    </Background>
  );
}
