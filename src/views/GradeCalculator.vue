<template>
 <div class="container">
  
   <div class="left">
     	
	
		<div class="md-layout md-gutter">
			<div class="md-layout-item">
				<div class="table__container">
					<div class="table__header">
						<h3>My Address</h3>
					</div>

					<div class="table__content">
					  
				<GradeTable></GradeTable>
         
			  </div> 

						
					</div>
				</div>
			</div>
      
	</div>
   
    <div class="right">
      
		<div class="md-layout md-gutter">
			<div class="md-layout-item">
				<div class="table__container">
					<div class="table__header">
						<h3>My Address</h3>
					</div>

					<div class="table__content">
						

						

						
					</div>
				</div>
			</div>
		</div>
	

   </div>
   
</div>

</template>

<script>
import { mapGetters, mapState } from 'vuex'
import GradeTable from '@/components/GradeCalculator/Components/GradeTable'

export default {
  name:'GradeCalculator',
  components:{
    'GradeTable':GradeTable
  },
 computed:{
   
 },
    
     methods: {
   }
}
  

</script>
<style>
   .container {
        width: 1080px;
        margin: 50px;
        padding: auto;
      
      }
      .header{
        float: left;
        padding: 20px;
        margin-bottom: 20px;
        border: 1px solid #bcbcbc;
      }
      .right{
        width: 500px;
        padding: 20px;
        margin-bottom: 20px;
        float:right;
        border: 1px solid #bcbcbc;
      }
      .left{
        width: 550px;
        padding: 20px;
        margin-bottom: 20px;
        float: left;
        border: 1px solid #bcbcbc;
      }
       .table__content{
  margin-left: auto;
	margin-right: auto;
   width: 100%;
  height: 60%;
 }
 .outer {
  display: table;
  width: 100%;
  height: 100%;
}
.inner {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
 .centered {
  position: relative;
  display: inline-block;
 
  width: 75%;
  padding: 1px;
  background: white;
  color: black;
} 
</style>
