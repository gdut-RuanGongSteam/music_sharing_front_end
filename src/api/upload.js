import axios from 'axios'
const baseUrl = "http://120.24.35.66:8080/music_system/"

export default function upload(content) {
	return axios.post(`${baseUrl}song/uploadSong`, content, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	})
}
