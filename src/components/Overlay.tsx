import React from 'react';
import { View, StyleSheet, Modal, Image, Dimensions } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
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
                    delay={500}
                    toValue={1}
                    startValue={5}

                    style={{
                        ...styles.svgContainer,
                        width: windowWidth
                    }}>
                    <Svg height="100%" width="100%" viewBox="0 0 100 100">
                        <Ellipse cx="50" cy="50" rx="90" ry="40" fill="red" />
                    </Svg>
                </ScalingView>
                <Image source={require('../assets/splash/bootsplash_logo.png')} />
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
        backgroundColor: 'blue',
    },
    svgContainer: {
        aspectRatio: 1,
        position: 'absolute',
        top: -300,

        height: 600,
    },
});
