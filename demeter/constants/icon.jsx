
import { Feather } from '@expo/vector-icons'

const icon = {
    home: (props) => (
        <Feather name='home' size={25} {...props} />),
    addPlant: (props) => (
        <Feather name='plus-circle' size={25} {...props} />),
    profile: (props) => (
        <Feather name='user' size={25} {...props} />)
}

export { icon }
export default icon