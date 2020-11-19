import React, { ReactNode, useEffect, useRef } from 'react';

import { Animated, ViewStyle } from 'react-native';

interface Props {
    style?: ViewStyle;
    children: ReactNode;
    toValue: number;
    delay?: number;
    startValue?: number;
}


const Animation2View: React.FunctionComponent<Props> = (props) => {
    const dynamicValue = useRef(new Animated.Value(props.startValue)).current;
    const translateYValue = useRef(new Animated.Value(0)).current;
    let transformArray = [{ scale: dynamicValue }, { translateY: translateYValue }];

    useEffect(() => {

        const animation1 = Animated.spring(dynamicValue, {
            delay: props.delay,
            toValue: props.toValue,
            useNativeDriver: true,
            speed: 6,
            bounciness: 16
        });
        const animation2 = Animated.timing(translateYValue, {
            delay: 500,
            toValue: -80,
            useNativeDriver: true,
            duration: 500,
        });


        Animated.sequence([animation1, animation2]).start();
    }, [props.toValue]);

    return (
        <Animated.View style={{ ...props.style, transform: transformArray }}>
            {props.children}
        </Animated.View>
    );
};

export { Animation2View };
