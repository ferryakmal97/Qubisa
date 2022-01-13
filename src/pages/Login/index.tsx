import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStateOrAny, useSelector} from 'react-redux';
import {CButton, CGap, CHeader, CText, CTextInput} from '../../components';
import {colors} from '../../styles';
import {showToast, useForm} from '../../utils';

const Login = ({navigation}) => {
  const {users} = useSelector((state: RootStateOrAny) => state.userReducer);
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    if (email && password) {
      const user = users.find(value => value.email === email);
      if (user) {
        if (user.password === password) {
          showToast('Berhasil masuk');
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          showToast('Password tidak sesuai !');
        }
      } else {
        showToast('Data tidak ditemukan');
      }
    } else {
      showToast('Silahkan lengkapi form terlebih dahulu');
    }
  };

  const {email, password} = form;
  return (
    <View style={styles.container}>
      <CHeader title="Masuk" />
      <View style={styles.contentContainer}>
        <CGap height={32} />
        <CTextInput
          title="Email/username"
          placeholder="masukkan email/username kamu"
          value={email}
          onChangeText={val => setForm('email', val)}
        />
        <CGap height={24} />
        <CTextInput
          title="Kata Sandi"
          placeholder="masukkan kata sandi kamu"
          password
          value={password}
          onChangeText={val => setForm('password', val)}
        />
        <View style={styles.forgotPass}>
          <CText button>Lupa kata sandi?</CText>
        </View>
        <CButton title="Masuk" onPress={onSubmit} />
        <View style={styles.register}>
          <CText>Belum punya akun ? </CText>
          <CText
            button
            style={{fontWeight: '700'}}
            onPress={() => navigation.replace('Register')}>
            Daftar
          </CText>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  forgotPass: {
    alignItems: 'flex-end',
    marginTop: 12,
    marginBottom: 24,
  },
  register: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
