import React, { ReactNode, useEffect, useRef } from 'react';

import { Animated, ViewStyle } from 'react-native';

interface Props {
    style?: ViewStyle;
    children: ReactNode;
    delay?: number;
}


const Animation3View: React.FunctionComponent<Props> = (props) => {
    const translateXValue = useRef(new Animated.Value(1000)).current;
    let transformArray = [{ translateX: translateXValue }];

    useEffect(() => {

        const animation1 = Animated.spring(translateXValue, {
            delay: props.delay,
            toValue: 0,
            useNativeDriver: true,
            speed: 6,
            bounciness: 6
        });



        Animated.sequence([animation1]).start();
    }, []);

    return (
        <Animated.View style={{ ...props.style, transform: transformArray }}>
            {props.children}
        </Animated.View>
    );
};

export { Animation3View };
