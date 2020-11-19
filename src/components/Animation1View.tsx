import React, { ReactNode, useEffect, useRef } from 'react';

import { Animated, ViewStyle } from 'react-native';

interface Props {
    style?: ViewStyle;
    children: ReactNode;
    toValue: number;
    delay?: number;
    startValue?: number;
}

const DEFAULT_DURATION = 800;

const Animation1View: React.FunctionComponent<Props> = (props) => {
    const dynamicValue = useRef(new Animated.Value(props.startValue)).current;

    let transformArray = [{ scale: dynamicValue }];

    useEffect(() => {
        Animated.spring(dynamicValue, {
            delay: props.delay,
            toValue: props.toValue,
            useNativeDriver: true,
            speed: 6,
            bounciness: 16
        }).start();
    }, [props.toValue]);

    return (
        <Animated.View style={{ ...props.style, transform: transformArray }}>
            {props.children}
        </Animated.View>
    );
};

export { Animation1View };
