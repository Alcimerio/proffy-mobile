import React, { ReactNode } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';

interface PageHeaderProps {
  title: string;
  rightHeader?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, rightHeader, children }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton
          onPress={handleGoBack}>
            <Image source={backIcon} resizeMoge="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMoge="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {rightHeader}
      </View>

      {children}
    </View>
  );
}

export default PageHeader;