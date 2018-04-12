import React, {Component} from 'react';
import {View, Text, StatusBar, Image, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import Share, {ShareSheet, Button} from 'react-native-share';
import css from '../../Styles/generator.styles';

const image = require('../../../assets/img/gen/img.jpeg')

export default class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false, medias: []}
  }
  
  componentWillMount() {
    this.__availableMedias();
  
    setTimeout( () => {
  
      this.__renderAvailableMedias()
    }, 3000)
  }
  
  onCancel() {
    this.setState({visible: false})
    console.log('share canceled')
  }
  
  onOpen() {
    this.setState({visible: true})
    console.log('share is open')
  }
  
  __availableMedias() {
    axios.get(`http://127.0.0.1:8000/api/templatings/defaults/`)
      .then(res => {
        this.setState({medias: res.data})
        console.log('the medias', this.state.medias)
      })
      .catch(error => console.error('error to get medias', error))
  }
  
  __renderAvailableMedias() {
    this.state.medias.map(m => {
      return (
        <View style={css.containerOfTwoImages} key={m.id}>
          <TouchableOpacity onPress={() => Actions.creator()}>
            <Image source={{uri: m.media_url}} style={css.generatedImage}/>
          </TouchableOpacity>
        </View>
      )
    })
  }
  
  render() {
    let shareOptions = {
      title: "React Native",
      message: "Hola mundo",
      url: "http://facebook.github.io/react-native/",
      subject: "Share Link" //  for email
    };
    return (
      <View style={css.main}>
        <View style={css.header}>
          <Text style={css.headerTitle}>Generator</Text>
        </View>
        
        <Text style={css.headerTitle}>Midias disponiveis</Text>
        <ScrollView>
          <View style={css.containerOfTwoImages}>
            <TouchableOpacity onPress={() => Actions.creator()}>
              <Image source={{uri: 'http://127.0.0.1:8000/images/3d56477f9315e0c9fe4a616b07df56f1.jpg'}} style={css.generatedImage}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
        
        
        {/*<Text style={css.headerTitle}>Minhas midias</Text>*/}
        {/*<ScrollView>*/}
          {/*<View style={css.containerOfTwoImages}>*/}
            {/**/}
            {/*<TouchableOpacity onPress={() => {*/}
              {/*Share.open(shareOptions);*/}
            {/*}}>*/}
              {/*<Image source={{uri: 'http://127.0.0.1:8000/img/0a26fe99bd89a052dd5d4cfc87bed132.jpg'}}*/}
                     {/*style={css.generatedImage}/>*/}
            {/*</TouchableOpacity>*/}
            {/**/}
            {/*<TouchableOpacity onPress={() => {*/}
              {/*Share.open(shareOptions);*/}
            {/*}}>*/}
              {/*<Image source={image} style={css.generatedImage}/>*/}
            {/*</TouchableOpacity>*/}
          {/**/}
          {/*</View>*/}
        {/*</ScrollView>*/}
      </View>
    );
  }
}