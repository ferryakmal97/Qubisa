import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IcIon from 'react-native-vector-icons/Ionicons';
import {colors, fonts} from '../../styles';

interface props {
  title: string;
  password?: boolean;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const CTextInput: React.FC<props> = ({
  title,
  password = false,
  placeholder,
  value,
  onChangeText,
}) => {
  const [hide, setHide] = useState(password ? true : false);
  return (
    <View>
      <Text style={fonts.robotoRegular}>{title}</Text>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          style={styles.textInput}
          secureTextEntry={hide}
          value={value}
          onChangeText={onChangeText}
        />
        {password && (
          <TouchableOpacity activeOpacity={0.7} onPress={() => setHide(!hide)}>
            <IcIon
              name={hide ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color={colors.black}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
});
