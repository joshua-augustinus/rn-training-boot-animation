import React from 'react';
import { View, StyleSheet, Modal, Image, Dimensions } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import { Animation1View } from './Animation1View';
import { Animation2View } from './Animation2View';
import { ScalingView } from './ScalingView';


const spinner = {
    size: 60,
    color: 'gray',
};


interface Props {
    isVisible: boolean
}

const TEXT_LOGO_HEIGHT = 120;
const TEXT_LOGO_WIDTH = 300;



const Overlay = (props: Props) => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <Modal
            transparent={true}
            visible={props.isVisible}
            presentationStyle="overFullScreen"
        >
            <View style={styles.container}>

                <ScalingView
                    duration={1000}
                    delay={4000}
                    toValue={1.01}
                    startValue={5.5}

                    style={{
                        ...styles.svgContainer,
                        width: windowWidth
                    }}>
                    <Svg height="100%" width="100%" viewBox="0 0 100 100">
                        <Ellipse cx="50" cy="50" rx="90" ry="40" fill="#F89137" />
                    </Svg>
                </ScalingView>
                <ScalingView
                    duration={1000}
                    delay={2500}
                    toValue={1}
                    startValue={5.5}

                    style={{
                        ...styles.svgContainer,
                        width: windowWidth
                    }}>
                    <Svg height="100%" width="100%" viewBox="0 0 100 100">
                        <Ellipse cx="50" cy="50" rx="90" ry="40" fill="#00BFD8" />
                    </Svg>
                </ScalingView>
                <Animation1View style={styles.imageContainer}
                    delay={500}
                    toValue={2}
                    startValue={1}
                >
                    <Image style={styles.triangleImage} source={require('../assets/splash/logo.png')} />
                </Animation1View>
                <View style={styles.imageContainer}>
                    <Animation2View
                        delay={4800}
                        toValue={1}
                        startValue={0.01}>

                        <Image style={styles.textImage} source={require('../assets/splash/text_logo.png')} />
                    </Animation2View>
                </View>
            </View>
        </Modal>
    );

}

export { Overlay }


const styles = StyleSheet.create({
    triangleImage: {
        width: 100,
        height: 144
    },
    textImage: {
        width: TEXT_LOGO_WIDTH, height: TEXT_LOGO_HEIGHT
    },
    imageContainer: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    svgContainer: {
        aspectRatio: 1,
        position: 'absolute',
        top: -300,

        height: 600,
    },
});
