// import {createStackNavigator, createAppContainer} from 'react-navigation';
// import searchScreen from './src/screens/searchScreen';

// const navigator = createStackNavigator({
// Search :searchScreen,
// },
// {
//   initialRoutName:'Search', // default screen
//   defaultNavigationOptions:{
//     title:'Business Search' //default title on top of the screen in the app
//   }
// });
// export default createAppContainer(navigator);//app.js must export react component


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultsShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
