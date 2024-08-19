import { View, Text, TouchableOpacity, Image, Linking, Alert } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Footer = ({ url, jobDetails }) => {

  const setWishlist = async () => {
    const jobData = {
      job_id: jobDetails[0]?.job_id,
      job_title: jobDetails[0]?.job_title,
      job_description: jobDetails[0]?.job_description
    }
    console.log(jobData);
    AsyncStorage.setItem("wishlist", JSON.stringify(jobData))
    Alert.alert(`${jobDetails[0]?.job_title} added to wishlist`)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} onPress={setWishlist}>
        <Image
          source={icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
