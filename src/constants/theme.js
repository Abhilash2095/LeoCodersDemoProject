import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");



export const COLORS = {
    primary: "#42C6A5",     // Green
    primary2: "#FBB344",    // Orange
    primary3: "#33354E",    // Dark Blue
    secondary: "#FC2626",   // Red
    gray10: "#E5E5E5",
    gray20: "#CCCCCC",
    gray30: "#A1A1A1",
    gray40: "#999999",
    gray50: "#7F7F7F",
    gray60: "#666666",
    gray70: "#4C4C4C",
    gray80: "#333333",
    gray85: "#242526",
    gray90: "#191919",

    additionalColor4: "#C3C3C3",
    additionalColor9: "#F3F3F3",
    additionalColor11: "#F0FFFB",
    additionalColor13: "#EBF3EF",

    white: '#FFFFFF',
    black: "#000000",

    transparent: 'transparent',
    transparentWhite1: "rgba(255, 255, 255, 0.1)",
    transparentBlack1: "rgba(0, 0, 0, 0.1)",
    transparentBlack7: "rgba(0, 0, 0, 0.7)",

    headingColor:'#333333',
    headingColor2:'#D2BAF5',
    headingColor3:'#B296DC',
    headingColor4:'#B5C0C8',
    headingColor5:'#727682',
    headingColor6:'#727682',
    headingColor7:'#4F4F4F',

    backgroundColor9:'#EEEAF3',
    darkButton:'#452C55',
    lightButton:'#6231AD',

    buttonColor:'#292929',
    inputBackground:'#D8D8D833',
    inputText:'#8C8A8ABF',
    appRed:"#9DCF62",
    appgreen:"#FF4A4A",
    tab:'#989898',
    backgroundColor10:'#F5F5F5',
    history:'#8C8A8A96',
    status:'#00BD4C',
    subtitle:'#969696',
    borderColor3:"#E9E9E9",
    morningGrey:'#676767',
    timeColor:'#8C8A8A24',

    backgroundColor:'#22478A',
    TabColor:'#E146C2',
    buttonColor:'#43A8F7',
    lightPink:'#FFD8F8'
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const FONTS = {
    largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Poppins-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Poppins-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Poppins-Bold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

export const darkTheme = {
    name: "dark",
    backgroundColor1: COLORS.gray85,
    backgroundColor2: COLORS.gray90,
    backgroundColor3: COLORS.gray90,
    backgroundColor4: COLORS.primary,
    backgroundColor5: COLORS.gray85,
    backgroundColor6: COLORS.black,
    backgroundColor7: COLORS.gray90,
    backgroundColor8: COLORS.gray70,
    lineDivider: COLORS.gray70,
    borderColor1: COLORS.gray70,
    borderColor2: COLORS.gray70,
    textColor: COLORS.white,
    textColor2: COLORS.white,
    textColor3: COLORS.gray40,
    textColor4: COLORS.white,
    textColor5: COLORS.gray30,
    textColor6: COLORS.gray30,
    textColor7: COLORS.gray40,
    tintColor: COLORS.white,
    dotColor1: COLORS.white,
    dotColor2: COLORS.primary,
}

export const lightTheme = {
    name: "light",
    backgroundColor1: COLORS.white,
    backgroundColor2: COLORS.primary3,
    backgroundColor3: COLORS.additionalColor11,
    backgroundColor4: COLORS.white,
    backgroundColor5: COLORS.additionalColor13,
    backgroundColor6: COLORS.primary3,
    backgroundColor7: COLORS.white,
    backgroundColor8: COLORS.gray10,
    lineDivider: COLORS.gray20,
    borderColor1: COLORS.white,
    borderColor2: COLORS.black,
    textColor: COLORS.black,
    textColor2: COLORS.primary,
    textColor3: COLORS.gray80,
    textColor4: COLORS.white,
    textColor5: COLORS.black,
    textColor6: COLORS.gray,
    textColor7: COLORS.black,
    tintColor: COLORS.black,
    dotColor1: COLORS.gray20,
    dotColor2: COLORS.primary3,
}

export const selectedTheme = darkTheme

const appTheme = { COLORS, SIZES, FONTS, darkTheme, lightTheme };

export default appTheme;
