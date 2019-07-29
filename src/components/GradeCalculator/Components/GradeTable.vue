//TODO: 좌측에 각 과목별 과목명, 받은학점, 타입(교양/전공), 학점(몇학점짜리인지) 표
// 여기서 mapgetters로 '현재 선택된 학기의 과목들의 학점' 데이터를 들고 있을 것

//	인덱스 과목명 학점 타입 내학점
//  ...
// 위 모양과 같은 표(5*n)로 출력할 것

<template>
  <div>
    나의 1학기 성적

	 <input type="checkbox"  v-model="check1" @click="CalculSemester(firstSemester)">
	 <label for="first">1학기</label>
	

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
	  			class="title__content"
				  v-show="check1===true">
		  <md-table-cell md-numeric>{{index+1}}</md-table-cell>
        	<md-table-cell>{{ firstSemester[index].name }}</md-table-cell>
        	<md-table-cell>{{ firstSemester[index].grade }}</md-table-cell>
        	<md-table-cell>{{ firstSemester[index].type }}</md-table-cell>
        	<md-table-cell>{{ firstSemester[index].myGrade }}</md-table-cell>
			</md-table-row>
		
		</md-table>
			나의 2학기 성적
			<input type="checkbox"  v-model="check2" @click="CalculSemester(secondSemester)">
	<label for="second">2학기</label>
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
	  			class="title__content"
				  v-show="check2===true">
		  	<md-table-cell md-numeric>{{index+1}}</md-table-cell>
        		<md-table-cell>{{ secondSemester[index].name }}</md-table-cell>
        		<md-table-cell>{{ secondSemester[index].grade }}</md-table-cell>
        		<md-table-cell>{{ secondSemester[index].type }}</md-table-cell>
       			<md-table-cell>{{ secondSemester[index].myGrade }}</md-table-cell>
		 	</md-table-row>
		</md-table>
		<div>
			<div class="first-grade">1학기 </div>
		<div class="add-name"> 
			<select type="text" v-model="Firstname">
				<option disabled value="">과목</option>
				<option :value="{ text: 'C언어'}">C언어</option>
			</select>
		</div>
		<div class="add-grade">
			<select type="text" v-model="Firstgrade">
				<option disabled value="">학점</option>
				<option :value="{ number: 2 }">2</option>
				<option :value="{ number: 3 }">3</option>
				<option :value="{ number: 4 }">4</option>
			</select>
		</div>
		<div class="add-type">
			<select type="text" v-model="Firsttype">
				<option disabled value="">타입</option>
				<option :value="{ text:'전공'}">전공</option>
				<option :value="{ text: '교양'}">교양</option>
			</select>
		</div>
		<div class="add-mygrade">
			<select type="text" v-model="Firstmygrade">
				<option disabled value="">내학점</option>
				<option :value="{ number: 4.5, text: 'A+' }">A+</option>
				<option :value="{ number: 4, text: 'A0' }">A0</option>
				<option :value="{ number: 3.5, text: 'B+' }">B+</option>
				<option :value="{ number: 3, text: 'B0' }">B0</option>
				<option :value="{ number: 2.5, text: 'C+' }">C+</option>
				<option :value="{ number: 2, text: 'C0' }">C0</option>
				<option :value="{ number: 1.5, text: 'D+' }">D+</option>
				<option :value="{ number: 1, text: 'D0' }">D0</option>
				<option :value="{ number: 0, text: 'F' }">F</option>
			</select>
		</div>
		
		<button @click="addFirstGrade">ADD</button>

		</div>
			<div>
			<div class="second-grade">2학기 </div>
		<div class="add-name"> 
			<select type="text" v-model="Secondname">
				<option disabled value="">과목</option>
				<option :value="{ text: 'C언어'}">C언어</option>
			</select>
		</div>
		<div class="add-grade">
			<select type="text" v-model="Secondgrade">
				<option disabled value="">학점</option>
				<option :value="{ number: 2 }">2</option>
				<option :value="{ number: 3 }">3</option>
				<option :value="{ number: 4 }">4</option>
			</select>
		</div>
		<div class="add-type">
			<select type="text" v-model="Secondtype">
				<option disabled value="">타입</option>
				<option :value="{ text:'전공'}">전공</option>
				<option :value="{ text: '교양'}">교양</option>
			</select>
		</div>
		<div class="add-mygrade">
			<select type="text" v-model="Secondmygrade">
				<option disabled value="">내학점</option>
			<option disabled value="">내학점</option>
				<option :value="{ number: 4.5, text: 'A+' }">A+</option>
				<option :value="{ number: 4, text: 'A0' }">A0</option>
				<option :value="{ number: 3.5, text: 'B+' }">B+</option>
				<option :value="{ number: 3, text: 'B0' }">B0</option>
				<option :value="{ number: 2.5, text: 'C+' }">C+</option>
				<option :value="{ number: 2, text: 'C0' }">C0</option>
				<option :value="{ number: 1.5, text: 'D+' }">D+</option>
				<option :value="{ number: 1, text: 'D0' }">D0</option>
				<option :value="{ number: 0, text: 'F' }">F</option>
			</select>
		</div>
		
		<button @click="addSecondGrade">ADD</button>
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
			Firstname:"",
			Firsttype: "",
			Firstgrade: "",
			Firstmygrade: "",
			Secondname:"",
			Secondtype: "",
			Secondgrade: "",
			Secondmygrade: ""
		}

	},
      computed: {
          ...mapGetters(['firstSemester', 'secondSemester'])
      },
     
      methods: {
          ...mapMutations(['setSemester', 'addFirstline','addSecondline']),
          CalculSemester : function(payload){
              this.setSemester(payload)
		  },
		addFirstGrade: function(){
			let FGradeInfo ={
				name: this.Firstname.text,
				grade: this.Firstgrade.number,
				type: this.Firsttype.text,
				myGrade: this.Firstmygrade.number
			}
			this.addFGradeline(FGradeInfo)
			this.ClearFForm()
		},
		addSecondGrade: function(){
			let SGradeInfo ={
				name: this.Secondname.text,
				grade: this.Secondgrade.number,
				type: this.Secondtype.text,
				myGrade: this.Secondmygrade.number
			}
			this.addSGradeline(SGradeInfo)
			this.ClearSForm()
		},
		ClearSForm: function(){
			this.Secondname=null
			this.Secondgrade=null
			this.Secondtype=null
			this.Secondmygrade=null
		},
			ClearFForm: function(){
			this.Firstname=null
			this.Firstgrade=null
			this.Firsttype=null
			this.Firstmygrade=null
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