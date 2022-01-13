import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {CButton, CGap, CHeader, CText, CTextInput} from '../../components';
import {ADD_USER} from '../../redux/constant';
import {colors} from '../../styles';
import {showToast, useForm} from '../../utils';

const regEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
    rePassword: '',
  });

  const dispatch = useDispatch();
  const {users} = useSelector((state: RootStateOrAny) => state.userReducer);

  const onSubmit = () => {
    if (name && email && password && rePassword) {
      if (email.match(regEmail)) {
        if (password !== rePassword) {
          showToast('Password tidak sesuai');
        } else {
          const user = users.find(value => value.email === email);
          if (!user) {
            dispatch({type: ADD_USER, data: {name, email, password}});
            showToast('Berhasil Daftar');
            setForm('reset');
          } else {
            showToast(`Email ${email} sudah terdaftar`);
          }
        }
      } else {
        showToast('Format email salah');
      }
    } else {
      showToast('Form tidak boleh kosong !');
    }
  };

  const {name, email, password, rePassword} = form;
  return (
    <View style={styles.container}>
      <CHeader title="Daftar" />
      <View style={styles.contentContainer}>
        <CGap height={32} />
        <CTextInput
          title="Nama Lengkap"
          placeholder="masukkan nama kamu sesuai KTP"
          value={name}
          onChangeText={val => setForm('name', val)}
        />
        <CGap height={24} />
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
          value={password}
          onChangeText={val => setForm('password', val)}
          password
        />
        <CGap height={24} />
        <CTextInput
          title="Ulang Kata Sandi"
          placeholder="Ketik ulang kata sandi kamu"
          value={rePassword}
          onChangeText={val => setForm('rePassword', val)}
          password
        />
        <CGap height={32} />
        <CButton title="Daftar" onPress={onSubmit} />
        <View style={styles.register}>
          <CText>Sudah punya akun ? </CText>
          <CText
            button
            style={{fontWeight: '700'}}
            onPress={() => navigation.replace('Login')}>
            Masuk
          </CText>
        </View>
      </View>
    </View>
  );
};

export default Register;

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
