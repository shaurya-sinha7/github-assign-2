import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { DebugInstructions } from "react-native/Libraries/NewAppScreen";
import Icons from "../../assets/Icons";
import Profiles from "../../assets/Profiles";
import { Themes } from "../../assets/Themes";
import { palette } from "../../assets/Themes/palette";

const Body = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={Profiles.mtl.image}
                style={styles.image}
                imageStyle={styles.imagestyle}
            >
                <Text style={styles.toptext}>{Profiles.mtl.name}</Text>
                <Text style={styles.bottomtext}>{Profiles.mtl.caption}</Text>
            </ImageBackground>
            <View style={styles.lowercontainer}>
                <Text style={styles.google}>My hottest take</Text>
                <View style={styles.iconContainer}>
                    <Image
                        source={Icons.player.light}
                        style={styles.playicon}
                    >
                    </Image>
                    <Image
                        source={Icons.audioWave.light}
                        style={styles.audiowave}
                    >
                    </Image>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: undefined,
        aspectRatio: 1 / 1.1,
        justifyContent: "space-between"
    },
    google: {
        fontFamily: 'Sydney',
        fontSize: 24,
        color: 'black',
    },
    audiowave: {
        width: "80%",
        height: "80%",
        aspectRatio: 4 / 1,
        flexDirection: "row",
    },
    playicon: {
        width: "18%",
        height: "18%",
        aspectRatio: 1 / 1,
    },
    imagestyle: {
        borderRadius: 8
    },
    toptext: {
        padding: 8,
        color: "white",
        fontFamily: "Sydney",
        fontSize: 32
    },
    bottomtext: {
        padding: 8,
        marginBottom: "1%",
        color: "white",
        fontFamily: "Sydney",
        fontSize: 18,
    },
    container: {
        marginTop: "30%",
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        width: "65%",
        marginLeft: "18%",
        shadowColor: palette.black,
        shadowOpacity: 0.4,
        shadowRadius: 5,
        shadowOffset: { width: -1, height: 5 }
    },
    lowercontainer: {
        marginTop: "10%",
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: "100%",
        backgroundColor: `#ffffff`,
        padding: "10%",
        borderRadius: 8
    },
    iconContainer: {
        marginTop: "10%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        backgroundColor: `#ffffff`,
    }
})

export default Body;


