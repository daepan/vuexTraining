
const state={
  
    firstSemester:[
        {
                     name: "C프로그래밍",
                     type: '전공',
                     grade: 3,
                     myGrade: "A+", //computed나 method 활용해서 4.5로 변환시킬 것
                 }, {
                     name: "심리학",
                     type: '교양',
                     grade: 3,
                     myGrade: "A+", //computed나 method 활용해서 4.5로 변환시킬 것
                 }, {
                     name: "기타등등",
                     type: '전공',
                     grade: 3,
                     myGrade: "F+", //computed나 method 활용해서 4.5로 변환시킬 것
                 }
                
    ],
    secondSemester:[
        {
                 name: "C프로그래밍2",
                     type: '전공',
                     grade: 3,
                     myGrade: "A+", //computed나 method 활용해서 4.5로 변환시킬 것
                 }, {
                     name: "창공",
                     type: '교양',
                     grade: 3,
                     myGrade: "A+", //computed나 method 활용해서 4.5로 변환시킬 것
                 }, {
                    name: "웹 프로그래밍",
                     type: '전공',
                   grade: 3,
                    myGrade: "F+", //computed나 method 활용해서 4.5로 변환시킬 것
                 }
    ],
    allgrade:null
}

const getters={
    fmygradeCount: function(state){
        return state.firstSemester.length
    },
    fmygrade: function(state){
        return  state.firstSemester.mygrade
    },
    fmyname: function(state){
        return  state.firstSemester.name
    },
    ftype: function(state){
        return  state.firstSemester.type
    },
    fgrade: function(state){
        return state.firstSemester.grade
    }
    

}

const actions={

}

const mutations={

}

export default{
    state,
    getters,
    actions,
    mutations
}
