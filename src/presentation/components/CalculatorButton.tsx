import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';

interface Props {
    label: string;
    color?: string;
    large?: boolean;
    blackText?: boolean;
    onPress: () => void;
}

export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    large = false,
    blackText = false,
    onPress,
}: Props) => {
  return (
    <Pressable
        onPress={ () => onPress() }
        style={ ({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        opacity: (pressed) ? 0.8 : 1,
        width: (large) ? (styles.button.width * 2) + (styles.button.marginHorizontal * 2) : styles.button.width,
    }) }>
        <Text style={{
            ...styles.buttonText,
            color: (blackText) ? 'black' : 'white',
        }}>{label}</Text>
    </Pressable>
  );
};
