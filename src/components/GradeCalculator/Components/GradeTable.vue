//TODO: 좌측에 각 과목별 과목명, 받은학점, 타입(교양/전공), 학점(몇학점짜리인지) 표
// 여기서 mapgetters로 '현재 선택된 학기의 과목들의 학점' 데이터를 들고 있을 것

//	인덱스 과목명 학점 타입 내학점
//  ...
// 위 모양과 같은 표(5*n)로 출력할 것

<template>
  <div>
    나의 1학기 성적

	 <input type="checkbox"  v-model="check1" @click="calculSemester(firstSemester)">
	 <label for="first">1학기</label>
	<input type="checkbox"  v-model="check2" @click="calculSemester(secondSemester)">
	<label for="second">2학기</label>

	<md-table class="Firsttables">
      <md-table-row>
        <md-table-head md-numeric>Index</md-table-head>
        <md-table-head>과목명</md-table-head>
        <md-table-head>학점</md-table-head>
        <md-table-head>타입</md-table-head>
        <md-table-head>내 학점</md-table-head>
      </md-table-row>
		
		  <md-table-row
		  	 v-for="(data,index) in firstSemester" :key="data.id"
	  			class="title__index__content"
				  v-show="check1===true">
		  <md-table-cell md-numeric>{{index+1}}</md-table-cell>
        	<md-table-cell>{{ firstSemester[index].name }}</md-table-cell>
        	<md-table-cell>{{ firstSemester[index].grade }}</md-table-cell>
        	<md-table-cell>{{ firstSemester[index].type }}</md-table-cell>
        	<md-table-cell>{{ firstSemester[index].myGrade }}</md-table-cell>
			</md-table-row>
			<div class="add-row">
				<div> </div>
			</div>
		</md-table>
			나의 2학기 성적
			<br>
			<md-table class="Secondtables">
			 <md-table-row>
        			<md-table-head md-numeric>Index</md-table-head>
        			<md-table-head>과목명</md-table-head>
        			<md-table-head>학점</md-table-head>
        			<md-table-head>타입</md-table-head>
       				<md-table-head>내 학점</md-table-head>
      			</md-table-row>

	    <md-table-row
		  	 v-for="(data,index) in secondSemester" :key="data.id"
	  			class="title__index__content"
				  v-show="check2===true">
		  	<md-table-cell md-numeric>{{index+1}}</md-table-cell>
        		<md-table-cell>{{ secondSemester[index].name }}</md-table-cell>
        		<md-table-cell>{{ secondSemester[index].grade }}</md-table-cell>
        		<md-table-cell>{{ secondSemester[index].type }}</md-table-cell>
       			<md-table-cell>{{ secondSemester[index].myGrade }}</md-table-cell>
		 	</md-table-row>
		</md-table>
		<div>
		<div class="add-name"> 
			<select type="text" v-model="name">
				<option disabled value="">과목</option>
				<option :value="{ text: 'C언어'}">C언어</option>
			</select>
		</div>
		<div class="add-grade">
			<select type="text" v-model="grade">
				<option disabled value="">학점</option>
				<option :value="{ number: 3 }">3</option>
			</select>
		</div>
		<div class="add-type">
			<select type="text" v-model="type">
				<option disabled value="">타입</option>
				<option :value="{ text:'전공'}">전공</option>
				<option :value="{ text: '교양'}">교양</option>
			</select>
		</div>
		<div class="add-mygrade">
			<select type="text" v-model="mygrade">
				<option disabled value="">내학점</option>
				<option :value="{ text: 'A+' }">A+</option>
			</select>
		</div>
		
		<button @click="addGrade">ADD</button>
		</div>
	


  </div>
	
  

    


</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  export default {
	  name: "GradeTable",
	    props: {
			 check1: {
                  default: false
			  },
			   check2: {
                  default: false
              }
     
     
	},
	data: function(){
		return {
			name:"",
			type: "",
			grade: "",
			mygrade: ""
		}

	},
      computed: {
          ...mapGetters(['firstSemester', 'secondSemester'])
      },
     
      methods: {
          ...mapMutations(['setMyGrade', 'addGradeline']),
          calculSemester : function(payload){
              this.setMyGrade(payload)
		  },
		addGrade: function(){
			let GradeInfo ={
				name: this.name.text,
				grade: this.grade.number,
				type: this.type.text,
				mygrade: this.mygrade.text
			}
			this.addGradeline(GradeInfo)
			this.ClearForm()
		},
		ClearForm: function(){
			this.name=null
			this.grade=null
			this.type=null
			this.mygrade=null
		}	
		  
      }
  }
</script>

<style>
 .add-name{
	 float: left;
	 padding-right: 9px;
 }
 .add-type{
	  float: left;
	 padding-right: 9px;
 }
 .add-grade{
	  float: left;
	 padding-right: 9px;
 }
 .add-mygrade{
	  float: left;
	 padding-right: 9px;
 }
</style>