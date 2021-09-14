import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({

    container: {
        backgroundColor:'white',
        margin:10,
        borderRadius:10,

    },
    image: {
        height:Dimensions.get('window').height/4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,

    },
    innerContainer:{
        padding:5,

    },
    title: {
        fontWeight:'bold',
        fontSize:18,
   

    },
    author:{
        fontStyle:'italic',
        textAlign:'right',

    },
    description: {
        marginTop:3,
        
    }

})