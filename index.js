import React, { Fragment } from 'react';
import {
    AppRegistry,
    asset,
    StyleSheet,
    Environment,
    Prefetch,
    View,
    NativeModules,
    VrButton
} from 'react-360';
import Flag from './components/Flag';
import Earth from './components/Earth';

const { TitleChanger } = NativeModules;

const PLACES = [
    {
        name: 'Space',
        flag: 'flag_nasa.png',
        panorama: 'stars.png'
    },
    {
        name: 'Spain',
        flag: 'flag_spain.png',
        panorama: 'spain.jpg'
    },
    {
        name: 'Italy',
        flag: 'flag_italy.png',
        panorama: 'italy.jpg'
    },
    {
        name: 'Ukraine',
        flag: 'flag_ukraine.jpg',
        panorama: 'ukraine.jpg'
    }
];

const TravelVR = () => {
    const [state, setState] = React.useState({ activeFlag: '' });

    const changeBackground = (panorama, name) => {
        Environment.setBackgroundImage(asset(panorama));
        TitleChanger.changeTitle(name);
    };

    const renderFlags = () => {
        return PLACES.map(({ flag, panorama, name }) => {
            return (
                <Fragment key={flag}>
                    <Prefetch source={asset(panorama)} />
                    <VrButton
                        onEnter={() => setState({ activeFlag: flag })}
                        onExit={() => setState({ activeFlag: '' })}
                        onClick={() => changeBackground(panorama, name)}
                    >
                        <Flag image={flag} activeFlag={state.activeFlag} />
                    </VrButton>
                </Fragment>
            );
        });
    }

    const { flagContainer } = styles;

    return (
        <View style={flagContainer}>
            {renderFlags()}
        </View>
    );
}

const styles = StyleSheet.create({
    flagContainer: {
        height: 600,
        width: 4680,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

AppRegistry.registerComponent('TravelVR', () => TravelVR);
AppRegistry.registerComponent('Flag', () => Flag);
AppRegistry.registerComponent('Earth', () => Earth);
