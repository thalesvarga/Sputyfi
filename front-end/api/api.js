import "dotenv/config";
import axios from "axios";

// const {NODE_ENV} = process.env
const URL =  "https://sputyfi.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`)
const responseSongs = await axios.get(`${URL}/songs`)

export const artistArray = responseArtists.data
export const songsArray = responseSongs.data
