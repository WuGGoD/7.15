export const getData = () => {
	const xhr = new XMLHttpRequest()
	xhr.open('GET', 'http://zyxcl.xyz/exam_api/food')
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const res = JSON.parse(xhr.responseText)
			console.log(res.value)
			return res.value
		}
	}
	xhr.send()
}
