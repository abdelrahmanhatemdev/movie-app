import { Tabs } from 'expo-router'
import { ImageBackground } from 'react-native'
import images from '@/constants/images'

const _layout = () => {
  return (
   <Tabs>
    <Tabs.Screen  name="index" options={{title: "Home", headerShown: false, tabBarIcon: ({focused}) => (<>
        <ImageBackground source={images.highlight}/>
        </>) }}/>
    <Tabs.Screen  name="search" options={{title: "Search", headerShown: false }}/>
    <Tabs.Screen  name="saved" options={{title: "Saved", headerShown: false }}/>
    <Tabs.Screen  name="profile" options={{title: "Profile", headerShown: false }}/>
   </Tabs>
  )
}
export default _layout