import React, { ReactNode, useEffect, useRef } from 'react';

import { Animated, ViewStyle } from 'react-native';

interface Props {
    style?: ViewStyle;
    children: ReactNode;
    delay?: number;
}


const Animation4View: React.FunctionComponent<Props> = (props) => {
    const translateXValue = useRef(new Animated.Value(0)).current;
    let transformArray = [{ translateX: translateXValue }];

    useEffect(() => {

        const animation1 = Animated.timing(translateXValue, {
            delay: props.delay,
            toValue: 1000,
            useNativeDriver: true,
            duration: 800,
        });



        Animated.sequence([animation1]).start();
    }, []);

    return (
        <Animated.View style={{ ...props.style, transform: transformArray }}>
            {props.children}
        </Animated.View>
    );
};

export { Animation4View };
