import React, {useEffect} from "react";
import {ChartItem} from "chart.js";
import {Chart, registerables} from 'chart.js'
Chart.register(...registerables)

const BarWin=()=>{
	useEffect(() => {
		if (document.getElementById('myChartBar1')) {
			init()
		} else {
			setTimeout(() => {
				init()
			}, 1000)
		}

	}, [])
	const init = () => {
		let ctx = document.getElementById('myChartBar1');
		const data = {
			labels: [
				'Red',
				'Blue',
				'Yellow'
			],
			datasets: [{
				label: 'مداخيل التطبيق',
				data: [300, 50, 100],
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)'
				],
				hoverOffset: 4
			}],
		};
		new Chart(ctx as ChartItem, {
			type: 'bar',
			data: data,
			options: {

			}
		});
	}
	return (
		<div className={'stats'}>
			<div className={'chartPie'} style={{maxWidth:'25vw', height: 'fit-content'}}>  <canvas id="myChartBar1"/></div>

		</div>
	)
}
export default BarWin