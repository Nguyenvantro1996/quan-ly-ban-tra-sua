import * as React from 'react';
import {Button, Text, View, FlatList, Image,  ImageBackground  } from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, StackActions, NavigationActions} from "react-navigation";
import Food from './Food.js';
import {styles} from './Styles.js';
import {flatListData, cartData, imageInfoFood, imageBackground} from './FlatListData.js';

var image_Tro = 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/49897499_916579525204979_2229368578182742016_n.jpg?_nc_cat=107&_nc_oc=AQmHtD3wFP_oztvtcEXjNWY88Ycb29oP3PmIMTci_HGaXMNkjkDXf5beTmcLfHkDdWE&_nc_ht=scontent.fsgn5-2.fna&oh=cf27b6fde3e04c8bdac20a7c3a42adc9&oe=5D9C8E1F';
var image_The = 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/50094210_1117042358459724_7620162694896680960_n.jpg?_nc_cat=105&_nc_oc=AQlWJXSuucvLLjJgXuRyfgCw_0eG_2nguOnCj1k1Nw9JZ4f4kMVxtbcfNYmNj3q6VAQ&_nc_ht=scontent.fsgn5-2.fna&oh=cbc8502f83201b491f5aa1e5d66aece2&oe=5D61A630';

 
export default class InfoUser extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
      <View> 
        <View style = {{alignItems: 'center', marginTop: 30}}> 
          <FlatList 
            refreshing = {false}
            onRefresh = {() => {}}
            data = {[{image:image_Tro}]}
            renderItem = {({item, index}) => {
              return(
                <View>
                  <Image 
                    source = {{uri: item.image}}
                    style = {{width: 300, height: 300, borderRadius: 300}}
                  />
                  <View style = {{marginTop:30,}}> 
                    <Text style = {{borderBottomWidth: 1, fontSize: 20}}> Tên: Nguyễn Văn Trở </Text>
                    <Text style = {{borderBottomWidth: 1, fontSize: 20}}> MSSV: 41.01.103.082</Text>
                    <Text style = {{borderBottomWidth: 1, fontSize: 20}}> Phone: 0354937381</Text>
                    <Text style = {{borderBottomWidth: 1, fontSize: 20}}> Email: NguyenVanTro1996@gmail.com </Text>
                  </View>

                  <Image 
                    source = {{uri: image_The}}
                    style = {{width: 300, height: 300, borderRadius: 300}}
                  />
                  <View style = {{marginTop:30,}}> 
                    <Text style = {{borderBottomWidth: 1, fontSize: 20}}> Tên: Lê Đình Thế </Text>
                    <Text style = {{borderBottomWidth: 1, fontSize: 20}}> MSSV: k40.103.075</Text>
                    <Text style = {{borderBottomWidth: 1, fontSize: 20}}> Phone: 088xxx</Text>
                    <Text style = {{borderBottomWidth: 1, fontSize: 20}}> Email: xxxx@gmail.com </Text>
                  </View>
                </View>
              );
            }}
            
          />
        </View>
      </View>
    );
  }
}