import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_14_6}>
        <Text style={styles.Text_14_6}>Fonts</Text>
      </View>
      <View style={styles.View_14_13}>
        <Text style={styles.Text_14_13}>Colors</Text>
      </View>
      <View style={styles.View_14_8}>
        <Text style={styles.Text_14_8}>Header 1 - 34 Poppins</Text>
      </View>
      <View style={styles.View_14_22}>
        <Text style={styles.Text_14_22}>Primary Colors</Text>
      </View>
      <View style={styles.View_14_23}>
        <Text style={styles.Text_14_23}>Secondry Colors</Text>
      </View>
      <View style={styles.View_14_9}>
        <Text style={styles.Text_14_9}>Header 2 - 20 Poppins</Text>
      </View>
      <View style={styles.View_14_12}>
        <Text style={styles.Text_14_12}>Body - 13 Poppins</Text>
      </View>
      <View style={styles.View_17_1}>
        <Text style={styles.Text_17_1}>HAPPY,WARM VİBE</Text>
      </View>
      <View style={styles.View_17_2}>
        <Text style={styles.Text_17_2}>MELON </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca6c/bfcd/5801d04e27041a440d52a5074eb62d09"
        }}
        style={styles.ImageBackground_14_44}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3869/b729/e4370d82d4a3b1a4889da425e7ecffc3"
        }}
        style={styles.ImageBackground_14_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8f9/b348/2e3227d6d18ee46f7436b3c363b5595b"
        }}
        style={styles.ImageBackground_14_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72b9/d668/2c55ba57071f7650eae137dad72db7a9"
        }}
        style={styles.ImageBackground_14_42}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4ce/c0bc/945946fed4fecf2d9bf50a6b66ff6cc3"
        }}
        style={styles.ImageBackground_14_45}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef1a/ceaf/252f4c2d893a5ddbfce82d48aada7bfe"
        }}
        style={styles.ImageBackground_14_46}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f8c/4979/1e0419002cc829f2e368f9fcda243bd2"
        }}
        style={styles.ImageBackground_14_47}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d09/0e39/b5967d39808a30392677a2fc065506c0"
        }}
        style={styles.ImageBackground_14_43}
      />
      <View style={styles.View_19_1} />
      <View style={styles.View_20_5}>
        <Text style={styles.Text_20_5}>Header 1 - 34 Roboto</Text>
      </View>
      <View style={styles.View_20_8}>
        <Text style={styles.Text_20_8}>Header 2 - 20 Roboto</Text>
      </View>
      <View style={styles.View_20_9}>
        <Text style={styles.Text_20_9}>Body - 13 Poppins</Text>
      </View>
      <View style={styles.View_20_10}>
        <Text style={styles.Text_20_10}>HAPPY,WARM VİBE</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_14_6: {
    width: wp("22.701475595913735%"),
    minWidth: wp("22.701475595913735%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.967082860385926%"),
    top: hp("11.612021857923498%")
  },
  Text_14_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 58,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_13: {
    width: wp("25.652667423382518%"),
    minWidth: wp("25.652667423382518%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.375709421112376%"),
    top: hp("11.612021857923498%")
  },
  Text_14_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 58,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_8: {
    width: wp("34.96027241770715%"),
    minWidth: wp("34.96027241770715%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.967082860385926%"),
    top: hp("25.273224043715846%")
  },
  Text_14_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_22: {
    width: wp("14.982973893303065%"),
    minWidth: wp("14.982973893303065%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.17026106696936%"),
    top: hp("25.40983606557377%")
  },
  Text_14_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_23: {
    width: wp("16.685584562996596%"),
    minWidth: wp("16.685584562996596%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.17026106696936%"),
    top: hp("43.5792349726776%")
  },
  Text_14_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_9: {
    width: wp("21.33938706015891%"),
    minWidth: wp("21.33938706015891%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.967082860385926%"),
    top: hp("40.57377049180328%")
  },
  Text_14_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_12: {
    width: wp("15.777525539160045%"),
    minWidth: wp("15.777525539160045%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.967082860385926%"),
    top: hp("50.81967213114754%")
  },
  Text_14_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_1: {
    width: wp("12.939841089670828%"),
    minWidth: wp("12.939841089670828%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.307604994324631%"),
    top: hp("21.721311475409834%")
  },
  Text_17_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_2: {
    width: wp("4.880817253121453%"),
    minWidth: wp("4.880817253121453%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.17026106696936%"),
    top: hp("21.721311475409834%")
  },
  Text_17_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_14_44: {
    width: wp("7.945516458569807%"),
    minWidth: wp("7.945516458569807%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.48921679909194%"),
    top: hp("48.63387978142077%")
  },
  ImageBackground_14_40: {
    width: wp("7.945516458569807%"),
    minWidth: wp("7.945516458569807%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.48921679909194%"),
    top: hp("31.830601092896178%")
  },
  ImageBackground_14_41: {
    width: wp("7.945516458569807%"),
    minWidth: wp("7.945516458569807%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.38592508513053%"),
    top: hp("31.830601092896178%")
  },
  ImageBackground_14_42: {
    width: wp("7.945516458569807%"),
    minWidth: wp("7.945516458569807%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.28263337116913%"),
    top: hp("31.830601092896178%")
  },
  ImageBackground_14_45: {
    width: wp("7.945516458569807%"),
    minWidth: wp("7.945516458569807%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.38592508513053%"),
    top: hp("48.63387978142077%")
  },
  ImageBackground_14_46: {
    width: wp("7.945516458569807%"),
    minWidth: wp("7.945516458569807%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.28263337116913%"),
    top: hp("48.63387978142077%")
  },
  ImageBackground_14_47: {
    width: wp("7.945516458569807%"),
    minWidth: wp("7.945516458569807%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.17934165720771%"),
    top: hp("48.63387978142077%")
  },
  ImageBackground_14_43: {
    width: wp("7.945516458569807%"),
    minWidth: wp("7.945516458569807%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.17934165720771%"),
    top: hp("31.830601092896178%")
  },
  View_19_1: {
    width: wp("79.45516458569807%"),
    minWidth: wp("79.45516458569807%"),
    height: hp("95.62841530054644%"),
    minHeight: hp("95.62841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.724177071509648%"),
    top: hp("23.770491803278688%")
  },
  View_20_5: {
    width: wp("34.96027241770715%"),
    minWidth: wp("34.96027241770715%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.626560726447218%"),
    top: hp("68.30601092896174%")
  },
  Text_20_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_8: {
    width: wp("21.33938706015891%"),
    minWidth: wp("21.33938706015891%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.626560726447218%"),
    top: hp("80.32786885245902%")
  },
  Text_20_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_9: {
    width: wp("15.777525539160045%"),
    minWidth: wp("15.777525539160045%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.626560726447218%"),
    top: hp("88.66120218579235%")
  },
  Text_20_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_10: {
    width: wp("12.826333711691259%"),
    minWidth: wp("12.826333711691259%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.967082860385926%"),
    top: hp("64.75409836065575%")
  },
  Text_20_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 928 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
