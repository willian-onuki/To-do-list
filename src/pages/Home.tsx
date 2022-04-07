import React, { Fragment, useState, useEffect } from 'react'; //to use the JSX syntax and to be able to create the interface, render the elements of react-native
import { View, Text, StyleSheet, SafeAreaView, TextInput, Platform, TouchableOpacity, Touchable, ScrollView , FlatList} from 'react-native' //Bring from the React everything what's specifies of the mobile contest

// To handle with short list, we can use th ScrollView, because the list going to higher and without this component, we can not see the rest of list content
// The shoesVerticalScrollIndicator is a property of the ScrollView, and is the vertical bar that stay a left side the screen, so if you remove this declare as false

// Im this case, the View is like div element of html
// In React havo as default the flex property to mobile, if you are web development will have to use 'display: flex' that the element behave like box

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

// Create the export without default to facilitate the import, so when you use the Home in another pages it will make the auto import

// Interface -> data type representation
interface SkillData { 
  id: string,
  name: string
  // date?: string; // The '?' is used to declare an optional variable
}

export function Home() {
  //Must be returned only one element, so there is the Fragment element that have the function to agroup more element

  const [newSkill, setNewSkill] = useState('');
  // under this array of useState have 2 position: _
  //                                              | -1 - the first position, is a state that will storage the content
  //                                              |_-2 - the second position, is a function that will update the state 
  // you can't take the newSkill = 'user', because if you do this it will affect the immutability principle, then if you want to modify the newSkill state you have to do setNewSkill('user')
  const [mySkills, setMySkills] = useState<SkillData[]>([]); // this state will storage all skills, then to start it the initial values is a empty vector
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    // When do you have to use the handle name? you have to use the HANDLE when you have function that is shot by some interaction of user
    const data = {
      id: String(new Date().getTime()), // Data in number format to generete the unique ID, and the react-native is used to generate the key as type string
      name: newSkill
    }
    setMySkills(oldState => [...oldState, data]) // Creares a new array with old and new contente, the 3 dots is knowed as Spread Operator, it will take all of content under the vector from useState([]) and insert to the new vector
  }

  function handleRemoveSkill (id: string) {
    // Takes all skills from oldState and it will travel each skill with the filter, and will be storage the skills with different id specified   
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  // The useEffect is fired when the components are under construction to be displayed
  // The use Effect has two parameters: 1- Function, 2- Dependence array. When the dependency array was declared as empty will be load at the moment of component construction 
  useEffect(() => {
    const currentHours = new Date().getHours()
    console.log("currentHours->", currentHours)
    if (currentHours < 12) {
      setGretting('Good morning!')
    } else if (currentHours < 18) {
      setGretting('Good afternoon!')
    } else {
      setGretting('Good night!')
    }
  }, [])

  return (
    // The other way to use the Fragment is declaring like <>  </>
    // Above has an import SafeAreaView that calculate the height top to devices like iphone that have spaces on top right and left corner, it works in Iphones
    // <Fragment>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, User</Text>
      <Text style={styles.gretting}>
        { gretting }
      </Text>

      <TextInput
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill} // everytime that the content is changed, the setNewSKill will take the new content and update the newSkill state
      />

      {/* The TouchableOpacity is a clickable element that have a little transparent in end animation */}
      {/* <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7} //It goes 0 to 1 of opacity, if you want more visibility after click you have to use a number close to 1
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity> */}

      <Button 
        title='Add'
        onPress={handleAddNewSkill} 
        // activeOpacity={0.7}
      />

      {/* You can enjoy the title style, but you do not want to modify the styles.title style property, then if you want to add a style use the [] to append more property style to given component*/}
      <Text style={[styles.title, { marginVertical: 50 }]}>
        My skills
      </Text>

        
          {/* // uses the {} to match codes JS with JSX */}
          {/* // the .map() function walks each element of myskills */}

          {/* The FlatLIst is to handle with large list, and you have to use the property data and pass your data colection  */}
          <FlatList
            data={mySkills}
            keyExtractor={ item => item.id } //Each item will be the Key
            renderItem={ ({ item }) => ( // renders each item
              <SkillCard 
              skill={ item.name }
              // is needed to use the arrow function to run the handleRemoveSkill
              onPress={() => handleRemoveSkill(item.id)}
              />
            ) }
          />
    </View>
    // </Fragment>
  )
}

// Create a object named styles that contains all of styles 
// The .create(style: array<object>) function is used to create a StyleSheet style refence of a given object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,

  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10, // Import the Platform, and after you can customize to IOS and ANDROID
    marginTop: 30,
    borderRadius: 10
  },
  gretting: {
    color: '#fff'
  }
})