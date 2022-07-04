import { StyleSheet } from "react-native"
import { Platform, } from 'react-native'
import { colors as COLORS } from "constants/colors"
import { WIDTH, HEIGHT } from "constants/dimensions"


const commonStyle = StyleSheet.create({
    flexDirection: (lang: string) => {
        return { flexDirection: `row${lang == "en" ? "" : "-reverse"}` }
    },
    textAlign: (lang: string) => {
        return { textAlign: `${lang == "en" ? "left" : "right"}` }
    },
    alignItems: (lang: string) => {
        return { alignItems: `flex-${lang == "en" ? "start" : "end"}` }
    },
    direction: (lang: string) => {
        return { direction: `${lang == "en" ? "ltr" : "rtl"}` }
    },
    alignSelf: (lang: string) => {
        return { alignSelf: `flex-${lang == "en" ? "start" : "end"}` }
    },
    justifyContent: (lang: string) => {
        return { alignSelf: `flex-${lang == "en" ? "start" : "end"}` }
    },

    fontRegular: () => {
        return { fontFamily: Platform.OS == 'ios' ? "DINNextW1G-Regular" : "DINNextW1G-Regular" };
    },
    fontBold: () => {
        return { fontFamily: Platform.OS == 'ios' ? "DINNextW1G-Bold" : "DINNextW1G-Bold" };
    },
    fontMedium: () => {
        return { fontFamily: Platform.OS == 'ios' ? "DINNextW1G-Medium" : "DINNextW1G-Medium" };
    },
    bottomButtonStyle: {
        backgroundColor: COLORS.gray, paddingHorizontal: WIDTH * 0.05, height: HEIGHT * 0.12, alignItems: "center", justifyContent: "center"
    }
})

export { commonStyle }
