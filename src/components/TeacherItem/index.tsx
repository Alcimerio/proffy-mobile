import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/SRI_Curtis_R_Carlson_2010_cropped.jpg/220px-SRI_Curtis_R_Carlson_2010_cropped.jpg' }} />
        
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Curtis Carlson</Text>
          <Text style={styles.subject}>Innovation</Text>
        </View>
      </View>

      <Text style={styles.bio}>
      While CEO of SRI International, revenue tripled to $550 million per year and tens of billions of dollars of new marketplace value was created, such as through Siri, an SRI spin-off company that was bought by Steve Jobs at Apple.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
        
      </View>
    </View>
  );
}

export default TeacherItem;