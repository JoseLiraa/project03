import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import employees from "../Components/List/employees";

const Home = () => {  
    const [listOne, setListOne] = useState([])
    const [listTwo, setListTwo] = useState([])
    const [listThree, setListThree] = useState()
    const [listFour, setListFour] = useState([])
    

    const reduceSalary = () =>{      
      const salaryArray = [employees.reduce((prev, cur) => {
        if(cur.salary > prev.salary)return cur
        return prev
      },{firstName : " ", salary : 0})]
      setListOne(salaryArray)
  }

  const findSalary = () =>{          
    const arrayValidation = !!employees.find(({salary}) => salary < 21000) 
    ? [employees.find(({salary}) => salary < 21000)]
    : []
    setListTwo(arrayValidation)
}

const findIndexSalary = () => {      
  const findIndexSalaryArray = employees.findIndex(element => element.salary === 20000)
  setListThree(findIndexSalaryArray)
  console.log(findIndexSalaryArray)
}

const filterSalary = () => {
  const filterSalaryArray = employees.filter(({salary}) => {
    return (salary >= 20000 && salary <= 24000)
  })
  setListFour(filterSalaryArray)
  console.log(filterSalaryArray)
}

  const printReduceSalary = () =>{  
    return(
      <View style= {styles.container}>
        <Text>Persona con mayor salario (reduce): </Text> 
        {
          listOne.map(({firstName, lastName, salary}, index) => {
            return <Text style = {styles.items} key = {`${index}-${firstName}`}>{`${firstName} ${lastName} ${salary}`}</Text>
          })
        }
      </View>
    )
  }

  const prinftFindSalary = () =>{
    return(
      <View style= {styles.container}>
        <Text>Empleado con salario menor a 21000 (find): </Text> 
        {
          listTwo.map(({firstName, lastName, salary}, index) => {
            return <Text style = {styles.items} key = {`${index}-${lastName}`}>{`${firstName} ${lastName} ${salary}`}</Text>
          })
        }
      </View>
    )
  }

  const prinftFindIndexSalary = () =>{
    return(
      <View style= {styles.container}>
        <Text>Indice de persona con salario menor(findIndex): </Text> 
        <Text style = {styles.items} key = {listThree}>{listThree}</Text>         
      </View>
    )
  }

  const prinftFilterSalary = () =>{
    return(
      <View style= {styles.container}>
        <Text>Personas con salario entre 20000 24000 (filter): </Text> 
        {
          listFour.map(({firstName, lastName, salary}, index) => {
            return <Text style = {styles.items} key = {`${index}-${lastName}`}>{`${firstName} ${lastName} ${salary}`}</Text>
          })
        }
      </View>
    )
  }


  return(    
    <View style = {styles.container} >
      <View style = {styles.buttonContainer}>
        <TouchableOpacity  onPress={()=>reduceSalary()}>
          <View style = {styles.boton}>
            <Text style = {styles.textBoton}>Reduce</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>findSalary()}>
          <View style = {styles.boton}>
            <Text style = {styles.textBoton}>Find</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>findIndexSalary()}>
          <View style = {styles.boton}>
            <Text style = {styles.textBoton}>FindIndex</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>filterSalary()}>
          <View style = {styles.boton}>
            <Text style = {styles.textBoton}>Filter</Text>
          </View>
        </TouchableOpacity>
      </View>

     

      <ScrollView>
        <View style = {styles.listAge}>{printReduceSalary()}</View>
        <View style = {styles.listAge}>{prinftFindSalary()}</View>
        <View style = {styles.listAge}>{prinftFindIndexSalary()}</View>
        <View style = {styles.listAge}>{prinftFilterSalary()}</View>        
      </ScrollView>
    
    </View>

  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,    
  },
  buttonContainer:{
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
  },
  boton:{
    backgroundColor: '#D2B48C',
    paddingVertical: 10,
    paddingHorizontal: 10,     
    borderRadius:10, 
  },
  textBoton:{
    maxWidth: '100%',
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "justify",
    color: '#FFF8DC',
  },
  items:{
    fontSize: 20,
    color:'#8B4513',
    borderColor: '#8B4513',
    borderWidth: 1,
    borderRadius:8,
    backgroundColor:'#FFF8DC',
  },
  listAge:{
    margin: 20, 
  },
})
export default Home;