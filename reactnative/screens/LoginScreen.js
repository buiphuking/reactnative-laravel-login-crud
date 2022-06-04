import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import setSignIn from '../features/auth/authSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [mssv, setMssv] = useState();
  const [password, setPassword] = useState();
  // const [login, setLogin] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  myfunction = async () => {
    const user = {
      mssv: mssv,
      password: password,
    };
    const {userAuth} = useSelector(state => state.isLoggedIn);
    dispatch(user);
    // await fetch('http://192.168.1.3:8000/api/login', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({mssv: mssv, password: password}),
    // })
    //   .then(res => res.json())
    //   .then(resData => {
    //     if (resData.status == 200) {
    //       setLogin(true);
    //     }
    //     alert(resData.message);
    //     console.log(resData);
    //     console.log(login);
    //   });
  };
  console.log(login);
  return (
    <View style={styles.container}>
      <View style={styles.imgbox}>
        <Image
          style={styles.image}
          source={require('../assets/logo-tgu.png')}
        />
      </View>
      <View style={styles.imgbox}>
        <Image style={styles.image} source={require('../assets/dtn.png')} />
      </View>
      <View style={styles.imgbox}>
        <Image
          style={styles.image}
          source={require('../assets/logo-hoi-sinh-vien-vn.png')}
        />
      </View>
      <View>
        <Text>{login ? 'Đã đăng nhập' : 'Chưa đăng nhập'}</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nhập tài khoản"
          value={mssv}
          onChangeText={value => setMssv(value)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry={hidePass ? true : false}
          style={styles.TextInput}
          placeholder="Nhập mật khẩu"
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <Icon
          style={{position: 'absolute', right: 10, top: 10}}
          name={hidePass ? 'eye-slash' : 'eye'}
          size={15}
          color="grey"
          onPress={() => setHidePass(!hidePass)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={myfunction}>
        <Text style={styles.loginText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imgbox: {
    flex: 1,
  },
  img: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },

  inputView: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#80bdff',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#007bff',
  },
  loginText: {
    color: '#fff',
  },
});
