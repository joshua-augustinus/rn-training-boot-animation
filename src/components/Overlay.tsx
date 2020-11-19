import React from 'react';
import { View, StyleSheet, Modal, Image, Dimensions } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import { Animation1View } from './Animation1View';
import { ScalingView } from './ScalingView';


const spinner = {
    size: 60,
    color: 'gray',
};


interface Props {
    isVisible: boolean
}

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
                    delay={2000}
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
                <Animation1View
                    delay={500}
                    toValue={3}
                    startValue={1}
                >
                    <Image style={{ width: 100, height: 144 }} source={require('../assets/splash/logo.png')} />
                </Animation1View>

            </View>
        </Modal>
    );

}

export { Overlay }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F89137',
    },
    svgContainer: {
        aspectRatio: 1,
        position: 'absolute',
        top: -300,

        height: 600,
    },
});
