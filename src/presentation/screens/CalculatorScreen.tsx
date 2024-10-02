import React from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

    const {
        number, prevNumber, formula, buildNomber, toggleSign,
        clean, deleteOperation,
        divideOperation, multiplyOperation, subtractOperation, addOperation, calculateResult,
    } = useCalculator();

  return (
    <View style={ styles.calculatorContainer }>

        <View style={ { paddingHorizontal: 30, paddingBottom: 20 } }>
            <Text
                adjustsFontSizeToFit
                numberOfLines={ 1 }
                style={ styles.mainResult }>{ formula }
            </Text>
            {
                (formula === prevNumber)
                ?
                <Text style={ styles.subResult } />
                :
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={ 1 }
                    style={ styles.subResult }>{ prevNumber }
                </Text>
            }
        </View>

        <View style={ styles.row }>
            <CalculatorButton onPress={ () => clean() } label="C" color={ colors.lightGray } blackText />
            <CalculatorButton onPress={ () => toggleSign() } label="+/-" color={ colors.lightGray } blackText />
            <CalculatorButton onPress={ () => deleteOperation() } label="del" color={ colors.lightGray } blackText />
            <CalculatorButton onPress={ () => divideOperation() } label="÷" color={ colors.orange } />
        </View>

        <View style={ styles.row }>
            <CalculatorButton onPress={ () => buildNomber('7') } label="7" color={ colors.lightGray } />
            <CalculatorButton onPress={ () => buildNomber('8') } label="8" color={ colors.lightGray } />
            <CalculatorButton onPress={ () => buildNomber('9') } label="9" color={ colors.lightGray } />
            <CalculatorButton onPress={ () => multiplyOperation() } label="x" color={ colors.orange } />
        </View>

        <View style={ styles.row }>
            <CalculatorButton onPress={ () => buildNomber('4') } label="4" color={ colors.lightGray } />
            <CalculatorButton onPress={ () => buildNomber('5') } label="5" color={ colors.lightGray } />
            <CalculatorButton onPress={ () => buildNomber('6') } label="6" color={ colors.lightGray } />
            <CalculatorButton onPress={ () => subtractOperation() } label="-" color={ colors.orange } />
        </View>

        <View style={ styles.row }>
            <CalculatorButton onPress={ () => buildNomber('1') } label="1" color={ colors.lightGray } />
            <CalculatorButton onPress={ () => buildNomber('2') } label="2" color={ colors.lightGray } />
            <CalculatorButton onPress={ () => buildNomber('3') } label="3" color={ colors.lightGray } />
            <CalculatorButton onPress={ () => addOperation() } label="+" color={ colors.orange } />
        </View>

        <View style={ styles.row }>
            <CalculatorButton onPress={ () => buildNomber('0') } label="0" color={ colors.lightGray } large />
            <CalculatorButton onPress={ () => buildNomber('.') } label="." color={ colors.lightGray } />
            <CalculatorButton onPress={ () => calculateResult() } label="=" color={ colors.orange } />
        </View>

    </View>
  );
};
