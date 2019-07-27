//TODO: 우측에 학기별 전공/교양 구분한 학점 합 출력
// 여기서 mapgetters로 '현재 선택된 학기의 과목들의 학점' 데이터를 들고 있을 것
//	  	전공 교양 총합
// 학점
// 위 모양과 같은 표(4*2)로 출력할 것
<template>
    <md-table class="FirstCalcultables">
      <md-table-row>
        <md-table-head>1학기</md-table-head>
        <md-table-head>전공</md-table-head>
        <md-table-head>교양</md-table-head>
        <md-table-head>총합</md-table-head>
      </md-table-row>
      		<md-table-row>
                  <md-table-cell>학점</md-table-cell>
                  <md-table-cell>{{ firstSemester[index].name }}</md-table-cell>
                  <md-table-cell>{{ firstSemester[index].name }}</md-table-cell>
                  <md-table-cell>{{ firstSemester[index].name }}</md-table-cell>
            </md-table-row>
    </md-table>
</template>
<script>
export default {
    name:'Gradecalcul'
}
</script>
<style>

</style>
