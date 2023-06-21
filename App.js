import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SectionList } from 'react-native';
const persons = [
  {
    id: 1,
    title: "SUMMARY",
    data: ["__________________","To grow by actively participating in the ever challenging.Seeking an opportunity where my skills canbe best utilized. Proving my self as an active part of a challengingenvironment leading towards organizational growth and self-development" ]
  },
  {
    id: 2,
    title: "EDUCATION",
    data: ["_____________________","  BS Software engineering ", "  2021-present", "     Bachelor degree in Engineering ", "     International Islamic University of Islamabad ","  ICS ", "  2018-2020", "     Majors: (phy,comp,math) ", "     STEPS COLLEGE FOR GIRLS "]
  },
  
  {
    id: 3,
    title: "STRENGTHS",
    data: ["______________________","Problem solving skills", "Team Player", "Time Management"]
  },
  {
    id: 4,
    title: "SKILLS",
    data: ["_______________"," ui/ux Designing", " microsoft word"," Graphic Designing"," C++"," able to work in pressure"," Ms office"]
  },
  {
    id: 5,
    title: "internships",
    data: ["_______________"," HamsanTech"," 08/2022-09/2022", "    developed skills in teamwork","    worked on logo designing","    content writing for grepbing"]
  },
  {
    id: 6,
    title: "Courses",
    data: ["______________________","Graphic Designing from Digiskills", "Freelancing from Digiskills"]
  },
  {
    id: 6,
    title: "Hobbies",
    data: ["______________________","photography", "reading"]
  },
]

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#E4F4F3' }}>
       <Text istyle={styles.paragraph}style={{fontWeight:'bold', fontSize:30,paddingTop:50,paddingBottom:-20,paddingLeft:20}}>ATIQA DIN{'\n'}
      <Text style={{fontSize:10,fontWeight:'bold',paddingStart:25,paddingBottom:10}}>email:</Text><Text style={{fontSize:10,fontWeight:'normal'}}>malikzunash7@gmail.com{'\n'}</Text>
      <Text style={{fontSize:10,fontWeight:'bold',paddingStart:25,paddingBottom:10}}>contact no:</Text><Text style={{fontSize:10,fontWeight:'normal'}}>00001234567{'\n'}</Text>
      <Text style={{fontSize:10,fontWeight:'bold',paddingStart:25,paddingBottom:10}}>linkedin:</Text><Text style={{fontSize:10,fontWeight:'normal'}}>atiqadin</Text></Text>
      <SectionList
        sections={persons}
        renderItem={({ item }) => <Text style={{ fontSize: 13, marginLeft: 20 }}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (<Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 20,paddingTop:10}}>{title} </Text>)}
      ></SectionList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    color: "black",
    backgroundColor: 'black',
    borderWidth: 1,
    margin: 5,
  },
});
