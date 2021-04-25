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
      <View style={styles.View_20_2}>
        <Text style={styles.Text_20_2}>Fonts</Text>
      </View>
      <View style={styles.View_20_4}>
        <Text style={styles.Text_20_4}>Colors</Text>
      </View>
      <View style={styles.View_20_23}>
        <Text style={styles.Text_20_23}>
          Roboto Welcome to Shipshaq Let’s create your account Your account
          created successfully
        </Text>
      </View>
      <View style={styles.View_20_27}>
        <Text style={styles.Text_20_27}>
          Poppins Welcome to Shipshaq Let’s create your account Your account
          created successfully
        </Text>
      </View>
      <View style={styles.View_26_0}>
        <Text style={styles.Text_26_0}>
          TT Norms Welcome to Shipshaq Let’s create your account Your account
          created successfully
        </Text>
      </View>
      <View style={styles.View_35_3}>
        <Text style={styles.Text_35_3}>
          Futura Welcome to Shipshaq Let’s create your account Your account
          created successfully
        </Text>
      </View>
      <View style={styles.View_34_3}>
        <Text style={styles.Text_34_3}>
          DIN Welcome to Shipshaq Let’s create your account Your account created
          successfully
        </Text>
      </View>
      <View style={styles.View_22_0}>
        <Text style={styles.Text_22_0}>
          Cabin Welcome to Shipshaq Let’s create your account Your account
          created successfully
        </Text>
      </View>
      <View style={styles.View_34_4}>
        <Text style={styles.Text_34_4}>
          Helvetica Welcome to Shipshaq Let’s create your account Your account
          created successfully
        </Text>
      </View>
      <View style={styles.View_34_5}>
        <Text style={styles.Text_34_5}>
          Helvetica Neue Welcome to Shipshaq Let’s create your account Your
          account created successfully
        </Text>
      </View>
      <View style={styles.View_20_24}>
        <Text style={styles.Text_20_24}>
          Noto Sans Welcome to Shipshaq Let’s create your account Your account
          created successfully
        </Text>
      </View>
      <View style={styles.View_35_2}>
        <Text style={styles.Text_35_2}>
          Noto Sans jp Welcome to Shipshaq Let’s create your account Your
          account created successfully
        </Text>
      </View>
      <View style={styles.View_20_25}>
        <Text style={styles.Text_20_25}>
          Raleway Welcome to Shipshaq Let’s create your account Your account
          created successfully
        </Text>
      </View>
      <View style={styles.View_20_26}>
        <Text style={styles.Text_20_26}>
          Montserrat Welcome to Shipshaq Let’s create your account Your account
          created successfully
        </Text>
      </View>
      <View style={styles.View_20_6}>
        <Text style={styles.Text_20_6}>Primary Colors</Text>
      </View>
      <View style={styles.View_20_7}>
        <Text style={styles.Text_20_7}>Secondry Colors</Text>
      </View>
      <View style={styles.View_20_11}>
        <Text style={styles.Text_20_11}>MELON </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cebe/8ed8/be2e451f73e226b7df2ff7e9eb846d16"
        }}
        style={styles.ImageBackground_20_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa63/e33f/3f7b8bb9bab761d020b8869c4b2da5f8"
        }}
        style={styles.ImageBackground_20_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c7e/6ad7/92757eb9cfee917cdfc53c8a6a291173"
        }}
        style={styles.ImageBackground_20_14}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efff/9c19/352824fdc41a1efbed793c3af9840a33"
        }}
        style={styles.ImageBackground_20_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb61/bc79/98f1450ca0999676076914c06c6ee639"
        }}
        style={styles.ImageBackground_20_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c13d/09e8/ee9af36d1a21f0fe0993cdff8d39bb67"
        }}
        style={styles.ImageBackground_20_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d72/8d23/9843494bb26c1fabf2634673fc14795f"
        }}
        style={styles.ImageBackground_20_18}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e87/9639/108458b90a5eb52bbd192a48ba3474d7"
        }}
        style={styles.ImageBackground_27_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e989/6f75/ea409c13231a19e8e1095234b4af9b96"
        }}
        style={styles.ImageBackground_20_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81de/59b3/9971d3b8d9fbda1d1a7a3dd761fcdbdc"
        }}
        style={styles.ImageBackground_27_3}
      />
      <View style={styles.View_20_20} />
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_20_2: {
    width: wp("6.489292667099286%"),
    minWidth: wp("6.489292667099286%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.125243348475014%"),
    top: hp("4.508196721311475%")
  },
  Text_20_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 58,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_4: {
    width: wp("7.332900713822194%"),
    minWidth: wp("7.332900713822194%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.401038286826736%"),
    top: hp("4.508196721311475%")
  },
  Text_20_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 58,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_23: {
    width: wp("11.875405580791695%"),
    minWidth: wp("11.875405580791695%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.347826086956516%"),
    top: hp("20.21857923497268%")
  },
  Text_20_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_27: {
    width: wp("13.432835820895523%"),
    minWidth: wp("13.432835820895523%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.125243348475014%"),
    top: hp("57.103825136612016%")
  },
  Text_20_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_0: {
    width: wp("11.71317326411421%"),
    minWidth: wp("11.71317326411421%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.98118105126542%"),
    top: hp("62.431693989071036%")
  },
  Text_26_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_3: {
    width: wp("10.804672290720312%"),
    minWidth: wp("10.804672290720312%"),
    minHeight: hp("27.732240437158467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.3666450356911%"),
    top: hp("62.431693989071036%")
  },
  Text_35_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_3: {
    width: wp("11.615833874107723%"),
    minWidth: wp("11.615833874107723%"),
    minHeight: hp("29.6448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.36924075275795%"),
    top: hp("62.431693989071036%")
  },
  Text_34_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_0: {
    width: wp("10.934458144062297%"),
    minWidth: wp("10.934458144062297%"),
    minHeight: hp("27.732240437158467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.125243348475014%"),
    top: hp("102.18579234972678%")
  },
  Text_22_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_4: {
    width: wp("11.778066190785204%"),
    minWidth: wp("11.778066190785204%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.482154445165474%"),
    top: hp("20.21857923497268%")
  },
  Text_34_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_5: {
    width: wp("11.421155094094743%"),
    minWidth: wp("11.421155094094743%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.36924075275795%"),
    top: hp("20.21857923497268%")
  },
  Text_34_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_24: {
    width: wp("12.297209604153148%"),
    minWidth: wp("12.297209604153148%"),
    minHeight: hp("31.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.65087605451005%"),
    top: hp("20.21857923497268%")
  },
  Text_20_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_35_2: {
    width: wp("12.134977287475666%"),
    minWidth: wp("12.134977287475666%"),
    minHeight: hp("33.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.28423101881896%"),
    top: hp("20.21857923497268%")
  },
  Text_35_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_25: {
    width: wp("12.524334847501622%"),
    minWidth: wp("12.524334847501622%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.36924075275795%"),
    top: hp("102.86885245901641%")
  },
  Text_20_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_26: {
    width: wp("14.049318624269954%"),
    minWidth: wp("14.049318624269954%"),
    minHeight: hp("33.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.347826086956516%"),
    top: hp("62.431693989071036%")
  },
  Text_20_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_6: {
    width: wp("3.8611291369240757%"),
    minWidth: wp("3.8611291369240757%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.628163530175211%"),
    top: hp("20.491803278688526%")
  },
  Text_20_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_7: {
    width: wp("4.282933160285529%"),
    minWidth: wp("4.282933160285529%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.628163530175211%"),
    top: hp("38.66120218579235%")
  },
  Text_20_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_11: {
    width: wp("1.427644386761843%"),
    minWidth: wp("1.427644386761843%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.628163530175211%"),
    top: hp("16.80327868852459%")
  },
  Text_20_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_20_12: {
    width: wp("2.2712524334847504%"),
    minWidth: wp("2.2712524334847504%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4334847501622323%"),
    top: hp("43.71584699453552%")
  },
  ImageBackground_20_13: {
    width: wp("2.2712524334847504%"),
    minWidth: wp("2.2712524334847504%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4334847501622323%"),
    top: hp("26.912568306010932%")
  },
  ImageBackground_20_14: {
    width: wp("2.2712524334847504%"),
    minWidth: wp("2.2712524334847504%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.54834523036989%"),
    top: hp("26.912568306010932%")
  },
  ImageBackground_20_15: {
    width: wp("2.2712524334847504%"),
    minWidth: wp("2.2712524334847504%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.663205710577547%"),
    top: hp("26.912568306010932%")
  },
  ImageBackground_20_16: {
    width: wp("2.2712524334847504%"),
    minWidth: wp("2.2712524334847504%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.54834523036989%"),
    top: hp("43.71584699453552%")
  },
  ImageBackground_20_17: {
    width: wp("2.2712524334847504%"),
    minWidth: wp("2.2712524334847504%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.663205710577547%"),
    top: hp("43.71584699453552%")
  },
  ImageBackground_20_18: {
    width: wp("2.2712524334847504%"),
    minWidth: wp("2.2712524334847504%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.778066190785204%"),
    top: hp("43.71584699453552%")
  },
  ImageBackground_27_2: {
    width: wp("2.2712524334847504%"),
    minWidth: wp("2.2712524334847504%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.73069435431538%"),
    top: hp("43.71584699453552%")
  },
  ImageBackground_20_19: {
    width: wp("2.2712524334847504%"),
    minWidth: wp("2.2712524334847504%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.778066190785204%"),
    top: hp("26.912568306010932%")
  },
  ImageBackground_27_3: {
    width: wp("2.2712524334847504%"),
    minWidth: wp("2.2712524334847504%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.73069435431538%"),
    top: hp("26.912568306010932%")
  },
  View_20_20: {
    width: wp("22.7125243348475%"),
    minWidth: wp("22.7125243348475%"),
    height: hp("95.62841530054644%"),
    minHeight: hp("95.62841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.412070084360805%"),
    top: hp("41.939890710382514%")
  },
  View_2: { height: 1141 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
