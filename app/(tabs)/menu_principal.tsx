import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";

// Paleta de cores centralizada
const colors = {
  primary: "#E91E63",
  text: "#333",
  bg: "#FFFFFF",
  mutedBg: "#F8F8F8",
};

const  icones = [
  {
    title: "Conhecer – Informar e Educar",
    items: [
      
      { label: "Tipos de Violência", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/INFO.gif") },
      { label: "Leis", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/LEIS.png") },
      { label: "Síndromes", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/SÍNDROMES.png") },
      { label: "Estatísticas", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/ESTATÍSTICAS.png") },
      { label: "Glossário", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/GLOSSÁRIO.png") },
    ],
  },
  {
    title: "Reconhecer – Identificar o Problema",
    items: [
      
      { label: "Auto-avaliação", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/AUTO-AVALIAÇÃO.png") },
      { label: "Comportamentos abusivos", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/COMPORTAMENTOS ABUSIVOS.png") },
      { label: "Suporte psicológico", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/SUPORTE PSICOLÓGICO.png") },
      { label: "Experiências", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/EXPERIÊNCIAS.gif") },
      { label: "Perfil Agressor", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/PERFIL AGRESSOR.png") },
    ],
  },

  {
    title: "Agir - Oferecer Suporte e Soluções",
    items: [
      
      { label: "Plano de Segurança", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/PLANO DE SEGURANÇA.gif") },
      { label: "Delegacias", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/DELEGACIAS.gif") },
      { label: "Denunciar", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/DENUNCIAR.gif") },
      { label: "Emergência", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/EMERGÊNCIA.gif") },
    ],
  },

   {
    title: "Recomeçar - Construir uma Nova Vida",
    items: [
      
      { label: "Vídeos sobre bem-estar", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/PLANO DE SEGURANÇA.gif") },
      { label: "Artigos sobre Autoestima", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/DELEGACIAS.gif") },
      { label: "POdCast Motivacionais", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/DENUNCIAR.gif") },
      { label: "Dicas de Auto-cuidado", icon: require("../../assets/images/ICONS/MENU PRINCIPAL/EMERGÊNCIA.gif") },
    ],
  },


];



