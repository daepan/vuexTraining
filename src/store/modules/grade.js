
    
const state = {
    firstSemester: [
      {
        name: "C프로그래밍",
        type: '전공',
        grade: 3,
        myGrade: "A+", //computed나 method 활용해서 4.5로 변환시킬 것
      },
      {
        name: "심리학",
        type: '교양',
        grade: 3,
        myGrade: "A+", //computed나 method 활용해서 4.5로 변환시킬 것
      },
      {
        name: "기타등등",
        type: '전공',
        grade: 3,
        myGrade: "F", //computed나 method 활용해서 4.5로 변환시킬 것
      }
    ],
    secondSemester: [
      {
        name: "C프로그래밍2",
        type: '전공',
        grade: 3,
        myGrade: "A+", //computed나 method 활용해서 4.5로 변환시킬 것
      },
      {
        name: "창공",
        type: '교양',
        grade: 3,
        myGrade: "A+", //computed나 method 활용해서 4.5로 변환시킬 것
      },
      {
        name: "웹 프로그래밍",
        type: '전공',
        grade: 3,
        myGrade: "F", //computed나 method 활용해서 4.5로 변환시킬 것
      }
    ],
    selected:0
  }
  
  const getters = {
    firstSemester : (state)=>{
      return state.firstSemester
    },
    secondSemester : (state)=>{
      return state.secondSemester
    }
  
      }
      
  
  
  const mutations = {
    setMyGrade : (state, payload)=>{
        for(let i = 0; i < payload.length; i++){
          if(payload[i].myGrade === "A+"){ 
            payload[i].myGrade = "4.5" 
          }
              if(payload[i].myGrade === "A0"){ 
                payload[i].myGrade = "4" 
              }
                  if(payload[i].myGrade === "B+"){ 
                    payload[i].myGrade = "3.5"
                   }
                      if(payload[i].myGrade === "B0"){
                        payload[i].myGrade = "3" 
                          }
                          if(payload[i].myGrade === "C+"){ 
                            payload[i].myGrade = "2.5" 
                          }
                               if(payload[i].myGrade === "C0"){ 
                                payload[i].myGrade = "2"
                                   }
                                      if(payload[i].myGrade === "D+"){ 
                                        payload[i].myGrade = "1.5" 
                                      }
                                           if(payload[i].myGrade === "D0"){ 
                                            payload[i].myGrade = "1" 
                                              }
                                              if(payload[i].myGrade === "F"){ 
                                                payload[i].myGrade = "0" 
                                              }
        }
 
          }
        }
  
  
  const actions = {
  
  }
  
  export default {
    state,
    getters,
    mutations
  }