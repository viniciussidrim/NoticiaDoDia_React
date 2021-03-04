import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo';
import imgNoticia from '../../assets/imgNoticia.png';

export default function Noticia() {
  return (
    <View style = {estilo.box}>
      <Text style = {estilo.titulo}>Lançamento da versão 0.62</Text>

      <Image style = {estilo.imagem} source = { imgNoticia } />

      <Text style = {estilo.texto}>
        Atualização em tempo real
        Tempo de resposta de: 
      </Text>
    </View>
  );
}