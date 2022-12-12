import { reactive } from '@vue/reactivity';
import { onMounted, useState, useEffect } from 'vue';
export const useCounter = () => {
  const [num, setNum] = useState(0);
	let points = reactive({
		x: 0,
		y: 0,
	});
  useEffect(() => {
 
  })
	function myclick(event) {
		points.x = event.pageX;
		points.y = event.pageY;
    console.log('调用自定义hooks', num)
	}
	onMounted(() => {
		//点击的是窗口所以要给窗口定义点击事件
		window.addEventListener('click', myclick);
	});
	//这里需要有一个返回值，如果不给返回值接收的是一个函数，接收的是undefind
	return points;
};
