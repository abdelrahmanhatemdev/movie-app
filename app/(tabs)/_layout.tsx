import { Tabs } from 'expo-router'
import { Image, ImageBackground } from 'react-native'
import images from '@/constants/images'
import { icons } from '@/constants/icons'

const _layout = () => {
  return (
   <Tabs>
    <Tabs.Screen  name="index" options={{title: "Home", headerShown: false, tabBarIcon: ({focused}) => (<>
        <ImageBackground source={images.highlight} className='w-[50px] flex justify-center items-center p-5 rounded-lg'>
            <Image source={icons.home}/>
        </ImageBackground>
        </>) }}/>
    <Tabs.Screen  name="search" options={{title: "Search", headerShown: false }}/>
    <Tabs.Screen  name="saved" options={{title: "Saved", headerShown: false }}/>
    <Tabs.Screen  name="profile" options={{title: "Profile", headerShown: false }}/>
   </Tabs>
  )
}
export default _layout