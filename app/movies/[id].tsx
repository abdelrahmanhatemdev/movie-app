import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
const Details = () => {

    const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>Details: {id}</Text>
    </View>
  )
}
export default Details