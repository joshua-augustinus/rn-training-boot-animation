import React, { ReactNode, useEffect, useRef } from 'react';

import { Animated, ViewStyle } from 'react-native';

interface Props {
    style?: ViewStyle;
    children: ReactNode;
    toValue: number;
    delay?: number;
    startValue?: number;

    duration?: number;
}

const DEFAULT_DURATION = 800;

const ScalingView: React.FunctionComponent<Props> = (props) => {
    const dynamicValue = useRef(new Animated.Value(props.startValue)).current;

    let transformArray = [{ scale: dynamicValue }];

    useEffect(() => {
        const duration = props.duration ? props.duration : DEFAULT_DURATION;
        Animated.timing(dynamicValue, {
            delay: props.delay,
            toValue: props.toValue,
            duration: duration,
            useNativeDriver: true,
        }).start();
    }, [props.toValue]);

    return (
        <Animated.View style={{ ...props.style, transform: transformArray }}>
            {props.children}
        </Animated.View>
    );
};

export { ScalingView };
