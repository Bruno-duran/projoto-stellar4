import React, { Component } from 'react';
import { WebView } from 'react-native-webview'
import { Text, View } from 'react-native';

export default class StarMapScreen extends Component {
    constructor() {
        super()
        this.state= {longitude:'', latitude:''}
    }
    render() {
        const { longitude, latitude } = this.state; 
        const path =`https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Tela do mapa estelar!</Text>
             <WebView
             scalesPageToFit={true}
             source={{ uri:path }}
             style={{ marginTop: 20, marginBottom:20,}}
             />
             <TextInput
             style={StyleSheet.inputStyle}
             placeholder="Digite sua latitude"
             placeHolderTextColor="white"
             onChangeText={(text1) =>{
                this.setState({
                    latitude: text1
                })
             }}
             />
             <TextInput
             style={StyleSheet.inputStyle}
             placeholder="Digite sua longitude"
             placeHolderTextColor="white"
             onChangeText={(text2) =>{
                this.setState({
                    longitude: text2
                })
             }}
             />
            </View>
           
        )
    }
}