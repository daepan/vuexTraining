<template>
	<div>
		<v-header title="Vue.js Example Code"></v-header>
		<div class="md-layout md-gutter">
			<div
				class="md-layout-item"
				v-for="data in mainData"
				:key="data.id">
				<card
					:title="data.title"
					:desc="data.desc"
					:link="data.link"
					:imgUrl="data.imgUrl">
				</card>
			</div>
		</div>
	</div>
</template>

<script>
	import Card from '@/components/Main/Components/Card';
	import Header from '@/components/SharedComponent/Header';

  export default {
    name: 'Main',
		components: {
      'card': Card,
			'v-header': Header
		},
    data () {
      return {
        mainData: [
					{
					  title: "ADDRESS",
						link: "/address",
						imgUrl: "https://ak9.picdn.net/shutterstock/videos/14941789/thumb/1.jpg?i10cx3dimg.resize(height:160)",
						desc: "Just Local Address"
					},
          {
            title: "CALENDAR ",
            link: "/calendar",
            imgUrl: "https://media.gettyimages.com/photos/calendar-page-background-picture-id643126222?b=1&k=6&m=643126222&s=612x612&w=0&h=2NzlkCzSQ0foeHG_tjaf2vA4J3tgUaCSK28yTMMmYR0=",
            desc: "Just Calendar"
          },
          {
            title: "학점계산기",
            link: "/GradeCalculator",
            imgUrl: "http://www.w3.org/Graphics/PNG/text2.png",
			desc: "학점을 계산해드립니다."
          }
				]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.md-layout {
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		width: 1000px;
	}
</style>
