//TODO: 우측에 학기별 전공/교양 구분한 학점 합 출력
// 여기서 mapgetters로 '현재 선택된 학기의 과목들의 학점' 데이터를 들고 있을 것
//	  	전공 교양 총합
// 학점
// 위 모양과 같은 표(4*2)로 출력할 것
<template>
<div>
    <md-table class="FirstCalcultables">
      <md-table-row>
        <md-table-head>1학기</md-table-head>
        <md-table-head>전공</md-table-head>
        <md-table-head>교양</md-table-head>
        <md-table-head>총합</md-table-head>
      </md-table-row>
      		<md-table-row>
                <md-table-cell>학점</md-table-cell>
                <md-table-cell>{{ FPointJ }}</md-table-cell>
                <md-table-cell>{{ FPointG }}</md-table-cell>
                <md-table-cell>{{ FPointG+FPointJ }}</md-table-cell>
            </md-table-row>
    </md-table>
        <md-table class="SecondCalcultables">
         <md-table-row>
            <md-table-head>2학기</md-table-head>
            <md-table-head>전공</md-table-head>
            <md-table-head>교양</md-table-head>
            <md-table-head>총합</md-table-head>
            </md-table-row>
      		<md-table-row>
                <md-table-cell>학점</md-table-cell>
                <md-table-cell>{{ SPointJ }}</md-table-cell>
                <md-table-cell>{{ SPointG }}</md-table-cell>
                <md-table-cell>{{ SPointG+SPointJ }}</md-table-cell>
            </md-table-row>
         </md-table>
    
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name:'GradeCalcul',
    computed:{
        ...mapGetters(['firstSemester','secondSemester','FPointG','FPointJ','SPointG','SPointJ']
            
        )
    }
}
</script>
<style>

</style>
