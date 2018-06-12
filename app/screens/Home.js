import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { CurrentWeather } from '../components/CurrentWeather';
import { Forcast } from '../components/Forcast';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchWeather} from '../weatherAPI'
import Highlight from 'react-native-highlight-words'

const defaultState = {
  cityName: 'Ottawa',
  lastUpdatedTime: 'date + time',
  currentWeather: {
    weatherCond: 'Default',
    temp: '20',
    minTemp: '20',
    maxTemp: '20',
    humidity: '20',
    windSpeed: '20',
  },
  forcastSummaries:[
    {
      day: 'Sat',
      weatherCond: 'Rain',
      minTemp: '20',
      maxTemp: '20', 
    },
    {
      day: 'Sun',
      weatherCond: 'Rain',
      minTemp: '20',
      maxTemp: '20', 
    },
    {
      day: 'Mon',
      weatherCond: 'Rain',
      minTemp: '20',
      maxTemp: '20', 
    },
  ]
}

class Home extends Component {
  componentWillMount(){
    this.state = defaultState
  };

  componentDidMount(){
    weatherDataObj = this.getWeatherData()
    if (weatherDataObj != null){
      this.setState(weatherDataObj)
    }
  };

  getWeatherData(){
    //for now, return default object
    return defaultState
    /*TODO: Fetch weather data from API*/
  };

  handleOptionsPress= ()=> {
    console.log('handle options press');
  };

  render() {
    return(
      <Container>
        <StatusBar translucent={false} barStyle='light-content'/>
        <Header
          cityName= {this.state.cityName}
          onPress= {this.handleOptionsPress}
        />
        <CurrentWeather
          weatherCond= {this.state.currentWeather.weatherCond}
          temp= {this.state.currentWeather.temp}
          minTemp= {this.state.currentWeather.minTemp}
          maxTemp= {this.state.currentWeather.maxTemp}
          humidity= {this.state.currentWeather.humidity}
          windSpeed= {this.state.currentWeather.windSpeed}
          lastUpdatedTime= {this.state.lastUpdatedTime}
        />
        <Forcast
          tomorrow= {this.state.forcastSummaries[0]}
          afterTomorrow= {this.state.forcastSummaries[1]}
          afterAfterTomorrow= {this.state.forcastSummaries[2]}
        />
      </Container>
    );
  }
}

/*
function toCelsius(k) {
  return k - 273.15
}

const iconNames = {
	Default: 'md-time',
	Clear: 'md-sunny',
	Rain: 'md-rainy',
	Thunderstorm: 'md-thunderstorm' ,
	Clouds: 'md-cloudy' ,
	Snow: 'md-snow' ,
	Drizzle: 'md-umbrella' ,
	Mist: 'md-partly-sunny'
}

const phrases = {
	Default: {
		title: "Fetching the Weather",
		subtitle: "Be patient, you're witnessing a miracle",
		highlight: "miracle",
		color: "#636363",
		background: "#9C9C9C"
	},
	Clear: {
		title: "It's Amazing weather",
		subtitle: "Rock that shit!",
		highlight: "Enjoy the nice weather",
		color: "#E32500",
		background: "#FFD017"
	},
	Rain: {
		title: "Rain rain please go away",
		subtitle: "Stay inside and code all day",
		highlight: "away",
		color: "#004A96",
		background: "#2F343A"
	},
	Thunderstorm: {
		title: "Watch out, Thunder Strike",
		subtitle: "Unplug those devices",
		highlight: "Thunder",
		color: "#FBFF46",
		background: "#020202"
	},
	Clouds: {
		title: "Sky is full of clouds",
		subtitle: "When clouds are dark, wait for the rain",
		highlight: "limit",
		color: "#0044FF",
		background: "#939393"
	},
	Snow: {
		title: "Of course it's snowing",
		subtitle: "You're not supposed to eat it",
		highlight: "Snow",
		color: "#021D4C",
		background: "#15A678"
	},
	Drizzle: {
		title: "Meh... don't even ask",
		subtitle: "What did I just say?",
		highlight: "don't",
		color: "#B3F6E4",
		background: "#1FBB68"
	},
	Mist: {
		title: "Mist",
		subtitle: "Mist !",
		highlight: "Mist",
		color: "#B3F6E4",
		background: "#1FBB68"
	},
}

const imageSources = {
  //All weather states have the same image for testing only
	Default: './weatherImages/default.jpg',
  Clear: './weatherImages/default.jpg',
  Rain: './weatherImages/default.jpg',
  Thunderstorm: './weatherImages/default.jpg',
  Clouds: './weatherImages/default.jpg',
  Snow: './weatherImages/default.jpg',
  Drizzle: './weatherImages/default.jpg',
  Mist: './weatherImages/default.jpg',
}

const allStyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:`#FFD017`
  },
  iconStyle:{
  fontSize: 90,
  color: 'white',
  marginBottom: -80

  },
  cityHeaderStyle:{
    //height: 40,
    alignItems:'flex-start', //horizontal
    justifyContent:'center', //vertical
    flex:1,
    backgroundColor: 3007,
    flexDirection:'column'
  },
  tempHeaderStyle:{
    alignItems:'center',
    justifyContent:'space-around',
    flex:1,
   // backgroundColor: 'red',
    flexDirection:'row'
  },
  twoSeparatViewsInRowStyle:{
    alignContent: 'stretch',
    alignItems:'baseline',
    justifyContent:'space-between',
    flex:1,
    //backgroundColor: 'green',
    flexDirection:'row'
  },
  twoAdjacentViewsInRowStyle:{
    //width: 100,
    alignItems:'center',
    justifyContent:'flex-start',
    flex:1,
    //backgroundColor: 'blue',
    flexDirection:'row',
    marginLeft: 30,
  },
  subDetailsHeaderStyle:{
    alignItems:'flex-start',
    justifyContent:'flex-start',
    flex:1,
    flexDirection:'column',
    marginTop: 60,
    //backgroundColor: 'red',
  },
  cityNameStyle:{
    textAlign: 'left',
    fontFamily:'HelveticaNeue-Bold',
    fontSize:20,
    color:'white',
    marginBottom: 0
  },
  dateTimeStyle:{
    textAlign: 'left',
    fontFamily:'HelveticaNeue-Bold',
    fontSize:12,
    color:'white',
    marginBottom: 0
  },
  temp:{
    fontFamily:'HelveticaNeue-Bold',
    fontSize:55,
    color:'white',
    marginBottom: -80
  },
  bodyStyle:{
    alignItems:'flex-start',
    justifyContent:'flex-end',
    flex:5,
    margin:10,
   // backgroundColor: 'yellow'
  },
  bacgroundImgStyle:{
    flex: 1,
    alignItems: 'center',
    resizeMode:'contain',
    justifyContent: 'center',
  },
  subDetailsImgStyle:{
    flex: 0.4,
    alignItems: 'flex-start',
    width: 30,
    height: 30,
    resizeMode:'contain',
    justifyContent: 'flex-start',
  },
  btnImgStyle:{
    flex: 1,
    alignItems: 'flex-start',
    width: 50,
    height: 50,
    resizeMode:'contain',
    justifyContent: 'flex-start',
    marginLeft: 30,
  },
  title:{
    fontFamily:'HelveticaNeue-Bold',
    alignItems:'center',
    fontSize:35,
    color:3007,
    marginTop:200,
  },
  subTitle:{
    fontFamily:'HelveticaNeue-Medium',
    fontSize:20,
    color:'white',
    marginBottom:0
  },
  subDetails:{
    fontFamily:'HelveticaNeue-Medium',
    fontSize:14,
    color:3007,
    //marginLeft:-40
  }
})
*/

export default Home;