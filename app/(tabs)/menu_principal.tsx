import React, { useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Animated,
  useWindowDimensions,
} from "react-native";
// Se estiver usando Expo, os ícones abaixo já vêm no pacote @expo/vector-icons
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

/*
  MenuScreen (layout do menu principal)
  - Inspirado no wireframe enviado
  - Foco em acessibilidade, responsividade e reuso de componentes
 */
export default function MenuScreen() {
  const { width } = useWindowDimensions();

  // Em telas maiores mostramos 3 colunas; do contrário, 2
  const numCols = width >= 768 ? 3 : 2;

  // Calcula largura do card de botão em função da largura da tela
  const buttonWidth = useMemo(() => {
    const horizontalPadding = 20 * 2; // content padding
    const gap = 12 * (numCols - 1);
    return (width - horizontalPadding - gap) / numCols;
  }, [width, numCols]);

  // Paleta de cores centralizada
  const colors = {
    primary: "#E91E63",
    text: "#333",
    bg: "#FFFFFF",
    mutedBg: "#F8F8F8",
  };

  // Definição de dados das seções e itens
  const sections = [
    {
      title: "Conhecer – Informar e Educar",
      items: [
        { label: "Tipos de Violência", icon: { lib: "Ionicons", name: "information-circle" } },
        { label: "Leis", icon: { lib: "MaterialCommunityIcons", name: "gavel" } },
        { label: "Síndromes", icon: { lib: "MaterialCommunityIcons", name: "account-alert" } },
        { label: "Estatísticas", icon: { lib: "Ionicons", name: "stats-chart" } },
        { label: "Glossário", icon: { lib: "Ionicons", name: "book" } },
      ],
    },
    {
      title: "Reconhecer – Identificar o Problema",
      items: [
        { label: "Autoavaliação", icon: { lib: "MaterialCommunityIcons", name: "clipboard-check-outline" } },
        { label: "Comportamentos abusivos", icon: { lib: "MaterialCommunityIcons", name: "flag" } },
        { label: "Suporte psicológico", icon: { lib: "MaterialCommunityIcons", name: "hand-heart" } },
        { label: "Experiências", icon: { lib: "Ionicons", name: "chatbubbles" } },
        { label: "Perfil do Agressor", icon: { lib: "MaterialCommunityIcons", name: "account-search" } },
      ],
    },
    {
      title: "Agir – Oferecer Suporte e Soluções",
      items: [
        { label: "Plano de segurança", icon: { lib: "MaterialCommunityIcons", name: "shield-check" } },
        { label: "Delegacias", icon: { lib: "MaterialCommunityIcons", name: "office-building" } },
        { label: "Denunciar", icon: { lib: "Ionicons", name: "help-buoy" } },
        { label: "Emergência", icon: { lib: "MaterialCommunityIcons", name: "sos" } },
      ],
    },
    {
      title: "Recomeçar – Construir uma Nova Vida",
      items: [
        { label: "Vídeos sobre bem-estar", icon: { lib: "Ionicons", name: "heart-circle" } },
        { label: "Artigos sobre autoestima", icon: { lib: "MaterialCommunityIcons", name: "file-document-edit" } },
        { label: "Podcasts motivacionais", icon: { lib: "Ionicons", name: "mic" } },
        { label: "Dicas de autocuidado", icon: { lib: "FontAwesome5", name: "hands-wash" } },
      ],
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}> 
      {/* Header com logo e atalho de perfil */}
      <View style={styles.header}>
        <View style={{ width: 40 }} />
        <Image
          source={require("../../assets/images/CORA_LOGO2.jpeg")}
          style={styles.logo}
          resizeMode="contain"
          accessible
          accessibilityLabel="Logo do projeto CORA"
        />
        <Pressable
          onPress={() => {}}
          accessibilityRole="button"
          accessibilityLabel="Abrir perfil"
          style={({ pressed }) => [styles.profileBtn, pressed && { opacity: 0.7 }]}
        >
          <Ionicons name="person-circle" size={28} color={colors.primary} />
          <Text style={styles.profileText}>Perfil</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenTitle} accessibilityRole="header">
          Menu Principal
        </Text>

        {sections.map((section, idx) => (
          <Section
            key={idx}
            title={section.title}
            items={section.items}
            numCols={numCols}
            buttonWidth={buttonWidth}
            colors={colors}
          />
        ))}
      </ScrollView>
    </View>
  );
}

/**
 * Section: bloco com título destacado + grade de botões
 */
function Section({ title, items, numCols, buttonWidth, colors }) {
  return (
    <View style={styles.section}>
      <View style={[styles.sectionHeader, { backgroundColor: colors.primary }]}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>

      <View style={[styles.grid, { gap: 12 }]}> 
        {items.map((item, i) => (
          <IconCard
            key={`${item.label}-${i}`}
            label={item.label}
            icon={item.icon}
            width={buttonWidth}
            colors={colors}
            onPress={() => {}}
          />
        ))}
      </View>
    </View>
  );
}

/**
 * IconCard: botão reutilizável com ícone grande + texto
 * - Usa Pressable + Animated para dar efeito de "scale" ao pressionar
 */
function IconCard({ label, icon, onPress, width, colors }) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, { toValue: 0.96, useNativeDriver: true, speed: 40, bounciness: 8 }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 40, bounciness: 8 }).start();
  };

  // Escolhe biblioteca do ícone dinamicamente
  const renderIcon = () => {
    const size = 36;
    const color = colors.primary;
    switch (icon.lib) {
      case "Ionicons":
        return <Ionicons name={icon.name} size={size} color={color} />;
      case "MaterialCommunityIcons":
        return <MaterialCommunityIcons name={icon.name} size={size} color={color} />;
      case "FontAwesome5":
        return <FontAwesome5 name={icon.name} size={size} color={color} />;
      default:
        return <Ionicons name="ellipse" size={size} color={color} />;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [
        styles.cardTouchable,
        { width },
        pressed && { opacity: 0.9 },
      ]}
    >
      <Animated.View style={[styles.card, { transform: [{ scale }] }]}> 
        <View style={styles.cardIconWrap}>{renderIcon()}</View>
        <Text style={styles.cardLabel}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
}

// -------------------- Styles --------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingTop: 18,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  profileBtn: {
    alignItems: "center",
  },
  profileText: {
    fontSize: 12,
    marginTop: 2,
    color: "#E91E63",
    fontWeight: "600",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
  screenTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#E91E63",
    marginBottom: 12,
  },
  section: {
    marginBottom: 18,
  },
  sectionHeader: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  sectionHeaderText: {
    color: "#FFF",
    fontWeight: "800",
    fontSize: 14,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 12,
  },
  cardTouchable: {
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  cardIconWrap: {
    marginBottom: 8,
  },
  cardLabel: {
    textAlign: "center",
    fontSize: 13,
    color: "#333",
    lineHeight: 18,
  },
});
