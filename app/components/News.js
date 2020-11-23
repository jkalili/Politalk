import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from './AppText';

function News({title, subTitle, date}) {
    return (
      <View>
          <AppText style = {styles.title}>{title}</AppText>
          <AppText style = {styles.date}>{date}</AppText>
          <AppText style = {styles.subTitle}>{subTitle}</AppText>
      </View>
    );
}
const styles = StyleSheet.create({
    date:{
        color:"#6e6969",
    },
    title:{
        fontWeight: '500',
    },
    subTitle:{
        fontWeight:'300',
    }
})
export default News;