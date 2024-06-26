import {StyleProp, StyleSheet, View, ViewStyle} from "react-native"
import {
  Divider,
  MD3TypescaleKey,
  Surface,
  Text,
  useTheme,
} from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

type Props = {
  title: string
  icon: string
  iconColor?: string
  iconSize?: number
  titleVariant?: keyof typeof MD3TypescaleKey
  rightStyle?: StyleProp<ViewStyle>
  children: React.ReactNode
  infoButton?: React.ReactNode
  titleStyle?: StyleProp<ViewStyle>
}

/**
 * Container for options in search dialog
 */
const SearchOptions = ({
  title,
  icon,
  iconColor,
  iconSize,
  titleVariant = "bodyLarge",
  rightStyle,
  children,
  infoButton,
  titleStyle,
}: Props) => {
  const theme = useTheme()

  const themedStyles = StyleSheet.create({
    optionsContainer: {
      minWidth: 120,
      paddingTop: 10,
      paddingBottom: 5,
    },
  })

  return (
    <Surface style={styles.container}>
      <View style={[styles.titleContainer, titleStyle]}>
        <View style={rightStyle}>
          <Icon
            name={icon}
            size={iconSize || 24}
            color={iconColor || theme.colors.primary}
          />
        </View>
        <Text style={styles.title} numberOfLines={1} variant={titleVariant}>
          {title}
        </Text>
        {infoButton}
      </View>
      <Divider bold />
      <View style={themedStyles.optionsContainer}>{children}</View>
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 10,
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    minHeight: 40,
  },
  title: {
    paddingLeft: 8,
  },
})

export default SearchOptions
