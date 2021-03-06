import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import { Size } from "../../Components/StyleConstants";

interface UserProps {
  name: string;
  nick: string;
  profile: string;
}

const SIZE = 80;

const User = ({ name, nick, profile }: UserProps) => {
  return (
    <View style={style.container}>
      <Image source={{ uri: profile }} style={style.image} />
      <View style={style.nameContainer}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.nick}>{nick}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: SIZE,
    width: SIZE,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: SIZE / 2,
  },
  nameContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 24,
    paddingVertical: Size.m,
  },
  name: {
    fontSize: 22,
    fontFamily: "Sk-Modernist-Bold",
  },
  nick: {
    fontSize: 16,
    fontFamily: "Sk-Modernist-regular",
    opacity: 0.4,
  },
});

export default User;
