import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar, Dimensions} from 'react-native';

const headerHeight= Dimensions.get('window').height/8;

const styles= EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    //add extra padding for ios only
    '@media ios':{
      //paddingTop: 20,
    },
    '@media android':{
      //paddingTop: StatusBar.currentHeight,
    },
    backgroundColor: '$darkGrey',
    height: headerHeight,
  },
  leftButton:{
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  icon:{
    width: 30,
  },
  headline:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  cityName:{
    fontFamily:'HelveticaNeue-Bold',
    fontSize:30,
    color:'$white',
    alignSelf: 'center',
  },
  date:{
    fontFamily:'HelveticaNeue-Bold',
    fontSize:20,
    color:'$white',
    alignSelf: 'center',
  },
  rightButton:{
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
 });

 export default styles;