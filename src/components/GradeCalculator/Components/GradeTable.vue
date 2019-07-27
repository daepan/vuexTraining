//TODO: 좌측에 각 과목별 과목명, 받은학점, 타입(교양/전공), 학점(몇학점짜리인지) 표
// 여기서 mapgetters로 '현재 선택된 학기의 과목들의 학점' 데이터를 들고 있을 것

//	인덱스 과목명 학점 타입 내학점
//  ...
// 위 모양과 같은 표(5*n)로 출력할 것
<template>
<div class="row__container">
	
			<div
			:class="{'first-row': flag==='first', 'add-row': flag==='add'}"
			class="row__content">
			<div
				class="row__content__index"
				v-if="index === 0">
				No.
			</div>
			<div
				class="row__content__index"
				v-else
				:index="index+1">
				{{ index }}
			</div>
				<div class="title__name">과목명</div>
				<div
				v-if="flag==='default' || flag==='first'"
				class="row__content__name">
				{{ fmyname }}
			</div>
				<div class="title__grade">학점</div>
				<div
				v-if="flag==='default' || flag==='first'"
				class="row__content__name">
				{{ fgrade }}
			</div>
				<div class="title__type">타입</div>
				<div
				v-if="flag==='default' || flag==='first'"
				class="row__content__name">
				{{ ftype }}
			</div>
				<div class="title__mygrade">내학점</div>
				<div
				v-if="flag==='default' || flag==='first'"
				class="row__content__name">
				{{ fmygradee }}
			</div>
				
			</div>
			
</div>
			
		
		
	



    
</template>
<script>
import {mapGetters, mapState} from 'vuex'

export default {
	 props: {
      index: {
        default: 0,
				type: Number
			},
    
      flag: {
        default: "default",
				type: String
			}
    },
 
	computed:{
		...mapGetters(['fmygradeCount', 'fmyname','ftype','fgrade','fmygrade'])
	}
   

}
</script>
<style>
	.row__content {
		width: auto;
		border: 1px #bebebe solid;
		margin: 2px;
		height: 40px;
		line-height: 40px;
		float: center;
		text-align: center;
		background: white;
	}

.row__content:hover {
		background: #bebebe;
		font-weight: 700;
	}
.title{
	justify-content: space-between;
}
.title__index{
	float: left;
		width: 20%;
		border-right: 1px #bebebe solid;
}
.title__name{
		float: left;
		width: 20%;
		border-right: 1px #bebebe solid;
}
.title__type{
		float: left;
		width: 20%;
		border-right: 1px #bebebe solid;
}
.title__grade{
		float: left;
		width: 20%;
		border-right: 1px #bebebe solid;

}
.title__mygrade{
		float: left;
		width: 20%;
		border-right: 1px #bebebe solid;

}
	.first-row {
		background: #363636;
		color: white;
		font-weight: 700;
		text-align: center;
	}

	.first-row:hover {
		background: #363636;
	}

	.add-row {
		border: 1px solid #00bb00;
		margin-bottom: 1px;
	}

	.add-row:hover {
		background: white;
		font-weight: 400;
	}
	
</style>
