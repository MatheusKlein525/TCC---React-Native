import { Link } from 'expo-router';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <View style={styles.container}>

      {/* ONDA SUPERIOR */}
      <Svg
        width={width}
        height={180}
        viewBox={`0 0 ${width} 180`}
        style={styles.waveTop}
      >
        <Path
          d={`
            M 0 95
            C 30 125, 65 105, 100 88
            C 145 67, 165 30, 205 47
            C 230 57, 250 80, ${width} 98
          `}
          fill="none"
          stroke="#65D5B0"
          strokeWidth="1"
        />
      </Svg>

      {/* CONTEÚDO PRINCIPAL */}
      <View style={styles.content}>

        {/* LOGO */}
        <Image
          source={require('../../assets/images/fairpay.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* EMAIL */}
        <TextInput
          style={styles.input}
          placeholder="insira o seu email"
          placeholderTextColor="#BDBDBD"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* SENHA */}
        <View style={styles.passwordContainer}>

          <TextInput
            style={styles.passwordInput}
            placeholder="insira a sua senha"
            placeholderTextColor="#BDBDBD"
            secureTextEntry={!senhaVisivel}
          />

          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setSenhaVisivel(!senhaVisivel)}
          >
            <Text style={styles.eye}>
              {senhaVisivel ? '◉' : '◌'}
            </Text>
          </TouchableOpacity>

        </View>

        {/* LINKS */}
        <View style={styles.linksContainer}>

          <TouchableOpacity>
            <Text style={styles.link}>
              Criar uma conta
            </Text>
          </TouchableOpacity>

          <Link href="/forgot-password" asChild>
            <TouchableOpacity>
              <Text style={styles.link}>
                Esqueci minha senha
              </Text>
            </TouchableOpacity>
          </Link>

        </View>

        {/* BOTÃO */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>
            Fazer Login
          </Text>
        </TouchableOpacity>

      </View>

      {/* ONDA INFERIOR */}
      <Svg
        width={width}
        height={160}
        viewBox={`0 0 ${width} 160`}
        style={styles.waveBottom}
      >
        <Path
          d={`
            M 0 20
            C 35 -5, 65 20, 105 42
            C 150 67, 175 70, 210 42
            C 235 22, 250 10, ${width} - 5
          `}
          fill="none"
          stroke="#65D5B0"
          strokeWidth="1"
        />
      </Svg>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 33,
    paddingTop: height * 0.30,
  },

  logo: {
    width: 320,
    height: 230,
    marginBottom: 35,
  },

  input: {
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: '#9A8CFF',
    borderRadius: 9,
    paddingHorizontal: 15,
    fontSize: 12,
    color: '#333333',
    marginBottom: 19,
  },

  passwordContainer: {
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: '#9A8CFF',
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
  },

  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    fontSize: 12,
    color: '#333333',
  },

  eyeButton: {
    width: 40,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  eye: {
    fontSize: 18,
    color: '#AAAAAA',
  },

  linksContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 34,
  },

  link: {
    fontSize: 8,
    color: '#777777',
    textDecorationLine: 'underline',
  },

  loginButton: {
    width: '100%',
    height: 43,
    backgroundColor: '#001DFF',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  waveTop: {
    position: 'absolute',
    top: 0,
    left: 0,
  },

  waveBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

});